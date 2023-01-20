import clsx from "clsx";
import "react";
import { useState } from "react";
import Button from "../Button";
import TransferItem from "../TransferItem";
import classes from './style.module.scss'

type TransferItem = {
  label: string;
  checked: boolean;
}

type TransferItemsState = {
  from: TransferItem[];
  to: TransferItem[];
};

const initialState: TransferItemsState = {
  from: [
    { label: 'JS', checked: false },
    { label: 'HTML', checked: false },
    { label: 'CSS', checked: false },
    { label: 'TS', checked: false },
  ],
  to: [
    { label: 'React', checked: false },
    { label: 'Angular', checked: false },
    { label: 'Vue', checked: false },
    { label: 'Svelte', checked: false },
  ]
}

const TransferList = () => {
  const [transferItems, setTransferItems] = useState<TransferItemsState>(initialState);

  return (
    <div className={classes.list}>
      <div className={clsx(classes.col, classes.from)}>
        {transferItems.from.map((item) => (
            <TransferItem key={item.label} name={item.label} checked={item.checked} />
          )
        )}
      </div>
      <div className={classes.controls}>
        <Button color="secondary" style={{ fontSize: 30 }}>
          &#8647;
        </Button>
        <Button color="secondary" style={{ fontSize: 20 }}>
          &#8678;
        </Button>
        <Button color="primary" style={{ fontSize: 20 }}>
          &#8680;
        </Button>
        <Button color="primary" style={{ fontSize: 30 }}>
          &#8649;
        </Button>
      </div>
      <div className={clsx(classes.col, classes.to)}>
        {transferItems.from.map((item) => (
            <TransferItem key={item.label} name={item.label} checked={item.checked} />
          )
        )}
      </div>
    </div>
  );
};

export default TransferList;
