import React, { FC } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
const MainPage = loadable(() => import('@layouts//MainPage'));
const Login = loadable(() => import('@pages/Login'));
const Signup = loadable(() => import('@pages/Signup'));
const Board = loadable(() => import('@layouts/../pages/Board'));
const Party = loadable(() => import('@pages/Party'));
const Home = loadable(() => import('@pages/Home'));
const Notice = loadable(() => import('@pages/Notice'));
const PostLists = loadable(() => import('@pages/PostLists'));
const PostWrite = loadable(() => import('@pages/PostWrite'));
const Auth = loadable(() => import('@pages/Auth'));
import { CookiesProvider } from 'react-cookie';
import loadable from '@loadable/component';
import Post from '@components/Post';
import CharacterSelect from '@components/CharacterSelect';

const App: FC = () => {
  return (
    <BrowserRouter>
      <CookiesProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route element={<MainPage />}>
            <Route path={'party'} element={<Party />} />
            <Route path={'test'} element={<CharacterSelect gameInfo={[]} />} />
            <Route path={'notice'} element={<Notice />} />
            <Route path={'board'} element={<Board />}>
              <Route path={'lists'} element={<PostLists />} />
              <Route path={'write'} element={<PostWrite />} />
              <Route path={':id'} element={<Post />} />
            </Route>
            <Route path={'auth'} element={<Auth />} />
            <Route path={'/'} element={<Home />} />
          </Route>
          <Route path="*" element={<Navigate to={'/'} replace />} />
        </Routes>
      </CookiesProvider>
    </BrowserRouter>
  );
};

export default App;
