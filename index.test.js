const expect = require('chai').expect;
const request = require('request');
const sinon = require('sinon');
const index = require('./index');

describe('with Stub: getPhotosByAlbumId', () => {
    before(() => {
        sinon.stub(request, 'get')
        .yields(null, null, JSON.stringify([
            {
              "albumId": 1,
              "id": 1,
              "title": "accusamus beatae ad facilis cum similique qui sunt",
              "url": "https://via.placeholder.com/600/92c952",
              "thumbnailUrl": "https://via.placeholder.com/150/92c952"
            },
            {
              "albumId": 1,
              "id": 2,
              "title": "reprehenderit est deserunt velit ipsam",
              "url": "https://via.placeholder.com/600/771796",
              "thumbnailUrl": "https://via.placeholder.com/150/771796"
            },
            {
              "albumId": 1,
              "id": 3,
              "title": "officia porro iure quia iusto qui ipsa ut modi",
              "url": "https://via.placeholder.com/600/24f355",
              "thumbnailUrl": "https://via.placeholder.com/150/24f355"
            },
            {
              "albumId": 1,
              "id": 4,
              "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
              "url": "https://via.placeholder.com/600/d32776",
              "thumbnailUrl": "https://via.placeholder.com/150/d32776"
            },
            {
              "albumId": 1,
              "id": 5,
              "title": "natus nisi omnis corporis facere molestiae rerum in",
              "url": "https://via.placeholder.com/600/f66b97",
              "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
            }
          ]));
    });

    after(() => {
        request.get.restore();
    });
    it('should getPhotosByAlbumId', (done) => {
        index.getAlbumById(1).then((photos) =>{
            expect(photos.length).to.equal(5);
            expect(photos[0]).to.have.property('id');
            done();
        });
    });
})