<script>
	import '../app.css';
	import '../tailwind.css';
	import Header from './components/Header.svelte';

	let title = 'Home';
</script>

<svelte:head>
	<title>Puroto - {title}</title>
</svelte:head>

<Header/>

<main>
	<slot />
</main>
