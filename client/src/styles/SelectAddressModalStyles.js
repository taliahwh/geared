import { StyleSheet, Dimensions } from 'react-native';
import theme from '../styles/styles.theme';

const modalWidth = Dimensions.get('window').width;
const modalHeight = Dimensions.get('window').height * 0.7;

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.BORDER_COLOR,
    height: modalHeight,
    width: modalWidth,
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
  },
});

export default styles;
