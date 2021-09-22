import React from 'react';
import VideoPlayer from './videocontrol/VideoPlayer';
import {StyleSheet} from 'react-native';

export default class Video extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      url,
      onEnterFullScreen,
      onExitFullScreen,
      onEnd,
      onReadyForDisplay,
    } = this.props;
    return (
      <>
        <VideoPlayer
          ref={(ref) => {
            this.player = ref;
          }}
          source={{
            uri: url
              ? url
              : 'https://player.vimeo.com/external/445330244.m3u8?s=44e0f5ea450d37bf8ab6d210b97b5d92644cd951',
            cache: true,
            overrideFileExtensionAndroid: 'm3u8',
          }}
          style={styles.container}
          disableSeekbar={false}
          rate={1.0}
          disableBack
          disableVolume
          disableFullscreen
          onEnterFullscreen={() => onEnterFullScreen()}
          onExitFullscreen={() => onExitFullScreen()}
          onEnd={() => onEnd()}
          onReadyForDisplay={() => onReadyForDisplay()}
        />
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
