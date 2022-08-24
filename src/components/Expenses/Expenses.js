import ExpenseItem from './ExpenseItem'
import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'
import {useState} from 'react'

function Expenses(props) {
  const { items } = props
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  // To filter the array
  const filtExpenses = items.filter(itm => {
    return itm.date.getFullYear().toString() === filteredYear;
  })

  return (
    <Card className="expenses">
      <ExpensesFilter  onChangeFilter={filterChangeHandler} defaultYear={filteredYear}/>

      {filtExpenses.length === 0 ? <p style={{ color: "white", textAlign: 'center'}}>No Expenses found.</p> : filtExpenses.map((exp) => (<ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />))}
    </Card>
  )
}

export default Expenses