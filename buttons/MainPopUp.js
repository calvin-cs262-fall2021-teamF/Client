import React, { useState, useCallback} from 'react';
import { Text, Linking, StyleSheet, TouchableOpacity, View, Image, ImageBackground, Modal} from 'react-native';
import {popStyle} from '../utils/popStyle.js';
import { SpotifyButton } from './SpotifyBTN.js';
import { YouTubeButton } from './YouTubeBTN.js';

const MainPop = () =>{
  // const [modalOpen, setModalOpen] = useState(false);

  const {
    modalOpen, setModalOpen
  } = MainPop;

  const youtubeURL = 'https://www.youtube.com/';
  const spotifyURL = "https://urlgeni.us/spotify/hom3";

  return (
    <View>
      <Modal transparent={true} visible={modalOpen} animationType='slide'>
        <View style={styles.container}>
          <View style={popStyle.box}>
            <YouTubeButton url={youtubeURL} />
            <SpotifyButton url={spotifyURL} />
            </View>
            <TouchableOpacity
                onPress={() => setModalOpen(false)}
                style={styles.modalToggle}
              >
                <Text>CLOSE</Text>
            </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: {
    padding: '10%',
    backgroundColor: '#000000aa',
    flex: 1,
  },
  
  modalToggle: {
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
})

export {MainPop}