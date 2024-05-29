import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import SafeArea from '../../ui/SafeArea/SafeArea';
import {styles} from './styles';
import Button from '../../ui/Button/Button';
import HeroList from '../../features/HeroList/HeroList';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {resetLike} from '../../features/HeroList/store/heroSlice';
import {useAppSelector} from '../../hooks/useAppSelector';
import LikeCard from '../../components/LikeCard/LikeCard';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const {heroItems, likeCounter} = useAppSelector(state => state.hero);

  const handleResetButton = () => {
    dispatch(resetLike());
  };

  return (
    <View style={styles.screen}>
      <SafeArea />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Fans</Text>
          <Button
            width={100}
            height={38}
            title="Clear"
            onPress={() => handleResetButton()}
          />
        </View>
        <View style={styles.cardBlock}>
          <LikeCard likeAmount={likeCounter['male']} likeCategory="Male" />
          <LikeCard likeAmount={likeCounter['female']} likeCategory="Female" />
          <LikeCard likeAmount={likeCounter['n/a']} likeCategory="n/a" />
        </View>
        <HeroList />
      </View>
    </View>
  );
};

export default HomeScreen;
