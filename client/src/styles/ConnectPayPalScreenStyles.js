import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const imageHeightAndWidth = Dimensions.get('window').width / 2;
const btnWidth = Dimensions.get('window').width - 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 40,
    display: 'flex',
    alignItems: 'center',
  },
  spacer: { height: 15 },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
  },
  bodyText: {
    textAlign: 'center',
    fontSize: 15,
  },
  paypalBtn: {
    width: btnWidth,
    textAlign: 'center',
    backgroundColor: theme.PAYPAL_COLOR,
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
    paddingVertical: 10,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 10,
  },
  backgroundImage: {
    height: imageHeightAndWidth,
    width: imageHeightAndWidth,
    marginVertical: 30,
  },
});

export default styles;
