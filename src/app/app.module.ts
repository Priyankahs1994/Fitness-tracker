import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server/server.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
