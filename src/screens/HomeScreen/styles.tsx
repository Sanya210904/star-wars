import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 24,
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: '600',
  },
  cardBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    paddingHorizontal: 24,
  },
});
