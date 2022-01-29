<script>
	import { to } from '../scripts/to.js';
	import { compareDates } from '../scripts/compareDates.js';
	export let avatar;
	export let name;
	export let username;
	export let content;
	export let createdAt;
	export let media = {
		hasMedia: false,
		type: null,
		url: null
	};

	let date = compareDates(createdAt);
</script>

<div class="grid w-full p-2 mb-6 rounded-lg cursor-pointer hover:bg-gray-1 transition">
	<!-- Post Header -->
	<div class="flex items-center">
		<div
			on:click={() => to(`/user/${username}`)}
			class="inline-block rounded-full bg-contain bg-gray-5 w-10 h-10 cursor-pointer select-none"
			style="background-image: url('{avatar}')"
		/>
		<div class="inline-block ml-2 select-none">
			<div class="block translate-y-1/4">
				<div on:click={() => to(`/user/${username}`)}>
					<span class="font-semibold hover:underline cursor-pointer">{name}</span><span
						class="text-base ml-2 text-[#89899A]">@{username}</span
					>
				</div>
			</div>
			<span class="text-sm select-none text-[#89899A]">{date}</span>
		</div>
	</div>
	<!-- Post Content -->
	<div class="bg-gray-4 rounded-lg min-h-8 pb-2">
		<div class="mx-4 my-4">
			<span>{content}</span>
			{#if media.hasMedia}
				{#if media.type == 'image'}
					<img
						src={media.url}
						class="select-none object-cover mt-2 mb-6 w-full min-h-16 max-h-[32rem] rounded-sm"
						loading="lazy"
						alt="Post media"
					/>
				{/if}
			{/if}
		</div>
		<div
			class="absolute h-8 w-1/6 flex flex-nowrap flex-row-reverse justify-between right-4 -translate-y-5"
		>
			<!--	Like		-->
			<div class="w-6 h-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="hover:stroke-red-2 transition"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
					/>
				</svg>
			</div>
			<!--	Comment		-->
			<div class="w-6 h-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="hover:stroke-blue-5 transition"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
					/>
				</svg>
			</div>
		</div>
	</div>
</div>
