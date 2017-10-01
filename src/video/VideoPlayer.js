import React, {  Component } from 'react';

class VideoPlayer extends Component{



render(){

  return(

    <div>

    <video id="sampleMovie" width="640" height="360" preload controls>
      <source src='http://techslides.com/demos/sample-videos/small.webm'type='video/webm' />
      <source src='http://techslides.com/demos/sample-videos/small.ogv' type='video/ogg' />
      <source src='http://techslides.com/demos/sample-videos/small.mp4' type='video/mp4' />
      <source src='http://techslides.com/demos/sample-videos/small.3gp' type='video/3gp' />
    </video>


    </div>

  )
}

}

export default VideoPlayer;
