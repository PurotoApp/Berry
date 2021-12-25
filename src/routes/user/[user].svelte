<script context="module">
	export async function load({ page }) {
		let user = page.params.user
        return { props: { user }}
	}
</script>

<script>
    import Header from '../components/Header.svelte'

    export let user;

    setTimeout(()=>{console.log(user)},2500)
</script>

<svelte:head>
    <title>Puroto - {user}</title>
</svelte:head>

<main>
    <Header />
    <h1 class="text-2xl text-purple md:text-red">{user}</h1>
</main>