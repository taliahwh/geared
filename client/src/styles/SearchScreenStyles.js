import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const itemWidthAndHeight = Dimensions.get('window').width / 2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  headerContainer: {
    backgroundColor: theme.DARK_MODE,
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
  },
  inputAndIcon: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: theme.LIGHT_GRAY,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 7,
    marginRight: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  searchBtn: {
    fontWeight: '600',
    color: theme.LIGHT_GRAY,
  },
  textInput: {
    color: theme.DARK_GRAY,
    width: '90%',
  },
  searchResultsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  searchResultItem: {
    height: itemWidthAndHeight,
    width: itemWidthAndHeight,
    borderRadius: 5,
  },

  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: itemWidthAndHeight,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
  sectionHeader: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    alignItems: 'center',
    backgroundColor: '#636e72',
    color: 'white',
    padding: 10,
  },
});

export default styles;
