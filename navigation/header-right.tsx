import React from 'react';
import { ButtonText, ButtonView, MenuButton } from './navigation.styles';


export const HeaderRight = () => {
    return (<ButtonView>
        <MenuButton><ButtonText>Home</ButtonText></MenuButton>
        <MenuButton><ButtonText>Profile</ButtonText></MenuButton>
        <MenuButton><ButtonText>Blogs</ButtonText></MenuButton>
    </ButtonView>);
}