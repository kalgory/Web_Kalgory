import Vue from 'vue'
import Router from 'vue-router'

import BaseAuth from '@/components/BaseAuth'
import BaseCommunity from '@/components/BaseCommunity'
import BaseConcept from '@/components/BaseConcept'

// Auth
import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'

// Community
import InformationBoard from '@/components/community/InformationBoard'
import NoticeBoard from '@/components/community/NoticeBoard'
import QuestionBoard from '@/components/community/QuestionBoard'

Vue.use(Router)

const routes = [
  {
    name: 'concept',
    path: '/concept',
    component: BaseConcept,
  },
  { name: 'auth',
    path: '/auth',
    component: BaseAuth,
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: SignIn
      },
      {
        name: 'sign up',
        path: 'signup',
        component: SignUp
      },
    ]
  },
  {
    name: 'community',
    path: '/community',
    component: BaseCommunity,
    children: [
      {
        name: 'notice',
        path: 'notice',
        component: NoticeBoard
      },
      {
        name: 'question',
        path: 'question',
        component: QuestionBoard
      },
      {
        name: 'information',
        path: 'information',
        component: InformationBoard,
      },
    ]
  },
]

export default new Router({
  routes,
})