import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const imageWidth = Dimensions.get('window').width * 0.12;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 9,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  leftCardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    // backgroundColor: 'blue',
    alignItems: 'center',
  },
  profileImage: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth / 2,
    overflow: 'hidden',
  },
  orderDetailsContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    paddingLeft: 10,
  },
  itemImage: {
    // backgroundColor: 'green',
    width: imageWidth,
    height: imageWidth,
  },
  username: {
    fontWeight: '700',
  },
  orderStatus: {
    paddingVertical: 3,
    fontSize: 15,
    color: theme.DARK_GRAY,
  },
  purchasedDate: {
    fontSize: 11,
  },
});

export default styles;
