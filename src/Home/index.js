/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import {
  Image, SafeAreaView, TouchableOpacity, Text, View,
} from 'react-native';
import styled from 'styled-components/native';
import topImg from '../../assets/Home/topImg.png';
import middleImg from '../../assets/Home/middleImg.png';
import bottomImg1 from '../../assets/Home/bottomImg1.png';
import bottomImg2 from '../../assets/Home/bottomImg2.png';

const Home = ({ navigation }) => {
  const [bottomImg, setBottomImg] = useState(bottomImg1);
  const [isButton, setIsButton] = useState(false);

  const changeBottomImg = () => {
    setTimeout(() => setBottomImg(bottomImg2), 2000);
    setTimeout(() => setIsButton(true), 4000);
  };

  useEffect(() => {
    changeBottomImg(bottomImg2);
  }, []);

  return (
    <BackGround>
      <TopImage source={topImg} />
      <MidImage source={middleImg} />
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
};

export default Home;

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
