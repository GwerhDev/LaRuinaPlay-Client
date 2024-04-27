export class Player {
  constructor() {
    this.currentTrack = 0;
    this.show = false;
    this.tracklist = [{
      id: null,
      title: null,
      artist: null,
      album: null,
      cover: null,
      url: null,
    }];
  }
}