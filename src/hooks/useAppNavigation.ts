import {TypeRootStackParamsList} from '@app/router/types/TypeRootStackParamsList';
import {NavigationProp, useNavigation} from '@react-navigation/native';

export const useAppNavigation = () =>
  useNavigation<NavigationProp<TypeRootStackParamsList>>();
