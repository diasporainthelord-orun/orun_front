/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  SafeAreaView, Image, View, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import topImg from '../../../assets/promoteText.png';
// APIs
import { logIn } from '../../Api/Splash/api';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (mail, pwd) => {
    let result;
    if (!mail) return Alert.alert('로그인에 실패하였습니다.', '이메일이 입력되지 않았습니다.', [{ text: '확인' }]);
    if (!pwd) return Alert.alert('로그인에 실패하였습니다.', '비밀번호가 입력되지 않았습니다.', [{ text: '확인' }]);
    try {
      result = await logIn({ email: mail, password: pwd });
    } catch (err) {
      return Alert.alert('로그인에 실패하였습니다.', '네트워크 에러', [{ text: '확인' }]);
    }
    AsyncStorage.setItem('token', result.token);
    return Alert.alert('로그인 되었습니다!', '^^', [{ text: '확인', onPress: () => navigation.navigate('Home') }]);
  };

  return (
    <BackGround>
      <Top source={topImg} />
      <Inputs>
        <UserInfo
          onChangeText={setEmail}
          value={email}
          placeholder="오런 아이디 (이메일)"
          textContentType="emailAddress"
        />
        <UserInfo
          onChangeText={setPassword}
          value={password}
          placeholder="오런 비밀번호"
          textContentType="password"
          secureTextEntry
        />
      </Inputs>
      <Buttons>
        <LogIn onPress={handleLogin}>
          <LogInText>로그인</LogInText>
        </LogIn>
        <FindInfoAndSignUp>
          <FindEmail onPress={() => navigation.navigate('FindEmail')}>
            <Texts>이메일 찾기</Texts>
          </FindEmail>
          <FindPassword onPress={() => navigation.navigate('FindPassword')}>
            <Texts>비밀번호 찾기</Texts>
          </FindPassword>
          <SignUp onPress={() => navigation.navigate('SignUp')}>
            <Texts>회원가입</Texts>
          </SignUp>
        </FindInfoAndSignUp>
      </Buttons>
    </BackGround>
  );
}

const BackGround = styled(SafeAreaView)`
  flex: 1;
  background-color: white;
`;

const Top = styled(Image)`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

const Inputs = styled(View)`
  margin-top: 40px;
  justify-content: center;
  align-items: center;
`;

const UserInfo = styled(TextInput)`
  height: 40px;
  margin: 4px;
  borderWidth: 1px;
  border-color: #BFBFBF;
  width: 85%;
  padding: 10px;
`;

const Buttons = styled(View)`
  justify-content: center;
  align-items: center;
`;

const LogIn = styled(TouchableOpacity)`
  height: 50px;
  width: 85%;
  margin: 12px;
  justify-content: center;
  align-items: center;
  background-color: #FFD668;
`;

const LogInText = styled(Text)`
  color: white; 
  font-weight: bold;
  font-size: 20px;
`;

const FindInfoAndSignUp = styled(View)`
  background-color: #F2F2F2
  height: 30px;
  width: 85%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const FindEmail = styled(TouchableOpacity)`
`;

const FindPassword = styled(TouchableOpacity)`
`;

const SignUp = styled(TouchableOpacity)`
`;

const Texts = styled(Text)`
  color: #BFBFBF;
  font-weight: bold; 
  fontSize: 13px;
  margin-left: 10px;
  margin-right: 10px;
`;
