import { StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/styles.theme';

const imageWidth = Dimensions.get('window').width / 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  itemAvailableContainer: {
    textAlign: 'center',
    paddingVertical: 10,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
  },
  productDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
    paddingVertical: 15,
    marginBottom: 25,
  },
  productImage: {
    width: imageWidth,
    height: imageWidth,
    marginRight: 10,
  },
  productTitle: {
    // backgroundColor: 'pink',
    flex: 4,
    height: imageWidth,
    color: theme.DARK_GRAY,
    fontSize: 14,
  },
  productPrice: {
    marginLeft: 15,
    fontWeight: '700',
    alignSelf: 'center',
  },
  containerTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  sectionContainer: {
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_COLOR,
    paddingVertical: 20,
    marginBottom: 25,
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  addNewAddress: {
    flex: 1,
    fontWeight: '700',
    fontSize: 16,
  },
  alertIcon: {
    marginRight: 15,
  },
  paymentTypeText: {
    fontSize: 15,
    flex: 1,
  },
  paypalIconContainer: {
    borderWidth: 1.3,
    borderRadius: 5,
    borderColor: theme.BORDER_COLOR,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 15,
  },
  paypalCardIcon: {
    height: 20,
    width: 20,
  },
  paypalCheckoutBtn: {
    marginTop: 10,
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutText: {
    fontWeight: '300',
    paddingTop: 7,
  },
  paypalCheckoutBtnIcon: {
    height: 30,
    width: 100,
  },
  paymentProcessedText: {
    textAlign: 'center',
    color: theme.DARK_GRAY,
    fontSize: 13,
  },
  cardContainer: {
    width: 45,
    borderWidth: 1.3,
    borderRadius: 5,
    borderColor: theme.BORDER_COLOR,
    paddingVertical: 3,
    paddingHorizontal: 10,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
