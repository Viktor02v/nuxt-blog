<template>
	<p class="flex animation gap-1 p-3 rounded border-2 border-sidebarBg">
		<span class="font-light">{{ label }}:</span>
		<span>
			<slot />
		</span>
	</p>
</template>

<script setup>
defineProps({
	label: {
		type: String,
		default: '',
		required: true,
	},
});
</script>

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