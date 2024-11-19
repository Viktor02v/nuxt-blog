<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { account } from '~/lib/appwrite';

const isLoadingStore = useIsLoadingStore();
const authStore = useAuthStore();

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
	<section>
		<LayoutLoader v-if="isLoadingStore.isLoading" />
		<section v-else :class="{ grid: authStore.isAuth }" class="relative w-full h-[100vh]">
			<LayoutSidebar v-if="authStore.isAuth" />
			<div>
				<slot />
			</div>
		</section>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	@apply grid-cols-[4fr_1fr];
}
</style>