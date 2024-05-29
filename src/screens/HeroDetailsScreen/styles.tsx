import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  additionalScreen: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },

  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 18,
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
    color: '#000',
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
    borderBottomColor: '#ededed',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '400',
    color: '#292929',
  },
  categorySubtile: {
    fontSize: 18,
    fontWeight: '500',
    color: '#292929',
  },
});
