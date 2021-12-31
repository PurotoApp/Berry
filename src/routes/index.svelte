<script>
	import Post from './components/Post.svelte';
	import WelcomeBack from './components/WelcomeBack.svelte';

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

<main class="absolute w-full top-[9rem] lg:top-[5rem]">
	<WelcomeBack />

	<div class="relative left-[50%] translate-x-[-50%] max-w-[95%] lg:max-w-[30%]">
		{#each data as data}
			<Post type="large" {...data} />
		{/each}
	</div>
</main>
