import { StyleSheet } from 'react-native';
import theme from './styles.theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.DARK_MODE,
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 30,
    borderBottomColor: theme.DARK_MODE_BORDER,
    borderBottomWidth: 0.5,
  },
  headingContainer: {
    marginTop: 60,
    marginBottom: 30,
  },
  confirmationHeading: {
    marginBottom: 15,
    fontWeight: '800',
    fontSize: 25,
    color: theme.PRIMARY_COLOR,
    textAlign: 'center',
  },
  confirmationSubheading: {
    fontSize: 15,
    textAlign: 'center',
    color: theme.LIGHT_GRAY,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  infoHeading: {
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 5,
    paddingLeft: 10,
    color: theme.LIGHT_GRAY,
  },
  infoBody: {
    color: theme.MEDIUM_GRAY,
    paddingLeft: 10,
  },
  spacer: {
    height: 15,
  },
});

export default styles;
