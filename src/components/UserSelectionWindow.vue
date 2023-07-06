<template>
	<div class="user-selection-window">
		<div class="user-selection-window__header">
			<div class="user-selection-window__text">
				<p class="user-selection-window__title">Add users</p>
				<!-- <p class="user-selection-window__cancel">Cancel</p> -->
				<button type="button" class="user-selection-window__cancel">Cancel</button>
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
			<button type="button" class="user-selection-window__add-button">Add</button>
		</div>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import UserSelectionItemWrapper from './UserSelectionItemWrapper.vue';

	const searchText = ref('');

	const onUserType = (ev: Event) => (searchText.value = (ev.target as HTMLInputElement).value);
</script>

<style lang="scss">
	.user-selection-window {
		width: 28rem;
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
