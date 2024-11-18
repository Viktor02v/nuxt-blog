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
	@apply  grid-cols-[1fr_4fr];
}
</style>