import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const productInfoHeight = Dimensions.get('window').height / 8;
const imageWidth = Dimensions.get('window').width / 7;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.FEED_BACKGROUND,
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  productInfoContainer: {
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: imageWidth,
    height: imageWidth,
    marginRight: 10,
  },
  productDetailsContainer: {
    flex: 4,
    // backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'space-between',
    height: imageWidth,
  },
  productTitle: {
    color: theme.MEDIUM_GRAY,
    fontSize: 13,
    // backgroundColor: 'orange',
  },
  currentPrice: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
    color: theme.LIGHT_GRAY,
  },
  shipping: {
    color: theme.MEDIUM_GRAY,
    fontSize: 13,
  },
  alertContainer: {
    backgroundColor: theme.DARK_MODE,
    marginTop: 15,
    marginBottom: 30,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  icon: {
    marginRight: 15,
  },
  alertMessageContainer: {
    flex: 1,
  },
  alertMessageTitle: {
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
    color: theme.LIGHT_GRAY,
  },
  alertMessageBody: {
    fontSize: 13,
    color: theme.MEDIUM_GRAY,
  },
  offerTitle: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
    color: theme.LIGHT_GRAY,
  },
  offerInput: {
    color: theme.MEDIUM_GRAY,
    paddingBottom: 7,
    borderBottomWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    fontSize: 17,
    marginBottom: 6,
  },
  additionalShipping: {
    fontSize: 12,
    color: theme.MEDIUM_GRAY,
    marginBottom: 7,
  },
  tip: {
    fontWeight: '700',
    fontSize: 14,
    color: theme.MEDIUM_GRAY,
  },
  sendOfferBtn: {
    marginTop: 25,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: '700',
    paddingVertical: 10,
    backgroundColor: theme.LIGHT_GRAY,
    color: theme.DARK_MODE,
    borderRadius: 3,
    overflow: 'hidden',
  },
});

export default styles;
