import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/Users/UserList';
import PostList from './components/Posts/PostList';
import PostEdit from './components/Posts/PostEdit';
import PostCreate from './components/Posts/PostCreate';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: React.FC = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
  </Admin>
);

export default App;