import React from 'react';
import { Edit, SimpleForm, ReferenceInput, SelectInput, TextInput, EditProps } from 'react-admin';

const PostEdit: React.FC<EditProps> = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="id" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput source="body" />
      </SimpleForm>
    </Edit>
  );
}

export default PostEdit;