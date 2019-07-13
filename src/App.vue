<template lang='pug'>
#ThemesSlideshow
  .eg-slideshow

    slide.local-eg-Title(enter='fadeIn' leave='fadeOut')
      .center
        h3 Vue
        img(src='./assets/logo.png')
        h6 Santiago Gaviria Zapata<br>Danny Francisco Hernández<br>Santiago Alexis Sánchez<br>Raul Andrés Gomez<br>Wildey Alejandro Gallego 

    slide.local-eg-Title(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInDown')
        h3 ¿Qué es Vue.js?
          h6 Vue es un framework de Javascript orientado del lado del Cliente (front-end) para interfaces de usuario progresivas

    slide.local-eg-labels(:steps=6, enter='bounceInDown')
      h3 ¿Qué tiene para ofrecer?

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=2')
          img(src='./assets/basic_paperplane.svg')
          h4 PROGRESIVO
          p Mantiene el UI tan simple como <br>sea posible.           <br>        .

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if='step >=3')
          img(src='./assets/basic_share.svg')
          h4 ACCESIBLE
          p Si conoces HTML5, CSS Y JavaScript;<br> aprender Vue es cuestión de muy poco tiempo.

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 4")
         img(src='./assets/basic_mixer2.svg')
         h4 VERSÁTIL
         p Un ecosistema que se puede adoptar <br>de forma incremental.

      eg-transition(enter='fadeIn' leave='fadeOut')
        .quarter(v-if="step >= 5")
          img(src='./assets/basic_display.svg')
          h4 PERFORMANT
          p Al igual que React.js, Vue posee un <br>DOM Virtual.

    slide.local-eg-text(enter='fadeIn' leave='fadeOut')
        h3 Diferencias
        img(src = './assets/AngularReact.png')

    slide.local-eg-Title(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInDown')
        h3 Directivas
          h4 A parte de las directivas siguientes: 
          h5 v-if<br>v-for<br>v-model<br>v-bind*<br>v-show<br>v-on:[event] = v-on:click
          h4 Vue también permite crear directivas personalizadas según sea necesario manipular el HTML

    slide.local-eg-text(enter='fadeIn' leave='fadeOut')
        h1 Teniendo el siguiente código como ejemplo
          img(src = './assets/codigo.jpg')

    slide.local-eg-LastOne(enter='fadeIn' leave='fadeOut')
        h6 Podemos ejecutar las siguientes directivas
          img(src = './assets/v-for.jpg')
          img(src='./assets/v-on.jpg')

    slide.local-eg-theme-city(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='flipInX')
        eg-code-block(lang='html').
      
          ＜template＞
  
          ＜/template＞

          ＜script＞
            export default {

            }
          ＜/script＞

          ＜style＞

          ＜/style＞
      h3 Estructura básica

    slide.local-eg-LastOne(enter='fadeIn' leave='fadeOut')
      eg-transition(enter='fadeInDown')
        h3 Componentes principales
          img(src='./assets/parts.jpg')

    slide.local-eg-text(enter='fadeIn' leave='fadeOut')
        h3 It's coding time!
        img(src='./assets/giphy.gif')
</template>

<script>
import { Slideshow, CodeBlock } from "eagle.js";
export default {
  mixins: [Slideshow],
  name: "app"
};
</script>

<style lang='scss'>
#ThemesSlideshow {
  // STYLES THAT ARE GLOBAL FOR THIS PARTICULAR SLIDESHOW
  @import url(https://fonts.googleapis.com/css?family=Pompiere);
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
  .local-eg-text {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    img {
      max-width: 110%;
    }
    h1 {
      font-family: "Pompiere";
      font-size: 1em;
      color: rgba(0, 0, 0, 0.9);
    }
    h3 {
      font-family: "Cabin Sketch";
      color: rgba(0, 0, 0, 1);
    }
    background-image: url("./assets/background.png");
  }
  .local-eg-code {
    h3 {
      font-family: "Cabin Sketch";
      color: rgba(0, 0, 0, 1);
    }
    background-image: url("./assets/background.png");
  }
  .local-eg-Title {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: "Cabin Sketch";
      color: rgba(0, 0, 0, 1);
    }
    h5 {
      align-content: center;
      font-family: "Pompiere";
      font-size: 0.5em;
      text-transform: none;
      color: rgba(0, 0, 0, 1);
    }
    h4 {
      align-content: center;
      font-family: "Pompiere";
      font-size: 0.75em;
      text-transform: none;
      color: rgba(0, 0, 0, 1);
    }
    h6 {
      font-family: "Pompiere";
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
    background-image: url("./assets/background.png");
  }
  .local-eg-LastOne {
    @import url(https://fonts.googleapis.com/css?family=Cabin+Sketch);
    h3 {
      font-family: "Cabin Sketch";
      color: rgba(0, 0, 0, 1);
    }
    h5 {
      align-content: center;
      font-family: "Pompiere";
      font-size: 0.5em;
      text-transform: none;
      color: rgba(0, 0, 0, 1);
    }
    h4 {
      align-content: center;
      font-family: "Pompiere";
      font-size: 0.75em;
      text-transform: none;
      color: rgba(0, 0, 0, 1);
    }
    h6 {
      font-family: "Pompiere";
      font-size: 1em;
      color: rgba(0, 0, 0, 0.9);
    }
    img {

      height: 8em;
    }
    img.control-schema {
      width: 10em;
      height: 3em;
      align-content: center;
    }
    background-image: url("./assets/background.png");
  }
  .local-eg-labels {
    h3 {
      font-family: "Cabin Sketch";
      color: rgba(0, 0, 0, 1);
    }
    h6 {
      font-family: "Pompiere";
      font-size: 1em;
      color: rgba(0, 0, 0, 0.9);
    }
    background-image: url("./assets/background.png");
  }
  .quarter {
    text-align: center;
    p {
      font-family: "Pompiere";
      margin-top: 0;
      text-align: center;
    }
    h4 {
      font-family: "Pompiere";
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .local-eg-theme-city {
    @import url(https://fonts.googleapis.com/css?family=Patrick+Hand+SC);
    @import "./assets/monokai";
    h3 {
      font-family: "Cabin Sketch";
      color: rgba(0, 0, 0, 1);
    }
    .eg-code-block {
      margin-top: 30%;
    }
    .code-box {
      box-shadow: 0 0 0.25em 0.25em #ddd;
    }
    background-image: url("./assets/background.png");
  }
}
</style>

