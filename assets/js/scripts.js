/**
 * Code de connexion à Spotify
 * Ex: https://www.youtube.com/watch?v=0dmS0He_czs&ab_channel=SamCodes
 * Ex 2 : https://www.youtube.com/watch?v=1vR3m0HupGI&ab_channel=MakerAtPlayCoding
 */

class SpotifyController {
    constructor(cid, cs) {
        this.client_id = cid;
        this.client_secret = cs;
        this.redirect_uri = 'https://www.gwendoline-jumelle.ovh/crushetpado/';
    }

    // const scope = 'user-read-private user-read-email playlist-read-collaborative';

    getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(this.client_id + ':' + this.client_secret)
            },
            body: 'grant_type=client_credentials'
        })

        const data = await result.json();
        return data.access_token;
    }
};

const controller = new SpotifyController('a225b85255bf45c09dd4be908cef0d4b', 'b60a4e7ecf2846debb1eb6886f609f51');