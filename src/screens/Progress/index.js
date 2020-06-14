import React from 'react';
import ProgressCircle from 'react-native-progress-circle';
import { Feather } from '@expo/vector-icons';
import { Wrapper, Header, Title, Container, Circle, TitlePercent, Percent, Section, TitleDate, TitleROI, Items, Content, Date, ROI, IconROI, PercentROI } from './styles';

const items=[
  {
    key: String(Math.random()),
    date: '30 Jul 2020',
    name: 'arrow-up-right',
    percent: '80',
    bgColor: '#14a1fb'
  },
  {
    key: String(Math.random()),
    date: '30 May 2020',
    name: 'arrow-down-right',
    percent: '74',
    bgColor: '#A0B1C0'
  },
  {
    key: String(Math.random()),
    date: '30 Apr 2020',
    name: 'arrow-up-right',
    percent: '76',
    bgColor: '#14a1fb'
  },
  {
    key: String(Math.random()),
    date: '30 Mar 2020',
    name: 'arrow-up-right',
    percent: '74',
    bgColor: '#14a1fb'
  }
]

export default function Progress(){
  return (
    <Wrapper>
      
      <Container>
      <Header>
        <Title>Progress</Title>
      </Header>
        <Circle>
        <ProgressCircle
              percent={82}
              radius={150}
              borderWidth={6}
              color="#55b2de"
              shadowColor="#757aac"
              bgColor="#18192e"
              outerCircleStyle={{justifyContent:"center", shadowColor: '#2f67a6',
              shadowOffset: {width: 5, height: 10},
              shadowOpacity: 1,
              shadowRadius: 10}}
          >
              <TitlePercent>ROI Speed %</TitlePercent>
              <Percent>82</Percent>
          </ProgressCircle>
        </Circle>
        <Section>
          <TitleDate>Date</TitleDate>
          <TitleROI>ROI Speed</TitleROI>
        </Section>
        <Items>
        {items.map(item => (
          <Content key={item.key}>
          <Date>{item.date}</Date>
          <ROI>
            <IconROI bgColor={item.bgColor}>
            <Feather name={item.name} size={22} color="#fff" />
            </IconROI>
            <PercentROI>{item.percent}%</PercentROI>
          </ROI>
        </Content>
        
        ))}
        </Items>
      </Container>
    </Wrapper>
  )
}