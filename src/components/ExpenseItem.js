import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  const amount = props.amount;
  const date = props.date;
  const title = props.title;

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <h2 className="expense-item__description">{title}</h2>
      <div className="expense-item__price">${amount}</div>
    </div>
  );
}

export default ExpenseItem;
