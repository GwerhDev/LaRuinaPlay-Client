export class Player {
  constructor() {
    this.currentTrack = 0;
    this.show = false;
    this.tracklist = [{
      title: null,
      artist: null,
      album: null,
      cover: null,
      url: null,
    }];
  }
}