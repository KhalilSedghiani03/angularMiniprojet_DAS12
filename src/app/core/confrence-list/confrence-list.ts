
import { Component, signal } from '@angular/core';
import { Conference } from '../../Models/conference';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Card } from '../card/card';

@Component({
  selector: 'app-confrence-list',
  imports: [CommonModule, FormsModule,Card],
  templateUrl: './confrence-list.html',
  styleUrl: './confrence-list.css',
})
export class ConfrenceList {

  // Signal de test
  x = signal(0);

  // Recherche
  searchItem: string = '';

  // Liste des favoris
  favoritelist = signal<Conference[]>([]);

  // Liste des conférences
  confList = signal<Conference[]>([
    {
      id: 1,
      titre: 'Angular Workshop',
      description: 'Découvrez les nouveautés d Angular et développez vos compétences.',
      date: new Date('2026-10-15'),
      lieu: 'Tunis',
      prix: 50,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 30,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 2,
      titre: 'Music Festival 2026',
      description: 'Un festival musical avec plusieurs artistes et groupes.',
      date: new Date('2026-10-22'),
      lieu: 'Sousse',
      prix: 80,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 500,
      category: 'Musique',
      nbLikes: 12,
    },
    {
      id: 3,
      titre: 'AI & Innovation Conference',
      description: 'Une conférence consacrée à l’intelligence artificielle et à l’innovation.',
      date: new Date('2026-11-18'),
      lieu: 'Hammamet',
      prix: 100,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Technologie',
      nbLikes: 0,
    },
    {
      id: 4,
      titre: 'Startup Meetup',
      description: 'Une rencontre entre entrepreneurs, étudiants et professionnels.',
      date: new Date('2026-11-05'),
      lieu: 'Tunis',
      prix: 30,
      imageUrl: 'images/conf.jpg',
      nbPlaces: 0,
      category: 'Business',
      nbLikes: 0,
    },
  ]);

  constructor() {
    console.log(this.x());
    this.x.set(3);
    console.log(this.x());
  }

  // Ajouter aux favoris
  addFavorite(conf: Conference) {

    if (this.favoritelist().find(c => c.id === conf.id)) {
      alert('Cette conférence existe déjà dans les favoris !');
    } else {
      this.favoritelist.update(list => [...list, conf]);
      alert('Conférence ajoutée aux favoris !');
    }

  }

  // Ajouter un Like
  liker(conf: Conference) {

    this.confList.update(list =>
      list.map(c =>
        c.id === conf.id
          ? { ...c, nbLikes: c.nbLikes + 1 }
          : c
      )
    );

  }

  // Recherche
  filter(): Conference[] {

    return this.confList().filter(conf =>
      conf.titre.toLowerCase().includes(this.searchItem.toLowerCase())
    );

  }

  // Supprimer un favori
  removeFavorite(id: number) {

    this.favoritelist.update(list =>
      list.filter(conf => conf.id !== id)
    );

  }

}
