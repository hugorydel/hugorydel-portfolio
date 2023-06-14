export type WorkType = {
	slug: string;
	title: string;
	date: string;
	skills: string[];
	coverImage: string;
	ogImage: {
		url: string;
	};
	content: string;
};

export type WorkPreviewType = {
	title: string;
	slug: string;
	skills: string[];
	coverImage: string;
};
