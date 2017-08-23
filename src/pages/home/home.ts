import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { VideoPlayer ,VideoOptions } from '@ionic-native/video-player';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    infoVideos: any;
    videoOpts : VideoOptions ;

    constructor(public navCtrl: NavController, private videoPlayer : VideoPlayer) {

        this.infoVideos = [
            {
                url: 'http://techslides.com/demos/sample-videos/small.mp4',
                poster: 'http://www.funerariasanantonio.org/m/images/video-poster.jpg',
                title: 'Nine Inch Nails Live',
                description: 'The most popular industrial group ever, and largely responsible for bringing the music' +
                ' to a mass audience.',
            },
            {
                url: 'http://clips.vorwaerts-gmbh.de/VfE_html5.mp4',
                poster: 'http://www.funerariasanantonio.org/m/images/video-poster.jpg',
                title: 'Nine Inch Nails Live',
                description: 'The most popular industrial group ever, and largely responsible for bringing the music' +
                ' to a mass audience.',
            },
            {
                url: 'http://techslides.com/demos/sample-videos/small.mp4',
                poster: 'http://www.funerariasanantonio.org/m/images/video-poster.jpg',
                title: 'Nine Inch Nails Live',
                description: 'The most popular industrial group ever, and largely responsible for bringing the music' +
                ' to a mass audience.',
            }
        ]

    }

}
