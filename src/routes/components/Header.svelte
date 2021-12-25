<script>
    export let user = {
        avatar: null,
        hasNotification: false,
        name: 'user'
    };

    function toggleUserHeader() {
        window.location.href = `/user/${user.name}`;
    }

    function toggleNotificationHeader() {
        // TODO
    }
</script>

<header class="relative flex flex-nowrap justify-between w-10/12 mt-6 ml-auto mr-auto fixed">

    <!--    Puroto Icon     -->
    <a href="/">
        <img class="cursor-pointer" width="36" height="36" src="/logo.svg" alt="Puroto Icon">
    </a>

    <!--    User Header     -->
    {#if !user.avatar}
        <div id="userHeader" class="rounded-full cursor-pointer" style="width:36px; height:36px; background-color:#6E6986;" on:click={toggleUserHeader}/>
    {/if}
    
    {#if user.avatar}
        <div id="userHeader" class="rounded-full cursor-pointer" style="width:36px; height:36px; background-color:#6E6986;" on:click={toggleUserHeader}>
            <img src={user.avatar} class="rounded-full h-full w-full" alt="User"/>
        </div>
    {/if}

    <!--    Notification Icon     -->
    <div on:click={toggleNotificationHeader}>
        <svg width="36" height="36" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>

        {#if user.hasNotification}
            <div class="absolute bg-red rounded-full" style="height: 12px; width: 12px; top: 24px; right: 0;"/>
        {/if}
    </div>
</header>