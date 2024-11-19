<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { account } from '~/lib/appwrite';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const router = useRouter();

const logout = async () => {
	isLoadingStore.set(true)
	await account.deleteSession('current')
	authStore.clear()
	await router.push('/login')
	isLoadingStore.set(false)
}
</script>

<template>
	<aside class="w-[300px] fixed right-0 top-0 bg-sidebarBg py-5 flex flex-col gap-6 items-center h-[100vh]">
		<div class="relative w-full">
			<NuxtLink to="/" class="border-b flex flex-col pb-5 items-center w-full">
				<NuxtImg class="w-[100px] md:w-[120px] outline outline-white rounded-full" src="/logo-virus.webp" />
			</NuxtLink>

			<button @click="logout"
				class="absolute top-0 right-7 transition easy-in-out hover:text-colorSidebar text-white">
				<Icon size="23" name="line-md:logout" />
			</button>
		</div>

		<LayoutMenu />
	</aside>
</template>

<style scoped></style>