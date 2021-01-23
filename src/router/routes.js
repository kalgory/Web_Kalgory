import Base404 from '@/views/Base404'

import BaseAuth from '@/views/BaseAuth'
import BaseProblem from '@/views/BaseProblem'

const BaseCommunity = () => import('@/views/BaseCommunity')
import BaseConcept from '@/views/BaseConcept'


// Auth
import BaseSignIn from '@/views/auth/BaseSignIn'
import BaseSignUp from '@/views/auth/BaseSignUp'

// Community
const BaseBoard = () => import('@/views/community/BaseBoard')
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
        redirect: {name: 'base board'},
        component: BaseCommunity,
        children: [
            {
                name: 'base board',
                path: '',
                component: BaseBoard
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