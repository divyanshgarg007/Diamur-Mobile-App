import React from 'react';
import { Text, View } from 'react-native';
import { AppItems } from './components';
import { SliderBox } from 'react-native-image-slider-box';
import { styles } from './appFunctionality.style';
import { CloseButton } from '../../components';
const articles = [
  'https://images.unsplash.com/photo-1651592753269-7d661e4a9899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1651592753269-7d661e4a9899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  'https://images.unsplash.com/photo-1651592753269-7d661e4a9899?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
];

export default function AppFunctionalityView(props) {

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerBackVisible: false,
      headerShown: true,
      headerRight: () => (
        null
      ),
      headerLeft: () => (
        <CloseButton onClick={() => props.navigation.goBack()} />
      )
    });
  }, [props.navigation]);

  return (
    <SliderBox
      ImageComponent={AppItems}
      images={articles}
      onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
      dotColor="#fff"
      inactiveDotColor="transparent"
      autoplay
      circleLoop
      resizeMethod={'resize'}
      resizeMode={'cover'}
      paginationBoxStyle={styles.dotSlideBox}
      dotStyle={styles.dotSlide}
      LoaderComponent={() => null}
    />
  );
}
