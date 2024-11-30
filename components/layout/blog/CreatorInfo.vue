<script setup lang="ts">
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div class="text-[#d48484] rounded-full flex gap-10  relative  bg-white">
		
		<div class="flex w-[160px]  justify-start ml-5 overflow-x-auto items-center">
			<div class="flex gap-2 items-center">
				<p class="font-light text-[1rem]">by:</p>
				<span class="text-[1.7rem]"> {{ props.name }}</span>
			</div>

			<div class="rounded-full absolute top-0 right-0 border border-2 ">
				<NuxtImg class="w-[40px] h-[38px]" src="/logo-virus.webp" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>