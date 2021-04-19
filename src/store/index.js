import axios from "axios";
import { createStore } from "vuex";

export default createStore({
	state: {
		isFetching: false,
		products: [],
		limit: 7,
		offset: 0,
		feedback: {
			phone: false,
			email: true
		},
	},
	mutations: {
		setProductToState(state, products) {
			state.products.push(...products);
			this.state.isFetching = false;
		},
	},
	actions: {
		async getProductsFromApi({ commit }) {
			this.state.isFetching = true;
			const response = await axios.get(
				`https://magmer-server.herokuapp.com/products?_limit=${this.state.limit}&_offset=${this.state.offset}`
			);
			commit("setProductToState", response.data.products);
		},
	},
	modules: {},
});
