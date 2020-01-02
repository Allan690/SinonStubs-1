const request = require('request');

module.exports = {
        getAlbumById: async function(id) {
            const requestUrl = `https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=5`;
            return new Promise((resolve, reject) => {
                request.get(requestUrl, (err, res, body) => {
                    if(err) {
                        return reject(err);
                    }
                    resolve(JSON.parse(body));
                });
            });
        }
};
