<script setup lang="ts">
const props = defineProps({
	aboutWords: Array,
	default: ''
})
</script>

<template>
	<div class="flex  md:w-full bg-white border border-sidebarBg p-5 justify-between rounded md:justify-center items-center flex-wrap gap-4">
		<ul v-for="item in props.aboutWords" :key="item" class="">
			<li class="md:text-2xl text-[15px] cursor-pointer  hover:bg-colorSidebar bg-sidebarBg text-white p-4 animation rounded">{{
				item }}</li>
		</ul>
	</div>
</template>

<style scoped>
@keyframes show {
	from {
		transform: scale(0.5) translateY(-30px);
		opacity: 0.4;
	}

	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

.animation {
	animation: show 0.3s ease-in-out;
}
</style>