<script lang="ts">
	import { signin } from '$lib/auth';
	import { formToData } from '$lib/formToData';
	
	let showPassword = 'password';

	function toggleShowPassword(bool: boolean) {
		if (bool) {
			showPassword = 'password';
		} else {
			showPassword = 'text';
		}
	}

	function login(data) {
		data = formToData(data);

		signin({
			login: data.login,
			password: data.password
		})
		.then(result => {
			console.log(result);
		});
	}
</script>

<svelte:head>
	<title>Puroto - Login</title>
</svelte:head>

<div class="mb:translate-y-8 md:flex md:h-full md:items-center">
	<div class="flex w-full justify-center text-center mb:my-6">
		<div>
			<h1 class="mb-1 text-3xl font-bold">Login</h1>
			<p class="my-1 w-80 text-gray-10">
				Get access to your account by filling all the required fields in this form to login.
			</p>
		</div>
	</div>
	<div class="flex h-full w-full items-center justify-center">
		<div>
			<div class="flex w-full justify-center">
				<div class="w-80 rounded-lg bg-gray-4 px-3 py-3">
					<form method="post" autocomplete="off" on:submit|preventDefault={login} class="bg-mint- flex justify-center">
						<div>
							<!--	Email or username	-->
							<label>
								<span class="ml-1 select-none text-gray-10"> Email or username: </span>
								<input
									name="login"
									type="email"
									class="w-full rounded-lg bg-gray-5 p-2 transition hover:bg-gray-6 focus:outline-none active:bg-gray-5"
									placeholder="abc@xyz.com"
								/>
							</label>

							<!--	Password	-->
							<div class="mt-4">
								<label>
									<span class="ml-1 select-none text-gray-10"> Password: </span>
									{#if showPassword == 'password'}
										<div
											on:click={() => toggleShowPassword(false)}
											class="absolute translate-y-2 translate-x-64 cursor-pointer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 text-gray-10"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
												/>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
												/>
											</svg>
										</div>
									{:else}
										<div
											on:click={() => toggleShowPassword(true)}
											class="absolute translate-y-2 translate-x-64 cursor-pointer"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												class="h-6 w-6 text-gray-10"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
												/>
											</svg>
										</div>
									{/if}
									<input
										name="password"
										type={showPassword}
										class="w-full rounded-lg bg-gray-5 p-2 transition hover:bg-gray-6 focus:outline-none active:bg-gray-5"
									/>
								</label>
							</div>
							<button
								type="submit"
								class="mt-6 h-10 w-full rounded-lg bg-blue-3 transition hover:bg-blue-4 active:bg-blue-3"
							>
								<span class="select-none text-xl font-semibold"> Login </span>
							</button>
						</div>
					</form>
					<div class="mt-4 w-full text-center">
						<a class="select-none text-center text-gray-9 hover:underline" href="/join"
							>Don't have an account?</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
