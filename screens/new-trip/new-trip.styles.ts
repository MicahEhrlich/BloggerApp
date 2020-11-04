import styled from 'styled-components';
import {SafeAreaView, ScrollView, Text, TextInput, View} from 'react-native';
import {COLORS} from '../../theme/color-palette';

export const SafeAreaViewWrap = styled(SafeAreaView)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.APP_BACKGROUND};
`;

export const NewTripMargin = styled(View)`
  margin-horizontal: 30px;
  background-color: ${COLORS.BLOG_BACKGROUND};
`;

export const NewTripWrap = styled(View)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const NextVacationText = styled(Text)`
  text-align: center;
  font-size: 30px;
  color: ${COLORS.TEXT_COLOR};
`;

export const NextVacationInput = styled(TextInput)`
  font-size: 24px;
  background-color: ${COLORS.DEFAULT_BACKGROUND};
  margin-horizontal: 40px;
  border-color: ${COLORS.TEXT_COLOR};
  border: 2px;
`;

export const WizardViewWrap = styled(View)`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`