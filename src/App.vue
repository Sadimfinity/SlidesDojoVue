<template lang='pug'>
#ThemesSlideshow
  .eg-slideshow

    slide.local-eg-Title(enter='fadeIn' leave='fadeOut')
      .center
        h3 Vue
        img(src='./assets/logo.png')
        h6 Santiago Gaviria Zapata<br>Santiago Gaviria Zapta<br>Santiago Gaviria Zata<br>Santiago Gaviria Zapta<br>Santiago Gaviria Zaa 

    slide.local-eg-Title(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInDown')
        h3 ¿Qué es Vue.js?
          h6 Vue es un framework de Javascript orientado del lado del Cliente (front-end) para interfaces de usuario progresivas

    slide.local-eg-labels(:steps=6, enter='bounceInDown')
      h3 What's in it for you

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=2')
          img(src='./assets/basic_paperplane.svg')
          h4 REACTIVO
          p Clear syntax, live preview

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=3')
          img(src='./assets/basic_share.svg')
          h4 ACCESIBLE
          p Si conoces HTML5, CSS Y JavaScript;<br> aprender Vue es cuestión de muy poco tiempo

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 4")
         img(src='./assets/basic_mixer2.svg')
         h4 VERSATIL
         p Un ecosistema que se puede adoptar de forma incremental

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 5")
          img(src='./assets/basic_display.svg')
          h4 RENDIMIENTO
          p Al igual que React.js posee un Virtual DOM
    slide.local-eg-Title(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInLeft')
        h3 You can change everything

    slide.local-eg-theme-spark(enter='fadeIn' leave='none')
      eg-transition(enter='fadeInUp')
        h3 Enjoy the versatility<br />of the CSS Technology<sup>TM</sup>

    slide.local-eg-theme-city(enter='fadeIn' leave='none')
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
          //- Use CSS classes to theme the slideshow or just one slide

</template>

<script>
import { Slideshow } from 'eagle.js'
export default {
  mixins: [Slideshow],
  name: 'app'
}
</script>

<style lang='scss'>
#ThemesSlideshow {
  // STYLES THAT ARE GLOBAL FOR THIS PARTICULAR SLIDESHOW
  h3 {
    font-weight: normal;
    text-transform: uppercase;
  }
  .eg-slide-content {
    width: 25em;
    max-width: 80%;
    margin: 0 auto;
  }
  // LOCAL THEMES FOR SLIDES
  .local-eg-theme-artic {
    background-color: #11a9e2;
    background-image: none;
    color: #fff;
    h1 {
      font-weight: bold;
      font-size: 3em;
    }
    h1, p {
      font-family: "Comfortaa", Helvetica, Arial, sans-serif;
      margin-top: 0;
      position: absolute;
      top:50%;
      left:50%;
      transform: translateX(-50%) translateY(-50%);
      width: 80%;
      text-shadow: 0 0.01em 0 #ccc,
                   0 0.02em 0 #c9c9c9,
                   0 0.03em 0 #bbb,
                   0 0.04em 0 #b9b9b9,
                   0 0.05em 0 #aaa,
                   0 0.06em 0.01em rgba(0,0,0,.1),
                   0 0 0.05em rgba(0,0,0,.1),
                   0 0.01em 0.03em rgba(0,0,0,.3),
                   0 0.03em 0.05em rgba(0,0,0,.2),
                   0 0.05em 0.1em rgba(0,0,0,.25),
                   0 0.1em 0.1em rgba(0,0,0,.2),
                   0 0.2em 0.2em rgba(0,0,0,.15);
    }
  }
  .local-eg-text {
    @import url(https://fonts.googleapis.com/css?family=Pompiere);
    h3 {
      // letter-spacing: 1px;
      font-family: 'Pompiere';
      text-transform: none;
      font-size: 2em;
      color: rgba(255, 255, 255, .6);
    }
    background-image: url(https://i.imgur.com/rYkJ6I8.jpg);
    background-position: center;
    background-size: cover;
  }
  .local-eg-Title {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      color: rgba(0, 0, 0, 1);
    }
    h6 {
      font-family: 'Pompiere';
      font-size: 1em;
      color: rgba(0, 0, 0, 0.9);
    }
    img {
      height: 11em;
    }
    img.control-schema {
      width: 10em;
      height: 3em;
      align-content: center;
    }
    background-image: url('./assets/background.png');
  }
  .local-eg-labels {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: 'Cabin Sketch';
      color: rgba(0, 0, 0, 1);
    }
    h6 {
      font-family: 'Pompiere';
      font-size: 1em;
      color: rgba(0, 0, 0, 0.9);
    }
    background-image: url('./assets/background.png');
  }
  .quarter {
    text-align: center;
    p {
      font-family: 'Pompiere';
      margin-top: 0;
      text-align: center;
    }
    h4 {
      font-family: 'Pompiere';
      margin-top: 0;
      margin-bottom: 0
    }
  }
}
</style>
