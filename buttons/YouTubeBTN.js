import React, {useCallback} from 'react';
import { Linking, TouchableOpacity, Image} from 'react-native';

const YouTubeButton = ({ url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
  <TouchableOpacity title={children} onPress={handlePress} style={{width: 130, height: 70, backgroundColor: '#B91646'}}>
      <Image
        source={require("../assets/youtube-brands.png")}
        resizeMode="contain"
        style={{
          width: 130,
          height: 70,
        }}
      />
  </TouchableOpacity>
  );
};

export {YouTubeButton}