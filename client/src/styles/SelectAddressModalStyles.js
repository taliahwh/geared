import { StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/styles.theme';

const modalWidth = Dimensions.get('window').width;
const modalHeight = Dimensions.get('window').height * 0.6;
const swipeBarWidth = modalWidth / 8;
const chevronContainerWidth = modalWidth / 6;
const modalBodyHeight = modalHeight - 100;

const styles = StyleSheet.create({
  screenView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalView: {
    height: modalHeight,
    width: modalWidth,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  headerContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_COLOR,
    paddingVertical: 7,
  },
  swipeBar: {
    backgroundColor: theme.SWIPE_BAR_COLOR,
    width: swipeBarWidth,
    height: 7,
    borderRadius: 10,
    alignSelf: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 3,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 17,
  },
  editText: {
    fontSize: 16,
    color: 'transparent',
  },
  addressContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_COLOR,
    display: 'flex',
    flexDirection: 'row',
  },
  address: {
    paddingLeft: 15,
    paddingRight: 5,
    flex: 2,
    fontSize: 15,
    color: theme.DARK_GRAY,
  },
  chevronContainer: {
    width: chevronContainerWidth,
    // backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  addressAndBtnContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: modalBodyHeight,
  },
  btnContainer: {
    paddingVertical: 10,
    backgroundColor: theme.DARK_GRAY,
    borderRadius: 3,
  },
  addAddressBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
