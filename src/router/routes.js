const Base404 = () => import('@/views/Base404')

const BaseAuth = () => import('@/views/BaseAuth')
const BaseProblem = () => import('@/views/BaseProblem')
const BaseCommunity = () => import('@/views/BaseCommunity')
const BaseConcept = () => import('@/views/BaseConcept')

// Auth
const BaseSignIn = () => import('@/views/auth/BaseSignIn')
const BaseSignUp = () => import('@/views/auth/BaseSignUp')

// Community
const BaseCommunityDefault = () => import('@/views/community/BaseCommunityDefault')
const BaseInformation = () => import('@/views/community/BaseInformation')
const BaseQuestion = () => import('@/views/community/question/BaseQuestion')

export default [
  {
    name: 'home',
    path: '/',
    redirect: '/concept',
  },
  {
    path: '*',
    component: Base404,
  },
  {
    name: 'problem',
    path: '/problem',
    component: BaseProblem,
  },
  {
    name: 'concept',
    path: '/concept',
    component: BaseConcept,
  },
  {
    name: 'auth',
    path: '/auth',
    component: BaseAuth,
    redirect: '/auth/signin',
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: BaseSignIn,
      },
      {
        name: 'sign up',
        path: 'signup',
        component: BaseSignUp,
      },
    ],
  },
  {
    name: 'community',
    path: '/community',
    redirect: '/community',
    component: BaseCommunity,
    children: [
      {
        name: 'base board',
        path: '',
        component: BaseCommunityDefault,
      },
      {
        name: 'question',
        path: 'question',
        component: BaseQuestion,
      },
      {
        name: 'information',
        path: 'information',
        component: BaseInformation,
      },
    ],
  },
]