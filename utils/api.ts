import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const worksDirectory = join(process.cwd(), '_works');

export function getWorkSlugs() {
	return fs.readdirSync(worksDirectory);
}

export function getWorkBySlug(slug: string, fields: string[] = []) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(worksDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);

	type Items = {
		[key: string]: string;
	};

	const items: Items = {};

	// Ensure only the minimal needed data is exposed
	fields.forEach(field => {
		if (field === 'slug') {
			items[field] = realSlug;
		}
		if (field === 'content') {
			items[field] = content;
		}

		if (typeof data[field] !== 'undefined') {
			items[field] = data[field];
		}
	});

	return items;
}

export function getAllWorks(fields: string[] = []) {
	const slugs = getWorkSlugs();
	const works = slugs
		.map(slug => getWorkBySlug(slug, fields))
		// sort works by date in descending order
		.sort((work1, work2) => parseInt(work2.date) - parseInt(work1.date));
	return works;
}
