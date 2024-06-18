import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';
import {offsets} from '../../styles/offsets';

export const styles = StyleSheet.create({
  additionalScreen: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: offsets.screenOffsetHorizontal,
    paddingVertical: offsets.screenOffsetVertical,
  },
  errorText: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.textPrimary,
  },

  screen: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.surfacePrimary,
    paddingHorizontal: offsets.screenOffsetHorizontal,
    paddingVertical: offsets.screenOffsetVertical,
  },
  header: {
    flexDirection: 'row',
    columnGap: 18,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.textPrimary,
  },
  categoryWrapper: {
    rowGap: 12,
    marginTop: 64,
  },
  category: {
    flexDirection: 'row',
    columnGap: 6,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.borderPrimary,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: colors.textSecondary,
  },
  categorySubtile: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.textSecondary,
  },
});
