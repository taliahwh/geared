import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const imageWidth = Dimensions.get('window').width * 0.15;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  itemDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
  },
  itemImage: {
    width: imageWidth,
    height: imageWidth,
  },
  itemDescription: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 10,
  },
  itemPrice: {
    alignSelf: 'center',
    fontWeight: '500',
  },
  orderStatusContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
  },
  statusHeading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
  },
  orderStatus: {
    fontSize: 17,
    textAlign: 'center',
  },
  addressContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginBottom: 15,
    padding: 5,
    borderWidth: 1.4,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shippingHeading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  address: {
    textAlign: 'center',
  },
  paymentConfirmationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
  },
  paymentDescription: {
    marginTop: 5,
    marginBottom: 20,
  },
  paymentChartContainer: {
    display: 'flex',
    paddingVertical: 13,
    borderBottomWidth: 0.3,
    borderColor: theme.BORDER_COLOR,
    width: '100%',
  },
  chartItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartItem: {
    fontSize: 15,
  },
  totalPrice: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
