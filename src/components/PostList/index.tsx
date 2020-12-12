import React from 'react';
import { List, Datagrid, TextField, ReferenceField, ListProps, EditButton } from 'react-admin';
import PostFilter from '../PostFilter';

const PostList: React.FC<ListProps> = (props) => (
  <List filters={<PostFilter />} {...props}>
    <Datagrid>
      <TextField source="id" />
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <TextField source="title" />
        <EditButton />
    </Datagrid>
  </List>
);

export default PostList;