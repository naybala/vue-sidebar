import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: () => import('../components/About.vue')
		},
		{
			path: '/skill',
			component: () => import('../components/Skill.vue')
		},
		{
			path: '/project',
			component: () => import('../components/Project.vue')
		},
		{
			path: '/contact',
			component: () => import('../components/Contact.vue')
		},
		{
			path: '/setting',
			component: () => import('../components/Setting.vue')
		},
	],
})

export default router