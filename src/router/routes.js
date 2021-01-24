const Base404 = () => import('@/views/Base404')

const BaseAuth = () => import('@/views/BaseAuth')
const BaseProblem = () => import('@/views/BaseProblem')
const BaseCommunity = () => import('@/views/BaseCommunity')
const BaseConcept = () => import('@/views/BaseConcept')

// Auth
const BaseSignIn = () => import('@/views/auth/BaseSignIn')
const BaseSignUp = () => import('@/views/auth/BaseSignUp')

// Community
const BaseBoard = () => import('@/views/community/BaseBoard')
const BaseInformation = () => import('@/views/community/BaseInformation')
const BaseQuestion = () => import('@/views/community/question/BaseQuestion')

import Store from '@/store'

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
    beforeEnter: (to, from, next) => {
      console.log('test')
      console.log(!Store.getters.getIsAuth)
      if (!Store.getters.getIsAuth) {
        next()
      }
    },
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
    redirect: { name: 'base board' },
    component: BaseCommunity,
    children: [
      {
        name: 'base board',
        path: '',
        component: BaseBoard,
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