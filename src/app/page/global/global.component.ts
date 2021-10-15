import { Component, OnInit } from '@angular/core';
//Model interface
import { NetflixModel } from './models/netflix-model';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.scss']
})
export class GlobalComponent implements OnInit {
public netflixApp: NetflixModel;

  constructor() {
    this.netflixApp = {
      nav: {
        img: {
          src: 'https://graffica.info/wp-content/uploads/2019/11/SHIELDONLYCOLOR_LOCL_POWERPT_500px_0_0-1200x900.png',
          alt: 'Logo Warner Bros'
        },
        search: 'INICIO BUSCAR'
      },
      hero: {
        title: 'LOS 5 MÁS POPULARES HOY',
        img: [
          {
            src: 'https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*8017*35_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5BC805vQhtDYWV7zJyzMwnXCTFK*B%5BZZZZYJ3C9KthDk*NKBKxhGeHvxrn9aKIc5u0ZVJzghMNcwY1*bHiz5lw5MsaWCtx08OnCwVz2SH8kM9gOsRVEC%5DTgRZ7hhqwuvPwo%5Dwn2quXJ5i*ZO5sCApEKj3q*TdHVdCVxaTahYEXbMrVIl0i75s*42sEx7qfZJ.jpg?locale=es',
            alt: 'El último baile'
          },
          {
            src: 'https://f.rpp-noticias.io/2020/04/28/934066new-project-35jpg.jpg',
            alt: 'A tres metros sobre el cielo'
          },
          {
            src: 'https://theenvoyweb.com/wp-content/uploads/2020/04/Dangerous-Lies-1.png',
            alt: 'Dangerous Lies'
          },
          {
            src: 'https://images.clarin.com/2020/08/17/yo-nunca-la-serie-de___NLOCaGWej_720x0__1.jpg',
            alt: 'Yo nunca'
          },
          {
            src: 'https://i.ytimg.com/vi/1-rqX55vKe8/maxresdefault.jpg',
            alt: 'The Last Kingdom'
          },
        ]
      },
      comedyFilms: {
        title: 'COMEDIAS',
        img: [
          {
            src: 'https://elhorror.com.mx/wp-content/uploads/2020/07/Donde-mirar-La-serie-100-en-linea.jpg',
            alt: 'Los100'
          },
          {
            src: 'https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*319*8652_8_muochl_mvg%5Bwmn%5Bzkr%5Be4%5Bivmwrgrlm%5Bz23942yxuw996288z23uy6014y8u7xu25yvvv6y1%5BZZZZYBsIc9yWaTtocaVEqlVtZJMbzYMa10d4V6mXK81iabAS7l*eL1ldlaRGuqW3HGJ**RBLVVSqn3Rl5ZEhX9dhKHHgo4uFUs54d8aAbxvFb0Z5S0YwUyc7W420nS8z2GAYr0MT7OpIezQcMQeY1Uwk9v8S29PUZ3I0e8*044jFcBGGNPot3%5Dh3dBc%5DSYaVBdXFeSw5COuHdd.jpg?locale=es',
            alt: 'American Crime Story'
          },
          {
            src: 'https://i2.wp.com/hipertextual.com/wp-content/uploads/2017/03/descarga.jpeg?fit=1200%2C675&ssl=1',
            alt: 'Mindhunter'
          },
          {
            src: 'https://i.ytimg.com/vi/6IaLG1i7yxM/maxresdefault.jpg',
            alt: 'Altered Carbon'
          },
          {
            src: 'https://i.ytimg.com/vi/5l5YVSvdH7o/maxresdefault.jpg',
            alt: 'Por trece razones'
          },
          {
            src: 'https://i.ytimg.com/vi/ETY44yszyNc/maxresdefault.jpg',
            alt: 'The Witcher'
          },
        ]
      },
      dramaFilms: {
        title: 'DRAMAS BASADOS EN LIBROS',
        img: [
          {
            src: 'https://netflixyseries.com/wp-content/uploads/2021/05/tag-ppal.jpg',
            alt: 'Tú la llevas'
          },
          {
            src: 'https://d2id5w1nkzdswd.cloudfront.net/images/11195/gallery/54149/s1440.jpg',
            alt: 'EL gran Stan'
          },
          {
            src: 'https://occ-0-1068-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABV7J1RaVKbZjy_AxmievBfWaJ5-ww9TxHoybWySlYKNWD0msI2fDZ2fSVkUvuTLlr_58UkgEWSTiq-JQZjCX3nucyHjK.jpg?r=f55',
            alt: 'Sherlock Holmes: Juego de Sombras'
          },
          {
            src: 'https://kinefilia.files.wordpress.com/2018/08/noche-de-juegos-1.jpg?w=584',
            alt: 'Noche de juegos'
          },
          {
            src: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/salidos-de-cuentas/estreno-salidos-de-cuentas/4193679-1-esl-ES/Estreno-Salidos-de-cuentas.jpg?crop=1xw:0.872093023255814xh;center,top&resize=640:*',
            alt: 'Salidos de cuentas'
          },
          {
            src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/novia-por-contrato-con-matthew-mcconaughey-y-sarah-jessica-parker-1587977480.jpg?crop=1.00xw:0.766xh;0,0.132xh&resize=1200:*',
            alt: 'Novia por contrato'
          },
        ]
      }

}}
  
  ngOnInit(): void {
  }

}
