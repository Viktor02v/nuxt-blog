<script setup lang="ts">

</script>

<template>
	<section class="grid w-full h-[100vh]">
		<LayoutSidebar />
		<div>
			<slot />
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	@apply grid-cols-3 md:grid-cols-5 grid-flow-col;
	@apply md:grid-cols-5
}
</style>