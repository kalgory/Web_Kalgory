// Base
const Base404 = () => import('@/views/Base404');
const BaseAuth = () => import('@/views/BaseAuth');
const BaseProblem = () => import('@/views/BaseProblem');
const BaseCommunity = () => import('@/views/BaseCommunity');
const BaseConcept = () => import('@/views/BaseConcept');
const BaseUser = () => import('@/views/BaseUser');

// Problem
const ProblemDefault = () => import('@/views/problem/ProblemDefault');
const ProblemSolve = () => import('@/views/problem/ProblemSolve');

// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn');
const AuthSignUp = () => import('@/views/auth/AuthSignUp');
const AuthVerify = () => import('@/views/auth/AuthVerify');

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
      isAppBarShow: true,
    },
  },
  {
    name: '404',
    path: '*',
    component: Base404,
    meta: {
      title: '',
      isRequireAuth: false,
      isAppBarShow: true,
    },
  },
  {
    name: 'problem',
    path: '/problem',
    redirect: '/problem',
    component: BaseProblem,
    meta: {
      title: 'Problem',
      isRequireAuth: false,
      isAppBarShow: true,
    },
    children: [
      {
        name: 'problem default',
        path: '',
        component: ProblemDefault,
        meta: {
          title: 'Default',
          isRequireAuth: false,
          isAppBarShow: true,
        },
      },
      {
        name: 'problem solve',
        path: ':id',
        component: ProblemSolve,
        meta: {
          title: 'Problem Solve',
          isRequireAuth: false,
          isAppBarShow: false,
        },
      },
    ],
  },
  {
    name: 'concept',
    path: '/concept',
    component: BaseConcept,
    meta: {
      title: 'Concept',
      isRequireAuth: false,
      isAppBarShow: true,
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
      isAppBarShow: false,
    },
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
        meta: {
          title: 'Sign in',
          isRequireAuth: false,
          isAppBarShow: false,
        },
      },
      {
        name: 'sign up',
        path: 'signup',
        component: AuthSignUp,
        meta: {
          title: 'Sign up',
          isRequireAuth: false,
          isAppBarShow: false,
        },
      },
      {
        name: 'verify',
        path: 'verify',
        component: AuthVerify,
        meta: {
          title: 'verify',
          isRequireAuth: false,
          isAppBarShow: false,
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
      isAppBarShow: true,
    },
    children: [
      {
        name: 'community default',
        path: '',
        component: CommunityDefault,
        meta: {
          title: 'Default',
          isRequireAuth: false,
          isAppBarShow: true,
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
          isAppBarShow: true,
        },
        children: [
          {
            name: 'question posts',
            path: '',
            component: QuestionPosts,
            meta: {
              title: 'question posts',
              isRequireAuth: false,
              isAppBarShow: true,
            },
          },
          {
            name: 'question post create',
            path: 'create',
            component: QuestionPostCreate,
            meta: {
              title: 'Create post',
              isRequireAuth: true,
              isAppBarShow: true,
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
              isAppBarShow: true,
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
          isAppBarShow: true,
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
      isAppBarShow: true,
    },
    children: [
      {
        name: 'myProfile',
        path: 'me',
        component: UserProfile,
        meta: {
          title: 'my profile',
          isRequireAuth: true,
          isAppBarShow: true,
        },
      },
      {
        name: 'profile',
        path: ':uid',
        component: UserProfile,
        meta: {
          title: 'profile',
          isRequireAuth: false,
          isAppBarShow: true,
        },
      },
    ],
  },
];
