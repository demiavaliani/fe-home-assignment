<template>
	<div class="main-view">
		<div class="main-view__added-users-wrapper">
			<AddedUserItem
				v-for="user in store.addedUsers"
				:key="user.id"
				:currentUserId="user.id"
				:full-name="user.fullName"
				:img-url="user.imgUrl"
			/>
		</div>

		<div>
			<button type="button" class="main-view__add-users-button" @click="onAddUsersClick">
				<img src="../assets/icons/add-users-icon.svg" />
				Add users
			</button>

			<UserSelectionWindow />
		</div>
	</div>
</template>

<script setup lang="ts">
	import UserSelectionWindow from '@/components/UserSelectionWindow.vue';
	import AddedUserItem from '@/components/AddedUserItem.vue';
	import { useUsersStore } from '@/stores/usersStore';

	const store = useUsersStore();

	const onAddUsersClick = () => (store.isUserSelectionWindowOpen = true);
</script>

<style lang="scss">
	.main-view {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		gap: 2rem;
		width: 34rem;
		height: 60rem;
		padding: 10rem;

		&__added-users-wrapper {
			display: flex;
			gap: 0.8rem;
		}

		&__add-users-button {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 0.4rem;
			padding: 0.8rem 1.2rem;
			border: 0;
			border-radius: 0.4rem;
			font-family: 'Inter';
			font-size: 1.2rem;
			font-weight: 600;
			line-height: 1.6rem;
			background-color: $neutral-10;
			color: $neutral-90;

			&:hover {
				background-color: $neutral-20;
			}
		}
	}
</style>
