import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';

// Styles
import styles from '../styles/ReportScreenStyles';
import theme from '../styles/styles.theme';

const ReportScreen = ({ route }) => {
  const { userId, reportItemId, reportType } = route.params;

  const [report, setReport] = useState('');
  const [wordCount, setWordCount] = useState(0);

  const submitReport = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.reportContainer}>
        <TextInput
          style={styles.textInput}
          multiline
          autoCorrect={true}
          autoFocus
          maxLength={400}
          placeholderTextColor={theme.MEDIUM_GRAY}
          placeholder={`Please tell us why you're reporting this ${reportType.toLowerCase()}`}
          value={report}
          onChangeText={(e) => {
            setReport(e);
            setWordCount(e.length);
          }}
        />
        <Text style={styles.wordCount}>{400 - wordCount}</Text>
      </View>

      <TouchableOpacity onPress={submitReport} activeOpacity={0.8}>
        <Text style={styles.sendBtn}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ReportScreen;
