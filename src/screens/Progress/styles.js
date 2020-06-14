import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #18192e;
  flex: 1;
`;
export const Header = styled.View`
  margin: 40px 0;
  padding:0 24px;
`;

export const Title = styled.Text`
  color:#757aac;
  font-size:24px;
  font-family: 'Rubik_400Regular';
  margin-bottom: 10px;
`;
export const Container = styled.ScrollView``;


export const Circle = styled.View`
  align-items:center;
  justify-content:center;
`;
export const TitlePercent = styled.Text`
  color:#757aac;
  font-size:24px;
  font-family: 'Rubik_400Regular';
  margin-bottom: 10px;
`;

export const Percent = styled.Text`
  color:#fff;
  font-size:60px;
  font-family: 'Rubik_700Bold'
`;

export const Section = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
  padding:0 24px;
  margin-top:60px;
  
`;
export const TitleDate = styled.Text`
  color:#757aac;
  font-size:18px;
  font-family: 'Rubik_400Regular';
`;
export const TitleROI = styled.Text`
  color: #757aac;
  font-size:18px;
  font-family: 'Rubik_400Regular';
`;
export const Items = styled.View`
  margin:10px 0 30px;
`;
export const Content = styled.View`
  margin:0 24px;
  padding:16px 0;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  border-bottom-color:#2b2d4a;
  border-bottom-width:1px;
`;
export const Date = styled.Text`
  color:#fff;
  font-size:20px;
  font-family: 'Rubik_400Regular';
`;
export const ROI = styled.View`
  flex-direction:row;
  align-items:center;
`;
export const IconROI = styled.View`
  background: ${({ bgColor }) => bgColor};
  border-radius:20px;
  padding:3px;
  margin-right:16px;
`;

export const PercentROI = styled.Text`
color:#fff;
  font-size:20px;
  font-family: 'Rubik_400Regular';
`;
