<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { useMenuStore } from '@/store/menu.store';
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

const menuStore = useMenuStore()
const toggleMenu = () => {
	menuStore.toggleMenu();
};
</script>

<template>
	<aside :class="{
		'translate-x-0': menuStore.isMenuOpen,
		'translate-x-[200px] md:translate-x-[250px]': !menuStore.isMenuOpen 
	}"
		class="w-[250px] md:w-[300px] fixed right-0 top-0 transition-all duration-500 bg-sidebarBg py-5 flex flex-col gap-6 h-[100vh]">
		<div class="relative w-full">
			<div class="transition-all duration-500">
				<button v-if="!menuStore.isMenuOpen" @click="toggleMenu"
					class="absolute top-0 left-2.5 transition easy-in-out hover:text-colorSidebar text-white">
					<Icon size="30" name="line-md:menu" />
				</button>

				<button v-else @click="toggleMenu"
					class="absolute top-0 left-3 transition easy-in-out hover:text-colorSidebar text-white">
					<Icon size="30" name="line-md:close-circle" />
				</button>
			</div>

			<div class="border-b flex flex-col pb-5 items-center w-full">
				<NuxtLink to="/" class="w-[100px] md:w-[120px] outline outline-white overflow-hidden rounded-full">
					<div class="relative">
						<NuxtImg class="" src="/Blogger.jpg" />
						<div
							class="bg-white w-full h-8 hover:h-40 transition-all  duration-300 ease-in-out flex items-center bg-opacity-60 justify-center bottom-0 right-0 absolute">
							<div class="mt-5 flex flex-col items-center">
								<p class="font-bold text-white text-shadow-sm text-2xl ">{{ authStore.user.name[0] }}</p>
								<p class="font-bold text-white text-shadow-sm text-[10px] ">{{ authStore.user.email }}</p>
							</div>
						</div>
					</div>
				</NuxtLink>
			</div>


			<button @click="logout"
				class="absolute top-0 right-7 transition easy-in-out hover:text-colorSidebar text-white">
				<Icon size="23" name="line-md:logout" />
			</button>
		</div>

		<LayoutUserMenu />
	</aside>
</template>

<style scoped></style>