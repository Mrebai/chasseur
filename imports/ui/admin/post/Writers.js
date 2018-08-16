import React from 'react';


import { List, Edit, Create,DeleteButton,EmailField, Datagrid, ReferenceField, TextField, EditButton , SelectInput, DisabledInput, LongTextInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const WriterList = (props) => (
    <List {...props} perPage={5}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="age" />
            <TextField source="rank" />
            <EmailField source="email" />
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);

const WriterTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const WriterEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name" />
            <TextInput source="age" />
            <TextInput source="rank" />
            <TextInput source="email" />
        </SimpleForm>
    </Edit>
);

export const WriterCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="age" />
            <TextInput source="rank" />
            <TextInput source="email" />
        </SimpleForm>
    </Create>
);

