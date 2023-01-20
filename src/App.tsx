import { useState } from 'react'
import TransferList from './components/TransferList'
import classes from './app.module.scss'

function App() {

  return (
    <div className={classes.app}>
      <div className={classes.container}>
        <TransferList />
      </div>
    </div>
  )
}

export default App
