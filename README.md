# Cronograma IPUC Villa del Río

Aplicación web pública para consultar el cronograma anual de cultos, oraciones,
vigilias, ayunos y eventos de la congregación.

## Funciones

- Inicio con reflexión diaria, próximos eventos y anuncios.
- Calendario por año, mes, semana y día con colores por tipo de evento.
- Agenda mensual, búsqueda y filtros.
- Detalles compartibles por WhatsApp y descarga de calendarios `.ics`.
- Panel privado con Firebase Authentication, Firestore y Storage.
- Cronograma interno DECOM.

## Estructura

- `index.html`: estructura y metadatos.
- `css/`: estilos base y capa visual glassmorphism.
- `js/app.js`: datos, rutas, calendario, Firebase y administración.
- `assets/`: logo y vista previa social.
- `firestore.rules` y `storage.rules`: acceso público de lectura y escritura
  restringida al equipo autorizado.

El proyecto está vinculado a Firebase `cronograma-f28f0`; desplegar Hosting
conserva el enlace público existente.
