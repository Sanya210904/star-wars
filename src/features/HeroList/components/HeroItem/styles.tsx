import {StyleSheet} from 'react-native';
import {colors} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  block: {
    backgroundColor: colors.surfaceSecondary,
    borderRadius: 8,
    padding: 12,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoBlock: {
    width: '70%',
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: '500',
  },
  category: {
    flexDirection: 'row',
    columnGap: 6,
  },
  categoryTitle: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  categoryValue: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '400',
  },
});
