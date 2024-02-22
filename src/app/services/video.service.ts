import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos: string[] = [
    'video1.mp4',
    'video2.mp4',
    'video3.mp4'
  ];

  private currentVideoIndex = 0;

  constructor() { }

  getCurrentVideoUrl(): string {
    return this.videos[this.currentVideoIndex];
  }

  previousVideo() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
    }
  }

  nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    }
  }
}
