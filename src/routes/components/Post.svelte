<script>
	export let type = 'large';
	export let avatar;
	export let name;
	export let username;
	export let content;
</script>

{#if type == 'large'}
	<div class="w-full block py-2 rounded-lg hover:bg-gray-1 transition">
		<div>
			<a href="/user/{username}" class="w-[42px] h-[42px] select-none"
				><div
					class="inline-block rounded-full bg-contain bg-gray-5 w-[42px] h-[42px] cursor-pointer"
					style="background-image: url('{avatar}')"
				/></a
			>
			<div class="inline-block ml-2 select-none">
				<a href="/user/{username}"
					><span class="block font-semibold hover:underline cursor-pointer">{name}</span></a
				>
				<a href="/user/{username}"><span class="text-sm text-gray-3">@{username}</span></a>
			</div>
		</div>
		<div class="bg-gray-2 rounded-lg min-h-[32px] pb-8">
			<div class="relative top-[50%] translate-y-[50%]">
				<span>{content}</span>
			</div>
			<div class="absolute w-full text-right bottom-[6px]">
				<!--    POST FOOTER     TODO    -->
			</div>
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
