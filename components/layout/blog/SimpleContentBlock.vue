<script setup lang="ts">

</script>

<template>
	<div id="content-block" class="w-full mb-10 flex flex-col items-start">
		<!-- Image Section -->
		<div class="mb-10 w-full justify-center">
			<slot name="image" class="">
				<p>There has been some issue loading the image.</p>
			</slot>
		</div>

		<!-- Description Section -->
		<div class="w-[280px] md:w-full text-[1rem] break-words md:break-keep">
			<slot name="description"></slot>
		</div>
	</div>
</template>

<style scoped>

</style>
