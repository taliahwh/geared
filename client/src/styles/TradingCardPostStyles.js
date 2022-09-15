import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const ITEM_WIDTH = Dimensions.get('window').width - 30;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.CARD_BACKGROUND,
    marginHorizontal: 15,
    paddingTop: 11,
    paddingBottom: 20,
    marginTop: 15,
    borderRadius: 5,
    display: 'flex',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    zIndex: 1,
  },
  headingContainer: {
    paddingHorizontal: 15,
    dispay: 'flex',
    flexDirection: 'row',
    paddingBottom: 5,
  },
  userInformation: {
    paddingVertical: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
    flex: 4,
    // backgroundColor: 'orange',
  },
  info: {
    flex: 1,
    // backgroundColor: 'pink',
    justifyContent: 'center',
  },
  ellipsis: {
    textAlign: 'right',
  },
  userImage: {
    // flex: 1,
    // width: 1,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    borderWidth: 0.5,
    borderColor: theme.DARK_MODE_BORDER,
    // borderRadius: 100,
  },
  usernameContainer: {
    flex: 6,
    // backgroundColor: 'pink',
    paddingLeft: 10,
    paddingVertical: 2,
  },
  username: {
    color: theme.LIGHT_GRAY,
    fontWeight: '600',
    fontSize: 14,
  },
  usernameInDescription: {
    color: theme.LIGHT_GRAY,
    fontWeight: '600',
    paddingRight: 5,
  },
  listingType: {
    color: theme.LIGHT_GRAY,
    fontSize: 13,
  },
  imageContainer: {
    // paddingHorizontal: 15,
    height: ITEM_WIDTH,
    display: 'flex',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shareBtns: {
    display: 'flex',
    flexDirection: 'row',
  },
  likeBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeCount: {
    color: theme.LIGHT_GRAY,
    fontSize: 13,
    paddingLeft: 5,
  },
  btn: {
    paddingLeft: 15,
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  usernameFont: {
    fontWeight: '500',
    backgroundColor: 'pink',
    // color: theme.LIGHT_GRAY,
  },
  viewComments: {
    paddingTop: 7,
    paddingHorizontal: 15,
    color: '#A8A8A8',
  },
  timePosted: {
    paddingTop: 10,
    paddingHorizontal: 15,
    fontSize: 11,
    color: '#A8A8A8',
  },
  commentsContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
    // paddingBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#e4e4e7',
  },
  commentingUserImage: {
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    borderRadius: 100,
    backgroundColor: 'orange',
    flex: 1,
  },
  commentInput: {
    backgroundColor: '#f9fafb',
    paddingLeft: 3,
    paddingVertical: 10,
    flex: 6,
    marginHorizontal: 10,
    borderRadius: 50,
    color: '#404040',
  },
  placeholder: {
    paddingLeft: 10,
    color: theme.BORDER_COLOR,
  },
  sendBtn: {
    // backgroundColor: 'orange',
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    color: '#a3a3a3',
  },

  priceContainer: {
    paddingHorizontal: 15,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
  },
  priceLabel: {
    fontWeight: '500',
    fontSize: 15,
  },
  price: {
    fontSize: 15,
  },

  tagsContainer: {
    marginTop: 10,
    paddingHorizontal: 15,
  },
  postTags: {
    marginRight: 10,
    fontSize: 13,
    fontWeight: '500',
    color: '#7390AD',
    backgroundColor: theme.FEED_BACKGROUND,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    overflow: 'hidden',
  },
  menu: {
    padding: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // borderRadius: 15,
  },
  menuOption: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuOptionText: {
    fontSize: 15,
    padding: 5,
    textAlign: 'center',
    fontWeight: '500',
    color: theme.LIGHT_GRAY,
  },
});

export default styles;
