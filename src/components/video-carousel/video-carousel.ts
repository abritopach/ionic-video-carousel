import { Platform } from 'ionic-angular';
import { Component, Input } from '@angular/core';

import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the VideoCarouselComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
    selector: 'video-carousel',
    templateUrl: 'video-carousel.html'
})
export class VideoCarouselComponent {

    data: any;
    isAndroid: boolean = false;

    @Input()
    set infoVideos(videos: Array<Object>) {
        this.data = videos;
        console.log(this.data);
    }


    constructor(private videoPlayer: VideoPlayer, public platform: Platform) {
        console.log('Hello VideoCarouselComponent Component');
        this.isAndroid = this.platform.is('android');
    }

    playVideo(video) {
        console.log("Play video");

        this.videoPlayer.play(video.url).then(() => {
            console.log('video completed');
        }).catch(err => {
            console.log(err);
        });
    }
}
