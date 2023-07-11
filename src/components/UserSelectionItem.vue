<template>
	<div :class="['user-selection-item', { 'user-selection-item--active': active }]">
		<div class="user-selection-item__avatar">
			<img :src="getImageUrl(imgUrl)" />
		</div>
		<p class="user-selection-item__full-name">{{ fullName }}</p>
		<img
			v-if="active"
			class="user-selection-item__icon-tick"
			src="../assets/icons/icon-tick-16.svg"
		/>
	</div>
</template>

<script lang="ts" setup>
	defineProps<{
		fullName: string;
		imgUrl: string;
		active: boolean;
	}>();

	const getImageUrl = (img: string) => {
		return new URL(`../assets/images/user-profile-image-${img}.png`, import.meta.url).href;
	};
</script>

<style lang="scss">
	.user-selection-item {
		display: flex;
		align-items: center;
		padding: 0.8rem 1.6rem;
		gap: 0.8rem;
		background-color: transparent;

		&:not(&--active):hover {
			background-color: $neutral-10;
		}

		&--active {
			background-color: $blue-10;
			box-shadow: $shadow-active-blue;
		}

		&__avatar {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 2.8rem;
			height: 2.8rem;
			border-radius: 2.2rem;
			background-color: $neutral-00;
			box-shadow: $shadow-basic;
		}

		&__full-name {
			font-size: 1.2rem;
			font-weight: 400;
			line-height: 1.6rem;
			color: $neutral-90;
			pointer-events: none;
		}

		&__icon-tick {
			margin-left: auto;
		}
	}
</style>
