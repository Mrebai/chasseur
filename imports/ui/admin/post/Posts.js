import React from 'react';


import { List, Edit, Create, Datagrid, ReferenceField, TextField, EditButton, DisabledInput, LongTextInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostList = (props) => (
    <List {...props} perPage={5}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
        </SimpleForm>
    </Create>
);

