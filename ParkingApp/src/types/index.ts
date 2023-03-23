import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface Data {
  carregistration: string;
  time: number;
  charge?: number;
}

export type RootStackParamList = {
  Parking: {no: string};
  Home: undefined;
  Payment: {data: Data};
};
export const initialData = {
  carregistration: '',
  time: 0,
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ParkingProps = NativeStackScreenProps<
  RootStackParamList,
  'Parking'
>;
export type PaymentProps = NativeStackScreenProps<
  RootStackParamList,
  'Payment'
>;
