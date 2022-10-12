import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { ProfessorComponent } from './professor/professor.component';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { PaginasComponent } from './paginas/paginas.component';
import { SettingsComponent } from './settings/settings.component';
import { StatisticsComponent } from './statistics/statistics.component';

@NgModule({
  declarations: [AppComponent, BodyComponent, DashboardComponent, AdministracaoComponent, FinanceiroComponent, ProfessorComponent, SecretariaComponent, MatriculaComponent, FuncionariosComponent, PaginasComponent, SettingsComponent, StatisticsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
