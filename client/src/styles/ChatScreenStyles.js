import { StyleSheet } from 'react-native';
import theme from './styles.theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // paddingHorizontal: 15,
  },

  header: {
    paddingHorizontal: 15,
    // backgroundColor: 'orange',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
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
    marginRight: 10,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  username: {
    fontWeight: '700',
    fontSize: 16,
  },
  productInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    // marginTop: 15,
    // backgroundColor: 'green',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: theme.BORDER_COLOR,
    height: 100,
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
    color: theme.DARK_GRAY,
    paddingVertical: 10,
  },
  chatInputContainer: {
    marginHorizontal: 10,
    // backgroundColor: 'orange',
    flex: 1,
    // height: 400,
  },

  createCommentSection: {
    minHeight: 55,
    paddingHorizontal: 15,
    // backgroundColor: 'pink',
    // marginTop: 10,
    // borderBottomWidth: 1,
    // borderColor: theme.BORDER_COLOR,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 3,
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
  },
  textInput: {
    flex: 1,
    backgroundColor: '#f5f5f5',
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
