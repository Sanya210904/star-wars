import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
  },
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.textInverted,
  },

  primary: {
    backgroundColor: colors.brandPrimary,
  },
  outlined: {
    borderWidth: 2,
    borderColor: colors.brandPrimary,
  },
  clear: {
    backgroundColor: 'inherit',
  },
});
