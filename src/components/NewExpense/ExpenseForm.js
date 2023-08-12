import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  //Defining States Method-1: Defining Individual States
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Defining States Method-2: Defining Multiple States in One State
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  //Defining Handlers Method-1: Defining Individual Handlers
  // const titleChangeHandler = (event) => {
  //Updating States Method-1: Updating Individual States
  //   setEnteredTitle(event.target.value);

  //Updating States Method-2: Updating a State While Preserving Others
  //   setUserInput({
  //     ...userInput,
  //     enteredTitle: event.target.value,
  //   });

  //Updating States Method-3: Updating a State By Using Previous One
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value };
  //   });
  // };

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);

  //   setUserInput({
  //     ...userInput,
  //     enteredAmount: event.target.value,
  //   });
  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value };
  //   });
  // };

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);

  //   setUserInput({
  //     ...userInput,
  //     enteredDate: event.target.value,
  //   });

  //   setUserInput((prevState) => {
  //     return { ...prevState, enteredDate: event.target.value };
  //   });
  // };

  //Defining Handlers Method-2: Defining Multiple Handlers in One Handler
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={(event) => {inputChangeHandler('title', event.target.value)}} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {inputChangeHandler('amount', event.target.value)}}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {inputChangeHandler('date', event.target.value)}}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
