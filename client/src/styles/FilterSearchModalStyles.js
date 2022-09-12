import { StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/styles.theme';

const modalWidth = Dimensions.get('window').width;
const modalHeight = Dimensions.get('window').height * 0.5;
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
    backgroundColor: theme.FEED_BACKGROUND,
    borderRadius: 10,
  },
  headerContainer: {
    borderBottomWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    paddingVertical: 7,
  },
  swipeBar: {
    backgroundColor: theme.MEDIUM_GRAY,
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
    fontWeight: '700',
    fontSize: 17,
    color: theme.LIGHT_GRAY,
  },
  resetDisabled: {
    fontSize: 13,
    color: 'transparent',
  },
  resetEnabled: {
    fontSize: 13,
    color: theme.MEDIUM_GRAY,
  },
  addressContainer: {
    paddingVertical: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    display: 'flex',
    flexDirection: 'row',
  },
  address: {
    paddingLeft: 15,
    paddingRight: 5,
    flex: 2,
    fontSize: 15,
    color: theme.MEDIUM_GRAY,
  },
  chevronContainer: {
    width: chevronContainerWidth,
    // backgroundColor: 'pink',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  modalBody: {
    // display: 'flex',
    // justifyContent: 'space-between',
    height: modalBodyHeight,
  },
  btnContainer: {
    paddingVertical: 10,
    backgroundColor: theme.LIGHT_GRAY,
    borderRadius: 3,
    marginHorizontal: 15,
  },
  viewResultsBtn: {
    // backgroundColor: theme.LIGHT_GRAY,
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: theme.FEED_BACKGROUND,
  },
  optionsContainer: {
    paddingHorizontal: 15,
  },
  filterOption: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.DARK_MODE_BORDER,
  },
  optionHeading: {
    fontSize: 16,
    color: theme.LIGHT_GRAY,
  },
  conditionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: theme.DARK_MODE_BORDER,
  },
});

export default styles;
