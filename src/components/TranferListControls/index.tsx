import React, { FC } from 'react'
import { TransferColumns, TransferItemsState } from '../../types'
import Button from '../Button'
import classes from './style.module.scss'

type TranferListControlsProps = {
  items: TransferItemsState;
  onMoveAll: (from: TransferColumns) => void;
  onMoveSelected: (from: TransferColumns) => void;
}

const TranferListControls: FC<TranferListControlsProps> = ({ onMoveAll, onMoveSelected, items }) => {
  const checkedFrom = items.from.filter(item => item.checked);
  const checkedTo = items.to.filter(item => item.checked);

  return (
    <div className={classes.controls}>
        {/* Move all left to right if right col has items */}
        <Button 
          onClick={() => onMoveAll('to')}
          disabled={!items.to.length} 
          color="secondary" 
          style={{ fontSize: 30 }}
        >
          &#8647;
        </Button>
        {/* Move checked from right */}
        <Button 
          onClick={() => onMoveSelected('to')}
          disabled={!checkedTo.length}
          color="secondary" 
          style={{ fontSize: 20 }}
        >
          &#8678;
        </Button>
        {/* Move checked from left */}
        <Button 
          onClick={() => onMoveSelected('from')}
          disabled={!checkedFrom.length}
          color="primary" 
          style={{ fontSize: 20 }}
        >
          &#8680;
        </Button>
        {/* Move all right to left if left col has items */}
        <Button 
          onClick={() => onMoveAll('from')}
          disabled={!items.from.length} 
          color="primary" 
          style={{ fontSize: 30 }}
        >
          &#8649;
        </Button>
      </div>
  )
}

export default TranferListControls