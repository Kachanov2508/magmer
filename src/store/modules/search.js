import axios from "axios";

export default {
    state: {
        products: []
    },
    mutation: {
        updateProducts(state, products) {
            state.products = products;
        }
    },
    action: {
        async fetchProducts({emmit}, limit = 7) {
            const response = await axios.get(`https://magmer-server.herokuapp.com/products?_limit=${limit}`);
            emmit("updateProducts", response.data.products)
        }
    },
    getters: {
        getterProducts(state) {
            return state.products;
        }
    },
}