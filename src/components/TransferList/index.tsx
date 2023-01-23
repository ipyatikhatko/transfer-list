import clsx from "clsx";
import "react";
import { useState } from "react";
import { TransferColumns, TransferItemsState } from "../../types";
import Button from "../Button";
import TranferListControls from "../TranferListControls";
import TransferItem from "../TransferItem";
import classes from './style.module.scss'

const initialState: TransferItemsState = {
  from: [
    { id: 1, label: 'JS', checked: false },
    { id: 2, label: 'HTML', checked: false },
    { id: 3, label: 'CSS', checked: false },
    { id: 4, label: 'TS', checked: false },
  ],
  to: [
    { id: 5, label: 'React', checked: false },
    { id: 6, label: 'Angular', checked: false },
    { id: 7, label: 'Vue', checked: false },
    { id: 8, label: 'Svelte', checked: false },
  ]
}

const TransferList = () => {
  const [transferItems, setTransferItems] = useState<TransferItemsState>(initialState);
  const checkedFrom = transferItems.from.filter(item => item.checked);
  const checkedTo = transferItems.to.filter(item => item.checked);

  /** Resets all TransferItems checked state to false  */
  const resetChecked = () => {
    setTransferItems(prev => {
      return {
        from: prev.from.map(item => ({
          ...item,
          checked: false
        })),
        to: prev.to.map(item => ({
          ...item,
          checked: false
        }))
      }
    })
  }

  /**
   * Handling TransformItem checked state
   * @param id 
   * item id
   * @param col
   * column name 
   * @param value 
   * checkbox value
   */

  const handleCheck = (id: number, col: TransferColumns, value: boolean) => {
    setTransferItems((prev) => {
      return {
        ...prev,
        [col]: prev[col].map(item => {
          if (item.id === id) {
            return {
              ...item,
              checked: value
            }
          }
          return item;
        })
      }
    })
  }

  /** 
    Moves selected elements from specified collumn to oposite
  */
  const handleMoveSelected = (col: TransferColumns) => {
    setTransferItems(prev => {
      switch(col) {
        case 'from':
          return {
            from: prev.from.filter((item) => !checkedFrom.includes(item)),
            to: [
              ...prev.to,
              ...checkedFrom
            ]
          };
        case 'to':
          return {
            to: prev.to.filter((item) => !checkedTo.includes(item)),
            from: [
              ...prev.from,
              ...checkedTo
            ]
          };
      }
    })
    resetChecked()
  }

  /**
   Moves all elements from specified column to oposite
   from -> to, to -> from
   specified column will be cleaned after call
  */
  const handleMoveAll = (col: TransferColumns) => {
      
    switch(col){
      case 'from':
        setTransferItems(prev => ({
          from: [],
          to: [...prev.to, ...prev.from]
        }))
      break;
      case 'to':
        setTransferItems(prev => ({
          to: [],
          from: [...prev.from, ...prev.to]
        }))
      break;
    }
  }

  return (
    <div className={classes.list}>
      <div className={clsx(classes.col, classes.from)}>
        {transferItems.from.map((item) => (
            <TransferItem 
              key={item.id} 
              name={item.label} 
              checked={item.checked}
              onChange={(value) => handleCheck(item.id, 'from', value)}
            />
          )
        )}
      </div>
      <TranferListControls
        items={transferItems}
        onMoveAll={handleMoveAll}
        onMoveSelected={handleMoveSelected}
      />
      <div className={clsx(classes.col, classes.to)}>
        {transferItems.to.map((item) => (
            <TransferItem 
              key={item.id} 
              name={item.label} 
              checked={item.checked} 
              onChange={(value) => handleCheck(item.id, 'to', value)}

            />
          )
        )}
      </div>
    </div>
  );
};

export default TransferList;
