<script setup lang="ts">
import { useAppwriteUser } from '@/components/layout/user/profile/useUserDatails'
const { isLoading, error, fetchUser } = useAppwriteUser();
useSeoMeta({
	title: 'Profile | Blogger'
})

</script>

<template>
	<main class="p-10 w-full h-full">
		<h1 class="font-bold text-title text-4xl mb-10">
			Profile | Blogger
		</h1>

		<section id="userInfo" class="w-full">
			<UiCard class="w-full">
				<UiCardHeader>
					<div class="flex justify-center">
						<h2 class="font-bold rounded  p-3 bg-white text-title text-4xl mb-5">User Info</h2>
					</div>
					<UiCardTitle class="flex justify-center ">
						<div v-if="isLoading">
							<Icon name="eos-icons:bubble-loading" class="bg-white" />
						</div>

						<LayoutUserProfileUserInfo v-else />

						<div v-if="error">There has been an error</div>
					</UiCardTitle>
				</UiCardHeader>
			</UiCard>
		</section>
	</main>

</template>

<style scoped></style>