import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {offsets} from '../../styles/offsets';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
  },
  container: {
    flex: 1,
    paddingVertical: offsets.screenOffsetVertical,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: offsets.screenOffsetHorizontal,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 24,
    fontWeight: '600',
  },
  cardBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    paddingHorizontal: offsets.screenOffsetHorizontal,
  },
});
