import Store from '@/store';

// Base
const Base404 = () => import('@/views/Base404');
const BaseAuth = () => import('@/views/BaseAuth');
const BaseProblem = () => import('@/views/BaseProblem');
const BaseCommunity = () => import('@/views/BaseCommunity');
const BaseConcept = () => import('@/views/BaseConcept');
const BaseUser = () => import('@/views/BaseUser');

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
const QuestionPostCreate = () => import('@/views/community/question/QuestionPostCreate');

// User
const UserProfile = () => import('@/views/user/UserProfile');

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
      requireAuth: false,
    },
  },
  {
    path: '*',
    component: Base404,
    meta: {
      title: '',
      requireAuth: false,
    },
  },
  {
    name: 'problem',
    path: '/problem',
    component: BaseProblem,
    meta: {
      title: 'Problem',
      requireAuth: false,
    },
  },
  {
    name: 'concept',
    path: '/concept',
    component: BaseConcept,
    meta: {
      title: 'Concept',
      requireAuth: false,
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
      requireAuth: false,
    },
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
        meta: {
          title: 'Sign in',
          requireAuth: false,
        },
      },
      {
        name: 'sign up',
        path: 'signup',
        component: AuthSignUp,
        meta: {
          title: 'Sign up',
          requireAuth: false,
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
      requireAuth: false,
    },
    children: [
      {
        name: 'default',
        path: '',
        component: CommunityDefault,
        meta: {
          title: 'Default',
          requireAuth: false,
        },
      },
      {
        name: 'question',
        path: 'question',
        redirect: '/question',
        component: CommunityQuestion,
        meta: {
          title: 'question',
          requireAuth: false,
        },
        children: [
          {
            name: 'question posts',
            path: '',
            component: QuestionPosts,
            meta: {
              title: 'question posts',
              requireAuth: false,
            },
          },
          {
            name: 'question post create',
            path: 'create',
            component: QuestionPostCreate,
            meta: {
              title: 'Create post',
              requireAuth: true,
            },
          },
          {
            name: 'question post',
            path: ':id',
            props: { id: true },
            component: QuestionPost,
            meta: {
              title: 'question post',
              requireAuth: false,
            },
          },
        ],
      },
      {
        name: 'information',
        path: 'information',
        component: CommunityInformation,
        meta: {
          title: 'question post',
          requireAuth: false,
        },
      },
    ],
  },
  {
    name: 'user',
    path: '/user',
    component: BaseUser,
    redirect: '/user/me',
    meta: {
      title: 'user',
      requireAuth: true,
    },
    children: [
      {
        name: 'profile',
        path: ':uid',
        component: UserProfile,
        meta: {
          title: 'profile',
          requireAuth: false,
        },
      },
    ],
  },
];
