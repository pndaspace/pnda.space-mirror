import Highlight from '@/components/highlight';
import Link from 'next/link';

export default async function About() {
    return (
        <div>
            <h1>Me!</h1>
            <p>
                I&apos;m <span className="pink">Holly</span>! I&apos;m a trans woman
                (<span className="pronouns">she/her</span>), <Highlight>programmer</Highlight>, and
                electronic <Highlight>musician</Highlight> from the UK. I also have a bunch of other
                interests including:
            </p>
            <ul>
                <li>Bass guitar</li>
                <li>Linux</li>
                <li>Model kits/Gunpla</li>
                <li>Photography</li>
                <li>90&apos;s anime</li>
                <li>Sci-fi</li>
                <li>Coffee</li>
            </ul>
            <p>
                I release <Highlight>music</Highlight> as <Link href="/music">collarbone</Link>.
                Typically these tracks fall under the <Highlight>jungle</Highlight>, {' '}
                <Highlight>DnB</Highlight>, and <Highlight>breakcore</Highlight> genres - although I
                have released tunes that fall outside of those classifications. I love experementing
                with weird heavy sounds, distortion, and chopping up breaks in unique ways. I also
                play <Highlight>bass</Highlight>.
            </p>
            <p>
                I&apos;ve been a professional <Highlight>full stack dev</Highlight> since 2020, but
                I&apos;ve been messing around with programming and tech stuff since I was a
                teenager.
            </p>
            <h1>This Site</h1>
            <p>
                This is a silly little <Highlight>personal project</Highlight> I&apos;ve been
                working on, mainly as an excuse to explore the creative side of web design, I take
                heavy inspiration from the {' '}
                <Link href="https://wiki.melonland.net/web_revival">Web Revival</Link>/Indie Web
                scenes. Some specific examples can be found on my <Link href="/links">links</Link>
                {' '} page. I think personal sites can be an exciting form of personal expression.
            </p>
            <p>
                I built this site with <Link href="https://nextjs.org/">Next.js</Link> {' '}
                framework, with as little client side JS as I can manage (a lot of stuff is done
                with css animations). Obviously this is still bulkier than a &quot;purer&quot;
                static site, but it&apos;s what I&apos;m comfortable using.
            </p>
            <p>
                The sick <Highlight>ASCII art</Highlight> logo uses samurlwechtrom&apos;s {' '}
                <Link href="https://github.com/samuelweckstrom/react-ascii-text">react-ascii-text</Link>
                {' '} library with the {' '}
                <Link href="https://github.com/xero/figlet-fonts/blob/master/Elite.flf">Elite</Link>
                {' '}Figlet font. I use <Link href="https://draculatheme.com/">Dracula</Link> for my
                site&apos;s theming.
            </p>
        </div>
    );
}
