<script>
	import Post from './Post.svelte';

	export let user = {
		isLogOn: false,
		avatar: null,
		name: 'user',
		username: 'username',
		hasNotification: false,
		notifications: [
			{
				avatar: null,
				name: null,
				username: null,
				content: null
			}
		]
	};

	function toggleUserHeader() {
		let userMenu = document.getElementById('userMenu');
		userMenu.classList.toggle('hidden');
	}

	function toggleNotificationHeader() {
		let notifMenu = document.getElementById('notifMenu');
		notifMenu.classList.toggle('hidden');
	}
</script>

<header class="fixed w-full mt-6 top-[0]">
	<div class="absolute min-w-full min-h-full bg-background py-12 translate-y-[-50%]" />
	<div class="relative flex flex-nowrap justify-between w-10/12 mx-auto">
		<!--    Puroto Icon     -->
		<div
			class="focus:outline-1 focus:border-white w-[36px] h-[36px] cursor-pointer"
			onclick="window.location.href='/'"
		>
			<svg
				width="36"
				height="36"
				viewBox="0 0 1426 1406"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M436.82 1362L590.578 1198.64C591.741 1197.41 590.934 1195.38 589.241 1195.28L76.3896 1164.67C75.3889 1164.61 74.587 1163.82 74.5141 1162.82L64.0711 1019.71C64.0262 1019.1 64.2673 1018.5 64.7244 1018.09L427.405 690.157C428.167 689.468 428.283 688.313 427.674 687.486L382.777 626.582C382.2 625.799 382.27 624.714 382.944 624.011L465.382 538.043C466.054 537.343 466.125 536.261 465.552 535.478L393.155 436.536C392.401 435.505 392.794 434.04 393.964 433.525L578.819 352.168C579.682 351.788 580.162 350.858 579.972 349.935L562.2 263.426C561.84 261.672 563.789 260.365 565.275 261.363L733.818 374.65C734.415 375.051 735.18 375.101 735.824 374.781L1358.67 65.1532C1360.27 64.3595 1362.02 65.8939 1361.45 67.5834L1137.72 730.854C1137.48 731.568 1137.66 732.358 1138.19 732.895L1240.78 837.287C1241.59 838.111 1241.53 839.45 1240.65 840.204L1115.71 947.762C1115.04 948.343 1114.83 949.3 1115.2 950.11L1158.66 1045.08C1159.06 1045.94 1158.79 1046.96 1158.03 1047.52L1026.47 1143.87C1025.29 1144.74 1025.4 1146.53 1026.68 1147.24L1108.23 1192.17C1108.96 1192.57 1109.36 1193.38 1109.24 1194.21L1088.89 1335.98"
					stroke="white"
					stroke-width="128"
				/>
			</svg>
		</div>
		<!--	User	-->
		<div
			class="rounded-full bg-gray-5 w-[36px] h-[36px] cursor-pointer"
			on:click={toggleUserHeader}
		>
			{#if user.isLogOn}
				<div
					class="bg-contain rounded-full h-full w-full pointer-events-none"
					style="background-image: url('{user.avatar}')"
				/>
			{/if}
		</div>
		<div
			id="userMenu"
			class="hidden absolute mt-2 min-w-[12rem] max-w-[16rem] md:min-w-[6rem] md:max-w-[12rem] bg-gray-4 rounded-lg text-center font-medium px-2 py-2 mx-auto left-[50%] top-[90%] select-none"
			style="transform: translateX(-50%);"
		>
			{#if !user.isLogOn}
				<div class="block py-2 hover:bg-gray-5">
					<div class="bg-[url('./icon.svg')]" />
					<a href="/signin">Sign in</a>
				</div>
				<div class="block py-2 hover:bg-gray-5">
					<div class="bg-[url('./icon.svg')]" />
					<a href="/signup">Sign up</a>
				</div>
			{/if}
			{#if user.isLogOn}
				<div class="block py-2 hover:bg-gray-5">
					<div class="bg-[url('./icon.svg')]" />
					<a href="/user/{user.username}">Your profile</a>
				</div>
				<div class="block py-2 hover:bg-gray-5">
					<div class="bg-[url('./icon.svg')]" />
					<a href="/messages">Messages</a>
				</div>
				<div class="block py-2 hover:bg-gray-5">
					<div class="bg-[url('./icon.svg')]" />
					<a href="/settings">Settings</a>
				</div>
			{/if}
		</div>
		<!--    Notification Icon     -->
		<div on:click={toggleNotificationHeader}>
			<svg
				width="36"
				height="36"
				class="cursor-pointer"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
				/>
			</svg>
			<div
				id="notifMenu"
				class="hidden absolute mt-2 w-[16rem] md:w-[16rem] bg-gray-2 rounded-lg text-center font-medium px-2 py-2 mx-auto md:left-[80%] top-[90%] select-none"
			>
				{#if user.hasNotification}
					{#each user.notifications as notification}
						<Post type="small" {...notification} />
					{/each}
				{/if}
				{#if !user.hasNotification}
					<div class="block py-2 hover:bg-gray-5">
						<span>You don't have any notification.</span>
					</div>
				{/if}
			</div>
			{#if user.hasNotification}
				<div
					class="absolute bg-red-1 rounded-full animate-ping pointer-events-none"
					style="height: 12px; width: 12px; top: 24px; right: 0;"
				/>
				<div
					class="absolute bg-red-2 rounded-full pointer-events-none"
					style="height: 12px; width: 12px; top: 24px; right: 0;"
				/>
			{/if}
		</div>
	</div>
</header>
