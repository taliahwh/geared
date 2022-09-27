import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const chatContainerHeight = Dimensions.get('window').height * 0.73;
const headerHeight = Dimensions.get('window').height * 0.06;
const minCommentInputContainerHeight = Dimensions.get('window').height * 0.06;
const productInfoContainerHeight = Dimensions.get('window').height * 0.12;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.DARK_MODE,
    flex: 1,
  },
  keyboardAware: {
    // display: 'flex',
    // justifyContent: 'space-between',
  },
  header: {
    paddingHorizontal: 15,
    // backgroundColor: 'orange',
    height: headerHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    backgroundColor: theme.DARK_MODE,
    // flex: 2,
  },
  userImageAndPhotoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
  },
  username: {
    fontWeight: '700',
    fontSize: 15,
    marginLeft: 7,
    color: theme.LIGHT_GRAY,
  },
  productInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    height: productInfoContainerHeight,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  productImage: {
    flex: 2,
    height: '100%',
  },
  description: {
    fontSize: 15,
    flex: 7,
    paddingLeft: 10,
  },
  iconContainer: {
    // backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'flex',
    alignItems: 'flex-end',
  },
  date: {
    textAlign: 'center',
    fontSize: 12,
    color: theme.MEDIUM_GRAY,
    paddingVertical: 10,
  },
  chatInputContainer: {
    flex: 1,
    paddingTop: 15,
    paddingHorizontal: 10,
    backgroundColor: theme.FEED_BACKGROUND,
    height: chatContainerHeight,
  },

  createCommentSection: {
    minHeight: minCommentInputContainerHeight,
    paddingHorizontal: 15,
    marginTop: 3,
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 3,
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
  },
  textInput: {
    flex: 1,
    color: theme.LIGHT_GRAY,
    borderWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    paddingBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 15,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
    minHeight: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    width: '96%',
    // backgroundColor: 'transparent',
  },
  sendBtn: {
    color: '#71717a',
    fontWeight: '500',
  },
  commentsSection: {
    marginTop: 10,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  alert: {
    color: '#a1a1aa',
    fontStyle: 'italic',
  },
});

export default styles;
