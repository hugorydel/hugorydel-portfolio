import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'Hugo Rydel - Portfolio';

export default function Layout({
	children,
	home,
}: {
	children: React.ReactNode;
	home?: boolean;
}) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel='icon' href='/favicon.ico' />
				<meta
					name='description'
					content='Learn about my programming experience, skills, and values'
				/>
				<meta name='og:title' content={siteTitle} />
			</Head>
			{!home && (
				<header className={styles.header}>
					<div className={styles.backToHome}>
						<Link href='/'>Go Back Home</Link>
					</div>
				</header>
			)}
			<main className={styles.mainContent}>{children}</main>
		</div>
	);
}
