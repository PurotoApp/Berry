<script lang="ts">
	import { onMount } from 'svelte';
	import '../global.css';
	import Header from '../components/Header.svelte';
	import Icon from '../components/Icon.svelte';

	let loading = true;
	onMount(() => (loading = false));
</script>

{#if loading}
<div class="absolute h-full w-full bg-background z-[100]">
	<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse">
		<Icon size="6rem" stroke="#5351D2" />
	</div>
</div>
<div class="hidden z-[-1]">
	<slot />
</div>
{:else}
<Header />
<main class="mb:overflow-auto absolute h-[calc(100vh-3.1rem)] w-full min-w-max md:h-full">
	<slot />
</main>
{/if}