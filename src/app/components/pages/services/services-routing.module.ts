import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { GuttersComponent } from './gutters/gutters.component';
import { MultiFamilyComponent } from './multi-family/multi-family.component';
import { RoofingServiceComponent } from './roofing-service/roofing-service.component';
import { ServicesComponent } from './services.component';
import { SlidingComponent } from './sliding/sliding.component';
import { StormDamageComponent } from './storm-damage/storm-damage.component';

const routes: Routes = [
    { path: '', component: ServicesComponent, data: { breadcrumb: "Roofing" } },
    { path: 'roof',pathMatch:'full', component: RoofingServiceComponent, data: { breadcrumb: "Roofing" } },
    { path: 'multi',pathMatch:'full', component: MultiFamilyComponent, data: { breadcrumb: "Multi-Family" } },
    { path: 'storm',pathMatch:'full', component: StormDamageComponent, data: { breadcrumb: "Storm Damage" } },
    { path: 'commercial',pathMatch:'full', component: CommercialComponent, data: { breadcrumb: "Commercial" } },
    { path: 'sliding',pathMatch:'full', component: SlidingComponent, data: { breadcrumb: "Sliding" } },
    { path: 'gutters',pathMatch:'full', component: GuttersComponent, data: { breadcrumb: "Gutters" } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
