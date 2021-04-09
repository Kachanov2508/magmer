<template>
	<div class="search">
		<div>
			<input type="text" placeholder="Что вы хотите найти?"/>
		</div>
		<div class="logo">
			  Magmer
		</div>
	</div>
</template>

<script>
export default {
	name: "Search",
};
</script>

<style>
.search {
  display: grid;
  grid-template-columns: 790px 1fr;
  align-items: center;
  column-gap: 20px;
	margin-top: 50px;
}

input {
  width: 100%;
  height: 75px;
}

.logo {
  font-size: 50px;
  color: #4C80A4;
  font-weight: 700;
  text-transform: uppercase;
}

</style>