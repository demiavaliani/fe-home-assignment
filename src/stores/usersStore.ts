import { defineStore } from 'pinia'
import { type UserInfo } from '../components/types';
import { useSessionStorage } from '@vueuse/core';

const availableUsers: UserInfo[] = [
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
];

export const useUsersStore = defineStore('usersStore',  {
	state: () => {
		return {
			availableUsers,
			isUserSelectionWindowOpen: false,
			selectedUserIds: useSessionStorage('selectedUserIds', [] as number[]),
			addedUsers: useSessionStorage('addedUsers', [] as UserInfo[])
		}
	}
})
