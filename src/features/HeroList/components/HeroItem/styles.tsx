import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  block: {
    backgroundColor: '#e0e0e0',
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
    color: '#000',
    fontSize: 18,
    fontWeight: '500',
  },
  category: {
    flexDirection: 'row',
    columnGap: 6,
  },
  categoryTitle: {
    fontSize: 14,
    color: '#252525',
    fontWeight: '500',
  },
  categoryValue: {
    fontSize: 14,
    color: '#252525',
    fontWeight: '400',
  },
});
