import React from 'react';
import { List, Datagrid, TextField, ReferenceField, ListProps } from 'react-admin';

const PostList: React.FC<ListProps> = (props) => {
  return (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
  );
}

export default PostList;