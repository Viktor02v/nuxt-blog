<script setup lang="ts">
import { MENU_DATA } from '~/components/layout/user/menu.data'
import { useMenuStore } from '@/store/menu.store';
const menuStore = useMenuStore()
</script>

<template>
	<div>
		<NuxtLink :to="item.url" v-for="item in MENU_DATA " :key="item.name"
			class="text-[25px] flex my-3 pl-3  items-center text-white hover:text-colorSidebar transition easy-in-out gap-[50px] md:gap-[70px] md:text-base">
			<Icon :name="item.icon" />
			<span>{{ item.name }}</span>
		</NuxtLink>
	</div>
</template>

<style scoped></style>