import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  error: {
    color: '#f87171',
    fontSize: 13,
    textAlign: 'center',
    paddingBottom: 20,
    fontWeight: '500',
  },
  uploadingImage: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    marginBottom: 15,
    color: 'gray',
  },
  cameraBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  cameraIcon: {
    padding: 10,
  },
  cameraIconContainer: {
    color: '#a8a29e',
    borderColor: '#d6d3d1',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  descriptionContainer: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderColor: '#d6d3d1',
  },
  sectionHeader: {
    fontWeight: '600',
    fontSize: 17,
    marginBottom: 8,
  },
  sectionDetails: {
    color: '#a1a1aa',
    marginBottom: 5,
  },
  input: {
    // color: '#a8a29e',
    fontSize: 15,
    marginBottom: 10,
  },
  priceInput: {
    fontSize: 15,
    // backgroundColor: 'orange',
    width: 100,
    textAlign: 'right',
  },
  tagInput: {
    fontSize: 15,
    marginBottom: 5,
    borderWidth: 0.5,
    borderColor: '#a1a1aa',
    padding: 5,
    width: '50%',
  },
  wordCount: {
    width: '100%',
    textAlign: 'right',
    color: '#57534e',
    paddingTop: 3,
    fontSize: 13,
  },
  tagsContainer: {
    marginTop: 10,
    paddingBottom: 7,
    borderBottomWidth: 1,
    borderColor: '#d6d3d1',
  },
  tagsCount: {
    width: '100%',
    textAlign: 'left',
    color: '#57534e',
    paddingTop: 3,
    fontSize: 13,
  },
  infoContainer: {
    marginTop: 20,
  },
  infoOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#737373',
  },
  firstInfoOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderColor: '#737373',
  },
  textAndChevronContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoOptionTitle: {
    fontSize: 17,
  },
  infoDetails: {
    fontSize: 13,
    color: '#938F8F',
    marginTop: 5,
  },
  infoOptionSelect: {
    fontSize: 15,
    color: '#78716c',
  },
  chevron: {
    paddingLeft: 10,
    color: '#57534e',
  },
  dollar: {
    fontSize: 15,
    color: '#78716c',
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
  modalOptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#737373',
  },

  // Search

  searchContainer: {
    backgroundColor: '#fff',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    marginTop: 5,
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'pink',
    backgroundColor: '#e4e4e7',
    paddingVertical: 7,
    borderRadius: 2,
  },
  textInput: {
    width: '85%',
    // backgroundColor: 'pink',
  },
  searchIcon: {
    marginHorizontal: 10,
    color: '#71717a',
    width: '5%',
    // backgroundColor: 'orange',
  },

  // Footer
  footer: {
    // opacity: 0.5,
  },
  postListingBtn: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    backgroundColor: '#292524',
    color: '#fff',
    paddingVertical: 11,
    marginVertical: 20,
  },
});

export default styles;
