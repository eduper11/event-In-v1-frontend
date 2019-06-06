import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';
import { ModalComponent } from './modal/modal.component';
import { GeneralLayoutComponent } from './general-layout/general-layout.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ToastComponent,
    ModalComponent,
    GeneralLayoutComponent
  ],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [ToastComponent, HeaderComponent, FooterComponent, ModalComponent]
})
export class LayoutModule {}