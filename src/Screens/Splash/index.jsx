import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import styled from 'styled-components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { verifyUser, getAccessToken } from '../../Api/Splash/api';

const index = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    let result;
    let newAccessToken;
    setTimeout(async () => {
      setAnimating(false);
      const accessToken = await AsyncStorage.getItem('accessToken');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      if (!accessToken || !refreshToken) navigation.replace('Login');
      if (accessToken) {
        result = await verifyUser(accessToken);
        if (result) {
          await AsyncStorage.setItem('accessToken', accessToken);
          await AsyncStorage.setItem('refreshToken', refreshToken);
          // redux에 회원정보 저장해야함
          navigation.replace('Home');
        }
        newAccessToken = await getAccessToken(refreshToken);
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
