import { StyleSheet } from 'react-native';
import theme from './styles.theme';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#F4F4F4',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 25,
  },
  textInput: {
    height: 40,
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_COLOR,
    marginBottom: 36,
  },
  btnContainer: {
    marginTop: 40,
    paddingVertical: 10,
    backgroundColor: theme.DARK_GRAY,
    borderRadius: 3,
  },
  continueBtn: {
    color: 'white',
    fontSize: 17,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputTitle: {
    fontSize: 14,
    marginBottom: 7,
  },
  countrySection: {
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  countryText: {
    fontSize: 15,
    paddingBottom: 10,
  },
});

export const pickerSelectStyles = StyleSheet.create({
  // Picker Styling
  pickerContainer: {
    marginTop: 30,
  },
  inputIOS: {
    fontSize: 15,
    borderBottomWidth: 0.5,
    borderColor: theme.BORDER_COLOR,
    paddingBottom: 10,
    marginBottom: 36,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

// export default styles;
