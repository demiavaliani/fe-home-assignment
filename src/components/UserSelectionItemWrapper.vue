<template>
	<div class="user-selection-item-wrapper">
		<UserSelectionItem
			v-for="user in filteredUsersList"
			:key="user.id"
			:full-name="user.fullName"
			:img-url="user.imgUrl"
			:active="selectedUserIds.includes(user.id)"
			@click="onUserClick(user.id)"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { ref, computed } from 'vue';
	import UserSelectionItem from '@/components/UserSelectionItem.vue';
	import { useUsersStore } from '../stores/usersStore';

	const props = defineProps<{
		searchText: string;
	}>();

	const selectedUserIds = ref<number[]>([]);
	const store = useUsersStore();

	const onUserClick = (currentUserId: number) => {
		if (selectedUserIds.value.includes(currentUserId)) {
			selectedUserIds.value = selectedUserIds.value.filter((id) => id !== currentUserId);
		} else {
			selectedUserIds.value.push(currentUserId);
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
