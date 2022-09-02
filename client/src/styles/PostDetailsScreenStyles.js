import { StyleSheet, Dimensions } from 'react-native';
import theme from './styles.theme';

const SLIDER_HEIGHT = Dimensions.get('window').width + 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_MODE,
    display: 'flex',
  },
  headingContainer: {
    paddingHorizontal: 15,
    paddingTop: 6,
    dispay: 'flex',
    flexDirection: 'row',
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
    height: 40,
    width: 40,
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    borderRadius: 40 / 2,
  },
  usernameContainer: {
    flex: 6,
    // backgroundColor: 'pink',
    paddingLeft: 10,
    paddingVertical: 2,
  },
  username: {
    fontWeight: '600',
    fontSize: 14,
    color: theme.LIGHT_GRAY,
  },
  usernameInDescription: {
    fontWeight: '500',
    paddingRight: 7,
    color: theme.LIGHT_GRAY,
  },
  location: {
    fontSize: 13,
  },
  imageContainer: {
    paddingTop: 7,
    height: SLIDER_HEIGHT,
    display: 'flex',
    alignItems: 'center',
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
    fontSize: 13,
    paddingLeft: 5,
    color: theme.LIGHT_GRAY,
  },
  btn: {
    paddingLeft: 15,
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    paddingTop: 7,
    display: 'flex',
    flexDirection: 'row',
  },
  usernameFont: {
    fontWeight: '500',
    paddingRight: 5,
  },
  viewComments: {
    paddingTop: 7,
    paddingHorizontal: 15,
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
    height: 42,
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
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
    fontSize: 13,
    paddingRight: 2,
  },
  price: {
    fontSize: 15,
  },
  tag: {
    marginTop: 5,
    marginLeft: 13,
    width: 105,
    marginRight: 10,
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
    backgroundColor: theme.PRIMARY_COLOR,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardDetailsContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  specsContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 10,
  },
  specsLabel: {
    fontWeight: '600',
    marginLeft: 4,
    color: theme.LIGHT_GRAY,
  },
  specsType: {
    color: theme.LIGHT_GRAY,
  },
  uploadDate: {
    paddingLeft: 15,
    paddingTop: 4,
    fontSize: 10,
    paddingBottom: 5,
    color: theme.MEDIUM_GRAY,
  },
  aboutTheSellerContainer: {
    marginHorizontal: 15,
    borderTopWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    marginTop: 10,
  },
  aboutTheSellerTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingVertical: 10,
  },
  sellerInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 15,
    alignItems: 'center',
  },
  sellerImage: {
    flex: 2,
    height: 55,
    borderWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    borderRadius: 100,
  },
  sellerNameContainer: {
    flex: 12,
  },
  sellerName: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    color: theme.LIGHT_GRAY,
  },
  sellerMeta: {
    fontSize: 11,
    marginLeft: 15,
    color: theme.LIGHT_GRAY,
  },
  sellerMenuContainer: {
    paddingTop: 10,
  },
  menuOption: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: theme.DARK_MODE_BORDER,
    paddingVertical: 7,
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'pink',
  },
  menuOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%',
    justifyContent: 'space-between',
    // backgroundColor: 'orange',
    width: '95%',
  },
  menuTitle: {
    fontSize: 17,
    paddingTop: 3,
    color: theme.MEDIUM_GRAY,
  },
  menuQty: {
    marginRight: 20,
    fontSize: 16,
    color: theme.MEDIUM_GRAY,
  },
  menuArrow: {
    color: theme.MEDIUM_GRAY,
  },
});

export default styles;
