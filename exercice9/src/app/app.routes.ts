import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { PipeComponent } from './pages/pipe/pipe.component';
import { LibrairieComponent } from './pages/librairie/librairie.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { PokedexComponent } from './pages/pokedex/pokedex.component';

export const routes: Routes = [
    {path: "counter", component: CounterComponent},
    {path: "series", component: SeriesComponent},
    {path: "pipes", component: PipeComponent},
    {path: "librairie", component: LibrairieComponent},
    {path: "pokemon", component: PokemonComponent},
    {path: "pokedex", component: PokedexComponent},

];
