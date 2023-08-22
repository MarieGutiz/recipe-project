import { SortingRule as RTSortingRule } from 'react-table';


export type CustomColumn<D extends object> = Column<D> & {
  show: boolean;
};


// export type SortingRule<DataType extends object> = RTSortingRule<DataType> & {
//   id: keyof DataType;
// };