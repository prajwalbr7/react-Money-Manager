import {Component} from 'react'
import './index.css'
import {v4 as uudid4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionLists from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    ActiveId: transactionTypeOptions[0].optionId,
    Title: '',
    Amount: '',
    arrayList: [],
  }

  InputOnChange1 = event => {
    this.setState({Title: event.target.value})
  }

  InputOnChange2 = event => {
    this.setState({Amount: event.target.value})
  }

  InputOnChange3Slide = event => {
    this.setState({ActiveId: event.target.value})
  }

  onClickFormButtonAction = event => {
    event.preventDefault()
    const {Title, Amount, ActiveId} = this.state
    const TypeOption = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === ActiveId,
    )
    const {displayText} = TypeOption
    const AddHistoryList = {
      id: uudid4(),
      Titles: Title,
      Amounts: parseInt(Amount),
      type: displayText,
    }
    this.setState(prevState => ({
      arrayList: [...prevState.arrayList, AddHistoryList],
      Title: '',
      Amount: '',
      ActiveId: transactionTypeOptions[0].optionId,
    }))
  }

  DeleteHistory = id => {
    const {arrayList} = this.state
    const FilteredItems = arrayList.filter(item => item.id !== id)
    this.setState({arrayList: FilteredItems})
  }

  getBalance = () => {
    const {arrayList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expenseAmount = 0

    arrayList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.Amounts
      } else {
        expenseAmount += eachTransaction.Amounts
      }
    })
    balanceAmount = incomeAmount - expenseAmount
    return balanceAmount
  }

  getExpense = () => {
    const {arrayList} = this.state
    let expenseAmount = 0

    arrayList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expenseAmount += eachTransaction.Amounts
      }
    })
    return expenseAmount
  }

  getIncome = () => {
    const {arrayList} = this.state
    let incomeAmount = 0

    arrayList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.Amounts
      }
    })
    return incomeAmount
  }

  render() {
    const {Title, Amount, ActiveId, arrayList} = this.state
    const Income = this.getIncome()
    const Balance = this.getBalance()
    const Expenses = this.getExpense()
    return (
      <div className="container1">
        <div className="container2">
          <div className="heading-container">
            <h1 className="head-cont-heading-style">Hi, Richard</h1>
            <p className="head-cont-para-style">
              Welcome back to your{' '}
              <span className="head-cont-span-style">Money Manger</span>
            </p>
          </div>
          <MoneyDetails Income={Income} Balance={Balance} Expenses={Expenses} />
          <div className="container-to-history-form">
            <div className="cont-to-form">
              <form
                className="form-style"
                onSubmit={this.onClickFormButtonAction}
              >
                <h1 className="heading-style-in-form">Add Transaction</h1>
                <label className="label-style margin-to-label" htmlFor="title">
                  TITLE
                </label>
                <input
                  id="title"
                  value={Title}
                  type="text"
                  placeholder="TITLE"
                  className="input-style margin-to-form"
                  onChange={this.InputOnChange1}
                />
                <label className="label-style margin-to-label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  id="amount"
                  value={Amount}
                  type="text"
                  placeholder="AMOUNT"
                  className="input-style margin-to-form"
                  onChange={this.InputOnChange2}
                />
                <label className="label-style margin-to-label" htmlFor="text">
                  TYPE
                </label>
                <select
                  className="input-style margin-to-form"
                  onChange={this.InputOnChange3Slide}
                  value={ActiveId}
                >
                  {transactionTypeOptions.map(eachItem => (
                    <option
                      className="option-style"
                      key={eachItem.optionId}
                      value={eachItem.optionId}
                    >
                      {eachItem.displayText}
                    </option>
                  ))}
                </select>
                <button className="button-style" type="submit">
                  Add
                </button>
              </form>
            </div>

            <div className="history-cont">
              <h1 className="heading-style-in-form">History</h1>
              <div className="shadow-to-history">
                <ul className="ul-style-list">
                  <li className="cont-heading-history">
                    <p className="heading-style-in-history ">Title</p>
                    <p className="heading-style-in-history margin-to-head-his">
                      Amount
                    </p>
                    <p className="heading-style-in-history margin-to-head-his1">
                      Type
                    </p>
                  </li>

                  {arrayList.map(eachItem => (
                    <TransactionLists
                      arrayList={eachItem}
                      key={eachItem.id}
                      DeleteHistory={this.DeleteHistory}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
