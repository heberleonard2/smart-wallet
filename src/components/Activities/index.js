import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  Container,
  Option,
  IconArea,
  Title,
  Money
  }
from './styles';

const items = [
  {
      key: String(Math.random()),
      lib:MaterialCommunityIcons,
      name: "chart-bar",
      title: "Invested",
      money: "$9,000"
  },
  {
    key: String(Math.random()),
    lib:MaterialCommunityIcons,
    name: "bookmark-minus",
    title: "Return",
    money: "$1,400"
  },
  {
    key: String(Math.random()),
    lib:MaterialCommunityIcons,
    name: "chart-line-variant",
    title: "Yield",
    money: "2,050 "
  },
  {
    key: String(Math.random()),
    lib:MaterialCommunityIcons,
    name: "chart-pie",
    title: "Invested",
    money: "5,021"
  } 
]

export default function Activites(){
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.key} >
          <IconArea>
            <item.lib name={item.name} size={30} color="#8c94f8"/>
          </IconArea>
          <Title>{item.title}</Title>
          <Money>{item.money}</Money>
      </Option>
      ))}
    </Container>
  )
}

