import React, { useState } from 'react';
import geared from '../api/geared';
import {
  ScrollView,
  ActivityIndicator,
  View,
  Text,
  Modal,
  TouchableOpacity,
  TextInput,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Component
import ModalComponent from '../components/Modal';

//  Styles
import styles from '../styles/CreateListingStyles';

// Actions
import { createPost, getExplorePosts } from '../actions/postActions';

const CreateListingScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  // State from Redux
  const { error: errorCreateListing } = useSelector(
    (state) => state.createPost
  );

  const { _id: userId } = useSelector((state) => state.userSignIn.userInfo);

  // Text input state
  const [description, setDescription] = useState('');
  const [descriptionCharRemaining, setDescriptionCharRemaining] = useState(
    1000 - description.length
  );
  const [itemPrice, setItemPrice] = useState(0);
  const [shippingPrice, setShippingPrice] = useState(0);

  // Tags
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [tag3, setTag3] = useState('');

  // Error handling state
  const [errorMessage, setErrorMessage] = useState(null);

  // Images
  const [loadingImage, setLoadingImage] = useState(false);

  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);

  // Loading images

  // Modals
  const [sportModalVisible, setSportModalVisible] = useState(false);
  const [conditionModalVisible, setConditionModalVisible] = useState(false);
  const [listingModalVisible, setListingModalVisible] = useState(false);
  const [locationModal, setLocationModal] = useState(false);

  // Sport modal options
  const [baseball, setBaseball] = useState(false);
  const [football, setFootball] = useState(false);
  const [mensBasketball, setMensBasketball] = useState(false);
  const [soccer, setSoccer] = useState(false);
  const [womensBasketball, setWomensBasketball] = useState(false);
  const [sportValue, setSportValue] = useState('Select');

  // Condition modal options
  const [brandNew, setBrandNew] = useState(false);
  const [likeNew, setLikeNew] = useState(false);
  const [excellent, setExcellent] = useState(false);
  const [good, setGood] = useState(false);
  const [fair, setFair] = useState(false);
  const [conditionValue, setConditionValue] = useState('Select');

  // Listing type modal option
  const [showcase, setShowcase] = useState(false);
  const [openToOffers, setOpenToOffers] = useState(false);
  const [forSale, setForSale] = useState(false);
  const [listingTypeValue, setListingTypeValue] = useState('Select');

  // Location modal
  const [locationValue, setLocationValue] = useState('');

  // const askForPermission = async () => {
  //   const permissionResult =
  //   await Permissions.askAsync(Permissions.CAMERA)
  //   if (permissionResult.status !== ‘granted’) {
  //     Alert.alert(‘no permissions to access camera!’,
  //     [{ text: ‘ok’}])
  //     return false
  //   }
  //   return true
  // }

  const pickImage = async (imageNum) => {
    // No permissions request is necessary for launching the image library

    const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      // base64: true,
      imagePickerResult: true,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (imageNum === 1) {
      if (!imagePickerResult.cancelled) {
        const formData = new FormData();
        formData.append('postImage', {
          name: `post${Date.now()}`,
          uri: imagePickerResult.uri,
          type: 'image/jpg',
        });

        try {
          setLoadingImage(true);
          const { data: cloudinaryURL } = await geared.post(
            '/api/upload/post',
            formData,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          console.log(cloudinaryURL);
          setImage1(cloudinaryURL);
          setLoadingImage(false);
        } catch (error) {
          console.log(error);
        }
      }
    } else if (imageNum === 2) {
      if (!imagePickerResult.cancelled) {
        const formData = new FormData();
        formData.append('postImage', {
          name: `post${Date.now()}`,
          uri: imagePickerResult.uri,
          type: 'image/jpg',
        });

        try {
          setLoadingImage(true);
          const { data: cloudinaryURL } = await geared.post(
            '/api/upload/post',
            formData,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log(cloudinaryURL);
          setImage2(cloudinaryURL);
          setLoadingImage(false);
        } catch (error) {
          console.log(error);
        }
      }
    } else if (imageNum === 3) {
      if (!imagePickerResult.cancelled) {
        const formData = new FormData();
        formData.append('postImage', {
          name: `post${Date.now()}`,
          uri: imagePickerResult.uri,
          type: 'image/jpg',
        });

        try {
          setLoadingImage(true);
          const { data: cloudinaryURL } = await geared.post(
            '/api/upload/post',
            formData,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log(cloudinaryURL);
          setLoadingImage(false);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      if (!imagePickerResult.cancelled) {
        const formData = new FormData();
        formData.append('postImage', {
          name: `post${Date.now()}`,
          uri: imagePickerResult.uri,
          type: 'image/jpg',
        });

        try {
          setLoadingImage(true);
          const { data: cloudinaryURL } = await geared.post(
            '/api/upload/post',
            formData,
            {
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
              },
            }
          );
          console.log(cloudinaryURL);
          setImage4(cloudinaryURL);
          setLoadingImage(false);
        } catch (error) {
          console.log(error);
        }
      }
    }
  };

  const navigateToProfile = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }],
    });

    navigation.navigate('Home');
  };

  const handleSubmit = () => {
    const images = [
      {
        title: 'IMAGE_1',
        imgUrl: image1,
      },
      {
        title: 'IMAGE_2',
        imgUrl: image2,
      },
      {
        title: 'IMAGE_3',
        imgUrl: image3,
      },
      {
        title: 'IMAGE_4',
        imgUrl: image4,
      },
    ];

    const tags = [tag1, tag2, tag3];

    const firstImageUploaded = images[0].imgUrl;

    if (!firstImageUploaded) {
      return setErrorMessage('Must upload at least one image');
    }
    if (!description) {
      return setErrorMessage('A description of the item is required');
    }
    if (!tag1) {
      return setErrorMessage('At least one tag is required');
    }
    if (sportValue === 'Select') {
      return setErrorMessage('Please choose a sport for your item');
    }
    if (conditionValue === 'Select') {
      return setErrorMessage('Please choose a condition for your item');
    }
    if (listingTypeValue === 'Select') {
      return setErrorMessage('Please choose a listing type');
    }

    if (forSale) {
      if (!itemPrice) {
        return setErrorMessage('Item price is required');
      }
      if (!shippingPrice) {
        return setErrorMessage('Shipping price is required');
      }
      if (!locationValue) {
        return setErrorMessage('Location is required');
      }
    }

    dispatch(
      createPost(
        images,
        description,
        tags,
        sportValue,
        conditionValue,
        showcase,
        forSale,
        openToOffers,
        itemPrice,
        shippingPrice,
        locationValue
      )
    );
    dispatch(getExplorePosts());
    navigateToProfile();
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {/* Error message */}
        {/* {errorMessage && <Text style={styles.error}>{errorMessage}</Text>} */}
        {errorCreateListing && <Text>{errorCreateListing}</Text>}

        {loadingImage && (
          <View>
            <Text style={styles.uploadingImage}>Uploading...</Text>
          </View>
        )}

        <View style={styles.cameraBtnContainer}>
          {image1 === null ? (
            <TouchableOpacity onPress={() => pickImage(1)} activeOpacity={1}>
              <View style={styles.cameraIconContainer} id="image1">
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color="black"
                  style={styles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <Image source={{ uri: image1 }} style={{ width: 50, height: 50 }} />
          )}

          {image2 === null ? (
            <TouchableOpacity
              onPress={() => pickImage(2)}
              activeOpacity={1}
              disabled={!image1 && true}
            >
              <View style={styles.cameraIconContainer} id="image2">
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color="black"
                  style={styles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <Image source={{ uri: image2 }} style={{ width: 50, height: 50 }} />
          )}

          {image3 === null ? (
            <TouchableOpacity
              onPress={() => pickImage(3)}
              activeOpacity={1}
              disabled={!image2 && true}
            >
              <View style={styles.cameraIconContainer} id="image3">
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color="black"
                  style={styles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <Image source={{ uri: image3 }} style={{ width: 50, height: 50 }} />
          )}

          {image4 === null ? (
            <TouchableOpacity
              onPress={() => pickImage(4)}
              activeOpacity={1}
              disabled={!image3 && true}
            >
              <View style={styles.cameraIconContainer} id="image4">
                <Ionicons
                  name="camera-outline"
                  size={24}
                  color="black"
                  style={styles.cameraIcon}
                />
              </View>
            </TouchableOpacity>
          ) : (
            <Image source={{ uri: image4 }} style={{ width: 50, height: 50 }} />
          )}
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionHeader}>DESCRIPTION</Text>

          <TextInput
            style={styles.input}
            value={description}
            onChangeText={(value) => {
              setDescription(value);
              setDescriptionCharRemaining(1000 - value.length);
            }}
            placeholder="Tell us about your item. Start with a headline, then add details
                including card brand and condition."
            multiline={true}
            placeholderTextColor={'#a1a1aa'}
            maxLength={1000}
            autoCapitalize="sentences"
          />
        </View>
        <Text style={styles.wordCount}>{descriptionCharRemaining}</Text>

        <View style={styles.tagsContainer}>
          <Text style={styles.sectionHeader}>TAGS</Text>
          <Text style={styles.sectionDetails}>
            Provide up to three tags so that your card is easier to find by
            other users. Ex. Player's name, team, card brand.
          </Text>
          <TextInput
            style={[styles.tagInput]}
            value={tag1}
            onChangeText={(value) => {
              setTag1(value);
            }}
            placeholder="Tag 1"
            placeholderTextColor={'#a1a1aa'}
            maxLength={50}
            autoCapitalize="words"
          />
          <TextInput
            style={[styles.tagInput]}
            value={tag2}
            onChangeText={(value) => {
              setTag2(value);
            }}
            placeholder="Tag 2"
            placeholderTextColor={'#a1a1aa'}
            maxLength={50}
            autoCapitalize="words"
          />
          <TextInput
            style={[styles.tagInput]}
            value={tag3}
            onChangeText={(value) => {
              setTag3(value);
            }}
            placeholder="Tag 3"
            placeholderTextColor={'#a1a1aa'}
            maxLength={50}
            autoCapitalize="words"
          />
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.sectionHeader}>INFO</Text>

          <TouchableOpacity
            onPress={() => setSportModalVisible(true)}
            activeOpacity={0.9}
          >
            <View style={styles.firstInfoOptionContainer}>
              <Text style={styles.infoOptionTitle}>Sport</Text>
              <View style={styles.textAndChevronContainer}>
                <Text style={styles.infoOptionSelect}>{sportValue}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="black"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setConditionModalVisible(true)}
            activeOpacity={0.9}
          >
            <View style={styles.infoOptionContainer}>
              <Text style={styles.infoOptionTitle}>Condition</Text>
              <View style={styles.textAndChevronContainer}>
                <Text style={styles.infoOptionSelect}>{conditionValue}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="black"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setListingModalVisible(true)}
            activeOpacity={0.9}
          >
            <View style={styles.infoOptionContainer}>
              <Text style={styles.infoOptionTitle}>Listing type</Text>
              <View style={styles.textAndChevronContainer}>
                <Text style={styles.infoOptionSelect}>{listingTypeValue}</Text>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="black"
                  style={styles.chevron}
                />
              </View>
            </View>
          </TouchableOpacity>

          {forSale && (
            <>
              <View style={styles.infoOptionContainer}>
                <Text style={styles.infoOptionTitle}>Item price</Text>
                <View style={styles.textAndChevronContainer}>
                  <TextInput
                    style={styles.priceInput}
                    value={itemPrice}
                    onChangeText={(value) => {
                      setItemPrice(value);
                    }}
                    placeholder={'$'}
                    placeholderTextColor={'#a1a1aa'}
                    maxLength={10}
                    keyboardType="decimal-pad"
                  />
                </View>
              </View>

              <View style={styles.descriptionContainer}>
                <Text style={styles.sectionHeader}>SHIPPING</Text>

                <View style={styles.infoOptionContainer}>
                  <Text style={styles.infoOptionTitle}>Shipping price</Text>
                  <View style={styles.textAndChevronContainer}>
                    <TextInput
                      style={styles.priceInput}
                      value={shippingPrice}
                      onChangeText={(value) => {
                        setShippingPrice(value);
                      }}
                      placeholder={'$'}
                      placeholderTextColor={'#a1a1aa'}
                      maxLength={10}
                      keyboardType="decimal-pad"
                    />
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => setLocationModal(true)}
                  activeOpacity={0.9}
                >
                  <View style={styles.infoOptionContainer}>
                    <Text style={styles.infoOptionTitle}>Location</Text>
                    <View style={styles.textAndChevronContainer}>
                      <Text style={styles.infoOptionSelect}>
                        {locationValue}
                      </Text>
                      <Ionicons
                        name="chevron-forward"
                        size={24}
                        color="black"
                        style={styles.chevron}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}

          {/* Sport Modal */}
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={sportModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setSportModalVisible(!sportModalVisible);
              }}
            >
              <ModalComponent
                header={'Sport'}
                closeModal={() => setSportModalVisible(false)}
                modal={true}
                input={
                  <ScrollView>
                    <View style={styles.modalOptionContainer}>
                      <Text style={styles.infoOptionTitle}>Baseball</Text>
                      <TouchableOpacity
                        onPress={() => {
                          setWomensBasketball(false);
                          setSoccer(false);
                          setMensBasketball(false);
                          setFootball(false);
                          setBaseball(true);
                          setSportValue('Baseball');
                        }}
                        activeOpacity={1}
                      >
                        {baseball === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalOptionContainer}>
                      <Text style={styles.infoOptionTitle}>Football</Text>
                      <TouchableOpacity
                        onPress={() => {
                          setWomensBasketball(false);
                          setSoccer(false);
                          setMensBasketball(false);
                          setBaseball(false);
                          setFootball(true);
                          setSportValue('Football');
                        }}
                        activeOpacity={1}
                      >
                        {football === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalOptionContainer}>
                      <Text style={styles.infoOptionTitle}>
                        Men's Basketball
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setWomensBasketball(false);
                          setSoccer(false);
                          setBaseball(false);
                          setFootball(false);
                          setMensBasketball(true);
                          setSportValue(`Men's Basketball`);
                        }}
                        activeOpacity={1}
                      >
                        {mensBasketball === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalOptionContainer}>
                      <Text style={styles.infoOptionTitle}>Soccer</Text>
                      <TouchableOpacity
                        onPress={() => {
                          setWomensBasketball(false);
                          setMensBasketball(false);
                          setBaseball(false);
                          setFootball(false);
                          setSoccer(true);
                          setSportValue('Soccer');
                        }}
                        activeOpacity={1}
                      >
                        {soccer === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                    <View style={styles.modalOptionContainer}>
                      <Text style={styles.infoOptionTitle}>
                        Women's Basketball
                      </Text>
                      <TouchableOpacity
                        onPress={() => {
                          setSoccer(false);
                          setMensBasketball(false);
                          setBaseball(false);
                          setFootball(false);
                          setWomensBasketball(true);
                          setSportValue(`Women's Baskebtall`);
                        }}
                        activeOpacity={1}
                      >
                        {womensBasketball === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </ScrollView>
                }
              />
            </Modal>
          </View>

          {/* Condition Modal */}
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={conditionModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setConditionModalVisible(!conditionModalVisible);
              }}
            >
              <ModalComponent
                header={'Condition'}
                closeModal={() => setConditionModalVisible(false)}
                modal={true}
                input={
                  <View>
                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>Brand new</Text>
                        <Text style={styles.infoDetails}>
                          Unused with original packaging
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setFair(false);
                          setGood(false);
                          setExcellent(false);
                          setLikeNew(false);
                          setBrandNew(true);
                          setConditionValue('Brand new');
                        }}
                        activeOpacity={1}
                      >
                        {brandNew === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>Like new</Text>
                        <Text style={styles.infoDetails}>
                          Mint condition pre-owned or new withouts tags
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setFair(false);
                          setGood(false);
                          setExcellent(false);
                          setBrandNew(false);
                          setLikeNew(true);
                          setConditionValue('Like new');
                        }}
                        activeOpacity={1}
                      >
                        {likeNew === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>
                          Used - Excellent
                        </Text>
                        <Text style={styles.infoDetails}>
                          Lightly used but no noticeable flaws
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setFair(false);
                          setGood(false);
                          setLikeNew(false);
                          setBrandNew(false);
                          setExcellent(true);
                          setConditionValue('Used - Excellent');
                        }}
                        activeOpacity={1}
                      >
                        {excellent === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>Used - Good</Text>
                        <Text style={styles.infoDetails}>
                          Minor flaws or signs of wear, to be noted in the
                          description or photos
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setFair(false);
                          setLikeNew(false);
                          setBrandNew(false);
                          setExcellent(false);
                          setGood(true);
                          setConditionValue('Used - Good');
                        }}
                        activeOpacity={1}
                      >
                        {good === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>Used - Fair</Text>
                        <Text style={styles.infoDetails}>
                          Obvious flaws or signs of wear, to be noted in the
                          description or photos
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setGood(false);
                          setLikeNew(false);
                          setBrandNew(false);
                          setExcellent(false);
                          setFair(true);
                          setConditionValue('Used - Fair');
                        }}
                        activeOpacity={1}
                      >
                        {fair === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            </Modal>
          </View>

          {/* Listing Type Modal */}
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={listingModalVisible}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setListingModalVisible(!listingModalVisible);
              }}
            >
              <ModalComponent
                header={'Listing Type'}
                closeModal={() => setListingModalVisible(false)}
                modal={true}
                input={
                  <View>
                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>Showcase</Text>
                        <Text style={styles.infoDetails}>
                          List your item to be viewed as a part of your
                          collection
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setOpenToOffers(false);
                          setForSale(false);
                          setShowcase(true);
                          setListingTypeValue('Showcase');
                        }}
                        activeOpacity={1}
                      >
                        {showcase === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>
                          Open to offers
                        </Text>
                        <Text style={styles.infoDetails}>
                          Willing to accept offers for card
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setShowcase(false);
                          setForSale(false);
                          setOpenToOffers(true);
                          setListingTypeValue('Open to offers');
                        }}
                        activeOpacity={1}
                      >
                        {openToOffers === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>

                    <View style={styles.modalOptionContainer}>
                      <View>
                        <Text style={styles.infoOptionTitle}>For sale</Text>
                        <Text style={styles.infoDetails}>
                          Item is listed for sale at a set price
                        </Text>
                      </View>
                      <TouchableOpacity
                        onPress={() => {
                          setShowcase(false);
                          setOpenToOffers(false);
                          setForSale(true);
                          setListingTypeValue('For sale');
                        }}
                        activeOpacity={1}
                      >
                        {forSale === false ? (
                          <Ionicons
                            name="ios-radio-button-off-outline"
                            size={20}
                            color="black"
                          />
                        ) : (
                          <Ionicons
                            name="ios-radio-button-on-outline"
                            size={20}
                            color="black"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </View>
                }
              />
            </Modal>
          </View>

          {/* Location Modal */}
          <View style={styles.centeredView}>
            <Modal
              animationType="fade"
              transparent={true}
              visible={locationModal}
              onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                setLocationModal(!locationModal);
              }}
            >
              <ModalComponent
                header={'Set Location'}
                closeModal={() => setLocationModal(false)}
                modal={true}
                input={
                  <View style={styles.searchContainer}>
                    <View style={styles.textInputContainer}>
                      <Ionicons
                        name="search-outline"
                        size={20}
                        color="black"
                        style={styles.searchIcon}
                      />
                      <TextInput
                        onChangeText={(value) => setLocationValue(value)}
                        value={locationValue}
                        placeholder="City, State"
                        placeholderTextColor={'#a1a1aa'}
                        // maxLength={45}
                        style={styles.textInput}
                      />
                    </View>
                  </View>
                }
              />
            </Modal>
          </View>
        </View>
      </KeyboardAwareScrollView>

      <View style={styles.footer}>
        <Text style={styles.postListingBtn} onPress={handleSubmit}>
          Post listing
        </Text>
      </View>
    </View>
  );
};

export default CreateListingScreen;
