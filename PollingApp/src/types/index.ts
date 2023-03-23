import {NativeStackScreenProps} from '@react-navigation/native-stack';

export interface Data {
  created_at: string;
  url: string;
  title: string;
  author: string;
  objectID: string;
}

export type RootStackParamList = {
  Home: undefined;
  About: {
    data: {
      created_at: string;
      url: string;
      title: string;
      author: string;
    };
  };
};
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;
