<template>
	<div class="container">
		<Header />
    <Search />
	</div>
</template>

<script>
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";

export default {
	name: "Home",
	components: { Header, Search },
};
</script>
