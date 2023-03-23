import {Data, initialData} from '../types';
import {Change, Total} from './action';

export type initData = {
  no: number;

  slots: Data[];
};

const initState: initData = {
  no: 2,
  slots: [initialData, initialData],
};
type red = {
  type: string;
  payload: any;
};
const reducer = (state = initState, {type, payload}: red) => {
  switch (type) {
    case Total:
      return {
        ...state,
        no: payload,
        slots: new Array(+payload).fill(initialData),
      };

    case Change:
      return {...state, slots: payload};
    default:
      return state;
  }
};
export default reducer;
