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
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  sellerInfoContainer: {
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
  },
  sellerProfileImage: {
    alignSelf: 'center',
    height: 65,
    width: 65,
    borderRadius: 65 / 2,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    marginBottom: 10,
  },
  sellerName: {
    fontSize: 16,
    textAlign: 'center',
  },
  sellerUsername: {
    fontSize: 14,
    textAlign: 'center',
  },
  reviewStarsContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
    width: modalWidth / 2.5,
    marginBottom: 10,
  },
  reviewDirections: {
    fontSize: 13,
    color: theme.DARK_GRAY,
    paddingHorizontal: 15,
  },
  reviewContainer: {
    margin: 15,
    // backgroundColor: 'orange',
    height: modalWidth / 2.5,
    borderBottomWidth: 0.7,
    borderColor: theme.BORDER_COLOR,
  },
  reviewHeading: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  textInput: {
    color: '#000',
    fontSize: 15,
    // backgroundColor: 'orange',
    height: modalWidth / 4,
  },
  spacer: {
    height: 15,
  },
});

export default styles;
