import Base404 from '@/views/Base404'

import BaseAuth from '@/views/BaseAuth'
import BaseProblem from '@/views/BaseProblem'
import BaseCommunity from '@/views/BaseCommunity'
import BaseConcept from '@/views/BaseConcept'

// Auth
import BaseSignIn from '@/views/auth/BaseSignIn'
import BaseSignUp from '@/views/auth/BaseSignUp'

// Community
import BaseInformation from '@/views/community/BaseInformation'
import BaseQuestion from '@/views/community/BaseQuestion'

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
    component: BaseCommunity,
    redirect: '/community/question',
    children: [
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