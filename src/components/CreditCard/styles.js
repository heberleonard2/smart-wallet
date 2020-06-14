import styled from 'styled-components/native';


 export const Container = styled.View`
  padding: 0 24px;
 `;

 export const Card = styled.View`

  background: ${({ bgColor }) => bgColor};
  border-radius:24px;
  padding:32px;
  
 `;
 export const Header = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content:space-between;
 `;
 export const IconTop = styled.View`
  background-color:#2ba7fb;
  border-radius:48px;
  padding:16px 20px;
 `;
 export const CardData = styled.View`
  flex-direction:column;
  align-items:flex-end;
 `;
 
 export const CardDataText = styled.View`
  flex-direction:row;
  
  align-items:center;
  margin-bottom:16px;
 `;
 export const DataText = styled.Text`
  font-size:20px;
  color:#fff;
  font-family: 'Rubik_400Regular';
 
 
 `;
 export const Dots = styled.View`
  margin-right:16px;
`;
 export const CardDataStatus = styled.View`
  background-color:#2ba7fb;
  border-radius:12px;
  padding:6px 10px;
 `;
 export const TextStatus = styled.Text`
  font-size:14px;
  color:#fff;
  font-family: 'Rubik_700Bold';
 `;

 export const  Content = styled.View`
  flex-direction:row;
  justify-content:space-between;
  align-items:flex-end;
  margin-top:24px;
 `;
 export const ContentInfo = styled.View`
  
 `;
 export const ContentInfoText = styled.Text`
  font-size:18px;
  color:#7378a8;
  margin-bottom:10px;
  font-family: 'Rubik_400Regular';
 `;
 export const ContentInfoMoney = styled.Text`
  font-size:30px;
  color:#fff; 
  font-family: 'Rubik_700Bold';
 `;
 export const  IconContent = styled.View`
  
 `;

