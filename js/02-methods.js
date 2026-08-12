/*
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 */

/*
TODO: Реалізуйте методи для обʼєкта playlist
TODO: - changeName(title);
TODO: - updateRating(newRating);
*/

const playlist = {
  name: 'My amazing playlist',
  rating: 4,
  tracks: ['track-1', 'track-2', 'track-3'],

  changeName: function (newName) {
    if (newName.length >= 2) {
      this.name = newName;
    }
  },

  updateRating(newRating) {
    if (newRating >= 0 && newRating <= 5) {
      this.rating = newRating;
    }
  },
};

console.log(playlist);

playlist.changeName('New playlist');
playlist.updateRating(4.5);

console.log(playlist);

// const changePlaylistName = function (somePlaylist, playlistName) {
//   if (playlistName.length >= 2) {
//     somePlaylist.name = playlistName;
//   }
// };

// changePlaylistName(playlist, 'New playlist');

// const updatePlaylistRating = function (somePlaylist, newRating) {
//   if (newRating >= 0 && newRating <= 5) {
//     somePlaylist.rating = newRating;
//   }
// };

// updatePlaylistRating(playlist, 3);

// console.log(playlist);
