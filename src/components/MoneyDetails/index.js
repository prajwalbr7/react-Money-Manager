// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {Income, Balance, Expenses} = props
  return (
    <div className="cont-height-width-to-img-balance">
      <div className="img-balance-container img-cont-colors-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img-sizing"
        />
        <div className="">
          <p className="img-para-style1">Your Balance</p>
          <p className="" data-testid="balanceAmount">
            Rs {Balance}
          </p>
        </div>
      </div>

      <div className="img-balance-container img-cont-colors-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img-sizing"
        />
        <div className="">
          <p className="img-para-style1">Your Income</p>
          <p className="" data-testid="incomeAmount">
            Rs {Income}
          </p>
        </div>
      </div>

      <div className="img-balance-container img-cont-colors-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png  "
          alt="expenses"
          className="img-sizing"
        />
        <div className="">
          <p className="img-para-style1">Your Expenses</p>
          <p className="" data-testid="expensesAmount">
            Rs {Expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
