import React from 'react';
import { List, Datagrid, TextField, ReferenceField, ListProps, EditButton, SimpleList } from 'react-admin';
import { useMediaQuery } from '@material-ui/core';
import PostFilter from '../PostFilter';

const PostList: React.FC<ListProps> = (props) => {
  const isSmall = useMediaQuery<any>((theme) => theme.breakpoints.down('sm'));
  
  return (
    <List filters={<PostFilter />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.user}
          secondaryText={record => record.title}
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <ReferenceField source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  )
};

export default PostList;