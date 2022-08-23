import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

function NewExpense(props) {
    const { onAddExpense } = props;
  // we can pass data from Parent to Child using Props
  // to collect data from the child (that is communicating up), the parent will pass a function on the Child as a prop

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString()
    }
    onAddExpense(expenseData)
  }
  return (
    <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  )
}

export default NewExpense