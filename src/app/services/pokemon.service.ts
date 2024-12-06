import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from '../interfaces/pokemon.interface';
import { Card } from '../interfaces/card.interface';  
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemons(offset: number = 0, limit: number = 9): Observable<PokemonResponse> {
    return this.http.get<PokemonResponse>(
      `${this.baseUrl}/pokemon?offset=${offset}&limit=${limit}`
    );
  }

  getPokemonDetails(identify: string): Observable<Card> {
    return this.http.get<Card>(`${this.baseUrl}/pokemon/${identify}`);
  }
}