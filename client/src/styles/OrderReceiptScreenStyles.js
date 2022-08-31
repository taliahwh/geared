import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const imageWidth = Dimensions.get('window').width * 0.15;
const modalWidth = Dimensions.get('window').width;
const modalHeight = Dimensions.get('window').height - 140;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  modalView: {
    height: modalHeight,
    width: modalWidth,
    backgroundColor: '#fff',
    // borderRadius: 10,
  },
  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
    paddingHorizontal: 15,
  },
  spacer: {
    color: 'transparent',
    height: 15,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  itemDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
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
  },
  itemPrice: {
    alignSelf: 'center',
    fontWeight: '500',
  },
  orderStatusContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
    marginHorizontal: 15,
  },
  statusHeading: {
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 2,
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
  },
  trackingNumber: {
    fontSize: 16,
    color: theme.ALERT_COLOR,
    textDecorationLine: 'underline',
  },
  shippingProvider: {
    fontSize: 17,
    textAlign: 'center',
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
    marginHorizontal: 15,
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
  sellerInfoContainer: {
    paddingVertical: 20,
    display: 'flex',
    alignItems: 'center',
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
    width: '100%',
    // paddingHorizontal: 15,
  },
  sellerProfileImage: {
    height: 55,
    width: 55,
    borderRadius: 55 / 2,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    marginBottom: 15,
  },
  purchasedOnText: {
    fontSize: 15,
    marginBottom: 3,
  },
  sellerName: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 3,
  },
  sellerUsername: {
    marginBottom: 5,
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
  },
  helpBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 7,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
  },
  helpBtnText: {
    fontSize: 17,
  },
  leaveFeedbackContainer: {
    paddingTop: 15,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderColor: theme.BORDER_COLOR,
    backgroundColor: '#fff',
  },
  btnContainer: {
    paddingVertical: 10,
    backgroundColor: theme.DARK_GRAY,
    borderRadius: 3,
    marginHorizontal: 15,
  },
  leaveFeedbackBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
