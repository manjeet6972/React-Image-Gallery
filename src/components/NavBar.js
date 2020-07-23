import React from 'react';
import { makeStyles, } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


// import ImageGallery1 from './ImageGallery1'
// import ImageGallery2 from './ImageGallery2'
// import ImageGallery3 from './ImageGallery3'
// import ImageGallery4 from './ImageGallery4'
import ImageGallery5 from './ImageGallery5'
// import ImageGalleryOnScroll from './ImageGalleryOnScroll';
import Search from './Search';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },


  title: {
    flexGrow: 1,
    color: "black"

  },
  logo: {
    width: 153,
    height: 50.65
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'rgb(182,207,189)' }}>
        <Toolbar>
          <img
            className={classes.logo}
            src={
              "./assets/Navbaricon.jpg"
            }
            alt="Logo"
          />
          <Typography variant="p" className={classes.title}>
            About
          </Typography>
          <Typography variant="p" className={classes.title}>
            Hown it works
          </Typography>
          <Typography variant="p" className={classes.title}>
            contact     |
          </Typography>
          <Typography variant="p" className={classes.title}>
            List a Space
          </Typography>
          <Typography variant="p" className={classes.title}>
            Find a space
          </Typography>
          <Button color="black"> Signup</Button>

          <Button color="black">Login</Button>
         
        </Toolbar>
      </AppBar>

      {/* <ImageGallery1/> */}
      {/* <ImageGallery2 /> */}
      {/* <ImageGallery3/> */}
      {/* <ImageGallery4 /> */}
      <ImageGallery5 />
      <Search />
      {/* <ImageGalleryOnScroll /> */}
    </div>
  );
}

