import { Routes } from '@angular/router';
import { BlocksComponent } from './pages/blocks/blocks.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { FormComponent } from './pages/form/form.component';
import { LifecycleComponent } from './pages/lifecycle/lifecycle.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';
import { ObservablesComponent } from './pages/rxjs/observables/observables.component';

export const routes: Routes = [
    {path: "blocks", component: BlocksComponent},
    {path: "presentation", component: PresentationComponent},
    {path: "pipes", component: PipesComponent},
    {path: "formulaire", component: FormComponent},
    {path: "lifecycle", component: LifecycleComponent},
    {path: "rxjs", component: RxjsComponent, children:[
        {path: "observable", component: ObservablesComponent}
    ]},

];
