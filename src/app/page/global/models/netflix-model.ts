import { FilmsComponent } from "../films/films.component";

export interface NetflixModel {
    nav: Nav;
    hero: Hero;
    comedyFilms: Films;
    dramaFilms: Films;
}

export interface Nav {
    img: Img;
    search: string;
}

export interface Hero {
    title: string;
    img: Img[];
}

export interface Films {
    title: string;
    img: Img[];
}

export interface Img {
    src: string;
    alt: string;
}