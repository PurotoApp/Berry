export interface IPost {
	author: {
		name: string;
		username: string;
		avatar: string;
	};
	content: string;
	media?: {
		type: string;
		url: string;
	};
	date: string | number;
}
