import axios from "axios";
import { createStore } from "vuex";
// import search from './modules/search'

export default createStore({

	state: {
		isFetching: false,
		products: [],
		limit: 7,
		offset: 0,
		searchValue: "",
		showMore: [],
		feedback: {
			phone: false,
			email: true,
		},
	},

	mutations: {

		pushProducts(state, products) {
			state.products.push(...products);
			state.showMore = [...products];
			state.offset = state.products.length;
			state.isFetching = false;
		},
		
		replaceProducts(state, products) {
			state.products = [...products];
			state.showMore = [...products];
			state.offset = state.products.length;
			state.isFetching = false;
		},

		togleIsFetching(state, fetching) {
			state.isFetching = fetching
		}

	},

	actions: {

		async getProducts({commit}) {
			this.state.isFetching = true;
			const response = await axios.get(`https://magmer-server.herokuapp.com/products?_limit=${this.state.limit}`);
			commit("pushProducts", response.data.products);
		},
 
		async showMoreProduct({commit}) {
			this.state.isFetching = true;
			if(this.state.searchValue) {
				const response = await axios.get(`https://magmer-server.herokuapp.com/products?_limit=${this.state.limit}&_offset=${this.state.offset}&_search=${this.state.searchValue}`);
				commit("pushProducts", response.data.products);
			} else {
				const response = await axios.get(`https://magmer-server.herokuapp.com/products?_limit=${this.state.limit}&_offset=${this.state.offset}`);
				commit("pushProducts", response.data.products);
			}
		},

		async searchProduct({commit}) {
			this.state.isFetching = true;
			if(this.state.searchValue !== "") {
				const response = await axios.get(`https://magmer-server.herokuapp.com/products?_limit=${this.state.limit}&_search=${this.state.searchValue}`);
				commit("replaceProducts", response.data.products)
			} else {
				const response = await axios.get(`https://magmer-server.herokuapp.com/products?_limit=${this.state.limit}`);
				commit("replaceProducts", response.data.products)
			}
		},
	},

	modules: {},
});
