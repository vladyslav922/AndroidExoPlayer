/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import VideoPlayer from './video';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.lighter : Colors.lighter,
  };

  const onReadyForDisplay = () => {
    console.log('++++: , ready');
  };

  const handleOnEnd = () => {
    console.log('Video End');
  };

  return (
    <SafeAreaView style={[styles.container, backgroundStyle]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <VideoPlayer
        url={
          'https://sw-video.b-cdn.net/post/hartley-e001-s003-01-9663ac/timeline/stream/index.m3u8'
        }
        isFullScreen={true}
        // onEnterFullScreen={this.handleFullscreen}
        // onExitFullScreen={this.handleFullscreen}
        onEnd={handleOnEnd}
        onReadyForDisplay={onReadyForDisplay}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
