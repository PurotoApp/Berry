<script>
	import Post from './components/Post.svelte';
	import WelcomeBack from './components/WelcomeBack.svelte';

	let data = {
		avatar: null,
		name: null,
		username: null,
		content: null
	};
</script>

<main class="absolute w-screen top-[9rem] lg:top-[5rem]">
	<WelcomeBack />
	<h1 class="text-2xl text-purple md:text-red">Hello World!</h1>
	<div class="relative left-[50%] translate-x-[-50%] max-w-[95%] lg:max-w-[30%]">
		<Post type="large" {...data} />
	</div>
</main>
