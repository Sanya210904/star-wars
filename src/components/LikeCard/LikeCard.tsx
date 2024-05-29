import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

type LikeCardProps = {
  likeAmount: number;
  likeCategory: string;
};

const LikeCard: FC<LikeCardProps> = props => {
  const {likeAmount, likeCategory} = props;

  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.title}>{likeAmount}</Text>
        <Text style={styles.subtitle}>{likeCategory}</Text>
      </View>
    </View>
  );
};

export default LikeCard;
