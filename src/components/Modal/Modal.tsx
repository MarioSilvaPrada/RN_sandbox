import React, {FC} from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface ModalProps {
  text: string;
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 50,
    maxWidth: '500px',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export const Modal: FC<ModalProps> = ({text}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
