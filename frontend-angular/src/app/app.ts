import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Media, MediaType } from './media';
import { MediaService } from './media.service';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  mediaList: Media[] = [];
  title = '';
  mediaType: MediaType | '' = '';
  mediaId = '';

  mediaTypes: MediaType[] = [
    'MOVIE',
    'TV_SHOW',
    'BOOK',
    'VIDEO_GAME',
    'PODCAST',
    'SONG',
    'ALBUM',
    'VIDEO',
    'OTHER'
  ];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.getMedia();
  }

  getMedia(): void {
    this.mediaService.getAll().subscribe((data) => {
      this.mediaList = data;
    });
  }

  addMedia(): void {
    this.mediaService.add({ title: this.title, type: this.mediaType as MediaType }).subscribe(() => {
      this.getMedia();
    });
  }

  deleteMedia(): void {
    this.mediaService.delete(Number(this.mediaId)).subscribe(() => {
      this.getMedia();
    });
  }
}
