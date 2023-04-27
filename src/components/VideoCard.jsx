import React from "react";
import Grid from "@mui/material/Grid";
const VideoCard = ({data,title,hindiTitle}) => {
  
// not in use

  return (
    <div className="video-card-container">
      {/* <Grid container spacing={4}> */}
        <Grid item xs={12} sm={6} className="demo1">
          <div>
            <iframe title={title} width="100%" height="100%"  src={`https://www.youtube.com/embed/${data}`} frameborder="0" allowfullscreen ></iframe>
            <p>{title}</p>
            <p>{hindiTitle}</p>
            {/* <video
              controls
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              width="100%"
            >
              <source
                src={`https://www.youtube.com/watch?v=${data}`}
                type="video/ogg"
              />
              <source
                src={`https://www.youtube.com/watch?v=${data}`}
                type="video/avi"
              />
              <source
                src={`https://www.youtube.com/watch?v=${data}`}
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can
              <a href="https://archive.org/details/BigBuckBunny_124">
                download it
              </a>
              and watch it with your favorite video player!
            </video>
            <p>Bade ko chodkar chote ki shadi</p>
            <p>बड़े को छोडकर छोटे की शादी.</p>*/}
          </div> 
        </Grid>
{/* </Grid> */}
        {/* <Grid item xs={12} sm={6} className="demo1">
          <div>
            <video
              controls
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              width="100%"
            >
              <source
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.ogv"
                type="video/ogg"
              />
              <source
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.avi"
                type="video/avi"
              />
              <source
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can
              <a href="https://archive.org/details/BigBuckBunny_124">
                download it
              </a>
              and watch it with your favorite video player!
            </video>
            <p>Bade ko chodkar chote ki shadi.</p>
            <p>बड़े को छोडकर छोटे की शादी.</p>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} className="demo1">
          <div>
            <video
              controls
              poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
              width="100%"
            >
              <source
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.ogv"
                type="video/ogg"
              />
              <source
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.avi"
                type="video/avi"
              />
              <source
                src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesn't support embedded videos, but don't
              worry, you can
              <a href="https://archive.org/details/BigBuckBunny_124">
                download it
              </a>
              and watch it with your favorite video player!
            </video>
            <p>Bade ko chodkar chote ki shadi.</p>
            <p>बड़े को छोडकर छोटे की शादी.</p>
          </div>
        </Grid>
      </Grid> */}

      {/* <div>
        <video
          controls
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          width="400"
        >
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.ogv"
            type="video/ogg"
          />
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.avi"
            type="video/avi"
          />
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can
          <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
          and watch it with your favorite video player!
        </video>
        <p>Bade ko chodkar chote ki shadi</p>
        <p>बड़े को छोडकर छोटे की शादी</p>
      </div>

      <div>
        <video
          controls
          poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
          width="400"
        >
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.ogv"
            type="video/ogg"
          />
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.avi"
            type="video/avi"
          />
          <source
            src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
            type="video/mp4"
          />
          Sorry, your browser doesn't support embedded videos, but don't worry,
          you can
          <a href="https://archive.org/details/BigBuckBunny_124">download it</a>
          and watch it with your favorite video player!
        </video>
        <p>Bade ko chodkar chote ki shadi</p>
        <p>बड़े को छोडकर छोटे की शादी</p>
      </div> */}
    </div>
  );
};

export default VideoCard;
