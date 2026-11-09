import { tiRulerAlt } from '@quasar/extras/themify'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('@/pages/GPACalculatorApp.vue')},
      { path: 'second', component: () => import('@/pages/SecondPage.vue') },
      { path: 'note', component: () => import('@/pages/NotePage.vue')},
      { path: 'note/:id',
        name: 'NoteDetail',
        component: () => import('@/pages/NotePageDetail.vue')},
         { path: 'button', component: () => import('@/pages/Ex_qbtn.vue')},
         { path: 'list', component: () => import('@/pages/Ex_qlist.vue')},
         { path: 'table', component: () => import('@/pages/Ex_qtable.vue')},
          { path: 'Notify', component: () => import('@/pages/Ex_Notify.vue')},
          { path: 'dialog', component: () => import('@/pages/Ex_dialog.vue')},
          { path: 'post', component: () => import('@/pages/Ex_crud.vue')},
           { path: 'mockapi', component: () => import('@/pages/SubjectPage.vue')},
            { path: 'login2',name:'login', component: () => import('@/pages/ch7/LoginPage.vue')},
            { path: 'profile', name:'proflie', meta: { requiresAuth: true },  component : () => import('@/pages/ch7/ProfilePage.vue')},
            { path: 'teacher', name:'teacher', meta: { requiresAuth: true,roles: ['teacher','admin'] },  component : () => import('@/pages/ch7/TeacherPage.vue')},
            { path: 'admin', name:'admin', meta: { requiresAuth: true,roles: ['admin'] },  component : () => import('@/pages/ch7/AdminPage.vue')},
            { path: 'env', name:'env', meta: { requiresAuth: tiRulerAlt},  component : () => import('@/pages/ch8/Ex_env.vue')},
            { path: 'subjects', name:'subjects', meta: { requiresAuth: tiRulerAlt},  component : () => import('@/pages/ch8/subjectsPage.vue')},
           

      {
  path: 'gpa',
  name: 'GPA',
  component: () => import('@/pages/GPACalculatorApp.vue'),
  meta: {
    requiresAuth: true
  }
},

{
  path: 'login',
  name: 'Login',
  component: () => import('@/pages/LoginPage.vue'),
  meta: {
    requiresAuth: false
  }
},
    ],
  },
  {
 path: '/note/new', 
  name: 'NewNote',
  component: () => import('@/pages/NewNote.vue')
  },


 
  {
    path: '/:catchAll(.*)*',
    component: () => import('@/pages/ErrorNotFound.vue'),
  },
]

export default routes
