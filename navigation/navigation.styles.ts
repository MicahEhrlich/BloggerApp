import styled from 'styled-components';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const ButtonView = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const MenuButton = styled(TouchableOpacity)`
  padding: 10px;
  margin-vertical: 10px;
  border-color: green;
  background-color: blue;
`;

export const ButtonText = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: red;
`;
