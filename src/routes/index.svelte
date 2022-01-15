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

<div class="relative left-1/2 -translate-x-1/2 max-w-[95%] md:max-w-[30%]">
	{#each data as data}
		<Post {...data} />
	{/each}
</div>
