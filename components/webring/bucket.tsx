import styles from './webring.module.css';

export default function Bucket() {
    return (
        <div className={styles.container}>
            <span>
                &lt;-
                <a href="https://webring.bucketfish.me/redirect.html?to=prev&name=pnda.space">
                    prev
                </a>
            </span>
            <span>
                🏳️‍🌈
                <a href="https://webring.bucketfish.me/" className={styles.rainbow}>
                    bucket webring
                </a>
                🏳️‍🌈
            </span>
            <span>
                <a href="https://webring.bucketfish.me/redirect.html?to=next&name=pnda.space">
                    next
                </a>
                -&gt;
            </span>
        </div>
    );
}
