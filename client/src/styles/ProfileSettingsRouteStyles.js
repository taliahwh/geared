import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const modalHeight = Dimensions.get('window').height / 4;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    backgroundColor: theme.DARK_MODE,
    paddingHorizontal: 15,
  },
  border: {
    borderTopWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
    marginVertical: 20,
  },
  section: {
    marginVertical: 20,
    // marginBottom: 10,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 17,
    paddingBottom: 5,
    color: theme.LIGHT_GRAY,
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
  },
  imageInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 7,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
    alignItems: 'center',
  },
  dateInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
  },
  slash: { paddingHorizontal: 5 },
  inputTitle: {
    width: '30%',
    // backgroundColor: 'pink',
    fontSize: 15,
    color: theme.MEDIUM_GRAY,
  },
  inputSection: {
    // backgroundColor: 'orange',
    width: '70%',
    marginRight: 15,
    color: theme.LIGHT_GRAY,
  },
  disabledInputSection: {
    // backgroundColor: 'orange',
    width: '70%',
    marginRight: 15,
    color: theme.LIGHT_GRAY,
  },
  flexInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
  },
  flexInputTitle: {
    flex: 3,
    // backgroundColor: 'pink',
    width: '30%',
    fontSize: 15,
    color: theme.MEDIUM_GRAY,
  },
  flexInputSection: {
    // backgroundColor: 'orange',
    flex: 6,
    marginRight: 15,
    color: theme.LIGHT_GRAY,
  },
  flexPlaceholderSection: {
    // backgroundColor: 'orange',
    flex: 6,
    marginRight: 15,
    color: theme.LIGHT_GRAY,
  },
  flexIcon: {
    // backgroundColor: 'pink',
    flex: 1,
    color: theme.MEDIUM_GRAY,
  },
  userImage: {
    height: 30,
    width: 30,
    borderWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
    borderRadius: 100,
  },
  btn: {
    backgroundColor: theme.LIGHT_GRAY,
    color: theme.DARK_MODE,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    paddingVertical: 10,
    borderRadius: 3,
    overflow: 'hidden',
  },
  tagsContainer: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
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
    borderColor: theme.LIGHT_GRAY,
    paddingHorizontal: 10,
    color: theme.LIGHT_GRAY,
  },
  modalInputTitle: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: theme.LIGHT_GRAY,
  },

  modalContainer: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  modalDisplayText: {
    fontSize: 15,
    color: theme.LIGHT_GRAY,
    textAlign: 'center',
  },
  interestTagContainer: {
    marginTop: 15,
  },
  interestInput: {
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
    marginVertical: 10,
    paddingVertical: 7,
    paddingHorizontal: 7,
    color: theme.LIGHT_GRAY,
  },
  modalInputContainer: {
    display: 'flex',
    // flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: 'orange',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: theme.MEDIUM_GRAY,
  },
  modalInputTitle: {
    width: '100%',
    // backgroundColor: 'pink',
    // textAlign: 'center',
    // fontSize: 13,
    marginBottom: 5,
    fontWeight: '500',
    color: '#525252',
  },
  modalInputSection: {
    // backgroundColor: 'orange',
    width: '100%',
    // marginRight: 15,
    color: theme.LIGHT_GRAY,
  },
});

export default styles;
