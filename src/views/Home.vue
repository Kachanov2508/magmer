<template>
	<div class="container">
		<Header />
		<Search />
		<Filter />
		<Products />
		<Feedback />
	</div>
	<Footer />
</template>

<script>
import Header from "@/components/Header/Header";
import Search from "@/components/Search/Search";
import Filter from "@/components/Filter/Filter";
import Products from "@/components/Products/Products";
import Preloader from "@/components/Products/Preloader";
import Feedback from "@/components/Feedback/Feedback";
import Footer from "@/components/Footer/Footer";

export default {
	name: "Home",
	components: {
		Header,
		Search,
		Filter,
		Products,
		Preloader,
		Feedback,
		Footer,
	},
};
</script>
