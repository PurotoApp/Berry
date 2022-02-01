<script lang="ts">
	import { to } from '../scripts/to';
	import Icon from './Icon.svelte';
	import SearchBar from './SearchBar.svelte';

	export let user = {
		isLogOn: false,
		avatar: null,
		name: 'user',
		username: 'username',
		hasUnreadNotification: false,
		hasUnreadMessage: false
	};

	function toggleUser() {
		document.getElementById('userCascadeMenu').classList.toggle('hidden');
	}
</script>

<header class="fixed min-w-64 w-full z-50 mb:bottom-0 md:mt-6 md:top-0">
	<div
		class="desk-hidden absolute w-full min-h-full bg-gray-1 py-12 translate-y-[-10%] md:-translate-y-1/2"
	/>
	<div class="relative flex flex-nowrap mb-2 justify-between w-10/12 mx-auto md:mb-0">
		<!--    Puroto Icon     -->
		<div class="focus:outline-1 focus:border-white w-8 h-8 cursor-pointer" on:click={() => to('/')}>
			<Icon />
		</div>

		<!--    Search Bar     -->
		<div class="md-hidden">
			<SearchBar />
		</div>

		<!--	Right Part    -->
		<div class="md-hidden w-20 h-8 md:-ml-12 flex justify-between flex-row">
			<!--	Notification Icon	-->
			<div on:click={() => to('/notification')} class="cursor-pointer">
				<svg
					width="32"
					height="32"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				{#if user.hasUnreadNotification}
					<div
						class="text-xs h-3 w-3 rounded-full bg-red-2 -translate-y-3 translate-x--6 pointer-events-none"
					>
						<div class="text-xs h-full w-full rounded-full bg-red-1 animate-ping" />
					</div>
				{/if}
			</div>

			<div class="h-8 w-8 bg-gray-5 rounded-full cursor-pointer" on:click={toggleUser}>
				{#if user.isLogOn}
					<img draggable="false" src={user.avatar} class="h-8 w-8 rounded-full" alt={user.name} />
					{#if user.hasUnreadMessage}
						<div
							class="text-xs h-3 w-3 rounded-full bg-red-2 -translate-y-3 translate-x-6 pointer-events-none"
						>
							<div class="text-xs h-full w-full rounded-full bg-red-1 animate-ping" />
						</div>
					{/if}
				{/if}
				{#if !user.isLogOn}
					<div class="h-8 w-8" />
				{/if}
				<div
					id="userCascadeMenu"
					class="hidden min-h-8 min-w-8 w-32 bg-gray-5 -translate-x-1/3 rounded-md"
				>
					<div class="w-full mt-1 flex flex-col justify-center items-center">
						{#if user.isLogOn}
							<div class="w-full text-center rounded-md block py-2 hover:bg-gray-5 transition">
								<a href="/user/{user.username}">My Profile</a>
							</div>
							<div class="w-full text-center rounded-md block py-2 hover:bg-gray-5 transition">
								{#if user.hasUnreadMessage}
									<div
										class="absolute text-xs h-3 w-3 rounded-full bg-red-2 translate-y-2 translate-x-2 pointer-events-none"
									>
										<div class="text-xs h-full w-full rounded-full bg-red-1 animate-ping" />
									</div>
								{/if}
								<a href="/messages">Messages</a>
							</div>
							<div class="w-full text-center rounded-md block py-2 hover:bg-gray-5 transition">
								<a href="/settings">Settings</a>
							</div>
						{/if}
						{#if !user.isLogOn}
							<div class="w-full text-center rounded-md block py-2 hover:bg-gray-5 transition">
								<a href="/new/login">Login</a>
							</div>
							<div class="w-full text-center rounded-md block py-2 hover:bg-gray-5 transition">
								<a href="/new/join">Join</a>
							</div>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<div
			on:click={() => to(`/user/${user.username}`)}
			class="h-8 w-8 bg-gray-5 rounded-full desk-hidden"
		>
			{#if user.isLogOn}
				<img draggable="false" src={user.avatar} class="h-8 w-8 rounded-full" alt={user.name} />
			{/if}
		</div>

		{#if user.isLogOn}
			<div on:click={() => to('notification')} class="desk-hidden cursor-pointer">
				<svg
					width="32"
					height="32"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
					/>
				</svg>
				{#if user.hasUnreadNotification}
					<div
						class="text-xs h-3 w-3 rounded-full bg-red-2 -translate-y-3 translate-x--6 pointer-events-none"
					>
						<div class="text-xs h-full w-full rounded-full bg-red-1 animate-ping" />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</header>
