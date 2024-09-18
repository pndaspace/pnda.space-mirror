import Bucket from '@/components/webring/bucket';
import Link from 'next/link';
import Highlight from '@/components/highlight';
import styles from './home.module.css';

export default async function Home() {
    return (
        <div className={styles.container}>
            <div>
                <p>
                    Hey you! You&apos;ve found my little space on the net! ㄟ(≧◇≦)ㄏ
                </p>
                <p>
                    I&apos;m <b className="pink">Holly</b>
                    (<span className="pronouns">she/her</span>), Im a &quot;professional&quot; {' '}
                    <Highlight>web developer</Highlight>, hobbyist <Highlight>musician</Highlight>,
                    and <Highlight>Linux dork</Highlight>. I make electronic music under my
                    pseudonym <Link href="/music">collarbone</Link>.
                </p>
                <p>
                    You can see me <Highlight>ramble</Highlight> on my {' '}
                    <Link href="/words">blog</Link>, links to my <Highlight>music</Highlight> over
                    {' '} <Link href="/music">here</Link>, and my <Highlight>code</Highlight> over
                    {' '} <Link href="/code">here</Link>. If you&apos;d like to know more about me
                    and {' '} <Highlight>this website</Highlight>, you can visit my {' '}
                    <Link href="/about">about</Link> page.
                </p>
                <p>
                    You can <Highlight>get in touch</Highlight> with me on Discord at
                    <Highlight>pnda.space</Highlight> or by email at {' '}
                    <Highlight>pnda at pnda dot space</Highlight>.
                </p>
            </div>
            <Bucket />
        </div>
    );
}
