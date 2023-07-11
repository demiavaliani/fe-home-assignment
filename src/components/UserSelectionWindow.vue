<template>
	<div class="user-selection-window" v-if="store.isUserSelectionWindowOpen">
		<div class="user-selection-window__header">
			<div class="user-selection-window__text">
				<p class="user-selection-window__title">Add users</p>
				<button type="button" class="user-selection-window__cancel" @click="cancel">Cancel</button>
			</div>

			<div class="user-selection-window__search">
				<img src="../assets/icons/icon-search-16.svg" class="user-selection-window__search-icon" />
				<input
					type="search"
					class="user-selection-window__search-input"
					placeholder="Find user"
					@input="onUserType"
				/>
			</div>
		</div>

		<UserSelectionItemWrapper :search-text="searchText" />

		<div class="user-selection-window__footer">
			<button type="button" class="user-selection-window__add-button" @click="addUsers">Add</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import UserSelectionItemWrapper from './UserSelectionItemWrapper.vue';
	import { useUsersStore } from '@/stores/usersStore';
	import { type UserInfo } from '../components/types';

	const searchText = ref('');
	const store = useUsersStore();

	const onUserType = (ev: Event) => (searchText.value = (ev.target as HTMLInputElement).value);

	const cancel = () => (store.isUserSelectionWindowOpen = false);

	const addUsers = () => {
		let usersToAdd: UserInfo[] = [];

		store.selectedUserIds.forEach((selectedUserId) => {
			usersToAdd.push(
				store.availableUsers.find((user) => user.id === selectedUserId) || ({} as UserInfo)
			);
		});

		store.addedUsers = usersToAdd;
	};
</script>

<style lang="scss">
	.user-selection-window {
		position: absolute;
		width: 28rem;
		height: fit-content;
		border-radius: 0.4rem;
		box-shadow: $shadow-modal;
		font-family: 'Inter';

		&__header {
			display: flex;
			flex-direction: column;
			box-shadow: $shadow-short-bottom;
		}

		&__text {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1.6rem 1.6rem 0 1.6rem;
		}

		&__title {
			font-size: 1.4rem;
			font-weight: 600;
			line-height: 1.8rem;
			color: $neutral-90;
		}

		&__cancel {
			padding: 0;
			border: 0;
			font-size: 1.1rem;
			font-weight: 400;
			line-height: 1.6rem;
			background-color: transparent;
			color: $neutral-70;
			cursor: pointer;

			&:hover {
				color: $neutral-90;
			}
		}

		&__search {
			position: relative;
			display: flex;
			align-items: center;
			padding: 0.8rem;

			&-icon {
				position: absolute;
				left: 1.6rem;
				pointer-events: none;
			}

			&-input {
				width: 100%;
				height: 3.6rem;
				padding: 0.8rem 0.8rem 0.8rem 2.8rem;
				border: 0;

				&::placeholder {
					font-size: 1.2rem;
					font-weight: 400;
					line-height: 1.6rem;
					color: $neutral-70;
				}

				&:focus-visible {
					outline: 0;
				}

				&::-webkit-search-cancel-button {
					display: none;
				}
			}
		}

		&__footer {
			display: flex;
			justify-content: center;
			padding: 1.2rem 1.6rem;
			border-top: 1px solid $neutral-20;
		}

		&__add-button {
			padding: 0.8rem 1.6rem;
			border: 0;
			border-radius: 0.3rem;
			font-size: 1.2rem;
			font-weight: 600;
			line-height: 1.6rem;
			color: $neutral-00;
			background-color: $blue-50;
			box-shadow: $shadow-short;
			cursor: pointer;

			&:hover {
				background-color: $blue-70;
				box-shadow: $shadow-basic;
			}
		}
	}
</style>
