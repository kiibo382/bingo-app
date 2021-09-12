import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Bingo from '../components/Bingo.vue'
import BingoDraw from '../components/BingoDraw.vue'
import BingoCard from '../components/BingoCard.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/bingo',
    name: 'Bingo',
    component: Bingo,
    children: [
      {
        path: '/:bingoId/draw',
        name: 'BingoDraw',
        component: BingoDraw
      },
      {
        path: '/:bingoId/card',
        name: 'BingoDraw',
        component: BingoCard
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
