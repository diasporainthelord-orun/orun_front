import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyToken, getAccessToken } from '../../Api/Splash/api';

const index = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    let result;
    setTimeout(async () => {
      setAnimating(false);
      let accessToken = await AsyncStorage.getItem('accessToken');
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      if (!accessToken || !refreshToken) navigation.replace('Login');

      result = await verifyToken(accessToken);
      if (result) {
        await AsyncStorage.setItem('accessToken', accessToken);
        await AsyncStorage.setItem('refreshToken', refreshToken);
        // redux에 회원정보 저장
        navigation.replace('Home');
      }

      result = await verifyToken(refreshToken);
      if (result) {
        accessToken = await getAccessToken(refreshToken);
        await AsyncStorage.setItem('accessToken', accessToken);
        // redux에 회원정보 저장
      }
    }, 2000);
  }, []);

  return (
    <SplashContainer>
      <IndicatorIcon animating={animating} color="#8767CA" size="large" />
    </SplashContainer>
  );
};

export default index;

const SplashContainer = styled(View)`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const IndicatorIcon = styled(ActivityIndicator)`
    align-items: center;
    height: 100%;
`;
