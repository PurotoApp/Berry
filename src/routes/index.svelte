<script lang="ts">
	import Post from '../components/Post.svelte';
	import WelcomeBack from '../components/WelcomeBack.svelte';

	let data = [
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
	<title>Puroto - Home</title>
</svelte:head>

<WelcomeBack />

<div class="relative mx-auto w-10/12 ">
	<div
		class="md-hidden sticky top-3 z-10 min-h-full w-full translate-y-[-15%] bg-background py-12 md:-translate-y-1/2"
	/>
	{#each data as data}
		<Post {...data} />
	{/each}
</div>
