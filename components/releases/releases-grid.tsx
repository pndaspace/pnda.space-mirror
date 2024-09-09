export default function ReleasesGrid() {
    const clientId = process.env.SPOTIFY_CLIENT_ID as string;
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET as string;

    type ApiToken = {
        access_token: string,
        token_type: string,
        expires_in: number;
    };

    const releases = fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        body: new URLSearchParams({
            grant_type: 'client_credentials',
            client_id: clientId,
            client_secret: clientSecret,
        }),
    })
        .then((response) => response.json())
        .then((response: ApiToken) => {
            console.log(`${response.token_type} ${response.access_token}`);
            return response;
        })
        .then((response: ApiToken) => {
            fetch(
                'https://api.spotify.com/v1/artists/670j8C5WNz2mHbiHDUeV6I/albums?market=EN',
                { headers: { Authorization: `${response.token_type} ${response.access_token}` } },
            )
                .then((releasesResponse) => console.log(releasesResponse));
            //.then((releasesResponse) => releasesResponse.json())
            //.then((releasesResponse) => console.log(releasesResponse));
        });

    return (
        <p>sdf</p>
    );
}
