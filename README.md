# IPUC Villa del Río

Aplicación web pública para consultar cultos, oraciones,
vigilias, ayunos y eventos de la congregación.

## Funciones

- Inicio con reflexión diaria, próximos eventos y anuncios.
- Calendario por año, mes, semana y día con colores por tipo de evento.
- Agenda mensual, búsqueda y filtros.
- Detalles compartibles por WhatsApp y descarga de calendarios `.ics`.
- Panel privado con Firebase Authentication, Firestore y Storage.
- Cronograma interno DECOM.
- Banco de recursos IPUC con búsqueda, navegación por carpetas y descarga desde el repositorio oficial.

## Estructura

- `index.html`: estructura y metadatos.
- `css/`: estilos base y capa visual glassmorphism.
- `js/app.js`: datos, rutas, calendario, Firebase y administración.
- `assets/`: logo y vista previa social.
- `firestore.rules` y `storage.rules`: acceso público de lectura y escritura
  restringida al equipo autorizado.

El proyecto está vinculado a Firebase `cronograma-f28f0`; desplegar Hosting
conserva el enlace público existente.

Firebase Storage requiere actualizar el proyecto desde el plan gratuito Spark.
Mientras Storage no esté habilitado, la interfaz bloquea de forma segura las
cargas de imágenes, videos, audios y PDFs; el resto del panel sigue operativo.
Cuando se habilite, añade `"storage": { "rules": "storage.rules" }` a
`firebase.json` y vuelve a desplegar para publicar las reglas incluidas.
