import Bucket from '@/components/webring/bucket';
import styles from './home.module.css';
import Release from '@/components/release/release';

export default async function Home() {
    return (
        <div className={styles.container}>
            <div>
                <p>
                    Hi, I'm <b className='green'>collarbone!</b> ㄟ(≧◇≦)ㄏ
                </p>
                <p>
                    I'm a multi-genre producer from the UK. Drawing inspiration from artists like <b className='cyan'>Machine Girl</b>, <b className='cyan'>Squarepusher</b>, <b className='cyan'>Akira Yamaoka</b> and <b className='cyan'>Atari Teenage Riot</b>, my work blends intense breaks with experemental sound design.
                </p>
                <p>
                    I am currently working on my next album which will be dropping this year.
                </p>
                <h3 className='green'>Releases</h3>
                <div className={styles.releases}>
                    <Release
                        name='34.4_down'
                        year={2025}
                        format='Compilation track'
                        image='344down.jpg'
                        label='SURFNET'
                        bandcamp='https://surfnet.bandcamp.com/album/down-shift'
                        spotify='https://open.spotify.com/album/2obuiaAcRJbphfivXZf5By'
                        apple='https://music.apple.com/us/album/down-shift/1856081939'
                        youtube='https://www.youtube.com/watch?v=K0BhxevpYoM&pp=ygURc3VyZm5ldCAzNC40X2Rvd24%3D'
                    />
                    <Release
                        name='no flash no sound'
                        year={2025}
                        format='EP'
                        image='nfns.jpg'
                        label='Self-released'
                        bandcamp='https://collarbone.bandcamp.com/album/no-flash-no-sound'
                        spotify='https://open.spotify.com/album/1D0IKInyRemEIwwUms8ae9?si=F_qLAFa7TrmqVUSAYSfnNg'
                        apple='https://music.apple.com/us/album/no-flash-no-sound-ep/1812457173'
                        youtube='https://www.youtube.com/watch?v=ZuyyS3P6Jfg&list=OLAK5uy_kmrxoB2bsGx1s8cZiJARQW1voFm-bYvoo'
                    />
                    <Release
                        name='HEART EYES'
                        year={2024}
                        format='EP'
                        image='heart-eyes.jpg'
                        label='Self-released'
                        bandcamp='https://collarbone.bandcamp.com/album/heart-eyes'
                        spotify='https://open.spotify.com/album/4GFIEnDqHPy4djc0G5X9cd?si=H0OOnX4-QgG50BbpJT3RyA'
                        apple='https://music.apple.com/us/album/heart-eyes-ep/1779615285'
                        youtube='https://youtu.be/Td1nIbzUzW0?si=jq2Jls0G9hKY4iYs'
                    />
                    <Release
                        name='Enforcer (feat. a_rn)'
                        year={2024}
                        format='Single'
                        image='enforcer.jpg'
                        label='Self-released'
                        bandcamp='https://collarbone.bandcamp.com/track/enforcer-feat-a-rn'
                        spotify='https://open.spotify.com/track/71IJy0LAk1TUJeAvN0F4gj?si=ae778115f8d8496b'
                        apple='https://music.apple.com/us/album/enforcer-feat-a-rn-single/1770862143'
                        youtube='https://youtu.be/wgz6OJvvgaA?si=E72MJWC9604ZMDuF'
                        soundcloud='https://soundcloud.com/collarbone1/collarbone-x-a_rn-enforcer'
                    />
                    <Release
                        name='SLLUUUDGE'
                        year={2024}
                        format='Compilation track'
                        image='slluuudge.jpg'
                        label='GOOP HOUSE'
                        spotify='https://open.spotify.com/track/3zrOmufvAWcjryiluJo7cZ?si=2b526044d6c44ce6'
                        apple='https://music.apple.com/us/album/slluuudge-single/1763713549'
                        youtube='https://www.youtube.com/watch?v=Shy6l2pQK9o&list=OLAK5uy_kkTEGeuKD2rQxz6RnU6WHu6rADhlDVr58'
                        soundcloud='https://soundcloud.com/goophouse/collarbone-slluuudge'
                    />
                </div>
            </div>
            <Bucket />
        </div>
    );
}
