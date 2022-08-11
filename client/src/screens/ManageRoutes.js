import React, { useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

// Components
import AlertMessage from '../components/AlertMessage';

// Actions
import { getUserPosts } from '../actions/userActions';

const thirdWindowWidth = Dimensions.get('window').width / 3;

const Separator = () => {
  return <View style={{ width: 5, backgroundColor: '#fff' }} />;
};

const ManageRoute = () => {
  // Hooks
  const navigation = useNavigation();
  const dispatch = useDispatch();

  // State from redux
  const { _id: userId } = useSelector((state) => state.userSignIn.userInfo);
  const {
    loading: loadingUserPosts,
    posts,
    error: errorUserPosts,
  } = useSelector((state) => state.userPosts);

  const { success: successCreatePost } = useSelector(
    (state) => state.createPost
  );
  const { success: successUpdateProfile } = useSelector(
    (state) => state.userUpdateProfile
  );

  useEffect(() => {
    dispatch(getUserPosts(userId));
  }, [dispatch, userId, successCreatePost, successUpdateProfile]);

  const ITEMS = [
    posts && posts.length >= 1
      ? {
          id: 1,
          src: posts[0].images[0].imgUrl,
        }
      : {
          id: 1,
          src: 'https://creative-quartz.co.uk/wp-content/uploads/2020/12/Quartzforms-Absolute-Light-Grey.jpg',
        },
    posts && posts.length >= 2
      ? {
          id: 2,
          src: posts[1].images[0].imgUrl,
        }
      : {
          id: 2,
          src: 'https://creative-quartz.co.uk/wp-content/uploads/2020/12/Quartzforms-Absolute-Light-Grey.jpg',
        },
    posts && posts.length >= 3
      ? {
          id: 3,
          src: posts[2].images[0].imgUrl,
        }
      : {
          id: 3,
          src: 'https://creative-quartz.co.uk/wp-content/uploads/2020/12/Quartzforms-Absolute-Light-Grey.jpg',
        },
    posts && posts.length >= 4
      ? {
          id: 4,
          src: posts[3].images[0].imgUrl,
        }
      : {
          id: 4,
          src: 'https://creative-quartz.co.uk/wp-content/uploads/2020/12/Quartzforms-Absolute-Light-Grey.jpg',
        },
  ];

  const ItemSellingRender = ({ image }) => (
    <Image
      style={styles.sellingItem}
      source={{
        uri: image,
      }}
    />
  );

  return (
    <>
      {loadingUserPosts && <ActivityIndicator />}
      {errorUserPosts && <AlertMessage>{errorUserPosts}</AlertMessage>}
      {posts && (
        <ScrollView style={styles.container}>
          <View style={styles.soldContainer}>
            <Text style={styles.sectionTitle}>Sold</Text>
            <View style={styles.soldItemsBtn}>
              <View style={styles.leftOfBtn}>
                <Ionicons
                  name="receipt-outline"
                  size={24}
                  color="black"
                  style={styles.btnIcon}
                />
                <Text style={styles.btnTitle}>All sold items</Text>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={24}
                color="black"
              />
            </View>
          </View>
          <View style={styles.sellingContainer}>
            <Text style={styles.sectionTitle}>Your collection</Text>
            <View style={styles.flatlistContainer}>
              <FlatList
                data={ITEMS}
                renderItem={({ item }) => (
                  <ItemSellingRender image={item.src} />
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={Separator}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Listing')}
              activeOpacity={0.8}
            >
              <Text style={styles.listAnItemBtn}>List an item</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F1F1',
  },
  soldContainer: {
    backgroundColor: '#fff',
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontWeight: '700',
    fontSize: 17,
  },
  sellingContainer: {
    backgroundColor: '#fff',
    marginTop: 10,
    paddingVertical: 30,
    paddingHorizontal: 15,
  },
  soldItemsBtn: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#e4e4e7',
    padding: 12,
    borderRadius: 5,
  },
  leftOfBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnIcon: {
    paddingRight: 18,
  },
  btnTitle: {
    fontSize: 16,
  },
  flatlistContainer: {
    paddingTop: 15,
  },
  sellingItem: {
    height: thirdWindowWidth,
    width: thirdWindowWidth,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  listAnItemBtn: {
    textAlign: 'center',
    backgroundColor: '#404040',
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    paddingVertical: 10,
    marginTop: 15,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default ManageRoute;
