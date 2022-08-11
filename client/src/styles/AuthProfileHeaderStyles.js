import { StyleSheet } from 'react-native';
import theme from './styles.theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  userInfoContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  userImage: {
    // flex: 2,
    // backgroundColor: 'pink',
    height: 68,
    width: 68,
    borderRadius: 65 / 2,
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    borderRadius: 1000,
    // marginBottom: 5,
  },

  userNameContainer: {
    flex: 8,
    display: 'flex',
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  userDisplayName: {
    fontSize: 20,
    fontWeight: '700',
  },
  username: {
    fontSize: 15,
    color: '#737373',
  },
  ratingsContainer: {
    display: 'flex',
    flexDirection: 'row',

    width: '40%',
    justifyContent: 'space-between',
  },
  tagsContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 3,
  },
  tags: {
    marginRight: 10,
    fontSize: 13,
    fontWeight: '500',
    color: '#7390AD',
    // color: '#a3a3a3',
    backgroundColor: '#F1F1F1',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 10,
    overflow: 'hidden',
  },
  description: {
    marginTop: 10,
    // fontSize: 15,
  },
  followersAndShareContainer: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 7,
    paddingBottom: 3,
  },
  followersContainer: {
    display: 'flex',
    flexDirection: 'row',
    flex: 4,
    justifyContent: 'space-between',
  },
  shareBtnContainer: {
    flex: 6,
    marginLeft: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareBtn: {
    backgroundColor: theme.PRIMARY_COLOR,
    width: '100%',
    textAlign: 'center',
    paddingVertical: 5,
    fontWeight: '700',
    fontSize: 15,
    borderRadius: 3,
    overflow: 'hidden',
    color: '#fff',
  },
  count: {
    fontWeight: '600',
  },
  menu: {
    borderWidth: 1,
    borderColor: theme.BORDER_COLOR,
    padding: 3,
  },
  website: {
    color: theme.PRIMARY_COLOR,
    fontWeight: '500',
    marginTop: 3,
  },
});

export default styles;
