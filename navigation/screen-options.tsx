import React from "react"
import { HeaderRight } from "./header-right"

export const ScreenOptions = () => {
    return ({
        title: 'Blogger',
        headerStyle: {
            backgroundColor: '#f4511e',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
        headerRight: () => (
            <HeaderRight />
        )
    })
}
