import { writable } from 'svelte/store';

let log = false;
/*
if(localStorage.getItem("indexRedirect") == undefined) {
    log = true;
}else{
    log = false;
}
*/
export const isLoggedIn = writable(log);
