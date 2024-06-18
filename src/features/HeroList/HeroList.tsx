import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import HeroItem from './components/HeroItem/HeroItem';
import {useAppDispatch, useAppNavigation} from '../../hooks';
import {fetchHeroes} from './store/heroSlice';
import {styles} from './styles';
import HeroListFooter from './components/HeroListFooter/HeroListFooter';
import {offsets} from '../../styles/offsets';
import {routeName} from '@app/router/constants/routeName';

const HeroList = () => {
  const {isLoading, error, heroItems, totalPages} = useAppSelector(
    state => state.hero,
  );
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();

  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getData();
  }, [currentPage]);

  const getData = async () => {
    dispatch(fetchHeroes(currentPage));
  };

  const handleOnEndList = () => {
    if (currentPage <= totalPages) {
      setCurrentPage(page => page + 1);
    }
  };

  const handleItemPress = useCallback((heroName: string) => {
    navigation.navigate(routeName.HeroDetails, {name: heroName});
  }, []);

  if (isLoading && currentPage === 1) {
    return (
      <View style={styles.additionalScreen}>
        <ActivityIndicator size={40} color={'#000'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.additionalScreen}>
        <Text style={styles.errorText}>There has been an error</Text>
      </View>
    );
  }

  return (
    <FlatList
      ListFooterComponent={
        <HeroListFooter toShowLoader={isLoading && currentPage !== 1} />
      }
      onEndReached={handleOnEndList}
      contentContainerStyle={{
        paddingTop: 24,
        paddingHorizontal: offsets.screenOffsetHorizontal,
      }}
      ItemSeparatorComponent={() => <View style={{height: 24}} />}
      data={heroItems}
      renderItem={({item}) => (
        <HeroItem
          onItemPress={handleItemPress}
          name={item.name}
          gender={item.gender}
          hasLike={item.hasLike}
        />
      )}
    />
  );
};

export default HeroList;
