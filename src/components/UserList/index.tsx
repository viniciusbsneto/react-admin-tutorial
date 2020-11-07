import React from 'react';
import { List, Datagrid, TextField, EmailField, ListProps } from 'react-admin';
import MyUrlField from '../MyUrlField';

const UserList: React.FC<ListProps> = (props) => {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="phone" />
        <MyUrlField source="website" />
        <TextField source="company.name" />
      </Datagrid>
    </List>
  );
}

export default UserList;