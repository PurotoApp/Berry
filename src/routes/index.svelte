<script lang="ts">
	import Post from '../components/Post.svelte';
	import WelcomeBack from '../components/WelcomeBack.svelte';
	import type { IPost } from '$lib/interfaces';

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
</script>

<svelte:head>
	<title>Puroto - Home</title>
</svelte:head>

<WelcomeBack />

<div class="relative mx-auto w-10/12">
	<div
		class="md-hidden sticky top-3 z-10 min-h-full w-full translate-y-[-15%] bg-background py-12 md:-translate-y-1/2"
	/>
	{#each posts as post}
		<Post {post} />
	{/each}
</div>
