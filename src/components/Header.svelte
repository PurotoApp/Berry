<script lang="ts">
	import { to } from '$lib/to';
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

	let showUserMenu = false;
	function toggleUser() {
		showUserMenu = !showUserMenu;
	}
</script>

<header class="min-w-64 mb:bottom-0 fixed z-50 w-full md:top-0 md:mt-6">
	<div
		class="desk-hidden absolute min-h-full w-full translate-y-[-10%] bg-gray-1 py-12 md:-translate-y-1/2"
	/>
	<div class="relative mx-auto mb-2 flex w-10/12 flex-nowrap justify-between md:mb-0">
		<!--    Puroto Icon     -->
		<div class="h-8 w-8 cursor-pointer focus:border-white focus:outline-1" on:click={() => to('/')}>
			<Icon size="32" />
		</div>

		<!--    Search Bar     -->
		<div class="mb:hidden">
			<SearchBar />
		</div>

		<!--	Right Part    -->
		<div class="mb:hidden flex h-8 w-20 flex-row justify-between md:-ml-12">
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
						class="pointer-events-none h-3 w-3 -translate-y-3 translate-x--6 rounded-full bg-red-2 text-xs"
					>
						<div class="h-full w-full animate-ping rounded-full bg-red-1 text-xs" />
					</div>
				{/if}
			</div>

			<div class="h-8 w-8 cursor-pointer rounded-full bg-gray-5" on:click={toggleUser}>
				{#if user.isLogOn}
					<img draggable="false" src={user.avatar} class="h-8 w-8 rounded-full" alt={user.name} />
					{#if user.hasUnreadMessage}
						<div
							class="pointer-events-none h-3 w-3 -translate-y-3 translate-x-6 rounded-full bg-red-2 text-xs"
						>
							<div class="h-full w-full animate-ping rounded-full bg-red-1 text-xs" />
						</div>
					{/if}
				{:else}
					<div class="h-8 w-8" />
				{/if}
				{#if showUserMenu}
					<div class="min-h-8 min-w-8 w-32 -translate-x-1/3 rounded-md bg-gray-5">
						<div class="mt-1 flex w-full flex-col items-center justify-center">
							{#if user.isLogOn}
								<div class="block w-full rounded-md py-2 text-center transition hover:bg-gray-6">
									<a href="/user/{user.username}">My Profile</a>
								</div>
								<div class="block w-full rounded-md py-2 text-center transition hover:bg-gray-6">
									{#if user.hasUnreadMessage}
										<div
											class="pointer-events-none absolute h-3 w-3 translate-y-2 translate-x-2 rounded-full bg-red-2 text-xs"
										>
											<div class="h-full w-full animate-ping rounded-full bg-red-1 text-xs" />
										</div>
									{/if}
									<a href="/messages">Messages</a>
								</div>
								<div class="block w-full rounded-md py-2 text-center transition hover:bg-gray-6">
									<a href="/settings">Settings</a>
								</div>
							{:else}
								<div class="block w-full rounded-md py-2 text-center transition hover:bg-gray-6">
									<a href="/login">Login</a>
								</div>
								<div class="block w-full rounded-md py-2 text-center transition hover:bg-gray-6">
									<a href="/join">Join</a>
								</div>
							{/if}
						</div>
					</div>
				{/if}
			</div>
		</div>

		<div
			on:click={() => to(`/user/${user.username}`)}
			class="desk-hidden h-8 w-8 rounded-full bg-gray-5"
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
						class="pointer-events-none h-3 w-3 -translate-y-3 translate-x--6 rounded-full bg-red-2 text-xs"
					>
						<div class="h-full w-full animate-ping rounded-full bg-red-1 text-xs" />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</header>
