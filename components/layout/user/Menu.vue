<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/user/menu.data'
</script>

<template>
	<div>
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name"
			class="flex my-3 items-center text-white hover:text-colorSidebar transition easy-in-out gap-5 md:text-base">
			<Icon :name="item.icon" />
			<span>{{ item.name }}</span>
		</NuxtLink>
	</div>
</template>

<style scoped></style>