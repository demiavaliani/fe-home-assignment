<template>
	<div class="user-selection-item-wrapper">
		<UserSelectionItem
			v-for="user in filteredUsersList"
			:key="user.id"
			:full-name="user.fullName"
			:img-url="user.imgUrl"
			:active="store.selectedUserIds.includes(user.id)"
			@click="selectUser(user.id)"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { computed } from 'vue';
	import UserSelectionItem from '@/components/UserSelectionItem.vue';
	import { useUsersStore } from '../stores/usersStore';

	const props = defineProps<{
		searchText: string;
	}>();

	const store = useUsersStore();

	const selectUser = (currentUserId: number) => {
		if (store.selectedUserIds.includes(currentUserId)) {
			store.selectedUserIds = store.selectedUserIds.filter((id) => id !== currentUserId);
		} else {
			store.selectedUserIds.push(currentUserId);
		}
	};

	const filteredUsersList = computed(() => {
		return store.availableUsers.filter(({ fullName }) =>
			fullName.toLowerCase().trim().includes(props.searchText.toLocaleLowerCase().trim())
		);
	});
</script>

<style lang="scss">
	.user-selection-item-wrapper {
		height: 35.2rem;
		overflow-y: auto;
	}
</style>
