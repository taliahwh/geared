import React, { useState } from 'react';
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
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from '../styles/LeaveFeedbackScreenStyles';
import theme from '../styles/styles.theme';

const LeaveFeedbackScreen = ({
  hideModal,
  sellerProfileImage,
  sellerName,
  sellerUsername,
}) => {
  const [review, setReview] = useState('');

  // Review Stars
  const [oneStar, setOneStar] = useState(false);
  const [twoStars, setTwoStars] = useState(false);
  const [threeStars, setThreeStars] = useState(false);
  const [fourStars, setFourStars] = useState(false);
  const [fiveStars, setFiveStars] = useState(false);
  const [rating, setRating] = useState(null);

  const submitReview = () => {
    const fullReview = { review: review.trim(), rating };
    console.log(fullReview);
  };

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
