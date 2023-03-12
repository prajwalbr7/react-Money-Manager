// Write your code here
import './index.css'

const TransactionLists = props => {
  const {arrayList, DeleteHistory} = props
  const {Titles, Amounts, type, id} = arrayList
  const deleteItem = () => {
    DeleteHistory(id)
  }

  return (
    <li className="list-style-cont">
      <p className="hist-para">{Titles}</p>
      <p className="hist-para margin-to-para ">Rs {Amounts}</p>
      <p className="hist-para margin-to-para">{type}</p>
      <button
        className="button-style-list margin-to-para"
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png "
          alt="delete"
          className="img-delete-size"
        />
      </button>
    </li>
  )
}
export default TransactionLists
