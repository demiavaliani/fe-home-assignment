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
	import { type UserInfo } from './types';

	const props = defineProps<{
		searchText: string;
	}>();

	const availableUsers = ref<UserInfo[]>([
		{ id: 1, fullName: 'Albert Fox', imgUrl: '1' },
		{ id: 2, fullName: 'Bessie Cooper', imgUrl: '2' },
		{ id: 3, fullName: 'Devon Richards', imgUrl: '3' },
		{ id: 4, fullName: 'Diane Lane', imgUrl: '4' },
		{ id: 5, fullName: 'Hannah Williamson', imgUrl: '5' },
		{ id: 6, fullName: 'Joe Wilson', imgUrl: '6' },
		{ id: 7, fullName: 'Kate Flores', imgUrl: '7' },
		{ id: 8, fullName: 'Marty Hawkins', imgUrl: '8' },
		{ id: 9, fullName: 'Devon Richards', imgUrl: '9' },
		{ id: 10, fullName: 'Diane Lane', imgUrl: '4' },
		{ id: 11, fullName: 'Hannah Williamson', imgUrl: '5' },
	]);

	const selectedUserIds = ref<number[]>([]);

	const onUserClick = (currentUserId: number) => {
		if (selectedUserIds.value.includes(currentUserId)) {
			selectedUserIds.value = selectedUserIds.value.filter((id) => id !== currentUserId);
		} else {
			selectedUserIds.value.push(currentUserId);
		}

		console.log(selectedUserIds.value);
	};

	const filteredUsersList = computed(() => {
		return availableUsers.value.filter(({ fullName }) =>
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
