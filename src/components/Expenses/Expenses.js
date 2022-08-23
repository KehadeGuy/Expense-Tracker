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
  return (
    <Card className="expenses">
      <ExpensesFilter  onChangeFilter={filterChangeHandler} defaultYear={filteredYear}/>
      <ExpenseItem title={items[0].title} amount={items[0].amount} date={items[0].date} />
      <ExpenseItem title={items[1].title} amount={items[1].amount} date={items[1].date} />
      <ExpenseItem title={items[2].title} amount={items[2].amount} date={items[2].date} />
      <ExpenseItem title={items[3].title} amount={items[3].amount} date={items[3].date} />

      {/* {expenses.map((exp) => (<ExpenseItem key={exp.id} title={exp.title} amount={exp.amount} date={exp.date} />))} */}
    </Card>
  )
}

export default Expenses