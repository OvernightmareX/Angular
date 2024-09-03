import { Routes } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PipesComponent } from './pages/pipes/pipes.component';

export const routes: Routes = [
    {path: "blocks", component: BlocksComponent},
    {path: "presentation", component: PresentationComponent},
    {path: "pipes", component: PipesComponent}
];
