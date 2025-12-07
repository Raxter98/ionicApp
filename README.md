📘 README – Proyecto Ionic + Angular (KIKI App)


🚀 Características del Proyecto
Este proyecto utiliza una arquitectura moderna basada en:
Ionic 7
Angular 17 con Standalone Components
Lazy Loading por página
Menú lateral (IonMenu + IonRouterOutlet)
Ruteo limpio y mantenible
Arquitectura modular por pantallas independientes
✔ Navegación completa
✔ Angular Standalone (sin módulos)
✔ Lazy Loading aplicado
✔ Menú lateral funcional
✔ Componentes reutilizables (ej: RequestItemComponent)

📱 Pantallas Incluidas
Login
Register
Dashboard
Requests
Pending Tasks
Map
Scanner
Profile

✅ Requisitos para ejecutar el proyecto
Instalar lo siguiente:
🔹 Node.js (versión estable)
https://nodejs.org/
🔹 Ionic CLI
npm install -g @ionic/cli
🔹 Angular CLI (opcional pero recomendado)
npm install -g @angular/cli
🔹 Git
Para clonar y versionar el proyecto.

📂 Estructura del Proyecto
src/
└── app/
    ├── app.routes.ts
    ├── app.component.ts
    ├── app.component.html
    ├── app.component.scss
    │
    ├── dashboard/
    ├── requests/
    ├── pending-task/
    ├── map/
    ├── scanner/
    ├── profile/
    ├── login/
    └── register/
Cada carpeta representa una página independiente, compuesta por:
*.page.ts
*.page.html
*.page.scss

🚀 Cómo ejecutar el proyecto

1️⃣ Ir a la raíz del proyecto
cd kiki

2️⃣ Instalar las dependencias
npm install

3️⃣ Ejecutar en el navegador
ionic serve
La app se abrirá automáticamente.

🧭 Sistema de Navegación (Routing)
app.routes.ts:
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: 'login', loadComponent: () => import('./login/login.page').then(m => m.LoginPage) },
  { path: 'register', loadComponent: () => import('./register/register.page').then(m => m.RegisterPage) },

  { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage) },
  { path: 'requests', loadComponent: () => import('./requests/requests.page').then(m => m.RequestsPage) },
  { path: 'pending-task', loadComponent: () => import('./pending-task/pending-task.page').then(m => m.PendingTaskPage) },
  { path: 'map', loadComponent: () => import('./map/map.page').then(m => m.MapPage) },
  { path: 'scanner', loadComponent: () => import('./scanner/scanner.page').then(m => m.ScannerPage) },
  { path: 'profile', loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage) },
];


🧱 Estructura principal (Menú lateral + Router Outlet)
app.component.html
<ion-app>
  <ion-menu contentId="main-content" side="start">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Menu</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item button routerLink="/requests">Requests</ion-item>
        <ion-item button routerLink="/pending-task">Pending Tasks</ion-item>
        <ion-item button routerLink="/map">Map</ion-item>
        <ion-item button routerLink="/scanner">Scanner</ion-item>
        <ion-item button routerLink="/profile">Profile</ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>

  <ion-router-outlet id="main-content"></ion-router-outlet>
</ion-app>

🎬 Botón de menú para cada página
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Requests</ion-title>
  </ion-toolbar>
</ion-header>

📄 Ejemplo completo de una página (Requests)
requests.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './requests.page.html',
  styleUrls: ['./requests.page.scss']
})
export class RequestsPage {

  constructor(
    private router: Router,
    private menu: MenuController
  ) {}

  go(path: string) {
    this.router.navigate([path]);
  }

  openMenu() {
    this.menu.open();
  }
}
requests.page.html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>Requests</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <h1>Requests</h1>
</ion-content>
requests.page.scss
@use '../../theme/variables.scss' as *;

ion-content {
  padding: 16px;
}

.list-request {
  display: grid;
  gap: 12px;
}

.request-item {
  background: #fff;
  padding: 12px;
  border-radius: 12px;
  box-shadow: var(--shadow-base);
}

⚠️ Nota importante (Angular Standalone)
Cuando uses:
*ngFor
*ngIf
ngClass
ngStyle
Debes importar CommonModule:
imports: [IonicModule, CommonModule]
Si no se incluye, el componente NO renderiza contenido, aunque no muestre errores.

❗ Problemas enfrentados
Estructura inicial de Ionic distinta a la requerida
Adaptación completa a Angular 17 + Standalone
Lazy loading obligatorio
Importación manual de componentes de Ionic
Errores de navegación por funciones ausentes
Reorganización entera del proyecto
Ajuste de componentes reutilizables
Solución al error de renderizado por falta de CommonModule