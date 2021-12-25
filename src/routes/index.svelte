<script>
	import Header from './components/Header.svelte';
	import WelcomeBack from './components/WelcomeBack.svelte';
</script>

<svelte:head>
	<title>Puroto - Home</title>
</svelte:head>

<main>
	<Header />
	<WelcomeBack />
	<h1 class="text-2xl text-purple md:text-red">Hello World!</h1>
</main>
