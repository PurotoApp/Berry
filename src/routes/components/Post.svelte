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
		if (difference_days > 7) {
			return new Date(date).toLocaleDateString();
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
	<div class="grid w-full block pt-1 mb-12 rounded-lg hover:bg-gray-1 transition">
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
							class="text-base ml-2 text-gray-3">@{username}</span
						></a
					>
				</div>
				<span class="text-sm select-none text-gray-3">{date}</span>
			</div>
		</div>
		<div class="bg-gray-2 rounded-lg min-h-[32px] pb-2">
			<div class="mx-4 my-4">
				<span>{content}</span>
				{#if media.hasMedia}
					{#if media.type == 'image'}
						<img
							src={media.url}
							class="select-none object-cover w-full min-h-[64px] max-h-[512px] rounded-sm"
							loading="lazy"
							alt="Post media"
						/>
					{/if}
				{/if}
			</div>
			<div class="absolute w-full text-right bottom-[6px]" />
		</div>
	</div>
{/if}

{#if type == 'small'}
	<div class="grid grid-rows-1 w-full block py-2 rounded-lg hover:bg-gray-3 transition">
		<div>
			<div
				class="rounded-full bg-contain bg-gray-5 w-[36px] h-[36px] cursor-pointer"
				style="background-image: url('{avatar}')"
			/>
			<span class="hover:underline cursor-pointer">{name}</span>
		</div>
	</div>
{/if}
