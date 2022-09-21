import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

// Actions
import { postReview } from '../actions/userActions';

// Styles
import styles from '../styles/LeaveFeedbackScreenStyles';
import theme from '../styles/styles.theme';
import { CLEAR_REVIEW_DATA } from '../constants/userConstants';

const LeaveFeedbackScreen = ({
  hideModal,
  sellerProfileImage,
  sellerName,
  sellerUsername,
}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [review, setReview] = useState('');

  // Review Stars
  const [oneStar, setOneStar] = useState(false);
  const [twoStars, setTwoStars] = useState(false);
  const [threeStars, setThreeStars] = useState(false);
  const [fourStars, setFourStars] = useState(false);
  const [fiveStars, setFiveStars] = useState(false);
  const [rating, setRating] = useState(null);

  const { error: errorPostReview, success: successPostReview } = useSelector(
    (state) => state.newReview
  );

  const rateOneStar = () => {
    setOneStar(true);
    setTwoStars(false);
    setThreeStars(false);
    setFourStars(false);
    setFiveStars(false);
    setRating(1);
  };
  const rateTwoStars = () => {
    setOneStar(true);
    setTwoStars(true);
    setThreeStars(false);
    setFourStars(false);
    setFiveStars(false);
    setRating(2);
  };
  const rateThreeStars = () => {
    setOneStar(true);
    setTwoStars(true);
    setThreeStars(true);
    setFourStars(false);
    setFiveStars(false);
    setRating(3);
  };
  const rateFourStars = () => {
    setOneStar(true);
    setTwoStars(true);
    setThreeStars(true);
    setFourStars(true);
    setFiveStars(false);
    setRating(4);
  };
  const rateFiveStars = () => {
    setOneStar(true);
    setTwoStars(true);
    setThreeStars(true);
    setFourStars(true);
    setFiveStars(true);
    setRating(5);
  };

  const successAlert = () =>
    Alert.alert('Thanks for your feedback!', 'You review has been submitted', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => navigation.navigate('UserProfile') },
    ]);

  const errorAlert = () =>
    Alert.alert('Something went wrong', errorPostReview, [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const submitReview = () => {
    const testSellerId = '62db0977b353b27e9a980e3a'; // antman
    const productImage =
      'https://cconnect.s3.amazonaws.com/wp-content/uploads/2019/01/Top-Luka-Doncic-Rookie-Cards-thumb-300.jpg';
    const trimmedReview = review.trim();
    dispatch(postReview(testSellerId, rating, trimmedReview, productImage));
  };

  useEffect(() => {
    if (successPostReview) successAlert();
    if (errorPostReview) errorAlert();

    return () => {
      dispatch({ type: CLEAR_REVIEW_DATA });
    };
  }, [successPostReview, errorPostReview, dispatch]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.screenView}>
        <View style={styles.modalView}>
          <View style={styles.headerContainer}>
            <Pressable onPress={hideModal}>
              <Ionicons
                name="close-outline"
                size={27}
                color={theme.LIGHT_GRAY}
              />
            </Pressable>
            <Text style={styles.headerTitle}>Leave Feedback</Text>
            {!review.length || !rating ? (
              <Ionicons name="checkmark" size={27} color={theme.DARK_GRAY} />
            ) : (
              <TouchableOpacity onPress={submitReview} activeOpacity={0.8}>
                <Ionicons name="checkmark" size={27} color={theme.LIGHT_GRAY} />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.sellerInfoContainer}>
            <Image
              style={styles.sellerProfileImage}
              source={{ uri: sellerProfileImage }}
            />
            <Text style={styles.sellerName}>{sellerName}</Text>
            <Text style={styles.sellerUsername}>@{sellerUsername}</Text>
          </View>

          <View style={styles.reviewStarsContainer}>
            {!oneStar ? (
              <Pressable onPress={rateOneStar}>
                <Ionicons name="md-star" size={26} color={theme.DARK_GRAY} />
              </Pressable>
            ) : (
              <Pressable onPress={rateOneStar}>
                <Ionicons name="md-star" size={26} color={theme.STAR_COLOR} />
              </Pressable>
            )}

            {!twoStars ? (
              <Pressable onPress={rateTwoStars}>
                <Ionicons name="md-star" size={26} color={theme.DARK_GRAY} />
              </Pressable>
            ) : (
              <Pressable onPress={rateTwoStars}>
                <Ionicons name="md-star" size={26} color={theme.STAR_COLOR} />
              </Pressable>
            )}

            {!threeStars ? (
              <Pressable onPress={rateThreeStars}>
                <Ionicons name="md-star" size={26} color={theme.DARK_GRAY} />
              </Pressable>
            ) : (
              <Pressable onPress={rateThreeStars}>
                <Ionicons name="md-star" size={26} color={theme.STAR_COLOR} />
              </Pressable>
            )}

            {!fourStars ? (
              <Pressable onPress={rateFourStars}>
                <Ionicons name="md-star" size={26} color={theme.DARK_GRAY} />
              </Pressable>
            ) : (
              <Pressable onPress={rateFourStars}>
                <Ionicons name="md-star" size={26} color={theme.STAR_COLOR} />
              </Pressable>
            )}

            {!fiveStars ? (
              <Pressable onPress={rateFiveStars}>
                <Ionicons name="md-star" size={26} color={theme.DARK_GRAY} />
              </Pressable>
            ) : (
              <Pressable onPress={rateFiveStars}>
                <Ionicons name="md-star" size={26} color={theme.STAR_COLOR} />
              </Pressable>
            )}
          </View>

          <Text style={styles.reviewDirections}>
            Tap on a star to rate your experience with this seller.
          </Text>

          <View style={styles.reviewContainer}>
            <Text style={styles.reviewHeading}>REVIEW</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Describe your experience with the seller"
              placeholderTextColor={theme.MEDIUM_GRAY}
              value={review}
              onChangeText={setReview}
              multiline
              keyboardAppearance="dark"
            />
          </View>

          <Text style={styles.reviewDirections}>
            Feedback is public and cannot be changed.
          </Text>

          <View style={styles.spacer} />

          <Text style={styles.reviewDirections}>
            Make sure to be fair and factual. If there is a dispute, try to
            resolve it before leaving feedback.
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default LeaveFeedbackScreen;
