<script setup lang="ts">
import { useIsLoadingStore, useAuthStore } from '@/store/auth.store';
import { v4 as uuid } from 'uuid'
import { account } from '~/lib/appwrite';

useSeoMeta({
	title: "Login | Blogger",
});

// User data
const user = reactive({
	email: '',
	name: '',
	password: ''
})

// Call useLoadingStore
const isLoadingStore = useIsLoadingStore()
// Call authStore
const authStore = useAuthStore()

// Call useRouter
const router = useRouter()

// Function to Login
const login = async () => {
	try {
		isLoadingStore.set(true); // Start loading
		await account.createEmailPasswordSession(user.email, user.password); // Create session
		const response = await account.get(); // Fetch user data

		if (response) {
			authStore.set({
				user: {
					email: response.email,
					name: response.name,
					status: response.status,
				}
			});
		}

		// Reset user data
		user.email = '';
		user.password = '';
		user.name = '';

		// Navigate to home page
		await router.push('/');
	} catch (error) {
		alert(`Login failed:, ${error}`);
	} finally {
		isLoadingStore.set(false); // Stop loading
	}
};

// Function to Register
const register = async () => {
	try {
		await account.create(uuid(), user.email, user.password, user.name)

		await login();
	} catch (error) {
		alert(`Registration failed:, ${error}`);
	}
}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full ">
		<div class="rounded bg-sidebarBg w-1/3 p-5 ">
			<h1 class="text-2xl text-white hover:text-colorSidebar font-bold text-center mb-5">Login</h1>

			<form>
				<UiInput v-model="user.email" placeholder="Email" type="email" class="mb-3" />
				<UiInput v-model="user.password" placeholder="Password" type="password" class="mb-3" />
				<UiInput v-model="user.name" placeholder="Name" type="text" class="mb-3" />

				<div class="flex items-center justify-center gap-5">
					<UiButton @click="login" class="text-white" variant="secondary" type="button">Login</UiButton>
					<UiButton class="text-white" variant="secondary" type="button">Register
					</UiButton>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped></style>