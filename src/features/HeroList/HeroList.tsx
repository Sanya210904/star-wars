import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useAppSelector} from '../../hooks/useAppSelector';
import HeroItem from './components/HeroItem/HeroItem';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {fetchHeroes} from './store/heroSlice';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const HeroList = () => {
  const {isLoading, error, heroItems, totalPages} = useAppSelector(
    state => state.hero,
  );
  const dispatch = useAppDispatch();
  const navigation = useNavigation<any>();

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
    navigation.navigate('heroDetails', {name: heroName});
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
        <View
          style={{
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {isLoading && currentPage !== 1 ? (
            <ActivityIndicator color={'#000'} size={30} />
          ) : null}
        </View>
      }
      onEndReached={handleOnEndList}
      contentContainerStyle={{paddingTop: 24, paddingHorizontal: 24}}
      ItemSeparatorComponent={() => <View style={{height: 24}} />}
      data={heroItems}
      renderItem={({item, index}) => (
        <HeroItem
          id={index}
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
