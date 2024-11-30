<script setup lang="ts">
import { useAppwriteUser } from '@/components/layout/user/profile/useUserDatails'
import { formatDate, formatTime } from '@/components/blogger/formatDate'

const { user, isLoading, error, fetchUser } = useAppwriteUser();
</script>

<template>
		<div class="flex w-full justify-center md:justify-normal gap-5 flex-wrap p-5 rounded bg-white">
			<LayoutUserProfileInfoField label="name">
				{{ user?.name }}
			</LayoutUserProfileInfoField>

			<LayoutUserProfileInfoField label="email">
				{{ user?.email }}
			</LayoutUserProfileInfoField>


			<LayoutUserProfileInfoField label="created">
				{{ formatDate(user?.$createdAt) }}
			</LayoutUserProfileInfoField>

			<LayoutUserProfileInfoField label="at">
				{{ formatTime(user?.$createdAt) }}
			</LayoutUserProfileInfoField>

			<LayoutUserProfileInfoField label="id">
				{{ user?.$id }}
			</LayoutUserProfileInfoField>
		</div>
</template>

<style scoped></style>