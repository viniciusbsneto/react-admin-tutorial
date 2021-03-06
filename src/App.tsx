import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import PostIcon from '@material-ui/icons/Book';

import UserList from './components/Users/UserList';
import PostList from './components/Posts/PostList';
import PostEdit from './components/Posts/PostEdit';
import PostCreate from './components/Posts/PostCreate';
import Dashboard from './components/Dashboard';

import authProvider from './providers/auth';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App: React.FC = () => (
  <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} icon={UserIcon} />
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
  </Admin>
);

export default App;