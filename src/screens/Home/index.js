import React from 'react';

import { Wrapper, Header, Welcome, WelcomeText, UserImage, Container, Title} from './styles';
import user from '../../assets/user.png';
import CreditCard from '../../components/CreditCard';
import Activities from '../../components/Activities';

export default function Home(){
  return(
   
    <Wrapper>
      <Container>
        <Header>
          <Welcome>
            <WelcomeText>Welcome back, Héber!</WelcomeText>
            <UserImage source={user} />
          </Welcome>
          <Title>Smart wallet</Title>
        </Header>

        <CreditCard/>
        <Activities/>
      </Container>
    </Wrapper>
    
  )
  
}