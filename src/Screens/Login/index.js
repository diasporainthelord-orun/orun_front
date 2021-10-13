/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import {
  SafeAreaView, Image, View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';
import topImg from '../../../assets/promoteText.png';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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
        <LogIn>
          <LogInText>로그인</LogInText>
        </LogIn>
        <FindInfoAndSignUp>
          <FindEmail>
            <Texts>이메일 찾기</Texts>
          </FindEmail>
          <FindPassword>
            <Texts>비밀번호 찾기</Texts>
          </FindPassword>
          <SignUp>
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

const BarIndent = styled(Text)`
  color: #BFBFBF;
  margin-left: 6px;
  margin-right: 6px;
`;
