import React from 'react';
import { Entypo, FontAwesome} from '@expo/vector-icons';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {
  Container,
  Card,
  Header,
  IconTop,
  CardData,
  CardDataStatus,
  CardDataText,
  TextStatus,
  Dots,
  DataText,
  Content,
  ContentInfo,
  ContentInfoMoney,
  ContentInfoText,
  IconContent
  } from './styles';


const SLIDER_WIDTH = Dimensions.get('window').width;

const creditCard = [
    {
        key: String(Math.random()),
        number:"1234",
        status: "ACTIVE",
        money: "5,021",
        bgColor: "#21233f"
    },
    {
        key: String(Math.random()),
        number:"4321",
        status: "PENDENT",
        money: "1,023",
        bgColor: "#babec7"
    },
    {
        key: String(Math.random()),
        number:"5432",
        status: "ACTIVE",
        money: "1,847",
        bgColor: "#070817"
    }, 
  ]
function _renderItem({item}){
return (
  <Container>
    <Card bgColor={item.bgColor}>
      <Header>
        <IconTop>
          <Entypo name="basecamp" size={40} color="#fff" />
        </IconTop>
        <CardData>
          <CardDataText>
            <Dots>
              <Entypo name="dots-three-horizontal" size={25} color="#616599" />
            </Dots>
            <Dots>
              <Entypo name="dots-three-horizontal" size={25} color="#616599" />
            </Dots>
            <DataText>{item.number}</DataText>
          </CardDataText>
  
          <CardDataStatus>
            <TextStatus>{item.status}</TextStatus>
          </CardDataStatus>
        </CardData>
      </Header>
      <Content>
        <ContentInfo>
          <ContentInfoText>
            Ethereum
          </ContentInfoText>
          <ContentInfoMoney>
            {item.money} ETH
          </ContentInfoMoney>
        </ContentInfo>
        <IconContent>
          <FontAwesome name="cc-mastercard" size={40} color="#333458"/>
        </IconContent>
      </Content>
    </Card>
  </Container>

    )
  }
export default function CreditCard(){
  return (
    <Carousel
      layout={'stack'} 
      ref={ref => CreditCard.carousel = ref}
      data={creditCard}
      sliderWidth={SLIDER_WIDTH}
      itemWidth={SLIDER_WIDTH}
      renderItem={_renderItem}
      />
  )
}