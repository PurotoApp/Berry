<script context="module">
	export async function load({ page }) {
		let user = page.params.user;
		return { props: { user } };
	}
</script>

<script>
	export let user;
</script>

<svelte:head>
	<title>Puroto - {user}</title>
</svelte:head>

<main>
	<h1 class="text-2xl text-purple md:text-red">{user}</h1>
</main>
