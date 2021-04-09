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
    background: none;
    font-size: 30px;
    font-weight: 300;
    color: inherit;
    border: none;
    outline: none;
    box-shadow: inset -5px -5px 15px 0 #ffffff, inset 5px 5px 15px 0 #c6c6c6;
    border-radius: 8px;
    padding: 20px 20px 20px 40px;
    opacity: .6;
  }

  input::placeholder{
    /* opacity: .6; */
  }

  .logo {
    font-size: 50px;
    color: #4C80A4;
    font-weight: 700;
    text-transform: uppercase;
  }
</style>