import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";


function ExpenseItem(props) {
  const { title, amount, date } = props;
  return (
    <Card className="expense-item">
      <ExpenseDate dater={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
