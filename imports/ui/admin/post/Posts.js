import React from 'react';


import { List, Edit, Create,DeleteButton, Datagrid, ReferenceField, TextField, EditButton , SelectInput, DisabledInput, LongTextInput, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostList = (props) => (
    <List {...props} perPage={5}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <ReferenceField label="Writer" source="writer_id" reference="Writer">
                <TextField source="name" />
            </ReferenceField>
            <EditButton />
            <DeleteButton/>
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="title" />
            <ReferenceInput  label="Writer" source="writer_id" reference="Writer">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="title" />
            <ReferenceInput  label="Writer" source="writer_id" reference="Writer">
                <SelectInput optionText="name" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

