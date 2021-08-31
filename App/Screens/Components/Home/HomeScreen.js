import React, {useContext} from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import CommonStyle from '../../../Theme/CommonStyle';
import {AppContext} from '../../../AppContext';
import {height, width} from '../../../Utils/Constant';
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
const HomeScreen = props => {
  const {appTheme} = useContext(AppContext);
  let touchX = '';
  let touchY = '';
  return (
    <View
      style={[
        CommonStyle.flexContainer,
        CommonStyle.center,
        {backgroundColor: appTheme.background, height: height, width: width},
      ]}>
      <CustomText>WelCome..</CustomText>
    </View>
  );
};

export default HomeScreen;
