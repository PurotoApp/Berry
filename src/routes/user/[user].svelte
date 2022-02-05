<script context="module">
	export async function load({ params }) {
		let usr = params.user;
		return { props: { usr } };
	}
</script>

<script lang="ts">
	import Post from '../../components/Post.svelte';

	let usr: string;

	interface Iuser {
		avatar: string;
		banner: string;
		name: string;
		username: string;
		aboutMe: string;
		isFollowing: boolean;
	}

	export let user: Iuser = {
		avatar: null,
		banner: null,
		name: null,
		username: usr,
		aboutMe: null,
		isFollowing: false
	};

	export let posts = [
		{
			avatar: null,
			name: null,
			username: null,
			content: null,
			createdAt: null,
			media: {
				hasMedia: false,
				type: null,
				url: null
			}
		}
	];
</script>

<svelte:head>
	<title>Puroto - {user.name}</title>
</svelte:head>

<div
	id="banner"
	class="absolute z-20 h-[calc(100vh/4)] w-full bg-blue-1 bg-cover bg-center bg-no-repeat md:h-[calc(100vh/2)]"
	style="background-image: url({user.banner})"
/>
<div class="relative left-1/2 z-30 w-11/12 -translate-x-1/2 md:w-10/12">
	<div class="mt-[calc(100vw/4.5)] flex justify-between md:mt-[calc(100vw/7)]">
		<div>
			<div
				class="inline-block h-16 w-16 select-none rounded-lg bg-gray-5 bg-contain md:h-24 md:w-24"
				style="background-image: url('{user.avatar}')"
			/>
			<div class="absolute ml-4 inline-block h-16">
				<span class="block text-xl md:text-3xl">{user.name}</span>
				<span class="text-md block text-gray-8 md:text-lg">@{user.username}</span>
			</div>
		</div>
		<!--	Desktop		-->
		<div class="md-hidden translate-y-[15%]">
			<button class="mb-1 block w-24 rounded-lg bg-blue-3 py-1">
				<span class="text-lg">Message</span>
			</button>
			{#if !user.isFollowing}
				<button class="mt-1 block w-24 rounded-lg bg-blue-3 py-1">
					<span class="text-lg">Follow</span>
				</button>
			{/if}
			{#if user.isFollowing}
				<button class="mt-1 box-border block w-24 rounded-xl border-4 border-blue-3 text-blue-3">
					<span class="text-lg font-semibold">Unfollow</span>
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
			{#if !user.isFollowing}
				<button class="w-[49%] rounded-lg bg-blue-3 py-2">
					<span class="text-lg">Follow</span>
				</button>
			{/if}
			{#if user.isFollowing}
				<button class="box-border w-[49%] rounded-lg border-4 border-blue-3 py-2">
					<span class="text-lg font-semibold text-blue-3">Unfollow</span>
				</button>
			{/if}
		</div>
		<div class="my-4 h-1 w-full rounded-lg bg-gray-2 md:hidden" />
		<div class="md:hidden">
			{#each posts as post}
				<Post {...post} />
			{/each}
		</div>
	</div>
</div>

<div class="md-hidden relative top-24 mx-auto  w-11/12">
	<div
		class="md-hidden sticky top-3 z-10 min-h-full w-full translate-y-[-15%] bg-background py-12 md:-translate-y-1/2"
	/>
	{#each posts as post}
		<Post {...post} />
	{/each}
</div>
