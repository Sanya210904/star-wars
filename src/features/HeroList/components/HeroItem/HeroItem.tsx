import React, {FC, memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '@app/ui/Button/Button';
import {ButtonType} from '@app/ui/Button/Button';
import {useAppDispatch} from '@app/hooks/useAppDispatch';
import {setLike} from '../../store/heroSlice';
import HeartFilled from '@app/assets/icons/heart-filled.svg';
import HeartOutlined from '@app/assets/icons/heart-oulined.svg';
import {styles} from './styles';

type HeroItemProps = {
  name: string;
  gender: string;
  hasLike: boolean;
  onItemPress: (index: string) => void;
};

const HeroItem: FC<HeroItemProps> = props => {
  const {name, gender, hasLike, onItemPress} = props;
  const dispatch = useAppDispatch();

  return (
    <View style={styles.block}>
      <TouchableOpacity onPress={() => onItemPress(name)}>
        <View style={styles.container}>
          <View style={styles.infoBlock}>
            <Text style={styles.title}>{name}</Text>
            <View style={styles.category}>
              <Text style={styles.categoryTitle}>Gender:</Text>
              <Text style={styles.categoryValue}>{gender}</Text>
            </View>
          </View>

          <Button
            buttonType={ButtonType.Outlined}
            onPress={() => dispatch(setLike(name))}
            width={40}
            height={40}
            image={
              hasLike ? (
                <HeartFilled width={30} height={30} />
              ) : (
                <HeartOutlined width={30} height={30} />
              )
            }
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(HeroItem);
