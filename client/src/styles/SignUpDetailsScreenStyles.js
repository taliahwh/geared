import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const modalHeight = Dimensions.get('window').height / 4;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  uploadingImage: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    // marginBottom: 15,
    color: 'gray',
  },
  logo: {
    fontSize: 45,
    fontWeight: '800',
    fontStyle: 'italic',
    // textAlign: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    width: '80%',
    marginBottom: 15,
  },
  container: {
    display: 'flex',
    // backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
    paddingBottom: 7,
  },
  inputTitle: {
    fontSize: 16,
  },
  chevronContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionalText: {
    fontSize: 13,
    color: '#a1a1aa',
    marginRight: 5,
  },
  dobContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dobAlert: {
    textAlign: 'right',
    fontSize: 13,
    color: '#f87171',
  },
  input: {
    paddingHorizontal: 7,
  },
  profileImageSection: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // marginVertical: 10,
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
    paddingBottom: 7,
  },
  profileImageContainer: {
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    height: 30,
    width: 30,
    borderRadius: 100,
  },
  imageAndOptionalText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  skipText: {
    fonstSize: 14,
    color: '#71717a',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  signUpBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: theme.PRIMARY_COLOR,
    color: '#fff',
    paddingVertical: 11,
    marginTop: 15,
  },
  signUpTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 13,
  },
  signUpText: {
    textAlign: 'center',
    paddingRight: 5,
  },
  // Modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 5,
    paddingTop: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: modalHeight,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    paddingHorizontal: 10,
  },
  modalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  modalDisplayText: {
    fontSize: 15,
    color: '#3f3f46',
    textAlign: 'center',
  },
  interestTagContainer: {
    marginTop: 15,
  },
  interestInput: {
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 7,
  },
});

export default styles;
