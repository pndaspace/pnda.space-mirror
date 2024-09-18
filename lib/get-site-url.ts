export default function getSiteUrl() {
    return process.env.NODE_ENV === 'production'
        ? 'https://pnda.space'
        : 'http://localhost:3000';
}
