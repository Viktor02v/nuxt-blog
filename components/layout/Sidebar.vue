<script setup lang="ts">

</script>

<template>
	<aside class="w-full bg-sidebarBg py-5 flex flex-col gap-6 items-center h-[100vh]">
		<div class="relative w-full">
		<NuxtLink to="/" class="border-b flex flex-col pb-5 items-center w-full">
		<NuxtImg class="w-[100px] md:w-[150px]" src="/logo-virus.webp"/>
	   </NuxtLink>

		<button class="absolute top-0 right-7 transition easy-in-out hover:text-colorSidebar text-white">
			<Icon size="23" name="line-md:logout" />
		</button>
		</div>

		<LayoutMenu/>
	</aside>
</template>

<style scoped>
</style>