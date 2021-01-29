import Store from '@/store';

// Base
const Base404 = () => import('@/views/Base404');
const BaseAuth = () => import('@/views/BaseAuth');
const BaseProblem = () => import('@/views/BaseProblem');
const BaseCommunity = () => import('@/views/BaseCommunity');
const BaseConcept = () => import('@/views/BaseConcept');

// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');
const AuthSignUp = () => import('@/views/auth/AuthSignUp');

// Community
const CommunityDefault = () => import('@/views/community/CommunityDefault');
const CommunityInformation = () => import('@/views/community/CommunityInformation');
const CommunityQuestion = () => import('@/views/community/CommunityQuestion');

// Question
const QuestionPosts = () => import('@/views/community/question/QuestionPosts');
const QuestionPost = () => import('@/views/community/question/QuestionPost');

const requireUnauthorized = () => (to, from, next) => {
  if (Store.getters.getIsLoading) {
    if (localStorage.getItem('isAuth') === 'true') {
      next('/');
    } else {
      next();
    }
  } else if (Store.getters.getIsAuth) {
    next('/');
  } else {
    next();
  }
};

export default [
  {
    name: 'root',
    path: '/',
    redirect: '/concept',
    meta: {
      title: '',
    },
  },
  {
    path: '*',
    component: Base404,
    meta: {
      title: '',
    },
  },
  {
    name: 'problem',
    path: '/problem',
    component: BaseProblem,
    meta: {
      title: 'Problem',
    },
  },
  {
    name: 'concept',
    path: '/concept',
    component: BaseConcept,
    meta: {
      title: 'Concept',
    },
  },
  {
    name: 'auth',
    path: '/auth',
    component: BaseAuth,
    redirect: '/auth/signin',
    beforeEnter: requireUnauthorized(),
    meta: {
      title: 'Auth',
    },
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
        meta: {
          title: 'Sign in',
        },
      },
      {
        name: 'sign up',
        path: 'signup',
        component: AuthSignUp,
        meta: {
          title: 'Sign up',
        },
      },
    ],
  },
  {
    name: 'community',
    path: '/community',
    redirect: '/community',
    component: BaseCommunity,
    meta: {
      title: 'Community',
    },
    children: [
      {
        name: 'default',
        path: '',
        component: CommunityDefault,
        meta: {
          title: 'Default',
        },
      },
      {
        name: 'question',
        path: 'question',
        redirect: { name: 'question posts' },
        component: CommunityQuestion,
        children: [
          {
            name: 'question posts',
            path: '',
            component: QuestionPosts,
          },
          {
            name: 'question post',
            path: ':id',
            props: { id: true, currentThread: true },
            component: QuestionPost,
          },

        ],
      },
      {
        name: 'information',
        path: 'information',
        component: CommunityInformation,
      },
    ],
  },
];
