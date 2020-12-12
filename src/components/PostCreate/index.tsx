import React from 'react';
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, CreateProps } from 'react-admin';

const PostCreate: React.FC<CreateProps> = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput source="body" multiline />
    </SimpleForm>
  </Create>
);

export default PostCreate;