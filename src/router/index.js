import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories";
import Cart from "../views/Cart";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/categories",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		// component: () => import(/* webpackChunkName: "about" */ '../views/Categories.vue')
		component: Categories,
	},
	{
		path: "/cart",
		name: "Cart",
		component: Cart,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
