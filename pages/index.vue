<script setup lang="ts">
import { useAppwriteUser } from "@/components/layout/user/profile/useUserDatails"
const { isLoading, error } = useAppwriteUser();
useSeoMeta({
	title: 'Profile | Blogger'
})

</script> 

<template>
	<main class="p-10 w-full h-full">
		<div v-if="isLoading" class="wrapper">
			<Icon name="eos-icons:bubble-loading" size="300" class="text-colorSidebar" />
		</div>

		<div v-else>
			<h1 class="font-bold text-title text-center text-4xl mb-10">
				Profile | Blogger
			</h1>

			<section id="userInfo" class="w-full mb-20">
				<UiCard class="w-full">
					<UiCardHeader>
						<UiCardTitle>
							<div class="flex justify-center">
								<h2 class="font-bold rounded  p-3 bg-white text-title text-4xl mb-5">User Info</h2>
							</div>
						</UiCardTitle>
					</UiCardHeader>

					<UiCardContent class="flex text-colorSidebar justify-center ">

						<LayoutUserProfileUserInfo />

						<div v-if="error">There has been an error</div>
					</UiCardContent>
				</UiCard>
			</section>
		</div>
	</main>

</template>

<style scoped>
.wrapper {
	@apply flex items-center justify-center w-full h-full
}
</style>