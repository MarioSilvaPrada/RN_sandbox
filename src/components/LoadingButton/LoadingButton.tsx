import React from 'react';
import {ActivityIndicator, Button, View, StyleSheet} from 'react-native';

interface ButtonProps {
  loading?: boolean;
}

export const LoadingButton = (props: ButtonProps) => {
  const {loading} = props;

  return (
    <View style={styles.container}>
      <Button title="Loading Button" disabled={loading} onPress={() => {}} />
      {loading && <ActivityIndicator style={styles.indicator} animating />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
  },
  indicator: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});
