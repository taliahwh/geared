import { StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/styles.theme';

const modalWidth = Dimensions.get('window').width;
const modalHeight = Dimensions.get('window').height * 0.85;

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
  header: {
    backgroundColor: theme.DARK_MODE,
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  webViewContainer: {
    flex: 0,
    height: modalHeight,
  },
});

export default styles;
