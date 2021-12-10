import React, { useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity, Modal, Text } from "react-native";

const HelpButton = ({ text }) => {
  const [helpVisible, setHelpVisible] = useState(false);

  return (
    <View style={{ right: 34 }}>
      <TouchableOpacity onPress={() => setHelpVisible(true)}>
        <Image
          source={require("../assets/question.png")}
          resizeMode="contain"
          style={{
            width: 25,
            height: 25,
          }}
        />
      </TouchableOpacity>
      <Modal
        animationType='none'
        transparent={true}
        visible={helpVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.box}>
            <Text>{text}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setHelpVisible(false)}
            style={styles.modalToggle}
          >
            <Text>OK</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#fff",
    padding: 25,
    top: '20%',
    height: '50%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },

  modalContainer: {
    padding: '10%',
    backgroundColor: '#000000aa',
    flex: 1,
  },

  modalToggle: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
});

export default HelpButton;