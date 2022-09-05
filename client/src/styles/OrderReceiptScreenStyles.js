import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const imageWidth = Dimensions.get('window').width * 0.15;
const modalWidth = Dimensions.get('window').width;
const modalHeight = Dimensions.get('window').height - 140;
const modalHeightForSaleReceipt = Dimensions.get('window').height - 120;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    alignItems: 'center',
  },
  modalView: {
    height: modalHeight,
    width: modalWidth,
    backgroundColor: theme.DARK_MODE,
    // borderRadius: 10,
  },
  modalViewForSaleReceipt: {
    height: modalHeightForSaleReceipt,
    width: modalWidth,
    backgroundColor: theme.DARK_MODE,
    // borderRadius: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
    paddingHorizontal: 15,
  },
  spacer: {
    color: 'transparent',
    height: 15,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: theme.LIGHT_GRAY,
  },
  itemDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
    marginHorizontal: 15,
  },
  itemImage: {
    width: imageWidth,
    height: imageWidth,
  },
  itemDescription: {
    flex: 1,
    paddingRight: 5,
    paddingLeft: 10,
    color: theme.LIGHT_GRAY,
  },
  itemPrice: {
    alignSelf: 'center',
    fontWeight: '500',
    color: theme.LIGHT_GRAY,
  },
  orderStatusContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
    marginHorizontal: 15,
  },
  statusHeading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 2,
    color: theme.LIGHT_GRAY,
  },
  orderStatus: {
    fontSize: 17,
    textAlign: 'center',
    color: theme.LIGHT_GRAY,
  },
  addressContainer: {
    paddingVertical: 20,
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
    display: 'flex',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  trackingNumberContainer: {
    paddingTop: 20,
  },
  trackingHeading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 5,
    color: theme.LIGHT_GRAY,
  },
  trackingNumber: {
    fontSize: 16,
    color: theme.ALERT_COLOR,
    textDecorationLine: 'underline',
  },
  shippingProvider: {
    fontSize: 17,
    textAlign: 'center',
    color: theme.LIGHT_GRAY,
  },
  icon: {
    marginBottom: 15,
    padding: 5,
    borderWidth: 1.4,
    borderColor: theme.LIGHT_GRAY,
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
    color: theme.LIGHT_GRAY,
  },
  address: {
    textAlign: 'center',
    color: theme.LIGHT_GRAY,
  },
  paymentConfirmationContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginHorizontal: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
  },
  paymentDescription: {
    marginTop: 5,
    marginBottom: 20,
    color: theme.LIGHT_GRAY,
  },
  paymentChartContainer: {
    display: 'flex',
    paddingVertical: 13,
    borderBottomWidth: 0.3,
    borderColor: theme.DARK_MODE_BORDER,
    width: '100%',
  },
  chartItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chartItem: {
    fontSize: 15,
    color: theme.LIGHT_GRAY,
  },
  totalPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.LIGHT_GRAY,
  },
  sellerInfoContainer: {
    paddingVertical: 20,
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
    width: '100%',
    // paddingHorizontal: 15,
  },
  sellerProfileImage: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    marginBottom: 15,
  },
  purchasedOnText: {
    fontSize: 15,
    marginBottom: 3,
    color: theme.LIGHT_GRAY,
  },
  sellerName: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 3,
    color: theme.LIGHT_GRAY,
  },
  sellerUsername: {
    marginBottom: 5,
    color: theme.LIGHT_GRAY,
  },
  messagesContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  messagesIcon: {
    color: theme.ALERT_COLOR,
    marginRight: 3,
  },
  messagesText: {
    fontSize: 15,
    color: theme.ALERT_COLOR,
    fontWeight: '500',
  },
  helpContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    marginHorizontal: 15,
  },
  helpHeading: {
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 17,
    marginBottom: 20,
    color: theme.LIGHT_GRAY,
  },
  helpBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 7,
    borderBottomWidth: 0.7,
    borderColor: theme.DARK_MODE_BORDER,
    marginBottom: 12,
  },
  helpBtnText: {
    fontSize: 17,
    color: theme.LIGHT_GRAY,
  },
  leaveFeedbackContainer: {
    paddingTop: 15,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    backgroundColor: theme.FEED_BACKGROUND,
  },
  btnContainer: {
    paddingVertical: 10,
    backgroundColor: theme.LIGHT_GRAY,
    borderRadius: 3,
    marginHorizontal: 15,
  },
  leaveFeedbackBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: theme.DARK_MODE,
  },

  // PayPal payment container
  paypalContainer: {
    backgroundColor: theme.FEED_BACKGROUND,
    marginVertical: 25,
    width: '100%',
    padding: 15,
    borderRadius: 10,
  },
  amountAdded: {
    textAlign: 'center',
    color: theme.LIGHT_GRAY,
  },
  paypalBtn: {
    backgroundColor: '#ffcc00',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    borderRadius: 5,
    marginTop: 15,
  },
  goTo: {
    fontWeight: '700',
    fontSize: 16,
  },
  paypalBtnIcon: {
    height: 20,
    width: 100,
  },
});

export default styles;
