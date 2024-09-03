import { Routes } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { PresentationComponent } from './pages/presentation/presentation.component';

export const routes: Routes = [
    {path: "blocks", component: BlocksComponent},
    {path: "presentation", component: PresentationComponent}
];
