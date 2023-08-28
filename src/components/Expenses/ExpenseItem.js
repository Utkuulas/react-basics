import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  const amount = props.amount;
  const date = props.date;
  const title = props.title;

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={date} />
        <h2 className="expense-item__description">{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
