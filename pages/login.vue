<script setup lang="ts">
useSeoMeta({
	title: "Login | Blogger",
});

const user = reactive({
	email: '',
	name: '',
	password: ''
})


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
					<button>Hey there</button>
					<button>Hey there</button>
				</div>
			</form>
		</div>
	</div>
</template>

<style scoped></style>