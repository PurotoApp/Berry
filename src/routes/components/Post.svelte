<script>
	export let type = 'large';
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
	export function compareDates(date) {
		let date1 = new Date(date).getTime();
		let date2 = new Date().getTime();
		let difference_ms = date2 - date1;
		let difference_days = Math.floor(difference_ms / (1000 * 3600 * 24));
		let difference_hours = Math.floor(difference_ms / (1000 * 3600));
		let difference_minutes = Math.floor(difference_ms / (1000 * 60));
		let difference_seconds = Math.floor(difference_ms / 1000);
		if (difference_days >= 7) {
			if (new Date(date).getFullYear() != new Date().getFullYear()) {
				// returns DD/MM/YYYY
				return `${new Date(date).getDate()} ${new Date(date).toLocaleString('default', {
					month: 'short'
				})} ${new Date(date).getFullYear()}`;
			} else {
				// returns DD/MM
				return `${new Date(date).getDate()} ${new Date(date).toLocaleString('default', {
					month: 'short'
				})}`;
			}
		} else if (difference_days > 0) {
			return `${difference_days} ${difference_days == 1 ? 'day' : 'days'} ago`;
		} else if (difference_hours > 0) {
			return `${difference_hours} ${difference_hours == 1 ? 'hour' : 'hours'} ago`;
		} else if (difference_minutes > 0) {
			return `${difference_minutes} ${difference_minutes == 1 ? 'minute' : 'minutes'} ago`;
		} else {
			return `${difference_seconds} ${difference_seconds == 1 ? 'second' : 'seconds'} ago`;
		}
	}
</script>

{#if type == 'large'}
	<div class="grid w-full block pt-1 mb-12 rounded-lg cursor-pointer hover:bg-gray-1 transition">
		<div>
			<a href="/user/{username}" class="w-[42px] h-[42px] select-none"
				><div
					class="inline-block rounded-full bg-contain bg-gray-5 w-[42px] h-[42px] cursor-pointer"
					style="background-image: url('{avatar}')"
				/></a
			>
			<div class="inline-block ml-2 select-none">
				<div class="block translate-y-[30%]">
					<a href="/user/{username}"
						><span class="font-semibold hover:underline cursor-pointer">{name}</span><span
							class="text-base ml-2 text-gray-5">@{username}</span
						></a
					>
				</div>
				<span class="text-sm select-none text-gray-5">{date}</span>
			</div>
		</div>
		<div class="bg-gray-4 rounded-lg min-h-[32px] pb-2">
			<div class="mx-4 my-4">
				<span>{content}</span>
				{#if media.hasMedia}
					{#if media.type == 'image'}
						<img
							src={media.url}
							class="select-none object-cover mt-2 mb-6 w-full min-h-[64px] max-h-[32rem] rounded-sm"
							loading="lazy"
							alt="Post media"
						/>
					{/if}
				{/if}
			</div>
			<div
				class="absolute h-[2rem] w-1/6 flex flex-nowrap flex-row-reverse justify-between right-[15px] translate-y-[-1.25rem]"
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
						class="hover:stroke-[#8F8EF1] transition"
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
{/if}
