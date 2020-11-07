import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserList from './components/UserList';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: React.FC = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={UserList} />
      <Resource name="posts" list={ListGuesser} />
    </Admin>
  );
}

export default App;