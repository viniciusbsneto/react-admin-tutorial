import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UserList';
import PostList from './components/PostList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={PostList} />
    </Admin>
  );
}

export default App;