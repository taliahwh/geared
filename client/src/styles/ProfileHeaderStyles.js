import { StyleSheet } from 'react-native';
import theme from '../styles/styles.theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.DARK_MODE,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  userImage: {
    flex: 2,
    // backgroundColor: 'pink',
    height: 68,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    borderRadius: 1000,
    // marginBottom: 5,
  },

  userNameContainer: {
    flex: 8,
    // backgroundColor: 'orange',
    display: 'flex',
    marginLeft: 15,
    // justifyContent: 'space-between',
    alignSelf: 'center',
  },
  userDisplayName: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.LIGHT_GRAY,
  },
  username: {
    fontSize: 15,
    color: theme.MEDIUM_GRAY,
  },
  ratingsContainer: {
    display: 'flex',
    flexDirection: 'row',
    // backgroundColor: 'pink',
    width: '40%',
    justifyContent: 'space-between',
  },
  tagsContainer: {
    // backgroundColor: 'pink',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  lookingFor: { marginRight: 7 },
  tags: {
    marginRight: 10,
    fontSize: 13,
    fontWeight: '500',
    color: '#a3a3a3',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  description: {
    marginTop: 10,
    color: theme.LIGHT_GRAY,
  },
  followersAndShareContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 3,
  },
  followersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 4,
    justifyContent: 'space-between',
  },
  followBtnContainer: {
    flex: 6,
    marginLeft: 25,
    display: 'flex',
    justifyContent: 'center',
  },
  followBtn: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: '600',
    fontSize: 15,
    borderRadius: 3,
    overflow: 'hidden',
    color: '#fff',
  },
  followingBtn: {
    backgroundColor: theme.DARK_MODE,
    borderWidth: 1,
    borderColor: theme.PRIMARY_COLOR,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: '600',
    fontSize: 15,
    borderRadius: 3,
    overflow: 'hidden',
    color: theme.PRIMARY_COLOR,
  },
  count: {
    fontWeight: '600',
    color: theme.LIGHT_GRAY,
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
  website: {
    color: theme.PRIMARY_COLOR,
    fontWeight: '500',
    marginTop: 3,
  },
});

export default styles;
