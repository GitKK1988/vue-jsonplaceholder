import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/post/:id',
      name: 'post',
      component: () => import('../views/PostView.vue')
    },
    {
      path: '/comments',
      name: 'comments',
      component: () => import('../views/CommentsView.vue')
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: () => import('../views/CommentView.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('../views/TodosView.vue')
    },
    {
      path: '/todo/:id',
      name: 'todo',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/UsersView.vue')
    },
    {
      path: '/user/:id',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/albums',
      name: 'albums',
      component: () => import('../views/AlbumsView.vue')
    },
    {
      path: '/album/:id',
      name: 'album',
      component: () => import('../views/AlbumView.vue')
    }
  ]
})

export default router
