import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
};

export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export interface Data {
  longitude: string;
  latitude: string;
  address: string;
  time: string;
}
