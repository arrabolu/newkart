import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContainerComponent } from './components/container/container.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterComponent } from './components/container/filter/filter.component';
import { ProductListComponent } from './components/container/product-list/product-list.component';
import { ProductDetailComponent } from './components/container/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { BgchangerDirective } from './services/custom-directives/bgchanger.directive';
import { CarouselComponent } from './components/container/product-detail/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContainerComponent,
    FooterComponent,
    FilterComponent,
    ProductListComponent,
    ProductDetailComponent,
    BgchangerDirective,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
