<script lang="ts">
	import { to } from '../scripts/to';
	import { compareDates } from '../scripts/compareDates';

	export let avatar: string;
	export let name: string;
	export let username: string;
	export let content: string;
	export let createdAt;
	export let media = {
		hasMedia: false,
		type: null,
		url: null
	};

	let date = compareDates(createdAt);
</script>

<div
	class="1/3 group  mx-auto mb-6 grid cursor-pointer rounded-lg p-1 transition hover:bg-gray-1 sm:w-[100%] md:w-1/3"
>
	<!-- Post Header -->
	<div class="flex items-center justify-between">
		<div class="mb-2 flex items-center">
			{#if avatar == null}
				<div
					on:click={() => to(`/user/${username}`)}
					class="inline-block h-10 w-10 cursor-pointer select-none rounded-full bg-gray-5 bg-contain"
				/>
			{:else}
				<div
					on:click={() => to(`/user/${username}`)}
					class="inline-block rounded-full bg-contain bg-gray-5 w-10 h-10 cursor-pointer select-none"
					style="background-image: url('{avatar}')"
				/>
			{/if}
			<div class="ml-2 inline-block select-none">
				<div class="block translate-y-1/4">
					<div on:click={() => to(`/user/${username}`)}>
						<span class="cursor-pointer font-semibold hover:underline">{name}</span><span
							class="ml-2 text-base text-[#89899A]">@{username}</span
						>
					</div>
				</div>
				<span class="select-none text-sm text-[#89899A]">{date}</span>
			</div>
		</div>
		<div class="mx-2 hidden h-6 w-6 group-hover:block">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
				/>
			</svg>
		</div>
	</div>
	<!-- Post Content -->
	<div class="min-h-8 rounded-lg bg-gray-4 pb-1">
		<div class="mx-2 mt-3 -mb-3">
			<span>{content}</span>
			{#if media.hasMedia}
				{#if media.type == 'image'}
					<img
						src={media.url}
						class="min-h-16 mt-2 mb-6 max-h-[32rem] w-full select-none rounded-sm object-cover"
						loading="lazy"
						alt="Post media"
					/>
				{/if}
			{/if}
		</div>
		<!-- Buttons -->
		<div class="mb-1 flex items-center justify-end">
			<!--	Comment		-->
			<div class="mx-2 h-6 w-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="transition hover:stroke-blue-5"
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
			<!--	Like		-->
			<div class="mx-2 h-6 w-6">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="transition hover:stroke-red-2"
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
		</div>
	</div>
</div>
