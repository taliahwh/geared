import { StyleSheet } from 'react-native';
import theme from './styles.theme';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: theme.FEED_BACKGROUND,
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
    borderColor: theme.DARK_MODE_BORDER,
    marginBottom: 25,
    color: theme.LIGHT_GRAY,
  },
  btnContainer: {
    marginTop: 40,
    paddingVertical: 10,
    backgroundColor: theme.LIGHT_GRAY,
    borderRadius: 3,
  },
  continueBtn: {
    color: theme.DARK_MODE,

    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
  inputTitle: {
    fontSize: 14,
    marginBottom: 7,
    color: theme.MEDIUM_GRAY,
  },
  countrySection: {
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
  },
  countryText: {
    fontSize: 15,
    paddingBottom: 10,
    color: theme.LIGHT_GRAY,
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
    borderColor: theme.DARK_MODE_BORDER,
    paddingBottom: 10,
    marginBottom: 36,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

// export default styles;
