export default function getSiteUrl() {
    return process.env.NODE_ENV === 'production'
        ? 'https://pnda-space-mirror.pages.dev/'
        : 'http://localhost:3000';
}
