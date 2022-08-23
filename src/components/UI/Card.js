import '../UI/Card.css'

function Card(props) {
  const { children } = props

  const classes = 'card ' + props.className // if you also have extra / additional classes on the wrapper
  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Card