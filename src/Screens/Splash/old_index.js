/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Image, SafeAreaView, TouchableOpacity, Text, View,
} from 'react-native';
import styled from 'styled-components/native';
import mainImage from '../../../assets/mainImage.png';
import promoteText from '../../../assets/promoteText.png';
import orunTextKO from '../../../assets/orunTextKO.png';
import orunTextEN from '../../../assets/orunTextEN.png';

export default function Splash({ navigation }) {
  const [bottomImg, setBottomImg] = useState(orunTextKO);
  const [isButton, setIsButton] = useState(false);

  const changeBottomImg = () => {
    setTimeout(() => setBottomImg(orunTextEN), 2000);
    setTimeout(() => setIsButton(true), 4000);
  };

  useEffect(() => {
    changeBottomImg(orunTextEN);
  }, []);

  return (
    <BackGround>
      <TopImage source={mainImage} />
      <MidImage source={promoteText} />
      {isButton
        ? (
          <ButtonView>
            <LogIn onPress={() => navigation.navigate('Login')}>
              <LogInText>로그인</LogInText>
            </LogIn>
          </ButtonView>
        )
        : <BottomImg source={bottomImg} />}
    </BackGround>
  );
}

const BackGround = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const TopImage = styled(Image)`
  margin-top: 40px;
  width: 100%;
  height: 400px;
`;

const MidImage = styled(Image)`
  margin-top: 40px;
  margin-left: 15px;
  width: 60%;
`;

const BottomImg = styled(Image)`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

const ButtonView = styled(View)`
  margin-top: 15%;
  align-items: center;
`;

const LogIn = styled(TouchableOpacity)`
  height: 53px;
  width: 60%;
  margin: 12px;
  justify-content: center;
  align-items: center;
  background-color: #FFD668;
`;

const LogInText = styled(Text)`
  color: white; 
  font-weight: bold;
  font-size: 32px;
`;
