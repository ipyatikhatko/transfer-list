export type TransferColumns = 'from' | 'to';

export type TransferItem = {
  id: number;
  label: string;
  checked: boolean;
}

export type TransferItemsState = Record<TransferColumns, TransferItem[]>;