<template>
	<div class="added-user-item" @mouseover="isHovered = true" @mouseleave="isHovered = false">
		<div class="added-user-item__avatar">
			<img :src="getImageUrl(imgUrl)" />
		</div>
		<p class="added-user-item__full-name">{{ fullName }}</p>
		<img
			class="added-user-item__icon-x"
			v-if="isHovered"
			src="../assets/icons/icon-x-16.svg"
			@click="removeUser"
		/>
	</div>
</template>

<script lang="ts" setup>
	import { ref } from 'vue';
	import { useUsersStore } from '@/stores/usersStore';

	const props = defineProps<{
		currentUserId: number;
		fullName: string;
		imgUrl: string;
	}>();

	const isHovered = ref(false);

	const store = useUsersStore();

	const getImageUrl = (img: string) => {
		return new URL(`../assets/images/user-profile-image-${img}.png`, import.meta.url).href;
	};

	const removeUser = () => {
		store.addedUsers = store.addedUsers.filter(({ id }) => id !== props.currentUserId);
	};
</script>

<style lang="scss">
	.added-user-item {
		position: relative;
		display: flex;
		align-items: center;
		padding: 0.2rem 1rem 0.2rem 0.2rem;
		gap: 0.8rem;
		border-radius: 4rem;
		background-color: $neutral-00;
		box-shadow: $shadow-short;

		&:hover {
			background-color: $neutral-10;
			box-shadow: $shadow-basic;
		}

		&__avatar {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 2.8rem;
			height: 2.8rem;
			border-radius: 2.2rem;
			background-color: $neutral-00;
		}

		&__full-name {
			font-family: 'Inter';
			font-size: 1.2rem;
			font-weight: 400;
			line-height: 1.6rem;
			color: $neutral-80;
			pointer-events: none;
		}

		&__icon-x {
			position: absolute;
			top: -0.4rem;
			right: -0.8rem;
			border-radius: 2.4rem;
			background-color: $neutral-60;
			cursor: pointer;
		}
	}
</style>
