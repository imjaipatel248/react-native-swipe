import React, {useContext, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {height, width} from '../../../Utils/Constant';
import {find, findIndex} from 'lodash';
import {CustomText} from '../../CommonComponent/CustomText';
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  logo: {
    width: 66,
    height: 58,
  },
});
const JsonObject = [
  {
    name: 'One',
    source:
      'https://www.freepnglogos.com/uploads/1-number-png/black-circle-1-number-launchpad-angola-pricing-shared-office-space-luanda-29.png',
    id: 'one',
  },
  {
    name: 'Two',
    source:
      'https://www.pngfind.com/pngs/m/108-1083227_2-number-black-and-white-number-2-vector.png',
    id: 'two',
  },
  {
    name: 'Three',
    source:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-bxwdd&psig=AOvVaw1rafd6ijjNqqkAET7M5F5u&ust=1630507931672000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDzpsLB2_ICFQAAAAAdAAAAABAI',
    id: 'one',
  },
  {
    name: 'Four',
    source:
      'https://img.favpng.com/15/1/12/number-numerical-digit-numeral-system-clip-art-png-favpng-620mU2KpVffRNumUvucxZ0MBj.jpg',
    id: 'two',
  },
  {
    name: 'Five',
    source:
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kindpng.com%2Fimgv%2FmmJTih_number-five-5-numerical-alphabet-numeric-digit-5%2F&psig=AOvVaw1rafd6ijjNqqkAET7M5F5u&ust=1630507931672000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLDzpsLB2_ICFQAAAAAdAAAAABAT',
    id: 'one',
  },
];
const HomeScreen = props => {
  const {appTheme} = useContext(AppContext);
  const [curruntId, setCurruntId] = useState(JsonObject[0]);
  let touchX = '';
  let touchY = '';
  const onSwipeLeft = () => {
    const selected = find(JsonObject, curruntId);
    if (selected) {
      const index = findIndex(JsonObject, selected);
      if (index + 1 < JsonObject.length) {
        const abc = JsonObject[index + 1];
        setCurruntId(abc);
      }
    }
  };
  const onSwipeRight = () => {
    const selected = find(JsonObject, curruntId);
    console.log(selected);

    if (selected) {
      const index = findIndex(JsonObject, selected);
      if (index + 1 < JsonObject.length) {
        const abc = JsonObject[index + 1];
        setCurruntId(abc);
      }
    }
  };
  return (
    <View
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background, height: height, width: width},
      ]}
      onTouchStart={e => {
        touchX = e.nativeEvent.pageX;
        touchY = e.nativeEvent.pageY;
      }}
      onTouchEnd={async e => {
        if (touchX - e.nativeEvent.pageX === touchY - e.nativeEvent.pageY) {
          return;
        } else if (
          touchX - e.nativeEvent.pageX > 100 &&
          touchY - e.nativeEvent.pageY < 50 &&
          touchY - e.nativeEvent.pageY > -50
        ) {
          console.log('Swiped left');
          onSwipeLeft();
        } else if (
          touchX - e.nativeEvent.pageX < -100 &&
          touchY - e.nativeEvent.pageY > -50 &&
          touchY - e.nativeEvent.pageY < 50
        ) {
          onSwipeRight();
          console.log('Swiped right');
        } else if (touchY - e.nativeEvent.pageY > 100) {
          console.log('Swiped up');
        }
      }}>
      <Image style={styles.tinyLogo} source={{uri: curruntId.source}} />
      <CustomText>{curruntId.name}</CustomText>
    </View>
  );
};

export default HomeScreen;
