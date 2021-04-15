<template>
	<div class="description">
		<SliceInformation
			v-if="!activeDetails && !activeQuestion"
			:title="title"
			:description="description"
		/>
		<Information
			v-if="activeDetails"
			:title="title"
			:description="description"
			:specifications="specifications"
			:activeDetails="activeDetails"
		/>
		<Question 
			v-if="activeQuestion"
		/>
	</div>
</template>

<script>
import Information from "./Information/Information";
import SliceInformation from './Information/SliceInformation.vue';
import Question from './Question.vue';
export default {
	components: { Information, SliceInformation, Question },
	name: "Description",
	props: ["title", "description", "specifications", "activeDetails", "activeQuestion"],
};
</script>

<style scoped>
.description {
	grid-area: description;
	box-shadow: 3px 3px 5px 0 #c6c6c6, -3px -3px 5px 0 #ffffff;
	border-radius: 8px;
}
</style>
