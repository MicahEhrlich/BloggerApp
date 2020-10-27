import React, { ReactElement } from 'react'
import { FlatList, ListRenderItem, ListRenderItemInfo } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { BlogMargin, BlogText, BlogTitle, BlogWrap, SafeAreaViewWrap } from './blogs.styles'

export interface BlogType {
    id: number;
    title: string;
    text: string;
}

const DATA: BlogType[] = [{
    id: 1,
    title: 'Some Random Blog',
    text: "Some text here for the blog, it should be very very long. It better not go over the page, it should be in the correct limit."
        + "This is only the beginning of it, it will take me some time to make something usefull out of this."
        + "This is more or less the general idea I'm trying to make here. I want to be able to edit blogs, add new ones,"
        + "maybe add some pictures later on."
        + "This is something really basic."
}, {
    id: 2,
    title: 'Some Random Blog',
    text: "Some text here for the blog, it should be very very long. It better not go over the page, it should be in the correct limit."
        + "This is only the beginning of it, it will take me some time to make something usefull out of this."
        + "This is more or less the general idea I'm trying to make here. I want to be able to edit blogs, add new ones,"
        + "maybe add some pictures later on."
        + "This is something really basic."
}, {
    id: 3,
    title: 'Some Random Blog',
    text: "Some text here for the blog, it should be very very long. It better not go over the page, it should be in the correct limit."
        + "This is only the beginning of it, it will take me some time to make something usefull out of this."
        + "This is more or less the general idea I'm trying to make here. I want to be able to edit blogs, add new ones,"
        + "maybe add some pictures later on."
        + "This is something really basic."
}, {
    id: 4,
    title: 'Some Random Blog',
    text: "Some text here for the blog, it should be very very long. It better not go over the page, it should be in the correct limit."
        + "This is only the beginning of it, it will take me some time to make something usefull out of this."
        + "This is more or less the general idea I'm trying to make here. I want to be able to edit blogs, add new ones,"
        + "maybe add some pictures later on."
        + "This is something really basic."
}, {
    id: 5,
    title: 'Some Random Blog',
    text: "Some text here for the blog, it should be very very long. It better not go over the page, it should be in the correct limit."
        + "This is only the beginning of it, it will take me some time to make something usefull out of this."
        + "This is more or less the general idea I'm trying to make here. I want to be able to edit blogs, add new ones,"
        + "maybe add some pictures later on."
        + "This is something really basic."
}, {
    id: 6,
    title: 'Some Random Blog',
    text: "Some text here for the blog, it should be very very long. It better not go over the page, it should be in the correct limit."
        + "This is only the beginning of it, it will take me some time to make something usefull out of this."
        + "This is more or less the general idea I'm trying to make here. I want to be able to edit blogs, add new ones,"
        + "maybe add some pictures later on."
        + "This is something really basic."
}]


const renderBlogItem = (item: BlogType): ReactElement => {
    const { title, text } = item;
    return (
        <BlogWrap>
            <BlogTitle>{title}</BlogTitle>
            <BlogText>{text}</BlogText>
        </BlogWrap>
    )
}

export const BlogsScreen = () => {
    return (
        <SafeAreaViewWrap>
            <BlogMargin>
                <FlatList
                    data={DATA}
                    renderItem={({ item }) => renderBlogItem(item)}
                    keyExtractor={(item: BlogType) => item.id.toString()}
                />
                
            </BlogMargin>
        </SafeAreaViewWrap>
    )
}
