import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs(() => ({
  horizontal:true,
  showsHorizontalScrollIndicator:false,
  contentContainerStyle:{
    paddingLeft:24,
  },
}))`
  margin:32px 0;
  
`;

export const Option = styled.TouchableOpacity`
  background-color:#21233f;
  
  width:174px;
  height:180px;
  border-radius:24px;
  flex-direction:column;
  padding:32px;
  margin-right:24px;
  align-items:flex-start;
`;
export const IconArea = styled.View`
   margin-bottom:20px;
`;

export const Title = styled.Text`
  font-size:16px;
  color:#757aac;
  margin-bottom:5px;
  font-family: 'Rubik_400Regular';
`;
export const Money = styled.Text`
  font-size:24px;
  color:#fff;
  font-family: 'Rubik_700Bold';
`;

