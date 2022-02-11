// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { goto } from '$app/navigation';

export function to(href: string) {
	goto(href);
}
