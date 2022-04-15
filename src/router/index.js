import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../views/About.vue')
		},
		{
			path: '/skill',
			component: () => import('../views/Skill.vue')
		},
		{
			path: '/contact',
			component: () => import('../views/Contact.vue')
		},
	],
})

export default router