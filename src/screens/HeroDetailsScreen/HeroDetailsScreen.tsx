import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {SafeArea, Button, ButtonType} from '../../ui/';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useAppSelector} from '../../hooks/useAppSelector';
import {Hero} from '../../features/HeroList/types/Hero';
import {styles} from './styles';
import LeftArrow from '../../assets/icons/arrow-left.svg';

const HeroDetailsScreen = () => {
  const {heroItems} = useAppSelector(state => state.hero);
  const navigation = useNavigation();
  const route = useRoute();

  const [loading, setLoading] = useState(false);
  const [currentHero, setCurrentHero] = useState<Hero | null>(null);

  const heroName = (route.params as {name: string})?.name;

  useEffect(() => {
    getHeroByName();
  }, [heroName]);

  const getHeroByName = () => {
    setLoading(true);
    const foundHero = heroItems.find(hero => hero.name === heroName);

    if (!foundHero) {
      setLoading(false);
      return;
    }

    setCurrentHero(foundHero);
    setLoading(false);
  };

  const handleBackButton = () => {
    navigation.goBack();
  };

  if (loading) {
    return (
      <View style={styles.additionalScreen}>
        <ActivityIndicator size={48} />
      </View>
    );
  }

  if (!currentHero) {
    return (
      <View style={styles.additionalScreen}>
        <Text style={styles.errorText}>There has been an error</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <SafeArea />
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            image={<LeftArrow width={30} height={30} />}
            width={30}
            height={30}
            onPress={handleBackButton}
            buttonType={ButtonType.Clear}
          />
          <Text style={styles.title}>{currentHero?.name}</Text>
        </View>

        <View style={styles.categoryWrapper}>
          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Birth year:</Text>
            <Text style={styles.categorySubtile}>
              {currentHero?.birth_year}
            </Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Gender:</Text>
            <Text style={styles.categorySubtile}>{currentHero?.gender}</Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Height:</Text>
            <Text style={styles.categorySubtile}>
              {currentHero?.birth_year}
            </Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Mass:</Text>
            <Text style={styles.categorySubtile}>{currentHero?.mass}</Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Hair color:</Text>
            <Text style={styles.categorySubtile}>
              {currentHero?.hair_color}
            </Text>
          </View>

          <View style={styles.category}>
            <Text style={styles.categoryTitle}>Skin color:</Text>
            <Text style={styles.categorySubtile}>
              {currentHero?.skin_color}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeroDetailsScreen;
