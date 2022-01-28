<script>
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

<div class="relative mx-auto w-11/12 md:max-w-[30%]">
	<div
		class="sticky top-3 md-hidden w-full min-h-full bg-background z-10 py-12 translate-y-[-15%] md:-translate-y-1/2"
	/>
	{#each data as data}
		<Post {...data} />
	{/each}
</div>
