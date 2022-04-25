import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SharedModule } from '../../shared/shared.module';
import { RoofingServiceComponent } from './roofing-service/roofing-service.component';
import {ContactFormComponent} from '../contact/contact-form/contact-form.component';
import { NiceSelectModule } from 'ng-nice-select';
import { ContactModule } from '../contact/contact.module';
import { RouterModule } from '@angular/router';
import { MultiFamilyComponent } from './multi-family/multi-family.component';
import { CommercialComponent } from './commercial/commercial.component';
import { StormDamageComponent } from './storm-damage/storm-damage.component';
import { SlidingComponent } from './sliding/sliding.component';
import { GuttersComponent } from './gutters/gutters.component';


@NgModule({
  declarations: [
    ServicesComponent,
    RoofingServiceComponent,
    MultiFamilyComponent,
    CommercialComponent,
    StormDamageComponent,
    SlidingComponent,
    GuttersComponent
    
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule,
    NgbModule,
    NgxPaginationModule,
    NiceSelectModule,
    ContactModule,
    ContactModule
        
  ]
})
export class ServicesModule { }
