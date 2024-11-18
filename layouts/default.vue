<script setup lang="ts">

</script>

<template>
	<section class="grid relative w-full h-[100vh]">
		<LayoutSidebar  />
		<div>
			<slot />
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	@apply  grid-cols-[4fr_1fr];
}
</style>