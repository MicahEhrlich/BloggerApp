import styled from 'styled-components';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {COLORS} from '../../theme/color-palette';

export const SafeAreaViewWrap = styled(SafeAreaView)`
  background-color: ${COLORS.APP_BACKGROUND};
`;

export const BlogMargin = styled(View)`
  margin-horizontal: 40px;
  background-color: ${COLORS.BLOG_BACKGROUND};
`;

export const BlogWrap = styled(View)`
  display: flex;
  flex-direction: column;
  margin-vertical: 30px;
  margin-horizontal: 20px;
  padding: 14px;
  border-radius: 16px;
  border: 4px ${COLORS.DEFAULT_BACKGROUND};
  box-shadow: 10px 10px 5px grey;
`;

export const BlogTitle = styled(Text)`
  font-size: 30px;
  color: ${COLORS.TEXT_COLOR};
  font-weight: bold;
  text-align: left;
`;

export const BlogText = styled(Text)`
  margin-top: 20px;
  font-size: 16px;
  color: ${COLORS.TEXT_COLOR};
  text-align: left;
`;
