<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="flex text-[#d48484] relative rounded-full px-5 pr-11 justify-center bg-white items-center">
		<div class="flex w-[125px] overflow-x-auto items-center">
			<div class="flex gap-1 items-center">
				<p class="font-light">by:</p>
				<span> {{ props.name }}</span>
			</div>
			<div class="rounded-full absolute top-0 right-0 border border-2 overflow-hidden">
				<NuxtImg class="w-[40px] h-[38px]" src="/logo-virus.webp" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>