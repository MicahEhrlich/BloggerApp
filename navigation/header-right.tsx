import React from 'react';
import { ButtonText, ButtonView, MenuButton } from './navigation.styles';
import { useNavigation } from '@react-navigation/native';


export const HeaderRight = () => {
    const navigation = useNavigation();

    return (<ButtonView>
        <MenuButton><ButtonText>Home</ButtonText></MenuButton>
        <MenuButton><ButtonText>Profile</ButtonText></MenuButton>
        <MenuButton onPress={() =>
            navigation.navigate('Blogs')
        }><ButtonText>Blogs</ButtonText></MenuButton>
    </ButtonView>);
}