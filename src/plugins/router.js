import Vue from 'vue'
import Router from 'vue-router'

import BaseAuth from '@/components/BaseAuth'
import BaseProblem from '@/components/BaseProblem'
import BaseCommunity from '@/components/BaseCommunity'
import BaseConcept from '@/components/BaseConcept'

// Auth
import SignInForm from '@/components/auth/SignInForm'
import SignUpForm from '@/components/auth/SignUpForm'

// Community
import InformationBoard from '@/components/community/InformationBoard'
import NoticeBoard from '@/components/community/NoticeBoard'
import QuestionBoard from '@/components/community/QuestionBoard'

Vue.use(Router)


const routes = [
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
    children: [
      {
        name: 'sign in',
        path: 'signin',
        component: SignInForm,
      },
      {
        name: 'sign up',
        path: 'signup',
        component: SignUpForm,
      },
    ],
  },
  {
    name: 'community',
    path: '/community',
    component: BaseCommunity,
    children: [
      {
        name: 'notice',
        path: 'notice',
        component: NoticeBoard,
      },
      {
        name: 'question',
        path: 'question',
        component: QuestionBoard,
      },
      {
        name: 'information',
        path: 'information',
        component: InformationBoard,
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,
})