import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const containerWidth = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  // Screen container
  screenContainer: {
    flex: 1,
    display: 'flex',
  },
  // Confirm details container
  mapImage: {
    flex: 2,
  },

  confirmDetailsContainer: {
    marginTop: 25,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 3,
    width: containerWidth,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  smallText: {
    fontSize: 11,
    color: theme.ALERT_COLOR,
    marginBottom: 10,
  },
  header: {
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 10,
  },
  address: {
    color: theme.DARK_GRAY,
    marginBottom: 10,
  },

  // Form container
  formContainer: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
  inputTitle: {
    fontSize: 14,
    marginBottom: 7,
  },
  textInput: {
    height: 40,
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_COLOR,
    marginBottom: 25,
  },
  inputContainer: {
    // paddingBottom: 30,
  },
  btnContainer: {
    marginTop: 40,
    paddingVertical: 10,
    backgroundColor: theme.DARK_GRAY,
    borderRadius: 3,
  },
  confirmBtn: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default styles;
