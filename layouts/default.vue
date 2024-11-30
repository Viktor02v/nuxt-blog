<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { useMenuStore } from '@/store/menu.store';
import { account } from '~/lib/appwrite';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();
const menuStore = useMenuStore()

onMounted(async () => {
	const isLoadingStore = useIsLoadingStore();
	const authStore = useAuthStore();
	const router = useRouter();
	try {
		const user = await account.get()
		if (user) {
			authStore.set(user)
		}
	} catch (error) {
		alert(`Something went wrong: ${error.message || error}`)
		router.push('/login')
	} finally {
		isLoadingStore.set(false)
	}
})


</script>

<template>
	<LayoutLoader v-if="isLoadingStore.isLoading" />
	<section v-else class="relative w-[430px] h-[100vh]">
		<LayoutUserSidebar v-if="authStore.isAuth" />
		<div :class="{
			'md:w-[1140px]': menuStore.isMenuOpen,
			'md:w-[1390px]': !menuStore.isMenuOpen
		}" class="transition-all w-full duration-500">
			<slot />
		</div>
	</section>
</template>

<style scoped></style>