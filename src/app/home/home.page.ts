import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  videos: string[] = [
    'assets/videos/haireLover.mp4',
    'assets/videos/laye.mp4',
    'assets/videos/teaser_2.mp4'
  ];
  currentVideoIndex = 0;
 
  constructor() {}

  nextVideo() {
    if (this.currentVideoIndex < this.videos.length - 1) {
      this.currentVideoIndex++;
    } else {
      this.currentVideoIndex = 0; // Retour au début si on est à la fin de la liste
    }
    this.updateVideoSource();
  }

  previousVideo() {
    if (this.currentVideoIndex > 0) {
      this.currentVideoIndex--;
    } else {
      this.currentVideoIndex = this.videos.length - 1; // Aller à la dernière vidéo si on est à la première
    }
    this.updateVideoSource();
  }

  private updateVideoSource() {
    const videoPlayer: HTMLVideoElement = document.querySelector('video');
    videoPlayer.src = this.videos[this.currentVideoIndex];
    videoPlayer.load();
    videoPlayer.play();
  }

  showControls() {
    const controls = document.querySelector('.video-controls');
    controls.classList.add('show');
    controls.classList.remove('hidden');
  }

  hideControls() {
    const controls = document.querySelector('.video-controls');
    setTimeout(() => {
      controls.classList.add('hidden');
      controls.classList.remove('show');
    }, 10000);
    // controls.classList.add('hidden');
    // controls.classList.remove('show');
  }

  toggleControls() {
    console.log('toggleControls');
    
    const controls = document.querySelector('.video-controls');
    if (controls.classList.contains('hidden')) {
      this.showControls();
      console.log('showControls');
    } else {
      this.hideControls();
      console.log('hideControls');
    }
  }


 
 
}