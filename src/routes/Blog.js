import MainLayout from 'components/layouts/MainLayout';

import { postsPath } from 'helpers/routes';

import { fetchPosts, searchRequest } from 'actions/Posts';
import { fetchPost } from 'actions/Post';

import AboutPage from 'components/containers/AboutPage';
import PostsContainer from 'containers/PostsContainer';
import PostContainer from 'containers/PostContainer';

const Index = {
  path: '/',
  component: PostsContainer,
  prepareData: (store) => {
    store.dispatch(fetchPosts());
  }
};

const About = {
  path: '/about',
  component: AboutPage
};

const PostRoute = {
  path: postsPath(),
  component: PostContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPost(params.id));
  }
};

const PaginationRoute = {
  path: '/page/:page',
  component: PostsContainer,
  prepareData: (store, query, params) => {
    store.dispatch(fetchPosts(params.page));
  }
};

const SearchRoute = {
  path: '/search',
  component: PostsContainer,
  prepareData: (store, query) => {
    store.dispatch(searchRequest(query.q));
  }
};

export default {
  component: MainLayout,
  childRoutes: [
    Index,
    PostRoute,
    PaginationRoute,
    SearchRoute,
    About
  ]
};
