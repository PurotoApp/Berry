import { goto } from '$app/navigation';

export function to(href: string) {
	goto(href);
}
