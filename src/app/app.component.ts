import { AfterViewInit, Component } from '@angular/core';
import { InstanceManager, MediaSourceType } from 'planet-media-player';
import videojs from 'video.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  public vjs: videojs.Player;

  async ngAfterViewInit() {
    // const options = {
    //   'sources': [{
    //     'src': 'https://ovp2-live.akamaized.net/ac103_Video/186.smil/playlist.m3u8',
    //     // 'src': 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
    //     'type': 'application/x-mpegURL',
    //   },
    //   ],
    // };
    // this.vjs = videojs('my-player', options);


    const player = await InstanceManager.create('my-player', {
      implementation: 'videojs',
    });
    await player.setup({
      width: '100%',
      aspectratio: '16:9',
      playlist: [{
        title: 'Live Stream DVR',
        dvr: true,
        mediaid: 'ac002_RTPLive',
        sources: [{
          type: MediaSourceType.hls,
          file: 'https://d2zihajmogu5jn.cloudfront.net/bipbop-advanced/bipbop_16x9_variant.m3u8',
        }],
      }],
    });
  }
}
