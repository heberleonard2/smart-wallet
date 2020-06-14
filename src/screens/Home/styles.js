import styled from 'styled-components/native';


export const Wrapper = styled.SafeAreaView`
  background: #18192e;
  flex: 1;
`;

export const Container = styled.ScrollView``;

export const Header = styled.View`
  margin:40px 0 32px;
  padding: 0 24px;
  
`;

export const Welcome = styled.View`
  margin-bottom:16px;
  flex-direction:row;
  align-items: flex-end;
  justify-content: space-between;
`;
export const WelcomeText = styled.Text`
  color:#757aac;
  font-family: 'Rubik_400Regular';
  font-size:20px;

`;
export const Title = styled.Text`
  color:white;
  font-size:36px;
  font-family: 'Rubik_700Bold';
`;

export const UserImage = styled.Image`
  width:64px;
  height:64px;
  border-radius:24px;
`;


