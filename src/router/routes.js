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

export default [
  {
    name: 'root',
    path: '/',
    redirect: '/concept',
    meta: {
      title: '',
      isRequireAuth: false,
    },
  },
  {
    path: '*',
    component: Base404,
    meta: {
      title: '',
      isRequireAuth: false,
    },
  },
  {
    name: 'problem',
    path: '/problem',
    component: BaseProblem,
    meta: {
      title: 'Problem',
      isRequireAuth: false,
    },
  },
  {
    name: 'concept',
    path: '/concept',
    component: BaseConcept,
    meta: {
      title: 'Concept',
      isRequireAuth: false,
    },
  },
  {
    name: 'auth',
    path: '/auth',
    component: BaseAuth,
    redirect: '/auth/signin',
    meta: {
      title: 'Auth',
      isRequireAuth: false,
    },
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
        meta: {
          title: 'Sign in',
          isRequireAuth: false,
        },
      },
      {
        name: 'sign up',
        path: 'signup',
        component: AuthSignUp,
        meta: {
          title: 'Sign up',
          isRequireAuth: false,
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
      isRequireAuth: false,
    },
    children: [
      {
        name: 'default',
        path: '',
        component: CommunityDefault,
        meta: {
          title: 'Default',
          isRequireAuth: false,
        },
      },
      {
        name: 'question',
        path: 'question',
        redirect: '/question',
        component: CommunityQuestion,
        meta: {
          title: 'question',
          isRequireAuth: false,
        },
        children: [
          {
            name: 'question posts',
            path: '',
            component: QuestionPosts,
            meta: {
              title: 'question posts',
              isRequireAuth: false,
            },
          },
          {
            name: 'question post create',
            path: 'create',
            component: QuestionPostCreate,
            meta: {
              title: 'Create post',
              isRequireAuth: true,
            },
          },
          {
            name: 'question post',
            path: ':id',
            props: { id: true },
            component: QuestionPost,
            meta: {
              title: 'question post',
              isRequireAuth: false,
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
          isRequireAuth: false,
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
      isRequireAuth: true,
    },
    children: [
      {
        name: 'myProfile',
        path: 'me',
        component: UserProfile,
        meta: {
          title: 'my profile',
          isRequireAuth: true,
        },
      },
      {
        name: 'profile',
        path: ':uid',
        component: UserProfile,
        meta: {
          title: 'profile',
          isRequireAuth: false,
        },
      },
    ],
  },
];
