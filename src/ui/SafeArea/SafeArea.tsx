import React, {FC, ReactNode, PropsWithChildren} from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

const SafeArea: FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>;
};

export default SafeArea;
