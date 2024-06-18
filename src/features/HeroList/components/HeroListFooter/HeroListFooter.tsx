import React, {FC} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {colors} from '@app/styles/colors';
import {styles} from './styles';

type HeroListFooterProps = {
  toShowLoader: boolean;
};

const HeroListFooter: FC<HeroListFooterProps> = props => {
  const {toShowLoader} = props;

  return (
    <View style={styles.footer}>
      {toShowLoader && (
        <ActivityIndicator color={colors.textPrimary} size={30} />
      )}
    </View>
  );
};

export default HeroListFooter;
