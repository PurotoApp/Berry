<script context="module">
	export async function load({ params }) {
		let path = params.path;
		return { props: { path } };
	}
</script>

<script lang="ts">
	import Post from '../../components/Post.svelte';
	import type { IPost } from '$lib/interfaces';

	// Path is the string that comes from the URL after the /user/ part.
	// It is obtened from the `load` function above.
	let path: string;

	interface IProfile {
		avatar: string;
		banner: string;
		name: string;
		username: string;
		aboutMe: string;
		isFollowing: boolean;
	}

	export let user: IProfile = {
		avatar: null,
		banner: null,
		name: null,
		username: path,
		aboutMe: null,
		isFollowing: false
	};

	let posts: IPost[] = [
		{
			author: {
				name: null,
				username: null,
				avatar: null
			},
			content: null,
			date: new Date().getTime()
		}
	];

	let showSideMenu = false;
	function toggleMenu() {
		showSideMenu = !showSideMenu;
	}
</script>

<svelte:head>
	<title>Puroto - {user.name}</title>
</svelte:head>

{#if user.banner != null}
	<div
		id="banner"
		class="absolute z-20 h-[calc(100vh/4)] w-full bg-cover bg-center bg-no-repeat md:h-[calc(100vh/2)]"
		style="background-image: url({user.banner})"
	/>
{:else}
	<div
		id="banner"
		class="absolute z-20 h-[calc(100vh/4)] w-full bg-blue-1 bg-cover bg-center bg-no-repeat md:h-[calc(100vh/2)]"
		style="background-image: url({user.banner})"
	/>
{/if}
<div class="relative left-1/2 z-30 w-11/12 -translate-x-1/2 md:w-10/12">
	<div class="mt-[calc(100vw/4.5)] flex justify-between md:mt-[calc(100vw/7)]">
		<div>
			{#if user.avatar != null}
				<div
					class="inline-block h-16 w-16 select-none rounded-lg bg-contain md:h-24 md:w-24"
					style="background-image: url('{user.avatar}')"
				/>
			{:else}
				<div
					class="inline-block h-16 w-16 select-none rounded-lg bg-gray-5 bg-contain md:h-24 md:w-24"
				/>
			{/if}
			<div class="absolute ml-4 inline-block h-16">
				{#if user.username != null}
					<span class="block text-xl md:text-3xl">{user.name}</span>
					<span class="text-md block text-gray-8 md:text-lg">@{user.username}</span>
				{:else}
					<span class="block text-xl md:text-3xl">{path}</span>
					<span class="text-md block text-gray-8 md:text-lg">@{path}</span>
				{/if}
			</div>
		</div>
		<!--	Desktop		-->
		<div class="translate-y-[15%] select-none mb:hidden">
			<div class="absolute -top-8 left-20 h-6 w-6 text-[#89899A] transition hover:text-gray-10">
				<svg
					on:click={toggleMenu}
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 cursor-pointer"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
					/>
				</svg>
				{#if showSideMenu}
					<div
						class="min-h-8 min-w-8 w-32 -translate-x-[calc(100%-1rem)] rounded-md bg-gray-5 text-white"
					>
						<div class="block w-full rounded-md py-2 text-center transition hover:bg-gray-6">
							<div class="translate-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="absolute h-5 w-5 translate-y-1 translate-x-3"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
									/>
								</svg>
								<span>Report</span>
							</div>
						</div>
						<div
							class="text-red-3 block w-full rounded-md py-2 text-center transition hover:bg-gray-6"
						>
							<div class="translate-x-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="absolute h-5 w-5 translate-y-1 translate-x-3"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
									/>
								</svg>
								<span class="">Block</span>
							</div>
						</div>
					</div>
				{/if}
			</div>
			<button class="mb-1 block w-24 rounded-lg bg-blue-3 py-1">
				<span class="text-lg">Message</span>
			</button>
			{#if user.isFollowing}
				<button class="mt-1 box-border block w-24 rounded-xl border-4 border-blue-3 text-blue-3">
					<span class="text-lg font-semibold">Unfollow</span>
				</button>
			{:else}
				<button class="mt-1 block w-24 rounded-lg bg-blue-3 py-1">
					<span class="text-lg">Follow</span>
				</button>
			{/if}
		</div>
	</div>
	<div class="absolute my-4 w-full">
		<span class="inline-block break-all md:w-1/2">{user.aboutMe}</span>
		<!--	Mobile		-->
		<div class="mt-4 flex justify-between md:hidden">
			<button class="w-[49%] rounded-lg bg-blue-3 py-2">
				<span class="text-lg">Message</span>
			</button>
			{#if user.isFollowing}
				<button class="box-border w-[49%] rounded-lg border-4 border-blue-3 py-2">
					<span class="text-lg font-semibold text-blue-3">Unfollow</span>
				</button>
			{:else}
				<button class="w-[49%] rounded-lg bg-blue-3 py-2">
					<span class="text-lg">Follow</span>
				</button>
			{/if}
		</div>
		<div class="my-4 h-1 w-full rounded-lg bg-gray-2 md:hidden" />
		<div class="md:hidden">
			{#each posts as post}
				<Post {post} />
			{/each}
		</div>
	</div>
</div>

<div class="relative top-24 mx-auto w-10/12 mb:hidden">
	<div
		class="sticky top-3 z-10 min-h-full w-full translate-y-[-15%] bg-background py-12 mb:hidden md:-translate-y-1/2"
	/>
	{#each posts as post}
		<Post {post} />
	{/each}
</div>
