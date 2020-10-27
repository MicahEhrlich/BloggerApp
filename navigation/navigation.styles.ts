import styled from 'styled-components';
import {Text, TouchableOpacity, View} from 'react-native';

export const ButtonView = styled(View)`
  display: flex;
  flex-direction: row;
  padding-vertical: 20px;
`;

export const MenuButton = styled(TouchableOpacity)`
  padding: 10px;
  margin: 5px;
  border-radius: 8px;
  border: green 4px;
  background-color: blue;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: #334FFF;
`;
