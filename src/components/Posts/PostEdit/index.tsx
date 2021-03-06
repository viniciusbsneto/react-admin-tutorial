import React from 'react';
import { Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, EditProps } from 'react-admin';

import PostTitle from '../PostTitle';

const PostEdit: React.FC<EditProps> = (props) => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput source="body" multiline />
    </SimpleForm>
  </Edit>
);

export default PostEdit;