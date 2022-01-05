<script>
	import '../global.css';
	import Header from './components/Header.svelte';
</script>

<main class="absolute min-w-max w-full top-[5em] md:top-[5rem]">
	<slot />
</main>

<Header />
