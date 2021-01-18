import Vue from 'vue'
import Router from 'vue-router'

import Base404 from '@/components/Base404'

import BaseAuth from '@/components/BaseAuth'
import BaseProblem from '@/components/BaseProblem'
import BaseCommunity from '@/components/BaseCommunity'
import BaseConcept from '@/components/BaseConcept'

// Auth
import AuthSignInCard from '@/components/auth/AuthSignInCard'
import AuthSignUpCard from '@/components/auth/AuthSignUpCard'

// Community
import CommunityInformationContainer from '@/components/community/CommunityInformationContainer'
import CommunityQuestionContainer from '@/components/community/CommunityQuestionContainer'

Vue.use(Router)

const routes = [
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
        component: AuthSignInCard,
      },
      {
        name: 'sign up',
        path: 'signup',
        component: AuthSignUpCard,
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
        component: CommunityQuestionContainer,
      },
      {
        name: 'information',
        path: 'information',
        component: CommunityInformationContainer,
      },
    ],
  },
]

export default new Router({
  mode: 'history',
  routes,
})