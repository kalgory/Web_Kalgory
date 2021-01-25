import Store from '@/store'

// Base
const Base404 = () => import('@/views/Base404')
const BaseAuth = () => import('@/views/BaseAuth')
const BaseProblem = () => import('@/views/BaseProblem')
const BaseCommunity = () => import('@/views/BaseCommunity')
const BaseConcept = () => import('@/views/BaseConcept')

// Auth
const AuthSignIn = () => import('@/views/auth/AuthSignIn')
const AuthSignUp = () => import('@/views/auth/AuthSignUp')

// Community
const CommunityDefault = () => import('@/views/community/CommunityDefault')
const CommunityInformation = () => import('@/views/community/CommunityInformation')
const CommunityQuestion = () => import('@/views/community/CommunityQuestion')

//Question
const QuestionThread = () => import('@/views/community/question/QuestionThread')

const requireUnauthorized = () => (to, from, next) => {
  if (Store.getters.getIsLoading) {
    if (localStorage.getItem('isAuth') === 'true') {
      next('/')
    } else {
      next()
    }
  } else {
    if (Store.getters.getIsAuth) {
      next('/')
    } else {
      next()
    }
  }
}

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
    beforeEnter: requireUnauthorized(),
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: AuthSignIn,
      },
      {
        name: 'sign up',
        path: 'signup',
        component: AuthSignUp,
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
        component: CommunityDefault,
      },
      {
        name: 'question',
        path: 'question',
        redirect: { name: 'question thread' },
        component: CommunityQuestion,
        children: [
          {
            name: 'question thread',
            path: ':id',
            props: { id: true, currentThread: true },
            component: QuestionThread,
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
]