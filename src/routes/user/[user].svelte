<script context="module">
	export async function load({ params }) {
		let user = params.user;
		return { props: { user } };
	}
</script>

<script>
	import Post from '../../components/Post.svelte';

	export let user;
	export let avatar;
	export let banner;
	export let name = user;
	export let username;
	export let aboutMe;
	export let isFollowing = false;

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
	<title>Puroto - {user}</title>
</svelte:head>

<div
	id="banner"
	class="absolute h-[calc(100vh/4)] w-full bg-cover bg-center bg-no-repeat z-20 bg-blue-1 md:h-[calc(100vh/2)]"
	style="background-image: url({banner})"
/>
<div class="relative w-11/12 left-1/2 -translate-x-1/2 z-30 md:w-10/12">
	<div class="flex justify-between mt-[calc(100vw/4.5)] md:mt-[calc(100vw/7)]">
		<div>
			<div
				class="inline-block rounded-lg bg-contain bg-gray-5 w-16 h-16 select-none md:w-24 md:h-24"
				style="background-image: url('{avatar}')"
			/>
			<div class="absolute h-16 ml-4 inline-block">
				<span class="block text-xl md:text-3xl">{name}</span>
				<span class="block text-md text-gray-8 md:text-lg">@{username}</span>
			</div>
		</div>
		<div class="md-hidden translate-y-[15%]">
			<button class="w-24 py-1 bg-blue-3 mb-1 rounded-lg block">
				<span class="text-lg">Message</span>
			</button>
			{#if !isFollowing}
				<button class="w-24 py-1 bg-blue-3 mt-1 rounded-lg block">
					<span class="text-lg">Follow</span>
				</button>
			{/if}
			{#if isFollowing}
				<button class="w-24 text-blue-3 box-border border-4 border-blue-3 mt-1 rounded-xl block">
					<span class="font-semibold text-lg">Unfollow</span>
				</button>
			{/if}
		</div>
	</div>
	<div class="absolute my-4">
		<span class="inline-block">{aboutMe}</span>
		<div class="mt-4 flex justify-between md:hidden">
			<button class="w-[49%] py-2 bg-blue-3 rounded-lg">
				<span class="text-lg">Message</span>
			</button>
			{#if !isFollowing}
				<button class="w-[49%] py-2 bg-blue-3 rounded-lg">
					<span class="text-lg">Follow</span>
				</button>
			{/if}
			{#if isFollowing}
				<button class="w-[49%] py-2 box-border border-4 border-blue-3 rounded-lg">
					<span class="text-blue-3 font-semibold text-lg">Unfollow</span>
				</button>
			{/if}
		</div>
		<div class="my-4 rounded-lg bg-gray-2 w-full h-1 md:hidden" />
		<div class="md:hidden">
			{#each posts as post}
				<Post {...post} />
			{/each}
		</div>
	</div>
</div>

<div class="md-hidden relative mx-auto w-11/12 md:max-w-[30%] top-24">
	<div
		class="sticky top-3 md-hidden w-full min-h-full bg-background z-10 py-12 translate-y-[-15%] md:-translate-y-1/2"
	/>
	{#each posts as post}
		<Post {...post} />
	{/each}
</div>
