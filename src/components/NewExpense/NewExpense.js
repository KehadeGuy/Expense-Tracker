import React, {useState} from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const { onAddExpense } = props;
    const [showForm, setShowForm] = useState(false)
  // we can pass data from Parent to Child using Props
  // to collect data from the child (that is communicating up), the parent will pass a function on the Child as a prop

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    onAddExpense(expenseData)
    setShowForm(false)
  }
  const startEditingHandler = () => {
    setShowForm(true)
  }
  const stopEditingHandler = () => {
    setShowForm(false)
  }
  return (
    <div className='new-expense'>
        {!showForm && <button onClick={startEditingHandler}>Add New Expense</button>}
        {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelForm={stopEditingHandler} />}
    </div>
  )
}

export default NewExpense