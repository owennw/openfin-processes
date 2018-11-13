const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  counter: {
    marginLeft: '47%',
  },
  icon: {
    padding: 0,
  },
  button: {
    marginLeft: 5,
    marginRight: 5,
    minWidth: 95,
  },
  actions: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}

interface ICardStyle {
  header: string
  counter: string
  icon: string
  button: string
  actions: string
}

interface IStyledCounterProps {
  classes: ICardStyle
}

export { styles, IStyledCounterProps }