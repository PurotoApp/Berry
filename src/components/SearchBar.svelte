<script>
	import { browser } from '$app/env';

	if (browser) {
		let searchArea = document.getElementById('searchArea');
		searchArea.addEventListener('keydown', (e) => {
			if (e.code == 'Enter') {
				let searchValue = searchArea.value;
				window.location.href = `/search/${searchValue}`;
			}
		});
	}
</script>

<div
	class="md:rounded-md md:bg-gray-2 md:hover:bg-gray-3 md:active:bg-gray-4 md:h-8 md:w-96 transition"
>
	<label for="searchArea">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="inline translate-y-0.5 translate-x-1"
			height="24"
			width="24"
			fill="none"
			viewBox="0 0 24 24"
			stroke="#4B4757"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</label>
	<input
		id="searchArea"
		type="text"
		autocomplete="off"
		class="absolute ml-2 h-full w-[21.5rem] text-white bg-transparent focus:outline-none"
	/>
</div>
