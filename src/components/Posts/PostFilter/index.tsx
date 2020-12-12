import React from 'react';
import { Filter, TextInput, ReferenceInput, SelectInput } from 'react-admin';

const PostFilter: React.FC = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);


export default PostFilter;