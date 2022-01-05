<script>
	export let user = {
		isLogOn: true,
		avatar: null,
		name: 'user',
		username: 'username',
		hasUnreadNotification: true,
		hasUnreadMessage: true
	};
</script>

<header class="fixed min-w-[16rem] w-full mb:bottom-0 md:mt-6 md:top-0">
	<div
		class="absolute w-full min-h-full bg-gray-1 md:bg-background py-12 translate-y-[-15%] md:translate-y-[-50%]"
	/>
	<div class="relative flex flex-nowrap justify-between w-10/12 mx-auto">
		<!--    Puroto Icon     -->
		<div
			class="focus:outline-1 focus:border-white w-[32px] h-[32px] cursor-pointer"
			onclick="window.location.href='/'"
		>
			<svg
				width="32"
				height="32"
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

		<!--	Messages Inbox Icon		-->
		{#if user.isLogOn}
			<a href="/messages" class="cursor-pointer">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="32"
					width="32"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
					/>
				</svg>
				{#if user.hasUnreadMessage}
					<div
						class="text-xs h-[12px] w-[12px] rounded-full bg-red-2 -translate-y-3 translate-x-6 pointer-events-none"
					>
						<div class="text-xs h-full w-full rounded-full bg-red-1 animate-ping" />
					</div>
				{/if}
			</a>
		{/if}

		<!--	User	-->
		{#if user.isLogOn}
			<a
				href="/user/{user.username}"
				class="rounded-full bg-gray-5 w-[32px] h-[32px] cursor-pointer"
			>
				<div
					class="bg-contain rounded-full h-full w-full pointer-events-none"
					style="background-image: url('{user.avatar}')"
				/>
			</a>
		{/if}

		{#if !user.isLogOn}
			<a href="/new" class="rounded-full bg-gray-5 w-[32px] h-[32px] cursor-pointer" />
		{/if}
		<!--	Search Icon     -->
		<!--
		<a href="/search" class="cursor-pointer">
			<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32"fill="none" viewBox="0 0 24 24" stroke="currentColor">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
			</svg>
		</a>
	-->
		<!--    Notification Icon     -->
		{#if user.isLogOn}
			<a href="notification" class="cursor-pointer">
				<svg
					width="32"
					height="32"
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
				{#if user.hasUnreadNotification}
					<div
						class="text-xs h-[12px] w-[12px] rounded-full bg-red-2 -translate-y-3 translate-x-6 pointer-events-none"
					>
						<div class="text-xs h-full w-full rounded-full bg-red-1 animate-ping" />
					</div>
				{/if}
			</a>
		{/if}

		<!--    Settings Icon     -->
		<a href="/settings" class="cursor-pointer">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="32"
				height="32"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		</a>
	</div>
</header>
