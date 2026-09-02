const TYPES = {
      culto: { label: "Culto", color: "var(--culto)" },
      oracion: { label: "Oracion", color: "var(--oracion)" },
      vigilia: { label: "Vigilia", color: "var(--vigilia)" },
      ayuno: { label: "Ayuno", color: "var(--ayuno)" },
      especial: { label: "Especial", color: "var(--especial)" }
    };

    const PROGRAMMED_EVENTS = [
      { date: "2026-02-09", type: "oracion", title: "Oracion lunes - Junta local, Damas Dorcas y Jovenes", time: "7:00 p. m." },
      { date: "2026-03-09", type: "oracion", title: "Oracion lunes - Escuela dominical, Caballeros y Alabanza", time: "7:00 p. m." },
      { date: "2026-04-06", type: "oracion", title: "Oracion lunes - Edad dorada, Evangelismo y Red de familia", time: "7:00 p. m." },
      { date: "2026-05-11", type: "oracion", title: "Oracion lunes - Obra social, Misiones y Recepcion", time: "7:00 p. m." },
      { date: "2026-06-01", type: "oracion", title: "Oracion lunes - Junta local, Damas Dorcas y Jovenes", time: "7:00 p. m." },
      { date: "2026-07-13", type: "oracion", title: "Oracion lunes - Escuela dominical, Caballeros y Alabanza", time: "7:00 p. m." },
      { date: "2026-08-10", type: "oracion", title: "Oracion lunes - Edad dorada, Evangelismo y Red de familia", time: "7:00 p. m." },
      { date: "2026-09-14", type: "oracion", title: "Oracion lunes - Obra social, Misiones y Recepcion", time: "7:00 p. m." },
      { date: "2026-10-05", type: "oracion", title: "Oracion lunes - Junta local, Damas Dorcas y Jovenes", time: "7:00 p. m." },
      { date: "2026-11-09", type: "oracion", title: "Oracion lunes - Escuela dominical, Caballeros y Alabanza", time: "7:00 p. m." },
      { date: "2026-12-07", type: "oracion", title: "Oracion lunes - Edad dorada, Evangelismo y Red de familia", time: "7:00 p. m." },
      { date: "2026-03-01", type: "ayuno", title: "Ayuno - Todos los comites", time: "8:00 a. m." },
      { date: "2026-05-03", type: "ayuno", title: "Ayuno - Obra social, Misiones y Recepcion", time: "8:00 a. m." },
      { date: "2026-07-05", type: "ayuno", title: "Ayuno - Edad dorada, Evangelismo y Red de familias", time: "8:00 a. m." },
      { date: "2026-09-06", type: "ayuno", title: "Ayuno - Escuela dominical, Caballeros y Alabanza", time: "8:00 a. m." },
      { date: "2026-11-01", type: "ayuno", title: "Ayuno - Junta local, Damas Dorcas y Jovenes", time: "8:00 a. m." },
      { date: "2026-04-17", type: "vigilia", title: "Vigilia - Evangelismo, Red de familias y Edad dorada", time: "9:00 p. m." },
      { date: "2026-06-19", type: "vigilia", title: "Vigilia - Escuela dominical, Caballeros y Alabanza", time: "9:00 p. m." },
      { date: "2026-08-21", type: "vigilia", title: "Vigilia - Obra social, Misiones y Recepcion", time: "9:00 p. m." },
      { date: "2026-10-23", type: "vigilia", title: "Vigilia - Junta local, Damas Dorcas y Jovenes", time: "9:00 p. m." },
      { date: "2026-12-18", type: "vigilia", title: "Vigilia - Evangelismo, Red de familias y Edad dorada", time: "9:00 p. m." },
      { date: "2026-01-17", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-02-07", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-02-21", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-03-07", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-03-21", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-04-04", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-04-18", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-05-02", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-05-16", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-06-06", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-06-13", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-07-04", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-07-18", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-08-01", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-08-15", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-09-05", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-09-19", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-10-03", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-10-17", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-11-07", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-11-21", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-12-05", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-12-19", type: "culto", title: "Culto comite de Jovenes", time: "7:00 p. m." },
      { date: "2026-01-06", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-01-20", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-02-03", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-02-17", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-03-03", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-03-17", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-04-07", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-04-21", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-05-05", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-05-19", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-06-02", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-06-16", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-07-07", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-07-21", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-08-04", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-08-18", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-09-01", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-09-15", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-10-06", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-10-20", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-11-03", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-11-17", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-12-01", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-12-15", type: "culto", title: "Culto de Damas Dorcas", time: "7:00 p. m." },
      { date: "2026-01-08", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-01-22", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-02-12", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-02-26", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-03-12", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-03-26", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-04-09", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-04-23", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-05-14", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-05-28", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-06-11", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-06-25", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-07-09", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-07-23", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-08-13", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-08-27", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-09-10", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-09-24", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-10-08", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-10-22", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-11-12", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-11-26", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-12-10", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-12-24", type: "culto", title: "Culto comite de Evangelismo", time: "7:00 p. m." },
      { date: "2026-01-10", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-02-14", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-03-14", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-04-11", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-05-09", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-06-13", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-07-11", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-08-08", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-09-12", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-10-10", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-11-14", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-12-12", type: "culto", title: "Culto comite de Escuela Dominical", time: "7:00 p. m." },
      { date: "2026-01-31", type: "culto", title: "Culto comite de Alabanza", time: "7:00 p. m." },
      { date: "2026-05-30", type: "culto", title: "Culto comite de Alabanza", time: "7:00 p. m." },
      { date: "2026-08-29", type: "culto", title: "Culto comite de Alabanza", time: "7:00 p. m." },
      { date: "2026-10-31", type: "culto", title: "Culto comite de Alabanza", time: "7:00 p. m." },
      { date: "2026-01-27", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-02-24", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-03-24", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-04-28", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-05-26", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-06-23", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-07-28", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-08-25", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-09-22", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-10-27", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-11-24", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-12-22", type: "culto", title: "Culto comite de Obra Social", time: "7:00 p. m." },
      { date: "2026-03-31", type: "culto", title: "Culto comite de Edad Dorada", time: "7:00 p. m." },
      { date: "2026-06-30", type: "culto", title: "Culto comite de Edad Dorada", time: "7:00 p. m." },
      { date: "2026-09-29", type: "culto", title: "Culto comite de Edad Dorada", time: "7:00 p. m." },
      { date: "2026-12-29", type: "culto", title: "Culto comite de Edad Dorada", time: "7:00 p. m." },
      { date: "2026-01-13", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-02-10", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-03-10", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-04-14", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-05-12", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-06-09", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-07-14", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-08-11", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-09-08", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-10-13", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-11-10", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-12-08", type: "culto", title: "Culto comite de Caballeros", time: "7:00 p. m." },
      { date: "2026-01-24", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-02-28", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-03-28", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-04-25", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-05-23", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-06-27", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-07-25", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-08-22", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-09-26", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-10-24", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-11-28", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-12-26", type: "culto", title: "Culto comite de Red de Familia", time: "7:00 p. m." },
      { date: "2026-01-25", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-02-22", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-03-29", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-04-26", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-05-31", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-06-28", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-07-26", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-08-30", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-09-27", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-10-25", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-11-29", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." },
      { date: "2026-12-27", type: "culto", title: "Culto comite de Misiones", time: "10:00 a. m." }
    ];

    const months = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
    const weekdays = ["domingo","lunes","martes","miercoles","jueves","viernes","sabado"];
    const DAILY_REFLECTIONS = [
      { text: "Unidos en el nombre de Jesus, la iglesia camina con gozo y firmeza.", ref: "Hechos 2:46" },
      { text: "Un Señor, una fe, un bautismo: seguimos adelante en unidad.", ref: "Efesios 4:5" },
      { text: "La oracion abre camino cuando el pueblo se reúne con fe.", ref: "Hechos 4:31" },
      { text: "El nombre de Jesus sigue siendo nuestra esperanza y fortaleza.", ref: "Filipenses 2:10" },
      { text: "La iglesia permanece firme cuando sirve con amor y humildad.", ref: "Colosenses 3:23" },
      { text: "Donde hay unidad, Dios derrama bendicion y vida.", ref: "Salmo 133:1" },
      { text: "Cada dia es una oportunidad para adorar en espiritu y en verdad.", ref: "Juan 4:24" },
      { text: "El Señor añade fuerzas al que espera en El.", ref: "Isaias 40:31" },
      { text: "La luz de Cristo se nota en una vida rendida a su Palabra.", ref: "Mateo 5:16" },
      { text: "Somos un cuerpo llamado a servir, amar y perseverar.", ref: "1 Corintios 12:27" },
      { text: "La fe se aviva cuando recordamos que Dios sigue obrando.", ref: "Hebreos 11:1" },
      { text: "La familia de la fe crece cuando camina en paz.", ref: "Romanos 12:18" },
      { text: "La santidad tambien se vive en lo sencillo de cada dia.", ref: "1 Pedro 1:16" },
      { text: "El gozo del Señor sostiene al pueblo que le busca.", ref: "Nehemias 8:10" },
      { text: "La Palabra guia nuestros pasos y afirma nuestro camino.", ref: "Salmo 119:105" }
    ];
    const STORAGE_KEY = "ipuc-villa-del-rio-event-center-v1";
    const TAGS = ["Jovenes", "Damas", "Caballeros", "Escuela Dominical", "Evangelismo", "Infantil", "Musica", "Multimedia", "Pastoral", "Distrital", "Nacional", "Especial"];
    const INVITATION_FIELDS = [
      ["main", "Invitacion principal"],
      ["whatsapp", "Invitacion para WhatsApp"],
      ["story", "Historia Instagram/Facebook"],
      ["banner", "Banner para proyeccion"],
      ["video", "Video promocional"]
    ];
    const DEFAULT_ANNOUNCEMENTS = [
      {
        title: "Cronograma anual disponible",
        description: "Ya puedes consultar los cultos, ayunos, vigilias y oraciones del año.",
        date: "2026-06-03",
        eventId: ""
      }
    ];
    let APP_STATE = loadState();
    let activeTags = new Set();
    const today = cleanDate(new Date());
    let active = findOpeningDate(today);

    const grid = document.getElementById("grid");
    const monthName = document.getElementById("monthName");
    const yearName = document.getElementById("yearName");
    const selectedTitle = document.getElementById("selectedTitle");
    const eventsBox = document.getElementById("events");
    const summary = document.getElementById("summary");
    const heroTitle = document.getElementById("heroTitle");
    const heroType = document.getElementById("heroType");
    const heroTime = document.getElementById("heroTime");
    const dailyVerse = document.getElementById("dailyVerse");
    const clockTime = document.getElementById("clockTime");
    const badgeWeekday = document.getElementById("badgeWeekday");
    const badgeDay = document.getElementById("badgeDay");
    const badgeMonth = document.getElementById("badgeMonth");
    const tagFilters = document.getElementById("tagFilters");
    const featuredEvents = document.getElementById("featuredEvents");
    const announcementList = document.getElementById("announcementList");
    const pastEvents = document.getElementById("pastEvents");
    const eventModal = document.getElementById("eventModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalStatus = document.getElementById("modalStatus");
    const modalBody = document.getElementById("modalBody");
    const mediaModal = document.getElementById("mediaModal");
    const mediaTitle = document.getElementById("mediaTitle");
    const mediaBody = document.getElementById("mediaBody");
    const adminEventSelect = document.getElementById("adminEventSelect");
    const announcementEvent = document.getElementById("announcementEvent");
    const backgroundAudio = document.getElementById("backgroundAudio");
    const musicText = document.getElementById("musicText");

    document.getElementById("prev").onclick = () => {
      active = new Date(active.getFullYear(), active.getMonth() - 1, Math.min(active.getDate(), 28));
      render();
    };
    document.getElementById("next").onclick = () => {
      active = new Date(active.getFullYear(), active.getMonth() + 1, Math.min(active.getDate(), 28));
      render();
    };
    document.getElementById("todayButton").onclick = () => {
      active = new Date(today);
      render();
    };
    document.getElementById("addCalendarButton").onclick = () => {
      addAllEventsToCalendar();
    };
    document.getElementById("saveEventButton").onclick = () => {
      saveAdminEvent();
    };
    document.getElementById("deleteEventButton").onclick = () => {
      deleteAdminEvent();
    };
    document.getElementById("clearLocalButton").onclick = () => {
      if (confirm("Esto borrara los cambios locales de este navegador. ¿Deseas continuar?")) {
        APP_STATE = loadState();
        render();
        loadAdminEvent("__new__");
        renderMusic();
      }
    };
    document.getElementById("saveAnnouncementButton").onclick = () => {
      saveAnnouncement();
    };
    document.getElementById("adminMusic").onchange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
      APP_STATE.music = await fileToAsset(file, "Musica ambiente");
      saveState();
      renderMusic();
    };
    adminEventSelect.onchange = () => {
      loadAdminEvent(adminEventSelect.value);
    };
    document.querySelectorAll("[data-close-modal]").forEach(button => {
      button.onclick = () => closeModal(button.closest(".modal-backdrop"));
    });
    [eventModal, mediaModal].forEach(modal => {
      modal.onclick = (event) => {
        if (event.target === modal) closeModal(modal);
      };
    });
    document.querySelectorAll(".chip").forEach(button => {
      button.onclick = () => {
        const event = closestEvent(button.dataset.type);
        if (event) {
          active = parseDate(event.date);
          render();
        }
      };
    });

    renderTagFilters();
    renderAdminTagChecks();
    render();
    populateAdminSelectors();
    loadAdminEvent(adminEventSelect.value);
    renderMusic();
    updateClock();
    setInterval(updateClock, 1000);

    function render() {
      monthName.textContent = months[active.getMonth()];
      yearName.textContent = String(active.getFullYear());
      renderCalendar();
      renderPanel();
      renderFeatured();
      renderAnnouncements();
      renderPastEvents();
      populateAdminSelectors();
    }

    function renderCalendar() {
      grid.innerHTML = "";
      const year = active.getFullYear();
      const month = active.getMonth();
      const first = new Date(year, month, 1);
      const offset = (first.getDay() + 6) % 7;
      const start = new Date(year, month, 1 - offset);

      for (let i = 0; i < 42; i += 1) {
        const date = new Date(start);
        date.setDate(start.getDate() + i);
        const button = document.createElement("button");
        button.type = "button";
        button.className = "day";
        if (date.getMonth() !== month) button.classList.add("outside");
        if (sameDay(date, today)) button.classList.add("today");
        if (sameDay(date, active)) button.classList.add("selected");
        button.innerHTML = `<span class="num">${date.getDate()}</span>`;

        const dayEvents = visibleEventsForDate(date);
        const types = [...new Set(dayEvents.map(event => event.type))];
        if (types.length) {
          const bars = document.createElement("div");
          bars.className = "bars";
          types.forEach(type => {
            const bar = document.createElement("span");
            bar.className = "bar";
            bar.style.setProperty("--color", TYPES[type].color);
            bars.appendChild(bar);
          });
          button.appendChild(bars);
        }

        if (dayEvents.length) {
          const preview = document.createElement("div");
          preview.className = "day-events-preview";
          dayEvents.slice(0, 2).forEach(event => {
            const mini = document.createElement("button");
            mini.type = "button";
            mini.className = "mini-event";
            mini.innerHTML = `${event.invitations.main && isImage(event.invitations.main) ? `<img src="${event.invitations.main.dataUrl}" alt="">` : ""}<span>${escapeHtml(event.title)}</span>`;
            mini.onclick = (clickEvent) => {
              clickEvent.stopPropagation();
              openEventModal(event.id);
            };
            preview.appendChild(mini);
          });
          button.appendChild(preview);
        }

        button.onclick = () => {
          active = date;
          render();
        };
        grid.appendChild(button);
      }
    }

    function renderPanel() {
      const list = visibleEventsForDate(active);
      const isToday = sameDay(active, today);
      const mainEvent = list[0];
      const reflection = dailyReflection(active);
      badgeWeekday.textContent = isToday ? "Hoy" : weekdays[active.getDay()];
      badgeDay.textContent = String(active.getDate()).padStart(2, "0");
      badgeMonth.textContent = months[active.getMonth()];
      selectedTitle.textContent = `${isToday ? "Hoy, " : ""}${longDate(active)}`;
      heroTitle.textContent = mainEvent ? mainEvent.title : "Reflexion del dia";
      heroType.textContent = mainEvent ? TYPES[mainEvent.type].label : "Unidad";
      heroTime.textContent = mainEvent ? mainEvent.time : "Para meditar";
      summary.textContent = buildHeroSummary(list, active, isToday);
      dailyVerse.textContent = `${reflection.text} (${reflection.ref})`;

      eventsBox.innerHTML = "";
      if (!list.length) {
        eventsBox.innerHTML = `<div class="empty">${reflection.text} (${reflection.ref})</div>`;
        return;
      }
      list.forEach(event => {
        const wrapper = document.createElement("button");
        wrapper.type = "button";
        wrapper.className = "event-card-button";
        wrapper.onclick = () => openEventModal(event.id);
        const card = document.createElement("article");
        card.className = "event";
        card.style.setProperty("--color", TYPES[event.type].color);
        card.innerHTML = `<strong>${escapeHtml(event.title)}</strong><p>${escapeHtml(TYPES[event.type]?.label || event.type)} - ${escapeHtml(event.time)} - ${escapeHtml(event.status)}</p>`;
        wrapper.appendChild(card);
        eventsBox.appendChild(wrapper);
      });
    }

    function closestEvent(type) {
      const key = dateKey(active);
      const list = eventsForYear(active.getFullYear()).filter(event => event.type === type).sort((a, b) => a.date.localeCompare(b.date));
      return list.find(event => event.date >= key) || list[0];
    }
    function findOpeningDate(date) {
      if (eventsFor(date).length) return new Date(date);
      const key = dateKey(date);
      const upcoming = eventsForYear(date.getFullYear())
        .filter(event => event.date >= key)
        .sort((a, b) => a.date.localeCompare(b.date))[0];
      return upcoming ? parseDate(upcoming.date) : new Date(date);
    }
    function eventsFor(date) {
      const key = dateKey(date);
      return eventsForYear(date.getFullYear()).filter(event => event.date === key);
    }
    function eventsForYear(year) {
      const generated = [];
      const programmedCultoDates = new Set(PROGRAMMED_EVENTS.filter(event => event.type === "culto").map(event => event.date));
      const date = new Date(year, 0, 1);
      while (date.getFullYear() === year) {
        const key = dateKey(date);
        if (date.getDay() === 0 && !programmedCultoDates.has(key)) {
          generated.push({ date: key, type: "culto", title: "Culto dominical", time: "10:00 a. m." });
        }
        if (date.getDay() === 4 && !programmedCultoDates.has(key)) {
          generated.push({ date: key, type: "culto", title: "Culto de oracion y enseñanza", time: "7:00 p. m." });
        }
        date.setDate(date.getDate() + 1);
      }
      const customEvents = Object.values(APP_STATE.events || {}).filter(event => event.custom && event.date && parseDate(event.date).getFullYear() === year);
      return mergeEvents([...generated, ...PROGRAMMED_EVENTS], customEvents).map(enrichEvent).filter(event => !event.deleted);
    }
    function mergeEvents(baseEvents, specialEvents) {
      const bySignature = new Map();
      [...baseEvents, ...specialEvents].forEach(event => {
        bySignature.set(`${event.date}|${event.title}`, event);
      });
      return [...bySignature.values()];
    }
    function loadState() {
      return { events: {}, announcements: DEFAULT_ANNOUNCEMENTS, reflections: {}, music: null };
    }
    function saveState() {
      window.dispatchEvent(new CustomEvent("ipuc-state-updated"));
    }
    function eventIdFor(event) {
      return `${event.date}-${slugify(event.title)}`;
    }
    function slugify(value) {
      return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    }
    function enrichEvent(event) {
      const id = event.id || eventIdFor(event);
      const saved = (APP_STATE.events || {})[id] || {};
      const base = {
        id,
        title: event.title,
        date: event.date,
        time: event.time || "7:00 p. m.",
        type: event.type || "culto",
        place: "IPUC Villa del Rio",
        organizer: inferOrganizer(event.title),
        responsible: "Por definir",
        description: `Actividad programada dentro del cronograma anual de IPUC Villa del Rio.`,
        status: inferStatus(event.date),
        observations: "",
        featured: isDefaultFeatured(event),
        tags: inferTags(event.title, event.type),
        invitations: {},
        attachments: [],
        gallery: [],
        custom: Boolean(event.custom),
        deleted: false
      };
      return {
        ...base,
        ...saved,
        id,
        invitations: { ...base.invitations, ...(saved.invitations || {}) },
        attachments: saved.attachments || base.attachments,
        gallery: saved.gallery || base.gallery,
        tags: saved.tags || base.tags
      };
    }
    function inferStatus(date) {
      return parseDate(date) < today ? "Finalizado" : "Confirmado";
    }
    function inferOrganizer(title) {
      const lower = title.toLowerCase();
      if (lower.includes("dorcas") || lower.includes("damas")) return "Damas Dorcas";
      if (lower.includes("joven")) return "Jovenes";
      if (lower.includes("caballero")) return "Caballeros";
      if (lower.includes("escuela")) return "Escuela Dominical";
      if (lower.includes("evangelismo")) return "Evangelismo";
      if (lower.includes("alabanza")) return "Musica";
      if (lower.includes("misiones")) return "Misiones";
      if (lower.includes("red de familia")) return "Red de Familia";
      if (lower.includes("obra social")) return "Obra Social";
      if (lower.includes("edad dorada")) return "Edad Dorada";
      return "IPUC Villa del Rio";
    }
    function inferTags(title, type) {
      const lower = title.toLowerCase();
      const tags = [];
      if (lower.includes("joven")) tags.push("Jovenes");
      if (lower.includes("dorcas") || lower.includes("damas")) tags.push("Damas");
      if (lower.includes("caballero")) tags.push("Caballeros");
      if (lower.includes("escuela")) tags.push("Escuela Dominical");
      if (lower.includes("evangelismo")) tags.push("Evangelismo");
      if (lower.includes("alabanza")) tags.push("Musica");
      if (lower.includes("multimedia")) tags.push("Multimedia");
      if (lower.includes("distrital")) tags.push("Distrital");
      if (lower.includes("nacional")) tags.push("Nacional");
      if (type === "vigilia" || type === "ayuno" || lower.includes("especial")) tags.push("Especial");
      return tags.length ? [...new Set(tags)] : ["Pastoral"];
    }
    function isDefaultFeatured(event) {
      return ["vigilia", "ayuno", "especial"].includes(event.type);
    }
    function eventMatchesTags(event) {
      if (!activeTags.size) return true;
      return event.tags.some(tag => activeTags.has(tag));
    }
    function visibleEventsForDate(date) {
      return eventsFor(date).filter(eventMatchesTags);
    }
    function allEvents2026() {
      return eventsForYear(2026).sort((a, b) => a.date.localeCompare(b.date) || a.title.localeCompare(b.title));
    }
    function eventById(id) {
      return allEvents2026().find(event => event.id === id);
    }
    function renderTagFilters() {
      tagFilters.innerHTML = `<button class="tag-button ${activeTags.size ? "" : "active"}" type="button" data-tag="">Todos</button>`;
      TAGS.forEach(tag => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = `tag-button ${activeTags.has(tag) ? "active" : ""}`;
        button.dataset.tag = tag;
        button.textContent = tag;
        tagFilters.appendChild(button);
      });
      tagFilters.querySelectorAll(".tag-button").forEach(button => {
        button.onclick = () => {
          const tag = button.dataset.tag;
          if (!tag) activeTags.clear();
          else if (activeTags.has(tag)) activeTags.delete(tag);
          else activeTags.add(tag);
          renderTagFilters();
          render();
        };
      });
    }
    function renderFeatured() {
      const events = allEvents2026().filter(event => event.featured && parseDate(event.date) >= today && eventMatchesTags(event)).slice(0, 6);
      featuredEvents.innerHTML = events.length ? "" : `<div class="empty">No hay eventos destacados con este filtro.</div>`;
      events.forEach(event => featuredEvents.appendChild(eventSummaryCard(event, "feature-card")));
    }
    function renderPastEvents() {
      const events = allEvents2026().filter(event => parseDate(event.date) < today && eventMatchesTags(event)).slice(-6).reverse();
      pastEvents.innerHTML = events.length ? "" : `<div class="empty">Todavia no hay eventos realizados en este filtro.</div>`;
      events.forEach(event => pastEvents.appendChild(eventSummaryCard(event, "history-card")));
    }
    function eventSummaryCard(event, className) {
      const card = document.createElement("article");
      card.className = className;
      const typeLabel = TYPES[event.type]?.label || event.type;
      const image = event.invitations.main && isImage(event.invitations.main) ? `<img src="${event.invitations.main.dataUrl}" alt="">` : `<span>${escapeHtml(typeLabel)}</span>`;
      card.innerHTML = `
        <div class="${className === "feature-card" ? "feature-media" : "history-media"}">${image}</div>
        <div class="${className === "feature-card" ? "feature-body" : "history-body"}">
          <h3>${escapeHtml(event.title)}</h3>
          <p>${escapeHtml(formatDateShort(event.date))} - ${escapeHtml(event.time)}<br>${escapeHtml(event.place)}</p>
          <button class="open-event primary" type="button">Ver evento</button>
        </div>
      `;
      card.querySelector("button").onclick = () => openEventModal(event.id);
      return card;
    }
    function renderAnnouncements() {
      const announcements = APP_STATE.announcements || DEFAULT_ANNOUNCEMENTS;
      announcementList.innerHTML = announcements.length ? "" : `<div class="empty">No hay anuncios publicados.</div>`;
      announcements.slice().reverse().slice(0, 5).forEach(item => {
        const linked = item.eventId ? eventById(item.eventId) : null;
        const card = document.createElement("article");
        card.className = "announcement-card";
        card.innerHTML = `<h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description)}</p><p>${escapeHtml(formatDateShort(item.date))}${linked ? ` - ${escapeHtml(linked.title)}` : ""}</p>${linked ? `<button class="small-action" type="button">Ver evento</button>` : ""}`;
        const button = card.querySelector("button");
        if (button) button.onclick = () => openEventModal(linked.id);
        announcementList.appendChild(card);
      });
    }
    function renderMusic() {
      if (APP_STATE.music && APP_STATE.music.dataUrl) {
        backgroundAudio.src = APP_STATE.music.dataUrl;
        musicText.textContent = APP_STATE.music.name;
      } else {
        backgroundAudio.removeAttribute("src");
        musicText.textContent = "El administrador puede cargar musica autorizada para reproducirla manualmente.";
      }
    }
    function openEventModal(id) {
      const event = eventById(id);
      if (!event) return;
      modalTitle.textContent = event.title;
      modalStatus.textContent = `${event.status} - ${TYPES[event.type]?.label || event.type}`;
      modalBody.innerHTML = "";

      const detailGrid = document.createElement("div");
      detailGrid.className = "detail-grid";
      [
        ["Fecha", formatDateShort(event.date)],
        ["Hora", event.time],
        ["Lugar", event.place],
        ["Departamento", event.organizer],
        ["Responsable", event.responsible],
        ["Estado", event.status],
        ["Tipo", TYPES[event.type]?.label || event.type],
        ["Etiquetas", event.tags.join(", ") || "Sin etiquetas"],
        ["Descripcion", event.description || "Sin descripcion registrada.", true],
        ["Observaciones", event.observations || "Sin observaciones adicionales.", true]
      ].forEach(([label, value, full]) => {
        const item = document.createElement("div");
        item.className = `detail-item ${full ? "full" : ""}`;
        item.innerHTML = `<span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong>`;
        detailGrid.appendChild(item);
      });
      modalBody.appendChild(detailGrid);

      const invitationAssets = INVITATION_FIELDS
        .map(([key, label]) => event.invitations[key] ? { ...event.invitations[key], label } : null)
        .filter(Boolean);
      modalBody.appendChild(renderAssetSection("Invitaciones del evento", invitationAssets, "Aun no hay invitaciones subidas para este evento."));
      modalBody.appendChild(renderFileSection("Archivos adjuntos", event.attachments || [], "Aun no hay documentos adjuntos."));
      modalBody.appendChild(renderAssetSection("Galeria del evento", event.gallery || [], "La galeria se puede llenar despues de realizado el evento."));

      eventModal.classList.add("open");
    }
    function renderAssetSection(title, assets, emptyText) {
      const section = document.createElement("section");
      section.className = "asset-section";
      const heading = document.createElement("h3");
      heading.textContent = title;
      section.appendChild(heading);

      if (!assets.length) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = emptyText;
        section.appendChild(empty);
        return section;
      }

      const grid = document.createElement("div");
      grid.className = "asset-grid";
      assets.forEach(asset => {
        const card = document.createElement("article");
        card.className = "asset-card";

        const thumb = document.createElement("button");
        thumb.type = "button";
        thumb.className = "asset-thumb";
        thumb.onclick = () => openMedia(asset);
        if (isImage(asset)) {
          const img = document.createElement("img");
          img.src = asset.dataUrl;
          img.alt = asset.label || asset.name;
          thumb.appendChild(img);
        } else if (isVideo(asset)) {
          const video = document.createElement("video");
          video.src = asset.dataUrl;
          video.muted = true;
          video.playsInline = true;
          thumb.appendChild(video);
        } else {
          thumb.textContent = assetTypeLabel(asset);
        }

        const footer = document.createElement("footer");
        const name = document.createElement("strong");
        name.textContent = asset.label || asset.name;
        const meta = document.createElement("span");
        meta.className = "asset-name";
        meta.textContent = asset.name;
        const actions = document.createElement("div");
        actions.className = "asset-actions";
        actions.appendChild(actionButton("Ver", () => openMedia(asset)));
        actions.appendChild(actionButton("Descargar", () => downloadAsset(asset)));
        footer.append(name, meta, actions);
        card.append(thumb, footer);
        grid.appendChild(card);
      });
      section.appendChild(grid);
      return section;
    }
    function renderFileSection(title, files, emptyText) {
      const section = document.createElement("section");
      section.className = "asset-section";
      const heading = document.createElement("h3");
      heading.textContent = title;
      section.appendChild(heading);

      if (!files.length) {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = emptyText;
        section.appendChild(empty);
        return section;
      }

      const list = document.createElement("div");
      list.className = "file-list";
      files.forEach(file => {
        const row = document.createElement("article");
        row.className = "file-row";
        const info = document.createElement("div");
        const name = document.createElement("strong");
        name.textContent = file.name;
        const meta = document.createElement("span");
        meta.className = "file-meta";
        meta.textContent = `${assetTypeLabel(file)} - ${humanFileSize(file.size)} - Subido ${formatDateShort(file.uploadedAt)}`;
        info.append(name, meta);
        const actions = document.createElement("div");
        actions.className = "asset-actions";
        actions.appendChild(actionButton("Ver", () => openMedia(file)));
        actions.appendChild(actionButton("Descargar", () => downloadAsset(file)));
        row.append(info, actions);
        list.appendChild(row);
      });
      section.appendChild(list);
      return section;
    }
    function openMedia(asset) {
      mediaTitle.textContent = asset.label || asset.name;
      mediaBody.innerHTML = "";

      if (isImage(asset)) {
        const img = document.createElement("img");
        img.className = "media-preview";
        img.src = asset.dataUrl;
        img.alt = asset.label || asset.name;
        mediaBody.appendChild(img);
      } else if (isVideo(asset)) {
        const video = document.createElement("video");
        video.className = "media-preview";
        video.src = asset.dataUrl;
        video.controls = true;
        mediaBody.appendChild(video);
      } else if (isAudio(asset)) {
        const audio = document.createElement("audio");
        audio.className = "media-preview";
        audio.src = asset.dataUrl;
        audio.controls = true;
        mediaBody.appendChild(audio);
      } else if (isPdf(asset)) {
        const frame = document.createElement("iframe");
        frame.className = "media-preview";
        frame.src = asset.dataUrl;
        mediaBody.appendChild(frame);
      } else {
        const empty = document.createElement("div");
        empty.className = "empty";
        empty.textContent = "Este archivo no tiene vista previa directa en el navegador, pero se puede descargar.";
        mediaBody.appendChild(empty);
      }

      const actions = document.createElement("div");
      actions.className = "media-actions";
      actions.style.marginTop = "12px";
      actions.appendChild(actionButton("Descargar", () => downloadAsset(asset), true));
      mediaBody.appendChild(actions);
      mediaModal.classList.add("open");
    }
    function closeModals() {
      eventModal.classList.remove("open");
      mediaModal.classList.remove("open");
      mediaBody.innerHTML = "";
    }
    function closeModal(modal) {
      if (!modal) return;
      modal.classList.remove("open");
      if (modal === mediaModal) mediaBody.innerHTML = "";
    }
    function populateAdminSelectors() {
      const previousEvent = adminEventSelect.value || "__new__";
      const previousAnnouncement = announcementEvent.value || "";
      const events = allEvents2026();

      adminEventSelect.innerHTML = `<option value="__new__">Crear evento nuevo</option>`;
      events.forEach(event => {
        const option = document.createElement("option");
        option.value = event.id;
        option.textContent = `${formatDateShort(event.date)} - ${event.title}`;
        adminEventSelect.appendChild(option);
      });
      adminEventSelect.value = [...adminEventSelect.options].some(option => option.value === previousEvent) ? previousEvent : "__new__";

      announcementEvent.innerHTML = `<option value="">Sin evento relacionado</option>`;
      events.forEach(event => {
        const option = document.createElement("option");
        option.value = event.id;
        option.textContent = `${formatDateShort(event.date)} - ${event.title}`;
        announcementEvent.appendChild(option);
      });
      announcementEvent.value = [...announcementEvent.options].some(option => option.value === previousAnnouncement) ? previousAnnouncement : "";
    }
    function renderAdminTagChecks() {
      const box = document.getElementById("adminTags");
      box.innerHTML = "";
      TAGS.forEach(tag => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = tag;
        label.append(input, document.createTextNode(tag));
        box.appendChild(label);
      });
    }
    function loadAdminEvent(id) {
      const event = id && id !== "__new__" ? eventById(id) : null;
      document.getElementById("adminTitle").value = event?.title || "";
      document.getElementById("adminDate").value = event?.date || dateKey(active);
      document.getElementById("adminTime").value = event?.time || "7:00 p. m.";
      document.getElementById("adminType").value = event?.type || "culto";
      document.getElementById("adminStatus").value = event?.status || "Pendiente";
      document.getElementById("adminPlace").value = event?.place || "IPUC Villa del Rio";
      document.getElementById("adminOrganizer").value = event?.organizer || "";
      document.getElementById("adminResponsible").value = event?.responsible || "";
      document.getElementById("adminFeatured").checked = Boolean(event?.featured);
      document.getElementById("adminDescription").value = event?.description || "";
      document.getElementById("adminObservations").value = event?.observations || "";
      document.querySelectorAll("#adminTags input").forEach(input => {
        input.checked = Boolean(event?.tags?.includes(input.value));
      });
      clearUploadInputs();
    }
    async function saveAdminEvent() {
      const saveButton = document.getElementById("saveEventButton");
      const originalText = saveButton.textContent;
      saveButton.disabled = true;
      saveButton.textContent = "Guardando...";
      try {
        const selected = adminEventSelect.value;
        const title = document.getElementById("adminTitle").value.trim();
        const date = document.getElementById("adminDate").value;
        if (!title || !date) {
          alert("Escribe al menos el nombre y la fecha del evento.");
          return;
        }

        const base = selected && selected !== "__new__" ? eventById(selected) : null;
        const id = base ? selected : eventIdFor({ date, title });
        const invitations = { ...(base?.invitations || {}) };
        const invitationInputs = {
          main: "adminInviteMain",
          whatsapp: "adminInviteWhatsapp",
          story: "adminInviteStory",
          banner: "adminInviteBanner",
          video: "adminInviteVideo"
        };
        for (const [key, label] of INVITATION_FIELDS) {
          const file = document.getElementById(invitationInputs[key]).files[0];
          if (file) invitations[key] = await fileToAsset(file, label);
        }

        const attachments = [...(base?.attachments || [])];
        for (const file of document.getElementById("adminAttachments").files) {
          attachments.push(await fileToAsset(file, "Archivo adjunto"));
        }

        const gallery = [...(base?.gallery || [])];
        for (const file of document.getElementById("adminGallery").files) {
          gallery.push(await fileToAsset(file, "Galeria"));
        }

        APP_STATE.events[id] = {
          ...(APP_STATE.events[id] || {}),
          id,
          custom: !base || Boolean(base.custom),
          deleted: false,
          title,
          date,
          time: document.getElementById("adminTime").value.trim() || "7:00 p. m.",
          type: document.getElementById("adminType").value,
          place: document.getElementById("adminPlace").value.trim() || "IPUC Villa del Rio",
          organizer: document.getElementById("adminOrganizer").value.trim() || "IPUC Villa del Rio",
          responsible: document.getElementById("adminResponsible").value.trim() || "Por definir",
          description: document.getElementById("adminDescription").value.trim(),
          status: document.getElementById("adminStatus").value,
          observations: document.getElementById("adminObservations").value.trim(),
          featured: document.getElementById("adminFeatured").checked,
          tags: selectedAdminTags().length ? selectedAdminTags() : inferTags(title, document.getElementById("adminType").value),
          invitations,
          attachments,
          gallery
        };

        active = parseDate(date);
        saveState();
        renderTagFilters();
        render();
        adminEventSelect.value = id;
        loadAdminEvent(id);
        alert("Evento guardado.");
      } finally {
        saveButton.disabled = false;
        saveButton.textContent = originalText;
      }
    }
    function deleteAdminEvent() {
      const id = adminEventSelect.value;
      if (!id || id === "__new__") {
        loadAdminEvent("__new__");
        return;
      }
      if (!confirm("Este evento se ocultara del calendario en este navegador. Deseas continuar?")) return;
      const event = eventById(id);
      APP_STATE.events[id] = {
        ...(event || {}),
        ...(APP_STATE.events[id] || {}),
        id,
        deleted: true,
        custom: Boolean(event?.custom || APP_STATE.events[id]?.custom)
      };
      saveState();
      render();
      adminEventSelect.value = "__new__";
      loadAdminEvent("__new__");
    }
    function saveAnnouncement() {
      const title = document.getElementById("announcementTitle").value.trim();
      const description = document.getElementById("announcementDescription").value.trim();
      const eventId = announcementEvent.value;
      if (!title || !description) {
        alert("Escribe titulo y descripcion del anuncio.");
        return;
      }
      APP_STATE.announcements = APP_STATE.announcements || [];
      APP_STATE.announcements.push({
        id: `anuncio-${Date.now()}`,
        title,
        description,
        date: dateKey(today),
        eventId
      });
      saveState();
      document.getElementById("announcementTitle").value = "";
      document.getElementById("announcementDescription").value = "";
      announcementEvent.value = "";
      renderAnnouncements();
    }
    function selectedAdminTags() {
      return [...document.querySelectorAll("#adminTags input:checked")].map(input => input.value);
    }
    function clearUploadInputs() {
      ["adminInviteMain", "adminInviteWhatsapp", "adminInviteStory", "adminInviteBanner", "adminInviteVideo", "adminAttachments", "adminGallery"].forEach(id => {
        document.getElementById(id).value = "";
      });
    }
    function fileToAsset(file, label) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve({
          id: `asset-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          label,
          name: file.name,
          type: file.type || "application/octet-stream",
          size: file.size,
          uploadedAt: dateKey(new Date()),
          dataUrl: reader.result
        });
        reader.onerror = () => reject(reader.error);
        reader.readAsDataURL(file);
      });
    }
    function actionButton(label, handler, primary = false) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `small-action ${primary ? "primary" : ""}`;
      button.textContent = label;
      button.onclick = handler;
      return button;
    }
    function downloadAsset(asset) {
      const source = assetSource(asset);
      if (!source) return alert("Este archivo no tiene URL disponible.");
      const link = document.createElement("a");
      link.href = source;
      link.download = asset.name || "archivo";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
    function assetSource(asset) {
      return asset?.url || asset?.dataUrl || "";
    }
    function isImage(asset) {
      return asset.type && asset.type.startsWith("image/");
    }
    function isVideo(asset) {
      return asset.type && asset.type.startsWith("video/");
    }
    function isAudio(asset) {
      return asset.type && asset.type.startsWith("audio/");
    }
    function isPdf(asset) {
      return asset.type === "application/pdf" || asset.name?.toLowerCase().endsWith(".pdf");
    }
    function assetTypeLabel(asset) {
      if (isImage(asset)) return "Imagen";
      if (isVideo(asset)) return "Video";
      if (isAudio(asset)) return "Audio";
      if (isPdf(asset)) return "PDF";
      return asset.type || "Archivo";
    }
    function humanFileSize(size = 0) {
      if (!size) return "tamano no disponible";
      if (size < 1024) return `${size} B`;
      if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`;
      return `${(size / (1024 * 1024)).toFixed(1)} MB`;
    }
    function formatDateShort(key) {
      if (!key) return "Fecha por confirmar";
      const date = parseDate(key);
      if (Number.isNaN(date.getTime())) return key;
      return `${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    }
    function escapeHtml(value) {
      const span = document.createElement("span");
      span.textContent = value ?? "";
      return span.innerHTML;
    }
    function buildHeroSummary(list, date, isToday) {
      const reflection = dailyReflection(date);
      if (!list.length) {
        return `${reflection.text} (${reflection.ref})`;
      }
      const names = list.map(event => event.title);
      const extra = names.length > 1 ? ` Tambien hay: ${names.slice(1).join(", ")}.` : "";
      return `${isToday ? "Hoy" : "Este dia"} hay ${list.length} evento${list.length > 1 ? "s" : ""} programado${list.length > 1 ? "s" : ""}.${extra}`;
    }
    function dailyReflection(date) {
      const start = new Date(date.getFullYear(), 0, 0);
      const dayNumber = Math.floor((date - start) / 86400000);
      return DAILY_REFLECTIONS[dayNumber % DAILY_REFLECTIONS.length];
    }
    function updateClock() {
      const now = new Date();
      clockTime.textContent = now.toLocaleTimeString("es-CO", {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit"
      });
    }
    function addAllEventsToCalendar() {
      const events = eventsForYear(2026).sort((a, b) => {
        const byDate = a.date.localeCompare(b.date);
        return byDate || a.title.localeCompare(b.title);
      });
      downloadEventsCalendar(events, "cronograma-ipuc-villa-del-rio-2026.ics");
    }
    function downloadEventsCalendar(events, filename) {
      const ics = buildIcs(events);
      const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename || "cronograma-ipuc-villa-del-rio.ics";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    }
    function buildIcs(events) {
      const stamp = formatUtcIcsDate(new Date());
      const lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//IPUC Villa del Rio//Cronograma Anual 2026//ES",
        "CALSCALE:GREGORIAN",
        "METHOD:PUBLISH",
        "X-WR-CALNAME:Cronograma IPUC Villa del Rio",
        "X-WR-TIMEZONE:America/Bogota"
      ];

      events.forEach((event, index) => {
        const start = eventStartDate(event);
        const end = new Date(start.getTime() + eventDurationHours(event) * 60 * 60 * 1000);
        lines.push(
          "BEGIN:VEVENT",
          `UID:${event.date}-${slugify(event.title)}-${index}@ipuc-villa-del-rio`,
          `DTSTAMP:${stamp}`,
          `DTSTART;TZID=America/Bogota:${formatLocalIcsDate(start)}`,
          `DTEND;TZID=America/Bogota:${formatLocalIcsDate(end)}`,
          `SUMMARY:${escapeIcs(event.title)}`,
          `DESCRIPTION:${escapeIcs(`${TYPES[event.type]?.label || event.type} - ${event.time}`)}`,
          `LOCATION:${escapeIcs(event.place || "IPUC Villa del Río")}`,
          "END:VEVENT"
        );
      });

      lines.push("END:VCALENDAR");
      return `${lines.join("\r\n")}\r\n`;
    }
    function eventStartDate(event) {
      const date = parseDate(event.date);
      const time = parseTime(event.time);
      date.setHours(time.hours, time.minutes, 0, 0);
      return date;
    }
    function parseTime(time) {
      const match = time.match(/(\d{1,2}):(\d{2})\s*([ap])\.\s*m\./i);
      if (!match) return { hours: 19, minutes: 0 };
      let hours = Number(match[1]);
      const minutes = Number(match[2]);
      const period = match[3].toLowerCase();
      if (period === "p" && hours < 12) hours += 12;
      if (period === "a" && hours === 12) hours = 0;
      return { hours, minutes };
    }
    function eventDurationHours(event) {
      if (event.type === "vigilia") return 5;
      if (event.type === "ayuno") return 4;
      return 2;
    }
    function formatLocalIcsDate(date) {
      return `${date.getFullYear()}${pad2(date.getMonth() + 1)}${pad2(date.getDate())}T${pad2(date.getHours())}${pad2(date.getMinutes())}00`;
    }
    function formatUtcIcsDate(date) {
      return `${date.getUTCFullYear()}${pad2(date.getUTCMonth() + 1)}${pad2(date.getUTCDate())}T${pad2(date.getUTCHours())}${pad2(date.getUTCMinutes())}${pad2(date.getUTCSeconds())}Z`;
    }
    function escapeIcs(value) {
      return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/;/g, "\\;")
        .replace(/,/g, "\\,")
        .replace(/\r?\n/g, "\\n");
    }
    function pad2(value) {
      return String(value).padStart(2, "0");
    }
    function dateKey(date) {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${y}-${m}-${d}`;
    }
    function parseDate(key) {
      const [y, m, d] = key.split("-").map(Number);
      return new Date(y, m - 1, d);
    }
    function cleanDate(date) {
      return new Date(date.getFullYear(), date.getMonth(), date.getDate());
    }
    function sameDay(a, b) {
      return dateKey(a) === dateKey(b);
    }
    function longDate(date) {
      return `${weekdays[date.getDay()]} ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
    }
    initIpucPlatform();
    function initIpucPlatform() {
      APP_STATE.events = APP_STATE.events || {};
      APP_STATE.announcements = APP_STATE.announcements || DEFAULT_ANNOUNCEMENTS;
      APP_STATE.reflections = APP_STATE.reflections || {};
      APP_STATE.music = APP_STATE.music || null;
      APP_STATE.weeklySchedule = APP_STATE.weeklySchedule || null;
      APP_STATE.decomTurns = APP_STATE.decomTurns || {};

      const ADMIN_USER = "DECOMVILLADELRIO";
      const FIREBASE_CLOUD = {
        firebaseConfig: {
          apiKey: "AIzaSyBPUBakK4nZUNchM2S_G5PlGnqdAZq0gVc",
          authDomain: "cronograma-f28f0.firebaseapp.com",
          projectId: "cronograma-f28f0",
          storageBucket: "cronograma-f28f0.firebasestorage.app",
          messagingSenderId: "1089267436832",
          appId: "1:1089267436832:web:dc87e170e1fd1762769b45",
          measurementId: "G-4MGX6X2Q6K"
        },
        adminUsername: ADMIN_USER,
        adminEmail: "decomvilladelrio@gmail.com",
        adminEmails: ["decomvilladelrio@gmail.com", "estebanarango1499@gmail.com", "earangoc@miceas.edu.co"],
        decomEmails: ["decomvilladelrio@gmail.com", "estebanarango1499@gmail.com", "earangoc@miceas.edu.co"],
        sdkVersion: "12.14.0"
      };
      const SUPABASE_CONFIG = {
        url: "https://qgucwxgwehkualhfnckt.supabase.co",
        publishableKey: "sb_publishable_ZqqjaA95z6fwMSmQ8Rok9g_Wqhgc0ym"
      };
      const cloud = {
        enabled: false,
        ready: false,
        storageReady: false,
        storageError: "",
        error: "",
        user: null,
        app: null,
        auth: null,
        db: null,
        storage: null,
        authMod: null,
        dbMod: null,
        storageMod: null,
        unsubscribers: [],
        decomUnsubscribe: null
      };
      const BASE_TIMES = {
        culto: "7:00 p. m.",
        oracion: "6:00 p. m.",
        vigilia: "7:00 p. m.",
        ayuno: "7:00 a. m.",
        domingo: "10:00 a. m."
      };
      const DAY_BASE = {
        0: { type: "culto", title: "Culto dominical", department: "Pastoral" },
        2: { type: "culto", title: "Culto congregacional", department: "Pastoral" },
        4: { type: "culto", title: "Culto de oracion y enseñanza", department: "Pastoral" },
        6: { type: "culto", title: "Culto congregacional", department: "Pastoral" }
      };
      const REFLECTIONS = [
        { text: "La unidad se cuida con amor, servicio y una fe encendida en el nombre de Jesus.", ref: "Efesios 4:5", style: "amanecer" },
        { text: "Cada dia es una oportunidad para caminar firmes, sencillos y llenos del Espiritu.", ref: "Hechos 2:46", style: "luz" },
        { text: "La iglesia avanza cuando todos servimos con gozo y un mismo sentir.", ref: "Filipenses 2:2", style: "montanas" },
        { text: "La oracion abre caminos cuando el pueblo se reune con fe y perseverancia.", ref: "Hechos 4:31", style: "noche" },
        { text: "Dios fortalece al que espera en El y renueva su animo para servir.", ref: "Isaias 40:31", style: "naturaleza" }
      ];
      const DEFAULT_REFLECTION_MEDIA = [
        "https://www.youtube.com/watch?v=fDSnhTQZQeg",
        "https://www.youtube.com/watch?v=-AHbznYsaIU",
        "https://www.youtube.com/watch?v=pwX6jP_olR0"
      ];
      const DECOM_YEAR = 2026;
      const DECOM_MONTHS = months.map((_, index) => index);
      const DECOM_STATUSES = ["Pendiente", "Confirmado", "Cubierto", "Sin asignar", "Cambio solicitado"];
      const DECOM_MEMBERS = [
        {
          name: "Esteban Arango",
          specificDates: [
            "2026-07-21", "2026-07-28", "2026-07-30",
            "2026-08-06", "2026-08-08", "2026-08-15", "2026-08-16", "2026-08-25",
            "2026-09-03", "2026-09-12", "2026-09-13", "2026-09-20", "2026-09-22", "2026-09-29",
            "2026-10-01", "2026-10-08", "2026-10-10", "2026-10-17", "2026-10-18", "2026-10-27",
            "2026-11-05", "2026-11-14", "2026-11-15", "2026-11-22", "2026-11-24",
            "2026-12-01", "2026-12-03", "2026-12-10", "2026-12-12", "2026-12-19", "2026-12-20", "2026-12-29"
          ]
        },
        { name: "Francisca Coderque", weekdays: [4, 6, 0] },
        { name: "Sara Arango", weekdays: [2, 6] },
        { name: "Sofía Henao", weekdays: [6, 0] },
        { name: "Angelo Pérez", weekdays: [4, 6, 0] },
        { name: "Ángel Fragozo", weekdays: [2, 4] },
        { name: "Ana Sofía", weekdays: [0] },
        { name: "Sebastián Sepúlveda", weekdays: [2, 4, 6, 0] }
      ];

      const platform = {
        calendarDate: cleanDate(new Date()),
        agendaMonth: cleanDate(new Date()).getMonth(),
        decomMonth: cleanDate(new Date()).getMonth(),
        decomSelectedDate: dateKey(cleanDate(new Date())),
        calendarView: "mes",
        tag: "todos",
        search: "",
        selectedAdminEvent: "__new__",
        adminSection: "eventos"
      };

      installPlatformStyles();
      document.body.classList.add("platform-body");
      const shell = document.querySelector("main.app");
      shell.className = "platform-shell";
      shell.innerHTML = `
        <div class="site-video-backdrop" aria-hidden="true"><video autoplay muted loop playsinline preload="auto"><source src="assets/ipuc-villa-del-rio.mp4" type="video/mp4"></video><span></span></div>
        <a class="skip-link" href="#routeView">Saltar al contenido</a>
        <header class="platform-top glass">
          <a class="platform-brand" href="/" aria-label="Inicio IPUC Villa del Río">
            <img src="assets/logo.png" alt="Logo IPUC Villa del Río">
            <span><strong>Cronograma IPUC Villa del Río</strong><small>Agenda anual de eventos</small></span>
          </a>
          <button class="nav-toggle" type="button" data-toggle-nav aria-expanded="false" aria-controls="platformNav" aria-label="Abrir menú">Menú</button>
          <nav class="platform-nav" id="platformNav" aria-label="Navegación principal">
            <a href="/" data-route-link="inicio">Inicio</a>
            <a href="/calendario" data-route-link="calendario">Calendario</a>
            <a href="/agenda" data-route-link="agenda">Agenda</a>
            <a href="/anuncios" data-route-link="anuncios">Anuncios</a>
            <a href="/archivo" data-route-link="archivo">Archivo</a>
            <a href="/ubicacion" data-route-link="ubicacion">Ubicación</a>
            <a href="/admin/login" data-login-link>Admin</a>
          </nav>
        </header>
        <section id="routeView" class="route-view" tabindex="-1"></section>
        <footer class="platform-footer glass">
          <span><strong>IPUC Villa del Río</strong><small>Un lugar para mantenernos conectados.</small></span>
          <a href="/calendario">Ver cronograma</a>
        </footer>
        <div class="media-layer" id="platformMedia" aria-hidden="true"></div>
        <audio id="platformMusic" loop preload="auto"></audio>
        <button class="music-pill" id="musicPill" type="button" hidden>Activar ambiente</button>
        <aside class="radio-widget" aria-label="Radio IPUC en vivo">
          <div class="radio-widget-head"><span class="radio-mark">◉</span><span><strong>Radio IPUC</strong><small><i></i> En vivo</small></span></div>
          <button class="radio-toggle" id="radioToggle" type="button">Escuchar ahora</button>
          <audio id="radioIpucAudio" preload="none" playsinline></audio>
        </aside>
      `;

      document.querySelector("[data-toggle-nav]").onclick = event => {
        const open = document.getElementById("platformNav").classList.toggle("open");
        event.currentTarget.setAttribute("aria-expanded", String(open));
      };
      let compactMenu = false;
      window.addEventListener("scroll", () => {
        const topbar = document.querySelector(".platform-top");
        if (!topbar) return;
        const shouldCompact = window.scrollY > 120;
        if (shouldCompact !== compactMenu) {
          compactMenu = shouldCompact;
          topbar.classList.toggle("is-compact", shouldCompact);
        }
      }, { passive: true });
      window.addEventListener("hashchange", renderRoute);
      window.addEventListener("popstate", renderRoute);
      document.addEventListener("click", event => {
        const link = event.target.closest("a[href]");
        if (!link || link.target || link.origin !== location.origin) return;
        const href = link.getAttribute("href");
        if (href?.startsWith("#/")) {
          event.preventDefault();
          history.pushState({}, "", href.slice(1) || "/");
          renderRoute();
        } else if (href?.startsWith("/")) {
          event.preventDefault();
          history.pushState({}, "", href);
          renderRoute();
        }
      });
      window.addEventListener("ipuc-state-updated", renderRoute);
      document.addEventListener("click", unlockMusicOnce, { once: true });
      setupPlatformMusic();
      setupRadioIpuc();
      if (location.hash) history.replaceState({}, "", location.hash.replace(/^#\/?/, "/") || "/");
      renderRoute();
      initializeCloud();

      function renderRoute(event) {
        if (event?.type === "hashchange") window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        refreshAdminNav();
        document.getElementById("platformNav").classList.remove("open");
        document.querySelector("[data-toggle-nav]").setAttribute("aria-expanded", "false");
        const route = parseRoute();
        updateActiveNavigation(route.name);
        if (route.name === "calendario") return renderCalendarPage();
        if (route.name === "agenda") return renderAgendaPage();
        if (route.name === "eventos") return renderEventsPage();
        if (route.name === "anuncios") return renderAnnouncementsPage();
        if (route.name === "archivo") return renderArchivePage();
        if (route.name === "ubicacion") return renderLocationPage();
        if (route.name === "evento") return renderEventDetail(route.id);
        if (route.name === "admin") {
          if (isAdmin()) return renderAdminPage();
          if (isDecomMember()) return renderDecomOnlyPage();
          return renderLoginPage();
        }
        if (route.name === "login") return renderLoginPage();
        return renderHomePage();
      }

      function renderAnnouncementsPage() {
        const items = (APP_STATE.announcements || []).filter(item => item.published !== false && (!item.expiresAt || String(item.expiresAt) >= dateKey(today))).slice().reverse();
        view().innerHTML = `<section class="page-head glass"><div><p class="eyebrow">Comunicaciones</p><h1>Anuncios</h1><p>Información importante y novedades de IPUC Villa del Río.</p></div></section><section class="announcement-page-grid">${items.map(item => `<article class="content-card glass announcement-public"><span class="status-chip">${escapeHtml(item.type || "Información")}</span><h2>${escapeHtml(item.title)}</h2><p>${escapeHtml(item.description || "")}</p><small>${escapeHtml(formatDateShort(item.date || item.startsAt || ""))}</small></article>`).join("") || emptyText("No hay anuncios publicados.")}</section>`;
      }

      function renderArchivePage() {
        const items = platformEventsForYear(today.getFullYear()).filter(event => platformStatus(event) === "Realizado" || event.date < dateKey(today)).sort((a, b) => b.date.localeCompare(a.date));
        view().innerHTML = `<section class="page-head glass"><div><p class="eyebrow">Memoria</p><h1>Archivo de eventos</h1><p>Consulta invitaciones, galerías y documentos de actividades anteriores.</p></div></section><section class="event-grid archive-grid">${items.map(eventCard).join("") || emptyText("Todavía no hay eventos archivados.")}</section>`;
      }

      function renderLocationPage() {
        view().innerHTML = `<section class="page-head glass"><div><p class="eyebrow">Encuéntranos</p><h1>IPUC Villa del Río</h1><p>Consulta la ubicación de la congregación y planea tu llegada.</p></div></section><section class="location-card glass"><div class="location-info"><p class="eyebrow">Ubicación</p><h2>Estamos aquí para recibirte</h2><p>Villa del Río · Colombia</p><div class="location-actions"><a class="map-button primary" href="https://www.google.com/maps/dir/?api=1&destination=5.065963,-75.491681" target="_blank" rel="noopener">Cómo llegar</a><a class="map-button" href="https://www.google.com/maps?q=5.065963,-75.491681" target="_blank" rel="noopener">Abrir mapa</a></div></div><iframe class="map-frame" title="Mapa de IPUC Villa del Río" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=5.065963,-75.491681&z=17&output=embed"></iframe></section>`;
      }

      function parseRoute() {
        const raw = location.pathname.replace(/^\//, "") || (location.hash || "#/inicio").replace(/^#\/?/, "");
        const parts = raw.split("/").filter(Boolean);
        const requestedName = parts[0] || "inicio";
        const name = requestedName === "inicioquiero" ? "inicio" : requestedName;
        return { name, id: decodeURIComponent(parts[1] || "") };
      }

      function updateActiveNavigation(routeName) {
        const activeRoute = routeName === "evento" ? "eventos" : routeName;
        document.querySelectorAll("[data-route-link]").forEach(link => {
          const active = link.dataset.routeLink === activeRoute;
          link.classList.toggle("active", active);
          if (active) link.setAttribute("aria-current", "page");
          else link.removeAttribute("aria-current");
        });
      }

      function view() {
        return document.getElementById("routeView");
      }

      function firebaseConfigured() {
        const config = FIREBASE_CLOUD.firebaseConfig || {};
        return Boolean(config.apiKey && config.authDomain && config.projectId && config.storageBucket && config.appId && FIREBASE_CLOUD.adminEmails?.length);
      }

      async function initializeCloud() {
        try {
          const supabase = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/+esm");
          cloud.app = supabase.createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.publishableKey);
          cloud.auth = cloud.app;
          cloud.db = cloud.app;
          cloud.storage = cloud.app.storage;
          cloud.authMod = supabaseAuthAdapter;
          cloud.dbMod = supabaseDbAdapter;
          cloud.storageMod = supabaseStorageAdapter;
          cloud.enabled = true;
          cloud.ready = true;
          cloud.error = "";
          cloud.storageReady = true;
          supabaseAuthAdapter.onAuthStateChanged(cloud.auth, user => {
            cloud.user = user;
            setupDecomListener();
            refreshAdminNav();
            const route = parseRoute();
            if (route.name === "admin" || route.name === "login") renderRoute();
          });
          ["events", "announcements", "reflections", "settings"].forEach(collectionName => {
            cloud.unsubscribers.push(supabaseDbAdapter.onSnapshot(collectionName, snapshot => {
              if (collectionName === "events") {
                const events = {};
                snapshot.forEach(item => { events[item.id] = normalizeCloudDoc(item.id, item.data()); });
                APP_STATE.events = events;
              } else if (collectionName === "announcements") {
                APP_STATE.announcements = snapshot.docs.map(item => normalizeCloudDoc(item.id, item.data())).sort((a, b) => (a.date || a.startsAt || "").localeCompare(b.date || b.startsAt || ""));
              } else if (collectionName === "reflections") {
                const reflections = {};
                snapshot.forEach(item => { reflections[item.id] = normalizeCloudDoc(item.id, item.data()); });
                APP_STATE.reflections = reflections;
              } else if (collectionName === "settings") {
                const data = snapshot.docs.find(item => item.id === "site")?.data() || {};
                APP_STATE.music = data.music || null;
                APP_STATE.weeklySchedule = data.weeklySchedule || null;
                setupPlatformMusic();
              }
              renderRoute();
            }, error => { cloud.error = error.message; renderRoute(); }));
          });
        } catch (error) {
          cloud.error = `No se pudo iniciar Supabase: ${error.message}`;
          renderRoute();
        }
      }

      const supabaseAuthAdapter = {
        onAuthStateChanged(client, callback) {
          client.auth.getSession().then(({ data }) => callback(data.session?.user || null));
          const { data } = client.auth.onAuthStateChange((_event, session) => callback(session?.user || null));
          return () => data.subscription.unsubscribe();
        },
        async signInWithEmailAndPassword(client, email, password) {
          return client.auth.signInWithPassword({ email, password });
        },
        async signOut(client) { return client.auth.signOut(); }
      };

      const supabaseDbAdapter = {
        collection: (_client, name) => name,
        doc: (_client, collectionName, id) => ({ collectionName, id }),
        async setDoc(ref, data) { return cloud.db.from(tableName(ref.collectionName)).upsert({ id: ref.id, ...toSupabaseRow(data) }); },
        async updateDoc(ref, data) { return cloud.db.from(tableName(ref.collectionName)).update(toSupabaseRow(cleanSupabasePayload(data))).eq("id", ref.id); },
        async deleteDoc(ref) { return cloud.db.from(tableName(ref.collectionName)).delete().eq("id", ref.id); },
        deleteField: () => undefined,
        serverTimestamp: () => new Date().toISOString(),
        onSnapshot(collectionName, callback, onError) {
          let active = true;
          const load = async () => {
            const query = collectionName === "settings" ? cloud.db.from("settings").select("*").eq("id", "site") : cloud.db.from(tableName(collectionName)).select("*");
            const { data, error } = await query;
            if (!active) return;
            if (error) return onError(error);
            const docs = (data || []).map(row => ({ id: row.id, data: () => fromSupabaseRow(row) }));
            callback({ docs, forEach(fn) { docs.forEach(fn); } });
          };
          load();
          return () => { active = false; };
        }
      };

      function cleanSupabasePayload(data) {
        return Object.fromEntries(Object.entries(data).filter(([, value]) => value !== undefined));
      }

      function tableName(collectionName) {
        return { decomTurns: "decom_turns" }[collectionName] || collectionName;
      }

      function toSupabaseRow(data) {
        const aliases = { startTime: "start_time", endTime: "end_time", place: "location", organizer: "department", eventId: "related_event_id", startsAt: "starts_at", expiresAt: "expires_at", createdAt: "created_at", updatedAt: "updated_at", createdBy: "created_by", specialEventIds: "special_event_ids", weeklySchedule: "weekly_schedule" };
        const row = {};
        Object.entries(data || {}).forEach(([key, value]) => { const target = aliases[key] || key; if (target in { id: 1, title: 1, description: 1, date: 1, start_time: 1, end_time: 1, type: 1, status: 1, location: 1, department: 1, responsible: 1, featured: 1, published: 1, tags: 1, observations: 1, media: 1, gallery: 1, attachments: 1, created_at: 1, updated_at: 1, created_by: 1, related_event_id: 1, priority: 1, starts_at: 1, expires_at: 1, time: 1, assigned: 1, support: 1, special_event_ids: 1, music: 1, weekly_schedule: 1 }) row[target] = value; });
        return row;
      }

      function fromSupabaseRow(row) {
        const aliases = { start_time: "startTime", end_time: "endTime", location: "place", department: "organizer", related_event_id: "eventId", starts_at: "startsAt", expires_at: "expiresAt", created_at: "createdAt", updated_at: "updatedAt", created_by: "createdBy", special_event_ids: "specialEventIds", weekly_schedule: "weeklySchedule" };
        return Object.fromEntries(Object.entries(row || {}).map(([key, value]) => [aliases[key] || key, value]));
      }

      const supabaseStorageAdapter = {
        ref: (_storage, path) => ({ path }),
        async uploadBytes(ref, file, options) { const result = await cloud.storage.from("event-media").upload(ref.path, file, { contentType: options?.contentType, upsert: true }); if (result.error) throw result.error; return result; },
        async getDownloadURL(ref) { const { data } = cloud.storage.from("event-media").getPublicUrl(ref.path); return data.publicUrl; },
        async deleteObject(ref) { return cloud.storage.from("event-media").remove([ref.path]); }
      };

      async function checkStorageAvailability() {
        try {
          const bucket = encodeURIComponent(FIREBASE_CLOUD.firebaseConfig.storageBucket);
          const response = await fetch(`https://firebasestorage.googleapis.com/v0/b/${bucket}/o?maxResults=1`);
          if (response.status === 404) {
            cloud.storageError = "Las cargas de archivos requieren habilitar Firebase Storage y un plan con facturación.";
            return false;
          }
          cloud.storageError = "";
          return true;
        } catch (error) {
          cloud.storageError = "No se pudo comprobar Firebase Storage. Las cargas quedan desactivadas por seguridad.";
          return false;
        }
      }

      function normalizeCloudDoc(id, data) {
        return {
          id,
          ...data,
          createdAt: normalizeCloudDate(data.createdAt),
          updatedAt: normalizeCloudDate(data.updatedAt)
        };
      }

      function normalizeCloudDate(value) {
        if (!value) return "";
        if (typeof value === "string") return value;
        if (typeof value.toDate === "function") return value.toDate().toISOString();
        return "";
      }

      function requireCloudAdmin() {
        if (!cloud.enabled || !cloud.ready) {
          alert("Firebase aun no esta configurado. No se guardara nada en local. Configura Firestore, Storage y Auth primero.");
          return false;
        }
        if (!isAdmin()) {
          alert("Debes iniciar sesion como administrador para guardar cambios.");
          history.pushState({}, "", "/admin/login");
          renderRoute();
          return false;
        }
        return true;
      }

      function renderHomePage() {
        const events = eventsForPlatformDate(today);
        const main = events[0];
        const reflection = reflectionForDate(today);
        const next = platformEventsForYear(today.getFullYear()).filter(event => parseDate(event.date) >= today && platformStatus(event) !== "Realizado").sort((a, b) => parseDate(a.date) - parseDate(b.date))[0];
        view().innerHTML = `
          <section class="home-hero glass">
            <div class="hero-copy">
              <div class="home-kicker"><span class="home-live-dot"></span><span>IPUC Villa del Río</span><span>•</span><span>${escapeHtml(longPlatformDate(today))}</span></div>
              <p class="eyebrow">${main ? "Lo que vivimos hoy" : "Una palabra para hoy"}</p>
              <h1>${escapeHtml(main ? main.title : "Caminamos juntos en la fe")}</h1>
              <p class="home-lead">${escapeHtml(main ? shortDescription(main) : reflection.media ? "Escucha o mira la reflexión de hoy." : reflection.text + " (" + reflection.ref + ")")}</p>
              ${main ? eventInfoList(main) : `<div class="today-line">${escapeHtml(longPlatformDate(today))}</div>`}
              ${!main ? reflectionMediaMarkup(reflection, true) : ""}
              <div class="home-actions">${main ? `<a class="primary-link" href="#/evento/${encodeURIComponent(main.id)}">Ver detalles</a>` : `<a class="primary-link" href="#/calendario">Explorar calendario</a>`}<button class="radio-home-action" type="button" data-home-radio>▶ Escuchar Radio IPUC</button></div>
            </div>
          </section>
          <section class="home-welcome glass">
            <div><p class="eyebrow">Siempre conectados</p><h2>Todo lo que necesitas para participar</h2><p>Consulta los próximos encuentros, guarda las fechas y mantente al día con la iglesia.</p></div>
            <div class="home-quick-links"><a href="#/calendario"><strong>Calendario</strong><span>Ver la semana completa →</span></a><a href="#/agenda"><strong>Agenda</strong><span>Próximos encuentros →</span></a><a href="#/ubicacion"><strong>Ubicación</strong><span>Cómo llegar →</span></a></div>
          </section>
          <section class="type-shortcuts glass" aria-label="Buscar por tipo de evento">
            <div><p class="eyebrow">Accesos rápidos</p><h2>¿Qué evento buscas?</h2></div>
            ${typeLegendMarkup()}
          </section>
          <section class="split-grid">
            <article class="content-card glass">
              <div class="section-title"><p class="eyebrow">Próximos</p><h2>Eventos destacados</h2></div>
              <div class="card-list">${featuredEvents().map(eventMiniCard).join("") || emptyText("No hay destacados próximos.")}</div>
            </article>
            <article class="content-card glass">
              <div class="section-title"><p class="eyebrow">Avisos</p><h2>Últimos anuncios</h2></div>
              <div class="card-list">${announcementCards()}</div>
            </article>
          </section>
        `;
        bindTypeShortcuts();
        const homeRadio = view().querySelector("[data-home-radio]");
        if (homeRadio) homeRadio.onclick = () => document.getElementById("radioToggle")?.click();
        bindHomeMotion();
      }

      function bindHomeMotion() {
        const sections = view().querySelectorAll(".home-hero, .home-welcome, .type-shortcuts, .split-grid > article");
        sections.forEach((section, index) => section.style.setProperty("--reveal-delay", `${index * 80}ms`));
        if (!window.IntersectionObserver) {
          sections.forEach(section => section.classList.add("is-visible"));
          return;
        }
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: .12 });
        sections.forEach(section => observer.observe(section));
      }

      function renderCalendarPage() {
        const events = platformEventsForYear(platform.calendarDate.getFullYear());
        view().innerHTML = `
          <section class="page-head glass">
            <div><p class="eyebrow">Calendario</p><h1>${calendarTitle()}</h1><p>Consulta la programación por año, mes, semana o día.</p></div>
            <div class="head-actions">
              <button class="small-action" data-cal-prev type="button">Anterior</button>
              <button class="small-action" data-cal-today type="button">Hoy</button>
              <button class="small-action" data-cal-next type="button">Siguiente</button>
              <button class="primary-link" data-download-calendar type="button">Descargar calendario</button>
            </div>
          </section>
          <section class="calendar-legend glass">
            <span>Colores del calendario</span>
            ${typeLegendMarkup()}
          </section>
          <section class="view-switch glass">
            ${["anio", "mes", "semana", "dia"].map(item => `<button class="${platform.calendarView === item ? "active" : ""}" data-view="${item}" type="button">${viewLabel(item)}</button>`).join("")}
          </section>
          <section class="calendar-page glass">${calendarMarkup(events)}</section>
        `;
        bindCalendarControls();
        bindTypeShortcuts();
      }

      function renderAgendaPage() {
        const monthEvents = platformEventsForYear(today.getFullYear()).filter(event => parseDate(event.date).getMonth() === platform.agendaMonth);
        const upcoming = monthEvents.filter(event => platformStatus(event) !== "Realizado");
        const past = monthEvents.filter(event => platformStatus(event) === "Realizado");
        view().innerHTML = `
          <section class="page-head glass">
            <div><p class="eyebrow">Agenda</p><h1>Agenda mensual</h1><p>Selecciona un mes para ver cultos proximos y cultos realizados.</p></div>
          </section>
          <section class="month-strip glass">
            ${months.map((month, index) => `<button class="${platform.agendaMonth === index ? "active" : ""}" data-agenda-month="${index}" type="button">${capitalize(month)}</button>`).join("")}
          </section>
          <section class="agenda-grid">
            <article class="content-card glass"><div class="section-title"><p class="eyebrow">${capitalize(months[platform.agendaMonth])}</p><h2>Cultos proximos</h2></div>${agendaList(upcoming)}</article>
            <article class="content-card glass"><div class="section-title"><p class="eyebrow">${capitalize(months[platform.agendaMonth])}</p><h2>Cultos ya realizados</h2></div>${agendaList(past)}</article>
          </section>
        `;
        view().querySelectorAll("[data-agenda-month]").forEach(button => {
          button.onclick = () => {
            platform.agendaMonth = Number(button.dataset.agendaMonth);
            renderAgendaPage();
          };
        });
      }

      function renderEventsPage() {
        const filtered = filteredPlatformEvents();
        view().innerHTML = `
          <section class="page-head glass">
            <div><p class="eyebrow">Eventos</p><h1>Eventos de IPUC Villa del Río</h1><p>Invitaciones, archivos, fotos y detalles de cada actividad.</p></div>
          </section>
          <section class="filters glass">
            <input id="eventSearch" type="search" placeholder="Buscar evento o departamento" value="${escapeHtml(platform.search)}">
            <select id="eventTag"><option value="todos">Todas las etiquetas</option>${TAGS.map(tag => `<option value="${tag}" ${platform.tag === tag ? "selected" : ""}>${tag}</option>`).join("")}</select>
          </section>
          <section class="event-grid">${filtered.map(eventCard).join("") || emptyText("No hay eventos con ese filtro.")}</section>
        `;
        document.getElementById("eventSearch").oninput = event => {
          platform.search = event.target.value;
          refreshEventResults();
        };
        document.getElementById("eventTag").onchange = event => {
          platform.tag = event.target.value;
          renderEventsPage();
        };
      }

      function filteredPlatformEvents() {
        const needle = platform.search.trim().toLocaleLowerCase("es");
        return platformEventsForYear(today.getFullYear()).filter(event => {
          const byTag = platform.tag === "todos" || event.tags.includes(platform.tag);
          const haystack = `${event.title} ${event.department} ${event.place}`.toLocaleLowerCase("es");
          return byTag && (!needle || haystack.includes(needle));
        });
      }

      function refreshEventResults() {
        const grid = view().querySelector(".event-grid");
        if (!grid) return;
        const filtered = filteredPlatformEvents();
        grid.innerHTML = filtered.map(eventCard).join("") || emptyText("No hay eventos con ese filtro.");
      }

      function renderEventDetail(id) {
        const event = platformEventById(id);
        if (!event) {
          view().innerHTML = `<section class="content-card glass">${emptyText("No encontramos este evento.")}<a class="primary-link" href="#/eventos">Volver a eventos</a></section>`;
          return;
        }
        view().innerHTML = `
          <section class="detail-hero glass">
            <img src="${eventImage(event)}" alt="Imagen de ${escapeHtml(event.title)}">
            <div>
              <p class="eyebrow">${escapeHtml(platformStatus(event))}</p>
              <h1>${escapeHtml(event.title)}</h1>
              <p>${escapeHtml(event.description || shortDescription(event))}</p>
              ${eventInfoList(event)}
              <div class="detail-actions">
                <a class="primary-link" href="${whatsappShare(event)}" target="_blank" rel="noopener">Compartir por WhatsApp</a>
                <button class="small-action" type="button" data-add-event="${escapeHtml(event.id)}">Agregar a mi calendario</button>
                <a class="small-action" href="#/calendario">Ver calendario</a>
              </div>
            </div>
          </section>
          <section class="detail-grid-page">
            <article class="content-card glass"><div class="section-title"><p class="eyebrow">Material</p><h2>Invitaciones disponibles</h2></div>${assetGrid(invitationAssets(event))}</article>
            <article class="content-card glass"><div class="section-title"><p class="eyebrow">Galería</p><h2>Fotos relacionadas</h2></div>${assetGrid(event.gallery || [])}</article>
            <article class="content-card glass wide"><div class="section-title"><p class="eyebrow">Documentos</p><h2>Archivos descargables</h2></div>${fileList(event.attachments || [])}</article>
            <article class="content-card glass wide"><div class="section-title"><p class="eyebrow">Observaciones</p><h2>Información adicional</h2></div><p>${escapeHtml(event.observations || "Sin observaciones adicionales.")}</p></article>
          </section>
        `;
        bindAssetButtons();
        view().querySelector("[data-add-event]").onclick = () => downloadEventsCalendar([event], `${slugify(event.title)}.ics`);
      }

      function renderLoginPage() {
        view().innerHTML = `
          <section class="login-card glass">
            <div><p class="eyebrow">Área privada</p><h1>Acceso administrador</h1><p>Gestiona eventos, anuncios y archivos con una cuenta autorizada.</p>${cloudNotice()}</div>
            <form id="loginForm" class="form-grid">
              <label>Correo electrónico<input id="loginUser" type="email" autocomplete="username" required></label>
              <label>Contraseña<input id="loginPass" type="password" autocomplete="current-password" required></label>
              <button class="primary-link" type="submit">Iniciar sesión</button>
              <p class="form-message" id="loginMessage"></p>
            </form>
          </section>
        `;
        document.getElementById("loginForm").onsubmit = event => {
          event.preventDefault();
          const user = document.getElementById("loginUser").value.trim();
          const pass = document.getElementById("loginPass").value.trim();
          signInAdmin(user, pass);
        };
      }

      async function signInAdmin(user, pass) {
        const message = document.getElementById("loginMessage");
        message.textContent = "";
        const email = resolveAdminEmail(user);
        if (!email) {
          message.textContent = "Usuario o clave incorrectos.";
          return;
        }
        if (!cloud.enabled || !cloud.ready) {
          message.textContent = cloud.error || "Supabase no está configurado todavía.";
          return;
        }
        try {
          await cloud.authMod.signInWithEmailAndPassword(cloud.auth, email, pass);
          history.pushState({}, "", "/admin");
          renderRoute();
        } catch (error) {
          message.textContent = firebaseAuthMessage(error);
          console.warn(error);
        }
      }

      function resolveAdminEmail(user) {
        const normalized = String(user || "").trim().toLowerCase();
        const adminEmails = FIREBASE_CLOUD.adminEmails || [FIREBASE_CLOUD.adminEmail].filter(Boolean);
        if (normalized === ADMIN_USER.toLowerCase() || normalized === "decomvilladelrio") {
          return adminEmails.find(email => email === "decomvilladelrio@gmail.com") || FIREBASE_CLOUD.adminEmail;
        }
        if (normalized === "estebanarango1499") {
          return adminEmails.find(email => email === "estebanarango1499@gmail.com") || "";
        }
        return adminEmails.find(email => email.toLowerCase() === normalized) || "";
      }

      function firebaseAuthMessage(error) {
        const code = `${error?.code || ""} ${error?.message || ""}`.toLowerCase();
        if (code.includes("invalid login credentials") || code.includes("invalid-credential") || code.includes("user not found")) {
          return "Revisa que el usuario exista en Supabase Auth y que la contraseña sea correcta.";
        }
        if (code.includes("email not confirmed")) {
          return "Confirma el correo del usuario en Supabase Auth antes de iniciar sesión.";
        }
        if (code.includes("too-many-requests")) {
          return "Firebase bloqueo temporalmente los intentos. Espera unos minutos y vuelve a intentar.";
        }
        return "No se pudo iniciar sesión con Supabase Auth. Revisa el usuario administrador y la clave.";
      }

      function cloudNotice() {
        if (cloud.enabled && cloud.ready) {
          const storageNotice = cloud.storageReady ? "" : `<div class="cloud-warning"><strong>Archivos desactivados:</strong> ${escapeHtml(cloud.storageError || "Firebase Storage no está habilitado en este proyecto.")}</div>`;
          return `<div class="cloud-ok">Base de datos conectada. Eventos, anuncios, reflexiones y turnos se guardan en la nube.</div>${storageNotice}`;
        }
        return `<div class="cloud-warning"><strong>Supabase pendiente:</strong> ${escapeHtml(cloud.error || "No se pudo conectar con la nube.")}</div>`;
      }

      function adminEmailAllowed() {
        const adminEmails = (FIREBASE_CLOUD.adminEmails || [FIREBASE_CLOUD.adminEmail]).map(email => email.toLowerCase());
        return Boolean(cloud.user && cloud.user.email && adminEmails.includes(cloud.user.email.toLowerCase()));
      }

      function decomEmailAllowed() {
        const decomEmails = (FIREBASE_CLOUD.decomEmails || FIREBASE_CLOUD.adminEmails || []).map(email => email.toLowerCase());
        return Boolean(cloud.user && cloud.user.email && (adminEmailAllowed() || decomEmails.includes(cloud.user.email.toLowerCase())));
      }

      function setupDecomListener() {
        if (cloud.decomUnsubscribe) {
          cloud.decomUnsubscribe();
          cloud.decomUnsubscribe = null;
        }
        if (!cloud.db || !cloud.dbMod || !decomEmailAllowed()) {
          APP_STATE.decomTurns = {};
          return;
        }
        cloud.decomUnsubscribe = cloud.dbMod.onSnapshot(cloud.dbMod.collection(cloud.db, "decomTurns"), snapshot => {
          const decomTurns = {};
          snapshot.forEach(documentSnapshot => {
            decomTurns[documentSnapshot.id] = normalizeCloudDoc(documentSnapshot.id, documentSnapshot.data());
          });
          APP_STATE.decomTurns = decomTurns;
          const route = parseRoute();
          if (route.name === "admin") renderRoute();
        }, error => {
          cloud.error = error.message;
          renderRoute();
        });
      }

      async function signOutAdmin() {
        if (cloud.auth && cloud.authMod) {
          await cloud.authMod.signOut(cloud.auth);
        }
        history.pushState({}, "", "/");
        renderRoute();
      }

      function renderAdminPage() {
        const selected = platform.selectedAdminEvent === "__new__" ? null : platformEventById(platform.selectedAdminEvent);
        const adminEvents = platformEventsForYear(today.getFullYear());
        const pendingEvents = adminEvents.filter(event => parseDate(event.date) >= today && platformStatus(event) !== "Realizado" && platformStatus(event) !== "Cancelado").sort(sortByDate);
        const activeAdminSection = platform.adminSection || "eventos";
        const moduleVisibility = name => activeAdminSection === name ? "" : "hidden";
        const upcoming = adminEvents.filter(event => parseDate(event.date) >= today).sort((a, b) => parseDate(a.date) - parseDate(b.date))[0];
        view().innerHTML = `
          <section class="page-head glass">
            <div><p class="eyebrow">Administracion privada</p><h1>Panel de control</h1><p>Administra el cronograma desde un solo lugar. Elige una tarea y completa solo lo necesario.</p>${cloudNotice()}</div>
            <button class="small-action" data-logout type="button">Salir</button>
          </section>
          <section class="admin-summary">
            <article><strong>${adminEvents.length}</strong><span>Eventos registrados</span></article>
            <article><strong>${upcoming ? formatDateShort(upcoming.date) : "—"}</strong><span>Próximo evento</span></article>
            <article><strong>${APP_STATE.announcements?.length || 0}</strong><span>Anuncios publicados</span></article>
          </section>
          <nav class="admin-tabs glass" aria-label="Módulos de administración">
            ${[["eventos", "Eventos", "Crear o editar"], ["material", "Material", "Subir archivos"], ["anuncios", "Anuncios", "Publicar aviso"], ["reflexiones", "Reflexiones", "Mensaje diario"], ["decom", "DECOM", "Turnos internos"]].map(([key, label, hint]) => `<button type="button" class="admin-tab ${activeAdminSection === key ? "active" : ""}" data-admin-section="${key}"><strong>${label}</strong><span>${hint}</span></button>`).join("")}
          </nav>
          <section class="admin-layout admin-workspace">
            <section class="admin-module" data-admin-module="eventos" ${moduleVisibility("eventos")}>
            <article class="content-card glass admin-card-wide">
              <div class="section-title"><p class="eyebrow">Eventos</p><h2>Crear o editar evento</h2></div>
              <div class="form-grid">
                <label class="full">Evento a editar<select id="adminSelect"><option value="__new__">+ Crear evento nuevo</option>${adminEvents.map(event => `<option value="${event.id}" ${selected?.id === event.id ? "selected" : ""}>${formatDateShort(event.date)} - ${escapeHtml(event.title)}</option>`).join("")}</select></label>
                <label>Nombre<input id="adminTitle2" value="${escapeHtml(selected?.title || "")}"></label>
                <label>Fecha<input id="adminDate2" type="date" value="${escapeHtml(selected?.date || dateKey(platform.calendarDate))}"></label>
                <label>Hora inicio<input id="adminTime2" value="${escapeHtml(selected?.time || BASE_TIMES.culto)}"></label>
                <label>Tipo<select id="adminType2">${Object.keys(TYPES).map(type => `<option value="${type}" ${selected?.type === type ? "selected" : ""}>${TYPES[type].label}</option>`).join("")}</select></label>
                <label>Estado<select id="adminStatus2">${["Proximo","Pendiente","Realizado","Cancelado"].map(status => `<option ${platformStatus(selected || {}) === status ? "selected" : ""}>${status}</option>`).join("")}</select></label>
                <label>Lugar<input id="adminPlace2" value="${escapeHtml(selected?.place || "IPUC Villa del Rio")}"></label>
                <label>Departamento<input id="adminDepartment2" value="${escapeHtml(selected?.department || selected?.organizer || "")}"></label>
                <label>Responsable<input id="adminResponsible2" value="${escapeHtml(selected?.responsible || "")}"></label>
                <label>Estilo imagen automatica<select id="adminAutoStyle">${["automatico","luz","amanecer","noche","naturaleza","congregacional","sobrio"].map(style => `<option value="${style}" ${selected?.autoStyle === style ? "selected" : ""}>${style}</option>`).join("")}</select></label>
                <label class="full checkbox-line"><input id="adminFeatured2" type="checkbox" ${selected?.featured ? "checked" : ""}> Marcar como destacado</label>
                <label class="full">Descripcion<textarea id="adminDescription2">${escapeHtml(selected?.description || "")}</textarea></label>
                <label class="full">Observaciones<textarea id="adminObservations2">${escapeHtml(selected?.observations || "")}</textarea></label>
                <div class="full tag-admin">${TAGS.map(tag => `<label><input type="checkbox" value="${tag}" ${selected?.tags?.includes(tag) ? "checked" : ""}>${tag}</label>`).join("")}</div>
                <div class="button-row full">
                  <button class="primary-link" id="adminSaveEvent" type="button">Guardar evento</button>
                  <button class="small-action" id="adminDeleteEvent" type="button">Eliminar evento</button>
                </div>
              </div>
            </article>
            </section>
            <section class="admin-module" data-admin-module="material" ${moduleVisibility("material")}>
            <article class="content-card glass admin-card-wide">
              <div class="section-title"><p class="eyebrow">Material</p><h2>Subir invitaciones y archivos</h2></div>
              <div class="form-grid">
                <label class="full">1. Elige el evento<select id="materialSelect"><option value="__new__">Selecciona un evento pendiente o próximo</option>${pendingEvents.map(event => `<option value="${event.id}" ${selected?.id === event.id ? "selected" : ""}>${formatDateShort(event.date)} - ${escapeHtml(event.title)}</option>`).join("")}</select></label>
                <div class="upload-guide full"><strong>2. Agrega solo lo que tengas</strong><span>Puedes seleccionar varios archivos en cada grupo y guardar todo una sola vez.</span></div>
                <details class="upload-group full" open><summary>Imágenes principales e invitaciones</summary><div class="form-grid"><label>Imagen del evento<input id="uploadMainImage" type="file" accept="image/*"></label><label>Invitación principal<input id="uploadInviteMain" type="file" accept="image/*"></label><label>WhatsApp<input id="uploadInviteWhatsapp" type="file" accept="image/*"></label><label>Historia redes<input id="uploadInviteStory" type="file" accept="image/*"></label><label>Banner proyección<input id="uploadInviteBanner" type="file" accept="image/*"></label></div></details>
                <details class="upload-group full"><summary>Video, galería y documentos</summary><div class="form-grid"><label>Video promocional<input id="uploadInviteVideo" type="file" accept="video/*"></label><label>Fotos o videos<input id="uploadGallery" type="file" accept="image/*,video/*" multiple></label><label>PDF o archivos<input id="uploadFiles" type="file" multiple></label></div></details>
                <details class="upload-group full"><summary>Audio de fondo del sitio</summary><div class="form-grid"><label class="full">Música autorizada<input id="uploadMusic2" type="file" accept="audio/*"></label></div></details>
                <button class="primary-link full" id="adminSaveMaterial" type="button">Guardar todo el material</button>
                <div class="full admin-existing-material">${adminMaterialList(selected)}</div>
                <div class="upload-group full weekly-upload"><strong>Cronograma semanal</strong><p>Sube la imagen oficial que resume los cultos de la semana. Se mostrará directamente en la vista semanal.</p><label>Imagen de esta semana<input id="uploadWeeklySchedule" type="file" accept="image/*"></label><div class="button-row"><button class="small-action" id="saveWeeklySchedule" type="button">Guardar imagen semanal</button>${APP_STATE.weeklySchedule ? `<button class="small-action danger-action" id="deleteWeeklySchedule" type="button">Eliminar imagen actual</button>` : ""}</div>${APP_STATE.weeklySchedule ? `<small>Archivo actual: ${escapeHtml(APP_STATE.weeklySchedule.name || "Cronograma semanal")}</small>` : ""}</div>
              </div>
            </article>
            </section>
            <section class="admin-module" data-admin-module="reflexiones" ${moduleVisibility("reflexiones")}>
            <article class="content-card glass admin-card-narrow">
              <div class="section-title"><p class="eyebrow">Reflexiones</p><h2>Crear reflexion diaria</h2></div>
              <div class="form-grid">
                <label>Fecha<input id="reflectionDate" type="date" value="${dateKey(today)}"></label>
                <label>Estilo<select id="reflectionStyle"><option>amanecer</option><option>luz</option><option>noche</option><option>naturaleza</option><option>montanas</option></select></label>
                <label>Tipo de reflexión<select id="reflectionMediaType"><option value="youtube">Video de YouTube</option><option value="upload">Audio o video de la iglesia</option></select></label>
                <label>Enlace de YouTube<input id="reflectionYoutube" type="url" placeholder="https://www.youtube.com/watch?v=..."></label>
                <label class="full file-dropzone">Audio o video grabado<input id="reflectionMediaFile" type="file" accept="audio/*,video/*"></label>
                <details class="full upload-group"><summary>Texto opcional de respaldo</summary><div class="form-grid"><label class="full">Texto<textarea id="reflectionText" placeholder="Se mostrará si no hay audio o video."></textarea></label><label>Referencia<input id="reflectionRef" placeholder="Hechos 2:46"></label></div></details>
                <button class="primary-link full" id="saveReflection" type="button">Guardar reflexión multimedia</button>
              </div>
            </article>
            </section>
            <section class="admin-module" data-admin-module="anuncios" ${moduleVisibility("anuncios")}>
            <article class="content-card glass admin-card-narrow">
              <div class="section-title"><p class="eyebrow">Anuncios</p><h2>Ultimos anuncios</h2></div>
              <div class="form-grid">
                <label>Titulo<input id="announceTitle2"></label>
                <label>Evento relacionado<select id="announceEvent2"><option value="">Sin evento</option>${platformEventsForYear(today.getFullYear()).map(event => `<option value="${event.id}">${formatDateShort(event.date)} - ${escapeHtml(event.title)}</option>`).join("")}</select></label>
                <label class="full">Descripcion<textarea id="announceDescription2"></textarea></label>
                <button class="primary-link full" id="saveAnnouncement2" type="button">Publicar anuncio</button>
              </div>
            </article>
            </section>
            <section class="admin-module" data-admin-module="decom" ${moduleVisibility("decom")}>
            ${renderDecomPanel()}
            </section>
          </section>
        `;
        bindAdmin();
      }

      function renderDecomOnlyPage() {
        view().innerHTML = `
          <section class="page-head glass">
            <div><p class="eyebrow">Privado DECOM</p><h1>Cronograma interno DECOM</h1><p>Turnos internos para computador, proyeccion y multimedia. Este espacio no aparece en la parte publica.</p>${cloudNotice()}</div>
            <button class="small-action" data-logout type="button">Salir</button>
          </section>
          <section class="admin-layout">
            ${renderDecomPanel(false)}
          </section>
        `;
        const logout = view().querySelector("[data-logout]");
        if (logout) logout.onclick = () => signOutAdmin();
        bindDecomControls();
      }

      function bindCalendarControls() {
        view().querySelector("[data-cal-prev]").onclick = () => moveCalendar(-1);
        view().querySelector("[data-cal-next]").onclick = () => moveCalendar(1);
        view().querySelector("[data-cal-today]").onclick = () => {
          platform.calendarDate = cleanDate(new Date());
          renderCalendarPage();
        };
        view().querySelectorAll("[data-view]").forEach(button => {
          button.onclick = () => {
            platform.calendarView = button.dataset.view;
            renderCalendarPage();
          };
        });
        view().querySelector("[data-download-calendar]").onclick = () => {
          const year = platform.calendarDate.getFullYear();
          downloadEventsCalendar(platformEventsForYear(year), `cronograma-ipuc-villa-del-rio-${year}.ics`);
        };
        view().querySelectorAll("[data-calendar-date]").forEach(button => {
          button.onclick = () => {
            platform.calendarDate = parseDate(button.dataset.calendarDate);
            platform.calendarView = "dia";
            renderCalendarPage();
          };
        });
      }

      function typeLegendMarkup() {
        return `<div class="type-legend">${Object.entries(TYPES).map(([type, config]) => `
          <button type="button" class="type-chip type-${type}" data-jump-type="${type}">
            <span aria-hidden="true"></span>${escapeHtml(config.label)}
          </button>`).join("")}</div>`;
      }

      function bindTypeShortcuts() {
        view().querySelectorAll("[data-jump-type]").forEach(button => {
          button.onclick = () => {
            const event = closestPlatformEvent(button.dataset.jumpType);
            if (event) { history.pushState({}, "", `/evento/${encodeURIComponent(event.id)}`); renderRoute(); }
          };
        });
      }

      function closestPlatformEvent(type) {
        const events = platformEventsForYear(today.getFullYear()).filter(event => event.type === type);
        return events.find(event => parseDate(event.date) >= today) || events[0] || null;
      }

      function moveCalendar(amount) {
        const d = platform.calendarDate;
        if (platform.calendarView === "anio") platform.calendarDate = new Date(d.getFullYear() + amount, d.getMonth(), 1);
        if (platform.calendarView === "mes") platform.calendarDate = new Date(d.getFullYear(), d.getMonth() + amount, 1);
        if (platform.calendarView === "semana") platform.calendarDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + amount * 7);
        if (platform.calendarView === "dia") platform.calendarDate = new Date(d.getFullYear(), d.getMonth(), d.getDate() + amount);
        renderCalendarPage();
      }

      function calendarMarkup(events) {
        if (platform.calendarView === "anio") return `<div class="year-view">${months.map((month, index) => monthBlock(month, index, events)).join("")}</div>`;
        if (platform.calendarView === "semana") return weekView(events);
        if (platform.calendarView === "dia") return dayView(eventsForPlatformDate(platform.calendarDate));
        return monthView(events);
      }

      function monthView(events) {
        const year = platform.calendarDate.getFullYear();
        const month = platform.calendarDate.getMonth();
        const first = new Date(year, month, 1);
        const offset = (first.getDay() + 6) % 7;
        const start = new Date(year, month, 1 - offset);
        let html = `<div class="week-head">${["Lun","Mar","Mie","Jue","Vie","Sab","Dom"].map(day => `<span>${day}</span>`).join("")}</div><div class="month-grid">`;
        for (let i = 0; i < 42; i += 1) {
          const date = new Date(start);
          date.setDate(start.getDate() + i);
          const dayEvents = eventsForPlatformDate(date);
          html += `<article class="month-day ${date.getMonth() !== month ? "muted-day" : ""} ${sameDay(date, today) ? "today-day" : ""}">
            <button class="day-number" type="button" data-calendar-date="${dateKey(date)}" aria-label="Ver ${longPlatformDate(date)}">${date.getDate()}</button>
            ${eventColorBars(dayEvents)}
            <div>${dayEvents.slice(0, 3).map(eventPill).join("")}</div>
          </article>`;
        }
        return html + "</div>";
      }

      function weekView() {
        const start = startOfWeek(platform.calendarDate);
        let html = `<div class="week-agenda-list">${weeklyScheduleMarkup()}`;
        for (let i = 0; i < 7; i += 1) {
          const date = new Date(start);
          date.setDate(start.getDate() + i);
          const dayEvents = eventsForPlatformDate(date);
          html += `<article class="week-list-day ${sameDay(date, today) ? "is-today" : ""}"><header><h3>${capitalize(weekdays[date.getDay()])}</h3><span>${date.getDate()} de ${months[date.getMonth()]}</span>${sameDay(date, today) ? `<b>Hoy</b>` : ""}</header><div>${agendaList(dayEvents, true)}</div></article>`;
        }
        return html + "</div>";
      }

      function weeklyScheduleMarkup() {
        const asset = APP_STATE.weeklySchedule;
        if (!assetSource(asset)) return "";
        const source = assetSource(asset);
        const isPdf = String(asset.type || asset.name || "").toLowerCase().includes("pdf");
        if (isPdf) return `<section class="weekly-schedule-card"><div><p class="eyebrow">Cronograma para compartir</p><h2>Programación semanal</h2><p>El archivo actual es PDF. Sube una imagen desde Administración para mostrarla aquí.</p></div></section>`;
        return `<section class="weekly-schedule-card"><div><p class="eyebrow">Cronograma para compartir</p><h2>Programación semanal</h2><p>Consulta la imagen oficial de esta semana.</p></div><img src="${escapeHtml(source)}" alt="Cronograma semanal de cultos"></section>`;
      }

      function dayView(events) {
        return `<div class="day-view"><h2>${longPlatformDate(platform.calendarDate)}</h2>${agendaList(events)}</div>`;
      }

      function monthBlock(month, index) {
        const year = platform.calendarDate.getFullYear();
        const first = new Date(year, index, 1);
        const offset = (first.getDay() + 6) % 7;
        const days = new Date(year, index + 1, 0).getDate();
        const cells = Array.from({ length: offset }, () => `<span class="year-empty" aria-hidden="true"></span>`);
        for (let day = 1; day <= days; day += 1) {
          const date = new Date(year, index, day);
          const dayEvents = eventsForPlatformDate(date);
          cells.push(`<button class="year-day ${sameDay(date, today) ? "today-day" : ""} ${dayEvents.length ? "has-events" : ""}" type="button" data-calendar-date="${dateKey(date)}" aria-label="${escapeHtml(longPlatformDate(date))}: ${dayEvents.length} evento${dayEvents.length === 1 ? "" : "s"}">
            <span>${day}</span>${eventColorBars(dayEvents)}
          </button>`);
        }
        return `<article class="year-month"><h3>${capitalize(month)}</h3><div class="year-week">${["L","M","M","J","V","S","D"].map(day => `<span>${day}</span>`).join("")}</div><div class="year-days">${cells.join("")}</div></article>`;
      }

      function eventColorBars(events) {
        const types = [...new Set(events.map(event => event.type))];
        if (!types.length) return "";
        return `<span class="event-colors" aria-hidden="true">${types.map(type => `<i class="color-${type}"></i>`).join("")}</span>`;
      }

      function eventPill(event) {
        return `<a class="event-pill event-type-${escapeHtml(event.type)}" href="#/evento/${encodeURIComponent(event.id)}"><span>${escapeHtml(event.title)}<small>${escapeHtml(event.time)}</small></span></a>`;
      }

      function agendaList(events, compact = false) {
        if (!events.length) return emptyText("No hay eventos en esta seccion.");
        return `<div class="agenda-list ${compact ? "agenda-list-compact" : ""}">${events.sort(sortByDate).map(event => `
          <article class="agenda-item ${compact ? "week-event-item" : ""}">
            <img src="${eventImage(event)}" alt="Imagen de ${escapeHtml(event.title)}">
            <div><strong>${parseDate(event.date).getDate()}</strong><span>${escapeHtml(event.title)}</span><small>${escapeHtml(event.time)} - ${escapeHtml(platformStatus(event))}</small></div>
            <a class="small-action" href="#/evento/${encodeURIComponent(event.id)}">Ver detalles</a>
          </article>`).join("")}</div>`;
      }

      function eventCard(event) {
        return `<article class="event-card-public glass">
          <img src="${eventImage(event)}" alt="Imagen de ${escapeHtml(event.title)}">
          <div><p class="eyebrow">${escapeHtml(platformStatus(event))}</p><h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(formatDateShort(event.date))} - ${escapeHtml(event.time)}<br>${escapeHtml(event.place)}</p><a class="primary-link" href="#/evento/${encodeURIComponent(event.id)}">Ver detalles</a></div>
        </article>`;
      }

      function eventMiniCard(event) {
        return `<a class="mini-card" href="#/evento/${encodeURIComponent(event.id)}"><img src="${eventImage(event)}" alt="Imagen de ${escapeHtml(event.title)}"><span><strong>${escapeHtml(event.title)}</strong><small>${escapeHtml(formatDateShort(event.date))} - ${escapeHtml(event.time)}</small></span></a>`;
      }

      function renderDecomPanel(editable = true) {
        const suggestions = decomSuggestionsForMonth(platform.decomMonth);
        const shifts = decomCultDates(DECOM_YEAR, platform.decomMonth);
        const selectedDate = ensureDecomSelectedDate(shifts);
        const selectedSuggestion = suggestions[dateKey(selectedDate)] || "";
        return `
          <article class="content-card glass admin-wide decom-panel">
            <div class="section-title">
              <p class="eyebrow">Privado</p>
              <h2>Cronograma DECOM</h2>
              <p>Vista interna anual para computador, proyeccion, multimedia y apoyo durante los cultos.</p>
            </div>
            <div class="decom-toolbar">
              <div class="decom-months">
                ${DECOM_MONTHS.map(month => `<button class="${platform.decomMonth === month ? "active" : ""}" data-decom-month="${month}" type="button">${capitalize(months[month])}</button>`).join("")}
              </div>
              <div class="decom-actions">
                <button class="small-action" id="downloadDecomPng" type="button">Descargar PNG</button>
                <button class="small-action" id="downloadDecomJpg" type="button">Descargar JPG</button>
                <button class="small-action" id="downloadDecomPdf" type="button">Guardar PDF</button>
              </div>
            </div>
            <div class="decom-board">
              <div class="decom-calendar-shell">
                <div class="decom-month-title">
                  <strong>${capitalize(months[platform.decomMonth])} ${DECOM_YEAR}</strong>
                  <span>${shifts.length} turnos de culto</span>
                </div>
                ${renderDecomMonthCalendar(platform.decomMonth, suggestions)}
              </div>
              ${renderDecomTurnEditor(selectedDate, selectedSuggestion, editable)}
            </div>
          </article>
        `;
      }

      function ensureDecomSelectedDate(shifts) {
        const selected = parseDate(platform.decomSelectedDate || dateKey(cleanDate(new Date())));
        const selectedKey = dateKey(selected);
        const inMonth = selected.getFullYear() === DECOM_YEAR && selected.getMonth() === platform.decomMonth;
        const isCult = shifts.some(date => dateKey(date) === selectedKey);
        if (inMonth && isCult) return selected;
        const todayClean = cleanDate(new Date());
        const todayIsCult = todayClean.getFullYear() === DECOM_YEAR
          && todayClean.getMonth() === platform.decomMonth
          && shifts.some(date => sameDay(date, todayClean));
        const nextInMonth = shifts.find(date => date >= todayClean);
        const fallback = todayIsCult ? todayClean : nextInMonth || shifts[0] || new Date(DECOM_YEAR, platform.decomMonth, 1);
        platform.decomSelectedDate = dateKey(fallback);
        return fallback;
      }

      function renderDecomMonthCalendar(month, suggestions) {
        const first = new Date(DECOM_YEAR, month, 1);
        const offset = (first.getDay() + 6) % 7;
        const start = new Date(DECOM_YEAR, month, 1 - offset);
        let html = `<div class="decom-week-head">${["Lun","Mar","Mie","Jue","Vie","Sab","Dom"].map(day => `<span>${day}</span>`).join("")}</div><div class="decom-calendar-grid">`;
        for (let i = 0; i < 42; i += 1) {
          const date = new Date(start);
          date.setDate(start.getDate() + i);
          const key = dateKey(date);
          const isCurrentMonth = date.getMonth() === month;
          const isCult = isCurrentMonth && [0, 2, 4, 6].includes(date.getDay());
          const turn = isCult ? decomTurnFor(date, suggestions[key]) : null;
          const assigned = turn ? (turn.assigned || turn.suggestedAssigned || "Sin asignar") : "";
          const special = isCult ? decomSpecialEvents(date) : [];
          html += `
            <button class="decom-day ${isCurrentMonth ? "" : "muted"} ${isCult ? "cult-day" : ""} ${sameDay(date, today) ? "today" : ""} ${platform.decomSelectedDate === key ? "selected" : ""} ${turn ? `status-${slugify(turn.status || "Pendiente")}` : ""}" type="button" ${isCult ? `data-decom-date="${key}"` : "disabled"}>
              <span class="decom-day-number">${date.getDate()}</span>
              ${isCult ? `
                <small>${escapeHtml(decomTime(date))}</small>
                <strong>${escapeHtml(shortDecomName(assigned))}</strong>
                <em>${escapeHtml(turn.status || "Pendiente")}</em>
                ${special.length ? `<b>Especial</b>` : ""}
              ` : ""}
            </button>
          `;
        }
        return html + "</div>";
      }

      function renderDecomTurnEditor(date, suggested, editable = true) {
        const key = dateKey(date);
        const turn = decomTurnFor(date, suggested);
        const special = decomSpecialEvents(date);
        const status = turn.status || "Pendiente";
        const assigned = turn.assigned || suggested || "";
        const support = turn.support || "";
        return `
          <aside class="decom-editor status-${slugify(status)}">
            <header>
              <p class="eyebrow">Turno seleccionado</p>
              <h3>${capitalize(weekdays[date.getDay()])} ${date.getDate()} de ${months[date.getMonth()]}</h3>
              <span>${escapeHtml(decomTime(date))} · ${escapeHtml(status)}</span>
            </header>
            ${special.length ? `<div class="decom-alert"><strong>Actividad especial este dia.</strong><span>Quien pueda asistir y apoyar en la iglesia, por favor confirmar disponibilidad.</span><small>${special.map(event => escapeHtml(event.title)).join(" / ")}</small></div>` : ""}
            ${editable ? `
              <div class="decom-form">
                <label>Responsable
                  <select data-decom-field="assigned" data-date="${key}">
                    ${decomMemberOptions(assigned)}
                  </select>
                </label>
                <label>Segundo apoyo
                  <select data-decom-field="support" data-date="${key}">
                    ${decomMemberOptions(support)}
                  </select>
                </label>
                <label>Estado
                  <select data-decom-field="status" data-date="${key}">
                    ${DECOM_STATUSES.map(item => `<option ${item === status ? "selected" : ""}>${item}</option>`).join("")}
                  </select>
                </label>
                <label class="full">Observaciones
                  <textarea data-decom-field="observations" data-date="${key}" placeholder="Notas internas, cambios o confirmaciones">${escapeHtml(turn.observations || "")}</textarea>
                </label>
              </div>
            ` : `
              <div class="decom-readonly">
                <span><strong>Responsable</strong>${escapeHtml(assigned || "Sin asignar")}</span>
                <span><strong>Segundo apoyo</strong>${escapeHtml(support || "Por definir")}</span>
                <span class="full"><strong>Observaciones</strong>${escapeHtml(turn.observations || "Sin observaciones")}</span>
              </div>
            `}
            <footer>
              ${editable ? `<button class="primary-link" type="button" data-save-decom="${key}">Guardar turno</button><button class="small-action" type="button" data-clear-decom="${key}">Eliminar asignacion</button>` : ""}
              <button class="small-action" type="button" data-ics-decom="${key}">Agregar a mi calendario</button>
              ${assigned ? `<a class="small-action" href="${googleCalendarTurnUrl(date, assigned, support, turn.observations || "")}" target="_blank" rel="noopener">Google Calendar</a>` : ""}
            </footer>
          </aside>
        `;
      }

      function shortDecomName(name) {
        if (!name || name === "Sin asignar") return name || "Sin asignar";
        const parts = name.split(/\s+/).filter(Boolean);
        return parts.length > 1 ? `${parts[0]} ${parts[1][0]}.` : parts[0];
      }

      function renderDecomTurnCard(date, suggested, editable = true) {
        const key = dateKey(date);
        const turn = decomTurnFor(date, suggested);
        const special = decomSpecialEvents(date);
        const status = turn.status || "Pendiente";
        const assigned = turn.assigned || suggested || "";
        const support = turn.support || "";
        return `
          <article class="decom-turn status-${slugify(status)}">
            <header>
              <div>
                <strong>${capitalize(weekdays[date.getDay()])} ${date.getDate()}</strong>
                <span>${escapeHtml(decomTime(date))}</span>
              </div>
              <mark>${escapeHtml(status)}</mark>
            </header>
            ${special.length ? `<div class="decom-alert"><strong>Actividad especial este dia.</strong><span>Quien pueda asistir y apoyar en la iglesia, por favor confirmar disponibilidad.</span><small>${special.map(event => escapeHtml(event.title)).join(" / ")}</small></div>` : ""}
            ${editable ? `
              <div class="decom-form">
                <label>Responsable
                  <select data-decom-field="assigned" data-date="${key}">
                    ${decomMemberOptions(assigned)}
                  </select>
                </label>
                <label>Segundo apoyo
                  <select data-decom-field="support" data-date="${key}">
                    ${decomMemberOptions(support)}
                  </select>
                </label>
                <label>Estado
                  <select data-decom-field="status" data-date="${key}">
                    ${DECOM_STATUSES.map(item => `<option ${item === status ? "selected" : ""}>${item}</option>`).join("")}
                  </select>
                </label>
                <label class="full">Observaciones
                  <textarea data-decom-field="observations" data-date="${key}" placeholder="Notas internas, cambios o confirmaciones">${escapeHtml(turn.observations || "")}</textarea>
                </label>
              </div>
            ` : `
              <div class="decom-readonly">
                <span><strong>Responsable</strong>${escapeHtml(assigned || "Sin asignar")}</span>
                <span><strong>Segundo apoyo</strong>${escapeHtml(support || "Por definir")}</span>
                <span class="full"><strong>Observaciones</strong>${escapeHtml(turn.observations || "Sin observaciones")}</span>
              </div>
            `}
            <footer>
              ${editable ? `<button class="primary-link" type="button" data-save-decom="${key}">Guardar turno</button><button class="small-action" type="button" data-clear-decom="${key}">Eliminar asignacion</button>` : ""}
              <button class="small-action" type="button" data-ics-decom="${key}">Agregar a mi calendario</button>
              ${assigned ? `<a class="small-action" href="${googleCalendarTurnUrl(date, assigned, support, turn.observations || "")}" target="_blank" rel="noopener">Google Calendar</a>` : ""}
            </footer>
          </article>
        `;
      }

      function decomMemberOptions(selected) {
        return `<option value="">Sin asignar</option>${DECOM_MEMBERS.map(member => `<option value="${member.name}" ${member.name === selected ? "selected" : ""}>${member.name}</option>`).join("")}`;
      }

      function decomCultDates(year, month) {
        const dates = [];
        const date = new Date(year, month, 1);
        while (date.getMonth() === month) {
          if ([0, 2, 4, 6].includes(date.getDay())) dates.push(new Date(date));
          date.setDate(date.getDate() + 1);
        }
        return dates;
      }

      function decomTurnFor(date, suggested) {
        const key = dateKey(date);
        const saved = APP_STATE.decomTurns?.[key] || {};
        return {
          id: key,
          date: key,
          time: decomTime(date),
          assigned: saved.assigned || "",
          support: saved.support || "",
          status: saved.status || (saved.assigned ? "Pendiente" : suggested ? "Pendiente" : "Sin asignar"),
          observations: saved.observations || "",
          suggestedAssigned: suggested || "",
          ...saved
        };
      }

      function decomTime(date) {
        return date.getDay() === 0 ? BASE_TIMES.domingo : BASE_TIMES.culto;
      }

      function decomAvailableMembers(date) {
        const key = dateKey(date);
        const day = date.getDay();
        return DECOM_MEMBERS.filter(member => {
          if (member.specificDates) return member.specificDates.includes(key);
          return member.weekdays?.includes(day);
        });
      }

      function decomSuggestionsForMonth(month) {
        const suggestions = {};
        const counts = Object.fromEntries(DECOM_MEMBERS.map(member => [member.name, 0]));
        let lastAssigned = "";
        decomCultDates(DECOM_YEAR, month).forEach(date => {
          const key = dateKey(date);
          const saved = APP_STATE.decomTurns?.[key];
          if (saved?.assigned) {
            suggestions[key] = saved.assigned;
            counts[saved.assigned] = (counts[saved.assigned] || 0) + 1;
            lastAssigned = saved.assigned;
            return;
          }
          const available = decomAvailableMembers(date);
          const candidate = available
            .map(member => ({
              name: member.name,
              score: (counts[member.name] || 0) * 10 + (member.name === lastAssigned ? 6 : 0) + DECOM_MEMBERS.findIndex(item => item.name === member.name)
            }))
            .sort((a, b) => a.score - b.score)[0];
          suggestions[key] = candidate?.name || "";
          if (candidate?.name) {
            counts[candidate.name] = (counts[candidate.name] || 0) + 1;
            lastAssigned = candidate.name;
          }
        });
        return suggestions;
      }

      function decomSpecialEvents(date) {
        return eventsForPlatformDate(date).filter(event => ["vigilia", "oracion", "ayuno", "especial"].includes(event.type));
      }

      async function saveDecomTurn(key) {
        if (!requireCloudAdmin()) return;
        const date = parseDate(key);
        const getField = field => view().querySelector(`[data-decom-field="${field}"][data-date="${key}"]`);
        const assigned = getField("assigned").value;
        const support = getField("support").value;
        const status = getField("status").value;
        const observations = getField("observations").value.trim();
        await saveCloudDoc("decomTurns", key, {
          id: key,
          date: key,
          time: decomTime(date),
          assigned,
          support,
          status,
          observations,
          specialEventIds: decomSpecialEvents(date).map(event => event.id)
        });
        alert("Turno DECOM guardado en Firebase.");
      }

      async function clearDecomTurn(key) {
        if (!requireCloudAdmin()) return;
        if (!confirm("Deseas eliminar esta asignacion DECOM?")) return;
        await cloud.dbMod.deleteDoc(cloud.dbMod.doc(cloud.db, "decomTurns", key));
      }

      function downloadDecomIcs(key) {
        const date = parseDate(key);
        const turn = decomTurnFor(date, decomSuggestionsForMonth(date.getMonth())[key]);
        const assigned = turn.assigned || turn.suggestedAssigned || "Sin asignar";
        const start = eventStartDate({ date: key, time: decomTime(date) });
        const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
        const ics = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "PRODID:-//DECOM IPUC Villa del Rio//Turnos//ES",
          "BEGIN:VEVENT",
          `UID:decom-${key}@ipuc-villa-del-rio`,
          `DTSTAMP:${formatUtcIcsDate(new Date())}`,
          `DTSTART:${formatLocalIcsDate(start)}`,
          `DTEND:${formatLocalIcsDate(end)}`,
          "SUMMARY:Turno DECOM - IPUC Villa del Rio",
          `DESCRIPTION:${escapeIcs(`Responsable: ${assigned}${turn.support ? `\\nApoyo: ${turn.support}` : ""}${turn.observations ? `\\nObservaciones: ${turn.observations}` : ""}`)}`,
          "LOCATION:IPUC Villa del Rio",
          "END:VEVENT",
          "END:VCALENDAR"
        ].join("\r\n");
        downloadTextFile(`turno-decom-${key}.ics`, ics, "text/calendar;charset=utf-8");
      }

      function googleCalendarTurnUrl(date, assigned, support, observations) {
        const key = dateKey(date);
        const start = eventStartDate({ date: key, time: decomTime(date) });
        const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
        const params = new URLSearchParams({
          action: "TEMPLATE",
          text: "Turno DECOM - IPUC Villa del Rio",
          dates: `${formatGoogleDate(start)}/${formatGoogleDate(end)}`,
          location: "IPUC Villa del Rio",
          details: `Responsable: ${assigned}${support ? `\nApoyo: ${support}` : ""}${observations ? `\nObservaciones: ${observations}` : ""}`
        });
        return `https://calendar.google.com/calendar/render?${params.toString()}`;
      }

      function formatGoogleDate(date) {
        return `${date.getFullYear()}${pad2(date.getMonth() + 1)}${pad2(date.getDate())}T${pad2(date.getHours())}${pad2(date.getMinutes())}00`;
      }

      function downloadTextFile(name, content, type) {
        const blob = new Blob([content], { type });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }

      function buildDecomRowsForMonth(month) {
        const suggestions = decomSuggestionsForMonth(month);
        return decomCultDates(DECOM_YEAR, month).map(date => {
          const key = dateKey(date);
          const turn = decomTurnFor(date, suggestions[key]);
          return {
            key,
            day: `${capitalize(weekdays[date.getDay()])} ${date.getDate()}`,
            time: decomTime(date),
            assigned: turn.assigned || turn.suggestedAssigned || "Sin asignar",
            support: turn.support || "",
            status: turn.status || "Pendiente",
            observations: turn.observations || "",
            special: decomSpecialEvents(date).map(event => event.title).join(" / ")
          };
        });
      }

      function buildDecomSvg(month) {
        const rows = buildDecomRowsForMonth(month);
        const rowHeight = 94;
        const width = 1200;
        const height = 220 + rows.length * rowHeight;
        const title = `Cronograma DECOM - ${capitalize(months[month])} ${DECOM_YEAR}`;
        const rowMarkup = rows.map((row, index) => {
          const y = 170 + index * rowHeight;
          const fill = index % 2 === 0 ? "#f7fbfa" : "#eef6f4";
          const note = row.special ? `Especial: ${row.special}` : row.observations;
          return `
            <rect x="42" y="${y}" width="1116" height="78" rx="18" fill="${fill}" stroke="#d8e6e3"/>
            <text x="70" y="${y + 31}" font-size="24" font-weight="800" fill="#123348">${escapeXml(row.day)}</text>
            <text x="70" y="${y + 58}" font-size="19" fill="#506675">${escapeXml(row.time)}</text>
            <text x="275" y="${y + 33}" font-size="24" font-weight="800" fill="#182430">${escapeXml(row.assigned)}</text>
            <text x="275" y="${y + 60}" font-size="18" fill="#506675">${escapeXml(row.support ? `Apoyo: ${row.support}` : "Apoyo: por definir")}</text>
            <text x="665" y="${y + 33}" font-size="20" font-weight="800" fill="#1c8b78">${escapeXml(row.status)}</text>
            <text x="665" y="${y + 60}" font-size="16" fill="#506675">${escapeXml(note || "Sin observaciones").slice(0, 70)}</text>
          `;
        }).join("");
        return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
          <defs><linearGradient id="bg" x1="0" x2="1" y1="0" y2="1"><stop stop-color="#eff8f5"/><stop offset="1" stop-color="#f8efe5"/></linearGradient></defs>
          <rect width="1200" height="${height}" fill="url(#bg)"/>
          <rect x="28" y="28" width="1144" height="${height - 56}" rx="34" fill="rgba(255,255,255,.82)" stroke="#d9e8e4"/>
          <text x="58" y="84" font-family="Segoe UI, Arial" font-size="24" font-weight="900" fill="#4f6b78">DECOM IPUC VILLA DEL RIO</text>
          <text x="58" y="128" font-family="Segoe UI, Arial" font-size="42" font-weight="900" fill="#182430">${escapeXml(title)}</text>
          <text x="58" y="${height - 52}" font-family="Segoe UI, Arial" font-size="18" fill="#506675">Turnos internos para computador, proyeccion y multimedia.</text>
          ${rowMarkup}
        </svg>`;
      }

      function downloadDecomImage(format) {
        const svg = buildDecomSvg(platform.decomMonth);
        const image = new Image();
        const url = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
        image.onload = () => {
          const canvas = document.createElement("canvas");
          canvas.width = image.naturalWidth;
          canvas.height = image.naturalHeight;
          const context = canvas.getContext("2d");
          context.fillStyle = "#ffffff";
          context.fillRect(0, 0, canvas.width, canvas.height);
          context.drawImage(image, 0, 0);
          const mime = format === "jpg" ? "image/jpeg" : "image/png";
          const link = document.createElement("a");
          link.href = canvas.toDataURL(mime, .94);
          link.download = `cronograma-decom-${months[platform.decomMonth]}-${DECOM_YEAR}.${format === "jpg" ? "jpg" : "png"}`;
          link.click();
        };
        image.src = url;
      }

      function printDecomPdf() {
        const svg = buildDecomSvg(platform.decomMonth);
        const win = window.open("", "_blank");
        if (!win) return alert("El navegador bloqueo la ventana para PDF.");
        win.document.write(`<html><head><title>Cronograma DECOM</title><style>body{margin:0;background:#fff}svg{width:100%;height:auto}</style></head><body>${svg}<script>window.onload=()=>window.print()<\/script></body></html>`);
        win.document.close();
      }

      function escapeXml(value) {
        return String(value ?? "").replace(/[<>&"']/g, char => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" }[char]));
      }

      function bindAdmin() {
        view().querySelector("[data-logout]").onclick = () => {
          signOutAdmin();
        };
        view().querySelectorAll("[data-admin-section]").forEach(button => {
          button.onclick = () => {
            platform.adminSection = button.dataset.adminSection;
            renderAdminPage();
          };
        });
        document.getElementById("adminSelect").onchange = event => {
          platform.selectedAdminEvent = event.target.value;
          renderAdminPage();
        };
        document.getElementById("materialSelect").onchange = event => {
          platform.selectedAdminEvent = event.target.value;
          renderAdminPage();
        };
        document.getElementById("adminSaveEvent").onclick = savePlatformEvent;
        document.getElementById("adminDeleteEvent").onclick = deletePlatformEvent;
        document.getElementById("adminSaveMaterial").onclick = savePlatformMaterial;
        document.getElementById("saveWeeklySchedule").onclick = saveWeeklySchedule;
        const deleteWeeklyButton = document.getElementById("deleteWeeklySchedule");
        if (deleteWeeklyButton) deleteWeeklyButton.onclick = deleteWeeklySchedule;
        if (!cloud.storageReady) {
          ["uploadMainImage", "uploadInviteMain", "uploadInviteWhatsapp", "uploadInviteStory", "uploadInviteBanner", "uploadInviteVideo", "uploadGallery", "uploadFiles", "uploadMusic2", "adminSaveMaterial", "uploadWeeklySchedule", "saveWeeklySchedule"].forEach(id => {
            const control = document.getElementById(id);
            if (control) control.disabled = true;
          });
          view().querySelectorAll("[data-remove-asset]").forEach(button => button.disabled = true);
        }
        document.getElementById("saveReflection").onclick = savePlatformReflection;
        document.getElementById("saveAnnouncement2").onclick = savePlatformAnnouncement;
        view().querySelectorAll("[data-remove-asset]").forEach(button => {
          button.onclick = () => removePlatformAsset(button.dataset.kind, button.dataset.key || "", Number(button.dataset.index || -1));
        });
        bindFileDropzones();
        bindDecomControls();
      }

      function bindFileDropzones() {
        view().querySelectorAll('input[type="file"]').forEach(input => {
          const zone = input.closest("label") || input.parentElement;
          if (!zone) return;
          zone.classList.add("file-dropzone");
          ["dragenter", "dragover"].forEach(eventName => zone.addEventListener(eventName, event => {
            event.preventDefault();
            zone.classList.add("is-dragging");
          }));
          ["dragleave", "drop"].forEach(eventName => zone.addEventListener(eventName, event => {
            event.preventDefault();
            zone.classList.remove("is-dragging");
          }));
          zone.addEventListener("drop", event => {
            if (input.disabled || !event.dataTransfer?.files?.length) return;
            const transfer = new DataTransfer();
            [...event.dataTransfer.files].forEach(file => transfer.items.add(file));
            input.files = transfer.files;
            input.dispatchEvent(new Event("change", { bubbles: true }));
          });
          input.addEventListener("change", () => zone.classList.toggle("has-file", Boolean(input.files?.length)));
        });
      }

      function bindDecomControls() {
        view().querySelectorAll("[data-decom-month]").forEach(button => {
          button.onclick = () => {
            platform.decomMonth = Number(button.dataset.decomMonth);
            platform.decomSelectedDate = "";
            renderRoute();
          };
        });
        view().querySelectorAll("[data-decom-date]").forEach(button => {
          button.onclick = () => {
            platform.decomSelectedDate = button.dataset.decomDate;
            renderRoute();
          };
        });
        view().querySelectorAll("[data-save-decom]").forEach(button => {
          button.onclick = () => saveDecomTurn(button.dataset.saveDecom);
        });
        view().querySelectorAll("[data-clear-decom]").forEach(button => {
          button.onclick = () => clearDecomTurn(button.dataset.clearDecom);
        });
        view().querySelectorAll("[data-ics-decom]").forEach(button => {
          button.onclick = () => downloadDecomIcs(button.dataset.icsDecom);
        });
        const pngButton = document.getElementById("downloadDecomPng");
        if (pngButton) pngButton.onclick = () => downloadDecomImage("png");
        const jpgButton = document.getElementById("downloadDecomJpg");
        if (jpgButton) jpgButton.onclick = () => downloadDecomImage("jpg");
        const pdfButton = document.getElementById("downloadDecomPdf");
        if (pdfButton) pdfButton.onclick = () => printDecomPdf();
      }

      async function savePlatformEvent() {
        if (!requireCloudAdmin()) return;
        const title = document.getElementById("adminTitle2").value.trim();
        const date = document.getElementById("adminDate2").value;
        if (!title || !date) return alert("Nombre y fecha son obligatorios.");
        const selected = platform.selectedAdminEvent === "__new__" ? null : platformEventById(platform.selectedAdminEvent);
        const id = selected ? selected.id : eventIdFor({ date, title });
        const tags = [...view().querySelectorAll(".tag-admin input:checked")].map(input => input.value);
        const payload = {
          ...(APP_STATE.events[id] || {}),
          id,
          custom: !selected || Boolean(selected.custom),
          deleted: false,
          title,
          date,
          time: document.getElementById("adminTime2").value.trim() || autoTime({ date, type: document.getElementById("adminType2").value }),
          type: document.getElementById("adminType2").value,
          place: document.getElementById("adminPlace2").value.trim() || "IPUC Villa del Rio",
          department: document.getElementById("adminDepartment2").value.trim() || "Pastoral",
          organizer: document.getElementById("adminDepartment2").value.trim() || "Pastoral",
          responsible: document.getElementById("adminResponsible2").value.trim() || "Por definir",
          status: document.getElementById("adminStatus2").value,
          description: document.getElementById("adminDescription2").value.trim(),
          observations: document.getElementById("adminObservations2").value.trim(),
          autoStyle: document.getElementById("adminAutoStyle").value,
          featured: document.getElementById("adminFeatured2").checked,
          tags: tags.length ? tags : inferTags(title, document.getElementById("adminType2").value)
        };
        await saveCloudDoc("events", id, payload);
        platform.selectedAdminEvent = id;
        alert("Evento guardado en Firebase.");
        renderAdminPage();
      }

      async function deletePlatformEvent() {
        if (!requireCloudAdmin()) return;
        if (platform.selectedAdminEvent === "__new__") return;
        if (!confirm("Deseas eliminar este evento del cronograma?")) return;
        await saveCloudDoc("events", platform.selectedAdminEvent, {
          id: platform.selectedAdminEvent,
          deleted: true
        });
        platform.selectedAdminEvent = "__new__";
        renderAdminPage();
      }

      async function savePlatformMaterial() {
        if (!requireCloudAdmin()) return;
        if (!cloud.storageReady) return alert("Las cargas de archivos necesitan habilitar Firebase Storage y un plan con facturación.");
        const id = document.getElementById("materialSelect").value;
        const event = platformEventById(id);
        if (!event) return alert("Selecciona primero un evento.");
        const saved = { ...(APP_STATE.events[id] || {}), id };
        saved.invitations = { ...(event.invitations || {}), ...(saved.invitations || {}) };
        saved.gallery = [...(event.gallery || [])];
        saved.attachments = [...(event.attachments || [])];
        const mainImage = document.getElementById("uploadMainImage").files[0];
        if (mainImage) saved.image = await uploadCloudFile(mainImage, id, "principal", "Imagen principal");
        for (const [key, inputId, label] of [
          ["main", "uploadInviteMain", "Invitacion principal"],
          ["whatsapp", "uploadInviteWhatsapp", "Invitacion WhatsApp"],
          ["story", "uploadInviteStory", "Historia redes"],
          ["banner", "uploadInviteBanner", "Banner proyeccion"],
          ["video", "uploadInviteVideo", "Video promocional"]
        ]) {
          const file = document.getElementById(inputId).files[0];
          if (file) saved.invitations[key] = await uploadCloudFile(file, id, `invitaciones/${key}`, label);
        }
        for (const file of document.getElementById("uploadGallery").files) saved.gallery.push(await uploadCloudFile(file, id, "galeria", "Galeria"));
        for (const file of document.getElementById("uploadFiles").files) saved.attachments.push(await uploadCloudFile(file, id, "archivos", "Archivo"));
        const music = document.getElementById("uploadMusic2").files[0];
        if (music) {
          const musicAsset = await uploadCloudFile(music, "site", "musica", "Musica ambiente");
          await saveCloudDoc("settings", "site", { music: musicAsset });
        }
        await saveCloudDoc("events", id, saved);
        setupPlatformMusic();
        alert("Material guardado en Firebase Storage.");
        renderAdminPage();
      }

      async function saveWeeklySchedule() {
        if (!requireCloudAdmin()) return;
        if (!cloud.storageReady) return alert("El almacenamiento no está disponible.");
        const file = document.getElementById("uploadWeeklySchedule")?.files[0];
        if (!file) return alert("Selecciona primero una imagen.");
        if (!file.type.startsWith("image/")) return alert("El cronograma semanal debe subirse como imagen (PNG, JPG o WEBP).");
        let optimizedFile;
        try {
          optimizedFile = await optimizeScheduleImage(file);
        } catch (error) {
          return alert(error.message || "No se pudo preparar la imagen. Usa una imagen más liviana.");
        }
        const asset = await uploadCloudFile(optimizedFile, "site", "cronograma-semanal", "Cronograma semanal");
        await saveCloudDoc("settings", "site", { weeklySchedule: asset });
        APP_STATE.weeklySchedule = asset;
        alert("Cronograma semanal guardado.");
        renderAdminPage();
      }

      async function optimizeScheduleImage(file) {
        if (!window.createImageBitmap || file.size < 4 * 1024 * 1024) return file;
        try {
          const bitmap = await createImageBitmap(file);
          const maxWidth = 3000;
          const scale = Math.min(1, maxWidth / bitmap.width);
          const canvas = document.createElement("canvas");
          canvas.width = Math.round(bitmap.width * scale);
          canvas.height = Math.round(bitmap.height * scale);
          canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
          const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/jpeg", .9));
          bitmap.close();
          if (!blob) return file;
          return new File([blob], `${file.name.replace(/\.[^.]+$/, "")}.jpg`, { type: "image/jpeg", lastModified: Date.now() });
        } catch (error) {
          if (file.size > 12 * 1024 * 1024) throw new Error("La imagen es demasiado pesada. Usa una imagen menor de 12 MB o conviértela a JPG antes de subirla.");
          console.warn("No se pudo optimizar el cronograma; se intentará subir el original", error);
          return file;
        }
      }

      async function deleteWeeklySchedule() {
        if (!requireCloudAdmin()) return;
        if (!APP_STATE.weeklySchedule) return;
        if (!confirm("¿Eliminar la imagen actual del cronograma semanal?")) return;
        await deleteCloudAsset(APP_STATE.weeklySchedule);
        await saveCloudDoc("settings", "site", { weeklySchedule: null });
        APP_STATE.weeklySchedule = null;
        alert("Imagen del cronograma eliminada.");
        renderAdminPage();
      }

      function adminMaterialList(event) {
        if (!event) return emptyText("Selecciona o guarda un evento para administrar su material.");
        const rows = [];
        if (event.image) rows.push(adminMaterialRow("Imagen principal", event.image, "image", "", -1));
        INVITATION_FIELDS.forEach(([key, label]) => {
          if (event.invitations?.[key]) rows.push(adminMaterialRow(label, event.invitations[key], "invitation", key, -1));
        });
        (event.gallery || []).forEach((asset, index) => rows.push(adminMaterialRow(asset.label || "Galeria", asset, "gallery", "", index)));
        (event.attachments || []).forEach((asset, index) => rows.push(adminMaterialRow(asset.label || "Archivo", asset, "attachment", "", index)));
        if (!rows.length) return emptyText("Este evento aun no tiene material subido.");
        return `<div class="existing-list"><h3>Material subido</h3>${rows.join("")}</div>`;
      }

      function adminMaterialRow(label, asset, kind, key, index) {
        return `<article><span><strong>${escapeHtml(label)}</strong><small>${escapeHtml(asset.name || asset.url || "Archivo")}</small></span><button class="small-action" type="button" data-remove-asset data-kind="${kind}" data-key="${key}" data-index="${index}">Eliminar</button></article>`;
      }

      async function removePlatformAsset(kind, key, index) {
        if (!requireCloudAdmin()) return;
        const event = platformEventById(platform.selectedAdminEvent);
        if (!event) return alert("Selecciona primero un evento.");
        if (!confirm("Deseas eliminar este archivo de la nube y de la parte publica?")) return;

        const docRef = cloud.dbMod.doc(cloud.db, "events", event.id);
        if (kind === "image") {
          await deleteCloudAsset(event.image);
          await cloud.dbMod.updateDoc(docRef, { image: cloud.dbMod.deleteField(), updatedAt: cloud.dbMod.serverTimestamp() });
        }
        if (kind === "invitation") {
          await deleteCloudAsset(event.invitations?.[key]);
          await cloud.dbMod.updateDoc(docRef, { [`invitations.${key}`]: cloud.dbMod.deleteField(), updatedAt: cloud.dbMod.serverTimestamp() });
        }
        if (kind === "gallery") {
          const gallery = [...(event.gallery || [])];
          const [asset] = gallery.splice(index, 1);
          await deleteCloudAsset(asset);
          await cloud.dbMod.updateDoc(docRef, { gallery, updatedAt: cloud.dbMod.serverTimestamp() });
        }
        if (kind === "attachment") {
          const attachments = [...(event.attachments || [])];
          const [asset] = attachments.splice(index, 1);
          await deleteCloudAsset(asset);
          await cloud.dbMod.updateDoc(docRef, { attachments, updatedAt: cloud.dbMod.serverTimestamp() });
        }
        alert("Material eliminado.");
      }

      async function deleteCloudAsset(asset) {
        if (!asset?.path) return;
        try {
          await cloud.storageMod.deleteObject(cloud.storageMod.ref(cloud.storage, asset.path));
        } catch (error) {
          console.warn("No se pudo eliminar el archivo de Storage", error);
        }
      }

      async function savePlatformReflection() {
        if (!requireCloudAdmin()) return;
        const date = document.getElementById("reflectionDate").value;
        const text = document.getElementById("reflectionText").value.trim();
        const mediaType = document.getElementById("reflectionMediaType").value;
        const youtube = document.getElementById("reflectionYoutube").value.trim();
        const mediaFile = document.getElementById("reflectionMediaFile").files[0];
        if (!date) return alert("La fecha es obligatoria.");
        if (mediaType === "youtube" && !youtube && !text) return alert("Pega un enlace de YouTube o agrega un texto de respaldo.");
        if (mediaType === "upload" && !mediaFile && !text) return alert("Selecciona un audio/video o agrega un texto de respaldo.");
        let media = null;
        if (mediaType === "youtube" && youtube) {
          if (!youtubeEmbedUrl(youtube)) return alert("Ese enlace de YouTube no parece válido.");
          media = { type: "youtube", url: youtube };
        }
        if (mediaType === "upload" && mediaFile) {
          if (!isAudio(mediaFile) && !isVideo(mediaFile)) return alert("Solo se permiten archivos de audio o video.");
          const previous = APP_STATE.reflections[date]?.media;
          if (previous?.path) await deleteCloudAsset(previous);
          media = await uploadCloudFile(mediaFile, date, "reflexiones", "Reflexión multimedia");
        }
        await saveCloudDoc("reflections", date, {
          text,
          ref: document.getElementById("reflectionRef").value.trim(),
          style: document.getElementById("reflectionStyle").value,
          media
        });
        alert("Reflexión multimedia guardada.");
        renderAdminPage();
      }

      async function savePlatformAnnouncement() {
        if (!requireCloudAdmin()) return;
        const title = document.getElementById("announceTitle2").value.trim();
        const description = document.getElementById("announceDescription2").value.trim();
        if (!title || !description) return alert("Titulo y descripcion son obligatorios.");
        const id = `anuncio-${Date.now()}`;
        await saveCloudDoc("announcements", id, {
          id,
          title,
          description,
          eventId: document.getElementById("announceEvent2").value,
          date: dateKey(today)
        });
        alert("Anuncio publicado en Firebase.");
        renderAdminPage();
      }

      async function saveCloudDoc(collectionName, id, data) {
        const payload = stripUndefined({
          ...data,
          updatedAt: cloud.dbMod.serverTimestamp()
        });
        await cloud.dbMod.setDoc(cloud.dbMod.doc(cloud.db, collectionName, id), payload, { merge: true });
      }

      async function uploadCloudFile(file, eventId, section, label) {
        const safeName = safeFileName(file.name);
        const path = `events/${eventId}/${section}/${Date.now()}-${safeName}`;
        const fileRef = cloud.storageMod.ref(cloud.storage, path);
        await cloud.storageMod.uploadBytes(fileRef, file, { contentType: file.type || "application/octet-stream" });
        const url = await cloud.storageMod.getDownloadURL(fileRef);
        return {
          id: `asset-${Date.now()}-${Math.random().toString(16).slice(2)}`,
          label,
          name: file.name,
          type: file.type || "application/octet-stream",
          size: file.size,
          uploadedAt: dateKey(new Date()),
          path,
          url
        };
      }

      function safeFileName(name) {
        return String(name).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "archivo";
      }

      function stripUndefined(value) {
        if (Array.isArray(value)) return value.map(stripUndefined).filter(item => item !== undefined);
        if (value && typeof value === "object") {
          return Object.fromEntries(Object.entries(value).filter(([, item]) => item !== undefined).map(([key, item]) => [key, stripUndefined(item)]));
        }
        return value;
      }

      function platformEventsForYear(year) {
        const generated = [];
        const programmedCultos = new Set(PROGRAMMED_EVENTS.filter(event => event.type === "culto").map(event => event.date));
        const date = new Date(year, 0, 1);
        while (date.getFullYear() === year) {
          const key = dateKey(date);
          const base = DAY_BASE[date.getDay()];
          if (base && !programmedCultos.has(key)) generated.push({ date: key, ...base, time: autoTime({ date: key, type: base.type }) });
          date.setDate(date.getDate() + 1);
        }
        const custom = Object.values(APP_STATE.events || {}).filter(event => event.custom && event.date && parseDate(event.date).getFullYear() === year);
        const merged = mergeEvents([...generated, ...PROGRAMMED_EVENTS], custom);
        return merged.map(platformEnrichEvent).filter(event => !event.deleted).sort(sortByDate);
      }

      function platformEnrichEvent(raw) {
        const base = enrichEvent(raw);
        const saved = APP_STATE.events[base.id] || {};
        const event = {
          ...base,
          ...saved,
          department: saved.department || saved.organizer || raw.department || base.organizer || inferOrganizer(base.title),
          place: saved.place || base.place || "IPUC Villa del Rio",
          time: saved.time || autoTime(base),
          status: platformStatus({ ...base, ...saved }),
          image: saved.image || base.image || null,
          autoStyle: saved.autoStyle || "automatico",
          invitations: { ...(base.invitations || {}), ...(saved.invitations || {}) },
          attachments: saved.attachments || base.attachments || [],
          gallery: saved.gallery || base.gallery || []
        };
        event.tags = saved.tags || base.tags || inferTags(event.title, event.type);
        return event;
      }

      function platformEventById(id) {
        return platformEventsForYear(today.getFullYear()).find(event => event.id === id) || platformEventsForYear(platform.calendarDate.getFullYear()).find(event => event.id === id);
      }

      function eventsForPlatformDate(date) {
        return platformEventsForYear(date.getFullYear()).filter(event => event.date === dateKey(date));
      }

      function autoTime(event) {
        if (event.type === "oracion") return BASE_TIMES.oracion;
        if (event.type === "vigilia") return BASE_TIMES.vigilia;
        if (event.type === "ayuno") return BASE_TIMES.ayuno;
        if (parseDate(event.date).getDay() === 0) return BASE_TIMES.domingo;
        return BASE_TIMES.culto;
      }

      function platformStatus(event) {
        if (!event || !event.date) return "Pendiente";
        if (event.status === "Cancelado") return "Cancelado";
        if (parseDate(event.date) < today) return "Realizado";
        if (event.status === "Pendiente") return "Pendiente";
        return "Proximo";
      }

      function eventImage(event) {
        if (event.image && isImage(event.image)) return assetSource(event.image);
        if (event.invitations?.main && isImage(event.invitations.main)) return assetSource(event.invitations.main);
        return autoImage(event.type, event.autoStyle, event.title);
      }

      function autoImage(type, style, seedText) {
        const palette = imagePalette(type, style);
        const seed = Array.from(seedText || type).reduce((sum, char) => sum + char.charCodeAt(0), 0);
        const orb = (seed % 40) + 20;
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 760"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${palette[0]}"/><stop offset=".55" stop-color="${palette[1]}"/><stop offset="1" stop-color="${palette[2]}"/></linearGradient><filter id="b"><feGaussianBlur stdDeviation="18"/></filter></defs><rect width="1200" height="760" fill="url(#g)"/><circle cx="${220 + orb}" cy="160" r="150" fill="rgba(255,255,255,.18)" filter="url(#b)"/><circle cx="${920 - orb}" cy="230" r="190" fill="rgba(255,255,255,.12)" filter="url(#b)"/><path d="M0 590 C180 500 300 650 470 560 C670 450 820 620 1200 500 L1200 760 L0 760Z" fill="rgba(255,255,255,.22)"/><path d="M90 455 C270 360 430 380 580 468 C760 575 910 430 1110 390" fill="none" stroke="rgba(255,255,255,.34)" stroke-width="10" stroke-linecap="round"/><text x="70" y="665" fill="rgba(255,255,255,.78)" font-family="Segoe UI, Arial" font-size="42" font-weight="800">IPUC Villa del Rio</text></svg>`;
        return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
      }

      function imagePalette(type, style) {
        if (style === "noche" || type === "vigilia") return ["#111827", "#1e3a5f", "#7c4dff"];
        if (style === "amanecer" || type === "reflexion") return ["#f6d365", "#9bd7d1", "#3a7ca5"];
        if (style === "naturaleza" || style === "montanas") return ["#dfeee8", "#65a98f", "#345c72"];
        if (type === "ayuno") return ["#f8f4e8", "#d9e6d5", "#94b9a2"];
        if (type === "oracion") return ["#e8f5f1", "#1c8b78", "#123348"];
        if (type === "especial") return ["#fff1f1", "#e84b5f", "#25364a"];
        return ["#edf7ff", "#2f80ed", "#123348"];
      }

      function invitationAssets(event) {
        return INVITATION_FIELDS.map(([key, label]) => event.invitations?.[key] ? { ...event.invitations[key], label } : null).filter(Boolean);
      }

      function assetGrid(assets) {
        if (!assets.length) return emptyText("Aun no hay material subido.");
        return `<div class="asset-grid-page">${assets.map((asset, index) => `<article class="asset-public"><button type="button" data-asset="${index}" data-assets="${encodeAssetList(assets)}">${assetThumb(asset)}</button><strong>${escapeHtml(asset.label || asset.name)}</strong><small>${escapeHtml(asset.name)}</small><button class="small-action" type="button" data-download="${index}" data-assets="${encodeAssetList(assets)}">Descargar</button></article>`).join("")}</div>`;
      }

      function fileList(files) {
        if (!files.length) return emptyText("No hay archivos adjuntos.");
        return `<div class="file-public-list">${files.map((file, index) => `<article><span><strong>${escapeHtml(file.name)}</strong><small>${escapeHtml(assetTypeLabel(file))} - ${escapeHtml(humanFileSize(file.size))}</small></span><button class="small-action" type="button" data-download="${index}" data-assets="${encodeAssetList(files)}">Descargar</button></article>`).join("")}</div>`;
      }

      function bindAssetButtons() {
        view().querySelectorAll("[data-asset]").forEach(button => {
          button.onclick = () => {
            const assets = decodeAssetList(button.dataset.assets);
            platformOpenMedia(assets[Number(button.dataset.asset)]);
          };
        });
        view().querySelectorAll("[data-download]").forEach(button => {
          button.onclick = () => {
            const assets = decodeAssetList(button.dataset.assets);
            downloadAsset(assets[Number(button.dataset.download)]);
          };
        });
      }

      function assetThumb(asset) {
        if (isImage(asset)) return `<img src="${assetSource(asset)}" alt="">`;
        if (isVideo(asset)) return `<video src="${assetSource(asset)}" muted playsinline></video>`;
        return `<span>${escapeHtml(assetTypeLabel(asset))}</span>`;
      }

      function encodeAssetList(assets) {
        return encodeURIComponent(JSON.stringify(assets));
      }

      function decodeAssetList(value) {
        try { return JSON.parse(decodeURIComponent(value)); } catch { return []; }
      }

      function platformOpenMedia(asset) {
        const layer = document.getElementById("platformMedia");
        layer.setAttribute("aria-hidden", "false");
        layer.classList.add("open");
        const body = isImage(asset) ? `<img src="${assetSource(asset)}" alt="">` : isVideo(asset) ? `<video src="${assetSource(asset)}" controls autoplay></video>` : isPdf(asset) ? `<iframe src="${assetSource(asset)}"></iframe>` : `<div class="empty">Este archivo se puede descargar.</div>`;
        layer.innerHTML = `<article><header><h2>${escapeHtml(asset.label || asset.name)}</h2><button type="button" data-close-media>&times;</button></header>${body}<button class="primary-link" type="button" data-download-media>Descargar</button></article>`;
        layer.querySelector("[data-close-media]").onclick = () => {
          layer.classList.remove("open");
          layer.setAttribute("aria-hidden", "true");
          layer.innerHTML = "";
        };
        layer.querySelector("[data-download-media]").onclick = () => downloadAsset(asset);
      }

      function setupPlatformMusic() {
        const audio = document.getElementById("platformMusic");
        const pill = document.getElementById("musicPill");
        if (!audio || !pill) return;
        if (!assetSource(APP_STATE.music)) {
          pill.hidden = true;
          audio.removeAttribute("src");
          return;
        }
        audio.src = assetSource(APP_STATE.music);
        audio.volume = 0.35;
        audio.play().then(() => pill.hidden = true).catch(() => {
          pill.hidden = false;
          pill.onclick = () => {
            audio.play().then(() => pill.hidden = true).catch(() => pill.textContent = "Musica bloqueada");
          };
        });
      }

      function setupRadioIpuc() {
        const audio = document.getElementById("radioIpucAudio");
        const toggle = document.getElementById("radioToggle");
        const widget = document.querySelector(".radio-widget");
        if (!audio || !toggle || !widget) return;
        audio.src = `https://radio-envivo.ipuc.org.co?nocache=${Date.now()}`;
        audio.volume = 0.55;
        audio.muted = false;
        const setState = (playing, muted = audio.muted) => {
          widget.classList.toggle("is-playing", playing);
          toggle.textContent = playing && muted ? "Activar sonido" : playing ? "Pausar radio" : "Escuchar ahora";
        };
        toggle.onclick = () => {
          if (audio.paused) {
            audio.muted = false;
            audio.play().then(() => setState(true, false)).catch(() => setState(false));
          } else if (audio.muted) {
            audio.muted = false;
            setState(true, false);
          } else {
            audio.pause();
            setState(false);
          }
        };
        audio.addEventListener("playing", () => setState(true));
        audio.addEventListener("pause", () => setState(false));
        audio.play().then(() => setState(true, false)).catch(() => {
          audio.muted = true;
          audio.play().then(() => setState(true, true)).catch(() => {
            setState(false);
            toggle.textContent = "Escuchar Radio IPUC";
          });
        });
      }

      function unlockMusicOnce() {
        const audio = document.getElementById("platformMusic");
        const pill = document.getElementById("musicPill");
        if (assetSource(APP_STATE.music) && audio?.paused) audio.play().then(() => pill.hidden = true).catch(() => {});
      }

      function refreshAdminNav() {
        const link = document.querySelector("[data-login-link]");
        if (!link) return;
        if (isAdmin()) {
          link.textContent = "Administracion";
          link.href = "/admin";
          return;
        }
        if (isDecomMember()) {
          link.textContent = "DECOM";
          link.href = "/admin";
          return;
        }
        link.textContent = "Admin";
        link.href = "/admin/login";
      }

      function isAdmin() {
        return Boolean(cloud.enabled && cloud.ready && adminEmailAllowed());
      }

      function isDecomMember() {
        return Boolean(cloud.enabled && cloud.ready && decomEmailAllowed());
      }

      function featuredEvents() {
        return platformEventsForYear(today.getFullYear()).filter(event => event.featured && platformStatus(event) !== "Realizado").slice(0, 4);
      }

      function announcementCards() {
        const items = (APP_STATE.announcements || []).slice().reverse().slice(0, 4);
        if (!items.length) return emptyText("No hay anuncios publicados.");
        return items.map(item => `<article class="announcement-public"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.description)}</p><small>${escapeHtml(formatDateShort(item.date))}</small></article>`).join("");
      }

      function reflectionForDate(date) {
        const index = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000) % REFLECTIONS.length;
        return APP_STATE.reflections[dateKey(date)] || { ...REFLECTIONS[index], media: { type: "youtube", url: DEFAULT_REFLECTION_MEDIA[index % DEFAULT_REFLECTION_MEDIA.length] } };
      }

      function youtubeEmbedUrl(url) {
        const match = String(url || "").match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|shorts\/|embed\/))([\w-]{11})/);
        return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?autoplay=1&mute=0&rel=0` : "";
      }

      function reflectionMediaMarkup(reflection, autoplay = false) {
        const media = reflection?.media;
        if (!media) return "";
        if (media.type === "youtube") {
          const source = youtubeEmbedUrl(media.url);
          return source ? `<div class="reflection-media youtube-reflection"><iframe src="${source}" title="Reflexión IPUC" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>` : "";
        }
        if (isVideo(media)) return `<div class="reflection-media"><video ${autoplay ? "autoplay" : "controls"} controls playsinline preload="metadata" src="${escapeHtml(assetSource(media))}"></video></div>`;
        if (isAudio(media)) return `<div class="reflection-media audio-reflection"><audio ${autoplay ? "autoplay" : "controls"} controls preload="metadata" src="${escapeHtml(assetSource(media))}"></audio></div>`;
        return "";
      }

      function eventInfoList(event) {
        return `<dl class="info-list"><div><dt>Fecha</dt><dd>${escapeHtml(formatDateShort(event.date))}</dd></div><div><dt>Hora</dt><dd>${escapeHtml(event.time)}</dd></div><div><dt>Lugar</dt><dd>${escapeHtml(event.place)}</dd></div><div><dt>Departamento</dt><dd>${escapeHtml(event.department || event.organizer)}</dd></div><div><dt>Responsable</dt><dd>${escapeHtml(event.responsible || "Por definir")}</dd></div></dl>`;
      }

      function shortDescription(event) {
        return event.description || `Actividad programada por ${event.department || event.organizer || "IPUC Villa del Rio"}.`;
      }

      function whatsappShare(event) {
        const text = `${event.title}\n${formatDateShort(event.date)} - ${event.time}\n${event.place}\n${location.origin}${location.pathname}#/evento/${event.id}`;
        return `https://wa.me/?text=${encodeURIComponent(text)}`;
      }

      function sortByDate(a, b) {
        return a.date.localeCompare(b.date) || a.time.localeCompare(b.time) || a.title.localeCompare(b.title);
      }

      function startOfWeek(date) {
        const clone = cleanDate(date);
        clone.setDate(clone.getDate() - ((clone.getDay() + 6) % 7));
        return clone;
      }

      function calendarTitle() {
        if (platform.calendarView === "anio") return `Año ${platform.calendarDate.getFullYear()}`;
        if (platform.calendarView === "semana") return `Semana de ${formatDateShort(dateKey(startOfWeek(platform.calendarDate)))}`;
        if (platform.calendarView === "dia") return longPlatformDate(platform.calendarDate);
        return `${capitalize(months[platform.calendarDate.getMonth()])} ${platform.calendarDate.getFullYear()}`;
      }

      function viewLabel(value) {
        return { anio: "Año completo", mes: "Mes", semana: "Semana", dia: "Día" }[value];
      }

      function longPlatformDate(date) {
        return `${capitalize(weekdays[date.getDay()])} ${date.getDate()} de ${months[date.getMonth()]} de ${date.getFullYear()}`;
      }

      function capitalize(value) {
        return String(value).charAt(0).toUpperCase() + String(value).slice(1);
      }

      function emptyText(text) {
        return `<div class="empty-state">${escapeHtml(text)}</div>`;
      }
    }

    function installPlatformStyles() {
      if (document.getElementById("platformStyles")) return;
      const style = document.createElement("style");
      style.id = "platformStyles";
      style.textContent = `
        .platform-body { position: relative; background: #123348; }
        .platform-shell { position: relative; isolation: isolate; }
        .site-video-backdrop { position: fixed; inset: 0; z-index: 0; overflow: hidden; background: #123348; pointer-events: none; }
        .site-video-backdrop video { width: 100%; height: 100%; object-fit: cover; opacity: .68; filter: saturate(.9) contrast(1.04); }
        .site-video-backdrop span { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(7,28,43,.38), rgba(14,71,77,.16) 48%, rgba(6,26,42,.38)); pointer-events: none; }
        .platform-top, .route-view, .platform-footer { position: relative; z-index: 1; }
        @media (max-width: 620px) { .site-video-backdrop video { opacity: .22; } }
        @media (prefers-reduced-motion: reduce) { .site-video-backdrop video { display: none; } }
        @keyframes platformAtmosphere { from { background-position: 0% 0%; } to { background-position: 100% 70%; } }
        @keyframes platformAtmosphere { from { background-position: 0% 0%; } to { background-position: 100% 70%; } }
        .platform-shell { width: min(1180px, calc(100% - 28px)); margin: 0 auto; padding: 18px 0 34px; }
        .platform-top { position: sticky; top: 10px; z-index: 10; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 12px; border-radius: 24px; transition: width .24s ease, padding .24s ease, border-radius .24s ease, transform .24s ease; }
        .platform-top.is-compact { position: fixed; top: 12px; right: 16px; width: 54px; height: 54px; padding: 6px; justify-content: center; border-radius: 17px; box-shadow: 0 14px 30px rgba(13,52,66,.25); }
        .platform-top.is-compact .platform-brand { display: none; }
        .platform-top.is-compact .nav-toggle { display: inline-flex; width: 42px; height: 42px; padding: 0; border-radius: 13px; font-size: 0; }
        .platform-top.is-compact .nav-toggle::before { content: "☰"; font-size: 1.45rem; line-height: 1; }
        .platform-top.is-compact .platform-nav { position: absolute; top: calc(100% + 8px); right: 0; display: none; flex-direction: column; align-items: stretch; width: min(230px, calc(100vw - 28px)); padding: 10px; border: 1px solid rgba(255,255,255,.78); border-radius: 18px; background: rgba(245,250,248,.97); box-shadow: 0 20px 50px rgba(31,55,72,.22); }
        .platform-top.is-compact .platform-nav.open { display: flex; }
        .platform-brand { display: flex; align-items: center; gap: 12px; min-width: 0; color: var(--ink); text-decoration: none; }
        .platform-brand img { width: 76px; height: 76px; object-fit: contain; border-radius: 20px; background: rgba(255,255,255,.7); padding: 7px; }
        .platform-brand span { display: grid; gap: 3px; min-width: 0; }
        .platform-brand strong { font-size: 1rem; line-height: 1.1; }
        .platform-brand small { color: var(--muted); font-weight: 800; }
        .platform-nav { display: flex; align-items: center; gap: 8px; }
        .platform-nav a, .nav-toggle, .primary-link, .small-action, .view-switch button, .month-strip button { display: inline-flex; align-items: center; justify-content: center; min-height: 40px; padding: 0 14px; border: 1px solid rgba(255,255,255,.75); border-radius: 14px; background: rgba(255,255,255,.55); color: var(--ink); font: inherit; font-weight: 900; text-decoration: none; cursor: pointer; }
        .danger-action { border-color: rgba(180,35,53,.2) !important; background: rgba(232,75,95,.12) !important; color: #8f2130 !important; }
        .primary-link, .view-switch button.active, .month-strip button.active { background: linear-gradient(145deg, #123348, #1c8b78); color: white; box-shadow: 0 14px 34px rgba(20,52,71,.18); }
        .nav-toggle { display: none; }
        .route-view { display: grid; gap: 16px; margin-top: 16px; }
        .home-hero, .page-head, .content-card, .calendar-page, .view-switch, .month-strip, .filters, .login-card { border-radius: 26px; padding: 18px; }
        .home-hero, .detail-hero { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(300px, .92fr); gap: 18px; align-items: center; }
        .home-hero { grid-template-columns: 1fr; min-height: 390px; }
        .home-hero, .home-welcome, .type-shortcuts, .split-grid > article { opacity: 0; transform: translateY(18px); animation: homeReveal .65s cubic-bezier(.2,.75,.25,1) var(--reveal-delay, 0ms) forwards; }
        .home-hero.is-visible, .home-welcome.is-visible, .type-shortcuts.is-visible, .split-grid > article.is-visible { opacity: 1; transform: translateY(0); }
        @keyframes homeReveal { to { opacity: 1; transform: translateY(0); } }
        .home-kicker { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; margin-bottom: 26px; color: #4f6b78; font-size: .78rem; font-weight: 900; text-transform: uppercase; letter-spacing: .06em; }
        .home-live-dot { width: 9px; height: 9px; border-radius: 50%; background: #1c8b78; box-shadow: 0 0 0 5px rgba(28,139,120,.12); animation: livePulse 1.8s ease-in-out infinite; }
        @keyframes livePulse { 0%, 100% { box-shadow: 0 0 0 4px rgba(28,139,120,.11); } 50% { box-shadow: 0 0 0 9px rgba(28,139,120,0); } }
        .home-lead { max-width: 600px; font-size: 1.03rem; }
        .home-actions { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-top: 18px; }
        .reflection-media { width: min(100%, 940px); margin: 20px auto 0; overflow: hidden; border: 1px solid rgba(255,255,255,.72); border-radius: 18px; background: rgba(7,28,43,.28); box-shadow: 0 14px 30px rgba(13,52,66,.16); }
        .reflection-media iframe, .reflection-media video { display: block; width: 100%; aspect-ratio: 16 / 9; border: 0; object-fit: cover; }
        .reflection-media audio { display: block; width: 100%; min-height: 48px; }
        .radio-home-action { min-height: 44px; padding: 0 15px; border: 1px solid rgba(11,59,76,.12); border-radius: 13px; background: rgba(255,255,255,.7); color: #123348; font: inherit; font-weight: 900; cursor: pointer; transition: transform .18s ease, background .18s ease; }
        .radio-home-action:hover { transform: translateY(-2px); background: white; }
        .hero-copy h1, .page-head h1, .detail-hero h1, .login-card h1 { margin: 0; font-size: clamp(2rem, 4vw, 4.2rem); line-height: .96; }
        .hero-copy p, .page-head p, .detail-hero p, .content-card p { color: var(--muted); line-height: 1.45; }
        .hero-image, .detail-hero > img, .event-card-public > img { width: 100%; aspect-ratio: 16 / 10; object-fit: cover; border-radius: 22px; box-shadow: 0 20px 46px rgba(31,55,72,.18); }
        .home-hero .hero-image { animation: heroFloat 7s ease-in-out infinite; }
        @keyframes heroFloat { 0%, 100% { transform: rotate(1.4deg) translateY(0); } 50% { transform: rotate(1.4deg) translateY(-7px); } }
        .home-welcome { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 18px; align-items: center; padding: 18px 20px; border-radius: 22px; }
        .home-welcome h2 { color: #123348; font-size: 1.35rem; }
        .home-welcome p:not(.eyebrow) { margin: 7px 0 0; color: var(--muted); line-height: 1.45; }
        .home-quick-links { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 8px; }
        .home-quick-links a { display: grid; gap: 5px; min-height: 76px; padding: 12px; border: 1px solid rgba(11,59,76,.08); border-radius: 15px; background: rgba(255,255,255,.5); color: #123348; text-decoration: none; transition: transform .18s ease, background .18s ease; }
        .home-quick-links a:hover { transform: translateY(-3px); background: rgba(255,255,255,.86); }
        .home-quick-links span { color: var(--muted); font-size: .75rem; font-weight: 750; }
        .today-line { display: inline-flex; margin: 8px 0 14px; padding: 10px 12px; border-radius: 14px; background: rgba(255,255,255,.58); color: #405665; font-weight: 900; }
        .split-grid, .agenda-grid, .admin-layout, .detail-grid-page { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
        .admin-summary { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; margin: 16px 0; }
        .admin-summary article { display: grid; gap: 3px; padding: 14px 16px; border: 1px solid rgba(255,255,255,.72); border-radius: 18px; background: rgba(255,255,255,.55); box-shadow: 0 10px 24px rgba(31,55,72,.07); }
        .admin-summary strong { color: #123348; font-size: 1.25rem; font-weight: 950; }
        .admin-summary span { color: var(--muted); font-size: .78rem; font-weight: 850; }
        .admin-tabs { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 8px; padding: 8px; margin-bottom: 16px; }
        .admin-tab { display: grid; gap: 3px; padding: 11px 12px; border: 1px solid transparent; border-radius: 14px; background: transparent; color: #123348; font: inherit; text-align: left; cursor: pointer; }
        .admin-tab strong { font-size: .9rem; }
        .admin-tab span { color: var(--muted); font-size: .72rem; }
        .admin-tab:hover, .admin-tab.active { background: #123348; color: white; box-shadow: 0 10px 22px rgba(18,51,72,.16); }
        .admin-tab:hover span, .admin-tab.active span { color: rgba(255,255,255,.75); }
        .admin-module[hidden] { display: none !important; }
        .admin-module { grid-column: 1 / -1; }
        .admin-card-wide { max-width: 980px; margin: 0 auto; }
        .admin-card-narrow { max-width: 760px; margin: 0 auto; }
        .upload-guide { display: grid; gap: 3px; padding: 12px 14px; border-radius: 14px; background: rgba(28,139,120,.1); color: #185f53; }
        .upload-guide span { color: #4f6b78; font-size: .82rem; font-weight: 700; text-transform: none; }
        .upload-group { border: 1px solid rgba(83,102,117,.14); border-radius: 16px; background: rgba(255,255,255,.34); padding: 0 12px 12px; }
        .upload-group summary { padding: 12px 2px; color: #123348; font-weight: 950; cursor: pointer; }
        .upload-group .form-grid { padding-top: 2px; }
        .file-dropzone { min-height: 84px; padding: 10px; border: 1px dashed rgba(18,51,72,.26); border-radius: 14px; background: rgba(255,255,255,.34); transition: border-color .18s ease, background .18s ease, transform .18s ease; }
        .file-dropzone input[type="file"] { min-height: 38px; }
        .file-dropzone.is-dragging { border-color: #1c8b78; background: rgba(28,139,120,.13); transform: translateY(-2px); }
        .file-dropzone.has-file { border-color: rgba(28,139,120,.48); background: rgba(235,249,245,.64); }
        .admin-wide { grid-column: 1 / -1; }
        .detail-grid-page .wide { grid-column: 1 / -1; }
        .section-title { margin-bottom: 12px; }
        .section-title h2 { margin: 0; font-size: 1.45rem; }
        .card-list, .agenda-list, .file-public-list { display: grid; gap: 10px; }
        .mini-card, .agenda-item, .announcement-public, .file-public-list article { display: grid; grid-template-columns: 74px minmax(0, 1fr) auto; gap: 12px; align-items: center; padding: 10px; border: 1px solid rgba(255,255,255,.72); border-radius: 16px; background: rgba(255,255,255,.48); color: var(--ink); text-decoration: none; }
        .mini-card img, .agenda-item img { width: 74px; height: 58px; object-fit: cover; border-radius: 12px; }
        .mini-card span, .agenda-item div, .file-public-list span { display: grid; gap: 3px; min-width: 0; }
        .mini-card small, .agenda-item small, .file-public-list small { color: var(--muted); }
        .announcement-public { grid-template-columns: 1fr; }
        .info-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; margin: 16px 0; }
        .info-list div { padding: 10px; border-radius: 14px; background: rgba(255,255,255,.52); border: 1px solid rgba(255,255,255,.7); }
        .info-list dt { color: #4f6b78; font-size: .72rem; font-weight: 900; text-transform: uppercase; }
        .info-list dd { margin: 3px 0 0; font-weight: 900; }
        .head-actions, .view-switch, .month-strip, .filters, .detail-actions, .button-row { display: flex; flex-wrap: wrap; gap: 8px; }
        .page-head { display: flex; justify-content: space-between; align-items: center; gap: 16px; }
        .filters input, .filters select, .form-grid input, .form-grid select, .form-grid textarea { width: 100%; min-height: 42px; border: 1px solid rgba(83,102,117,.18); border-radius: 14px; background: rgba(255,255,255,.7); color: var(--ink); font: inherit; padding: 10px; }
        .filters input { flex: 1 1 280px; }
        .week-head, .month-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 7px; }
        .week-head { margin-bottom: 8px; text-align: center; color: #536675; font-size: .78rem; font-weight: 900; text-transform: uppercase; }
        .month-day { min-height: 120px; padding: 8px; border-radius: 16px; background: rgba(255,255,255,.47); border: 1px solid rgba(255,255,255,.68); overflow: hidden; }
        .muted-day { opacity: .52; }
        .today-day { box-shadow: inset 0 0 0 2px rgba(28,139,120,.32); }
        .event-pill { display: flex; align-items: center; gap: 6px; margin-top: 6px; padding: 5px; border-radius: 10px; background: rgba(255,255,255,.66); color: var(--ink); text-decoration: none; font-size: .75rem; font-weight: 850; }
        .event-pill img { width: 26px; height: 26px; border-radius: 8px; object-fit: cover; flex: 0 0 auto; }
        .event-pill span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .event-pill small { display: block; color: var(--muted); font-size: .66rem; }
        .year-view { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 12px; }
        .year-month, .week-column, .day-view { padding: 12px; border-radius: 18px; background: rgba(255,255,255,.45); border: 1px solid rgba(255,255,255,.68); }
        .year-month h3, .week-column h3 { margin: 0 0 10px; }
        .week-view { display: grid; grid-template-columns: repeat(7, minmax(150px, 1fr)); gap: 10px; overflow-x: auto; }
        .week-agenda-list { display: grid; gap: 12px; max-width: 920px; margin: 0 auto; }
        .week-list-day { display: grid; grid-template-columns: 170px minmax(0, 1fr); gap: 14px; padding: 14px; border: 1px solid rgba(255,255,255,.72); border-radius: 18px; background: rgba(255,255,255,.46); }
        .week-list-day.is-today { border-color: rgba(28,139,120,.42); box-shadow: inset 5px 0 0 #1c8b78; background: rgba(235,249,245,.7); }
        .week-list-day > header { display: grid; align-content: start; gap: 4px; }
        .week-list-day > header h3 { margin: 0; color: #123348; font-size: 1.15rem; }
        .week-list-day > header span { color: var(--muted); font-weight: 800; }
        .week-list-day > header b { justify-self: start; padding: 4px 8px; border-radius: 999px; background: rgba(28,139,120,.13); color: #185f53; font-size: .7rem; }
        .week-list-day .agenda-list { gap: 8px; }
        .weekly-schedule-card { display: grid; gap: 12px; padding: 16px; border: 1px solid rgba(255,255,255,.78); border-radius: 20px; background: rgba(255,255,255,.58); }
        .weekly-schedule-card h2 { color: #123348; }
        .weekly-schedule-card p:not(.eyebrow) { margin: 5px 0 0; color: var(--muted); }
        .weekly-schedule-card img, .weekly-schedule-card iframe { display: block; width: 100%; max-height: 620px; min-height: 280px; border: 0; border-radius: 15px; object-fit: contain; background: rgba(18,51,72,.06); }
        .weekly-schedule-card iframe { height: 620px; }
        .weekly-upload { display: grid; gap: 9px; }
        .weekly-upload > strong { color: #123348; font-size: 1rem; }
        .weekly-upload p, .weekly-upload small { margin: 0; color: var(--muted); font-size: .82rem; font-weight: 700; text-transform: none; }
        .week-column h3 span { display: block; color: var(--muted); font-size: .75rem; }
        .week-column { min-width: 0; overflow: hidden; }
        .agenda-list-compact { gap: 10px; }
        .week-event-item { display: grid; grid-template-columns: 1fr; gap: 8px; align-items: start; padding: 9px; overflow: hidden; }
        .week-event-item img { width: 100%; height: 72px; border-radius: 11px; }
        .week-event-item div { min-width: 0; }
        .week-event-item div span, .week-event-item div small { display: block; overflow-wrap: anywhere; word-break: break-word; }
        .week-event-item div span { line-height: 1.15; }
        .week-event-item .small-action { width: 100%; min-height: 34px; padding: 0 6px; font-size: .72rem; text-align: center; white-space: normal; }
        .event-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        .announcement-page-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
        .announcement-page-grid .announcement-public { align-content: start; min-height: 180px; }
        .status-chip { justify-self: start; padding: 5px 9px; border-radius: 999px; background: rgba(28,139,120,.12); color: #185f53; font-size: .72rem; font-weight: 900; }
        .event-card-public { display: grid; gap: 12px; padding: 12px; border-radius: 22px; }
        .detail-hero { border-radius: 26px; padding: 18px; }
        .asset-grid-page { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
        .asset-public { display: grid; gap: 8px; padding: 10px; border: 1px solid rgba(255,255,255,.72); border-radius: 16px; background: rgba(255,255,255,.48); }
        .asset-public button:first-child { width: 100%; border: 0; padding: 0; border-radius: 14px; background: rgba(18,51,72,.08); overflow: hidden; cursor: pointer; }
        .asset-public img, .asset-public video { width: 100%; height: 150px; object-fit: cover; display: block; }
        .asset-public span { display: grid; place-items: center; height: 150px; color: var(--muted); font-weight: 900; }
        .form-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
        .form-grid label { display: grid; gap: 5px; color: #4f6b78; font-size: .78rem; font-weight: 900; text-transform: uppercase; }
        .form-grid .full, .button-row.full { grid-column: 1 / -1; }
        .form-grid textarea { min-height: 92px; resize: vertical; }
        .checkbox-line { display: flex !important; align-items: center; gap: 8px; text-transform: none !important; color: var(--ink) !important; }
        .tag-admin { display: flex; flex-wrap: wrap; gap: 8px; }
        .tag-admin label { display: inline-flex; align-items: center; gap: 6px; padding: 8px 10px; border-radius: 999px; background: rgba(255,255,255,.55); color: var(--ink); text-transform: none; }
        .decom-panel .section-title p:not(.eyebrow) { margin: 6px 0 0; color: var(--muted); }
        .decom-panel { scroll-margin-top: 130px; }
        .decom-toolbar { display: grid; gap: 12px; margin-bottom: 14px; }
        .decom-months, .decom-actions { display: flex; flex-wrap: wrap; gap: 8px; }
        .decom-months button { min-height: 38px; padding: 0 12px; border: 1px solid rgba(255,255,255,.75); border-radius: 999px; background: rgba(255,255,255,.55); color: var(--ink); font: inherit; font-weight: 900; cursor: pointer; }
        .decom-months button.active { background: linear-gradient(145deg, #123348, #1c8b78); color: white; }
        .decom-board { display: grid; grid-template-columns: minmax(0, 1.35fr) minmax(320px, .65fr); gap: 14px; align-items: start; }
        .decom-calendar-shell, .decom-editor { border: 1px solid rgba(255,255,255,.72); border-radius: 20px; background: rgba(255,255,255,.48); padding: 12px; }
        .decom-calendar-shell { overflow-x: auto; }
        .decom-month-title { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin-bottom: 10px; }
        .decom-month-title strong { font-size: 1.2rem; font-weight: 950; }
        .decom-month-title span { color: var(--muted); font-size: .86rem; font-weight: 850; }
        .decom-week-head, .decom-calendar-grid { display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 6px; }
        .decom-week-head { margin-bottom: 6px; color: #4f6b78; font-size: .72rem; font-weight: 950; text-align: center; text-transform: uppercase; }
        .decom-day { position: relative; display: grid; grid-template-rows: auto auto 1fr auto; gap: 3px; min-height: 92px; padding: 8px; border: 1px solid rgba(83,102,117,.13); border-radius: 14px; background: rgba(255,255,255,.55); color: var(--ink); font: inherit; text-align: left; cursor: pointer; overflow: hidden; }
        .decom-day:disabled { cursor: default; opacity: .45; }
        .decom-day.cult-day { opacity: 1; background: rgba(255,255,255,.78); box-shadow: inset 0 -4px 0 #f39c12; }
        .decom-day.selected { outline: 3px solid rgba(28,139,120,.28); border-color: rgba(28,139,120,.55); background: rgba(235,249,245,.95); }
        .decom-day.today .decom-day-number { background: #123348; color: white; }
        .decom-day.status-confirmado { box-shadow: inset 0 -4px 0 #1c8b78; }
        .decom-day.status-cubierto { box-shadow: inset 0 -4px 0 #2f80ed; }
        .decom-day.status-pendiente { box-shadow: inset 0 -4px 0 #f39c12; }
        .decom-day.status-sin-asignar { box-shadow: inset 0 -4px 0 #9aa8b2; }
        .decom-day.status-cambio-solicitado { box-shadow: inset 0 -4px 0 #e84b5f; }
        .decom-day-number { display: inline-grid; place-items: center; width: 26px; height: 26px; border-radius: 9px; background: rgba(18,51,72,.08); font-weight: 950; }
        .decom-day small { color: var(--muted); font-size: .72rem; font-weight: 850; }
        .decom-day strong { min-width: 0; color: #123348; font-size: .82rem; line-height: 1.05; overflow-wrap: anywhere; }
        .decom-day em { color: #4f6b78; font-size: .68rem; font-style: normal; font-weight: 850; }
        .decom-day b { justify-self: start; padding: 3px 6px; border-radius: 999px; background: rgba(232,75,95,.12); color: #8f2130; font-size: .62rem; }
        .decom-editor { position: sticky; top: 12px; display: grid; gap: 12px; }
        .decom-editor header { display: grid; gap: 3px; }
        .decom-editor h3 { margin: 0; font-size: 1.3rem; line-height: 1.05; }
        .decom-editor header span { color: var(--muted); font-weight: 850; }
        .decom-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
        .decom-turn { display: grid; gap: 12px; padding: 14px; border-radius: 18px; border: 1px solid rgba(255,255,255,.72); background: rgba(255,255,255,.52); box-shadow: inset 5px 0 0 #9aa8b2; }
        .decom-turn.status-confirmado { box-shadow: inset 5px 0 0 #1c8b78; }
        .decom-turn.status-cubierto { box-shadow: inset 5px 0 0 #2f80ed; }
        .decom-turn.status-pendiente { box-shadow: inset 5px 0 0 #f39c12; }
        .decom-turn.status-sin-asignar { box-shadow: inset 5px 0 0 #9aa8b2; }
        .decom-turn.status-cambio-solicitado { box-shadow: inset 5px 0 0 #e84b5f; }
        .decom-turn header { display: flex; align-items: start; justify-content: space-between; gap: 10px; }
        .decom-turn header div { display: grid; gap: 3px; }
        .decom-turn header strong { font-size: 1.08rem; }
        .decom-turn header span, .decom-turn small { color: var(--muted); }
        .decom-turn mark { padding: 6px 9px; border-radius: 999px; background: rgba(18,51,72,.08); color: #123348; font-size: .78rem; font-weight: 900; }
        .decom-alert { display: grid; gap: 4px; padding: 10px; border-radius: 14px; background: rgba(243,156,18,.14); color: #63450f; border: 1px solid rgba(243,156,18,.24); line-height: 1.35; }
        .decom-form { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; }
        .decom-form label { display: grid; gap: 5px; color: #4f6b78; font-size: .75rem; font-weight: 900; text-transform: uppercase; }
        .decom-form .full { grid-column: 1 / -1; }
        .decom-form select, .decom-form textarea { width: 100%; border: 1px solid rgba(83,102,117,.18); border-radius: 12px; background: rgba(255,255,255,.72); color: var(--ink); font: inherit; padding: 9px; }
        .decom-form textarea { min-height: 74px; resize: vertical; }
        .decom-readonly { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 9px; }
        .decom-readonly span { display: grid; gap: 4px; padding: 10px; border-radius: 12px; background: rgba(255,255,255,.58); color: var(--ink); line-height: 1.25; }
        .decom-readonly strong { color: #4f6b78; font-size: .72rem; font-weight: 900; text-transform: uppercase; }
        .decom-readonly .full { grid-column: 1 / -1; }
        .decom-turn footer, .decom-editor footer { display: flex; flex-wrap: wrap; gap: 8px; }
        .login-card { display: grid; grid-template-columns: minmax(0, .8fr) minmax(280px, .55fr); gap: 18px; align-items: center; max-width: 900px; margin: 0 auto; }
        .form-message { min-height: 20px; color: #b42335; font-weight: 800; }
        .empty-state { padding: 14px; border: 1px dashed rgba(83,102,117,.35); border-radius: 16px; color: var(--muted); background: rgba(255,255,255,.38); }
        .cloud-warning, .cloud-ok { margin-top: 12px; padding: 12px; border-radius: 16px; font-weight: 800; line-height: 1.35; }
        .cloud-warning { background: rgba(232,75,95,.12); color: #8f2130; border: 1px solid rgba(232,75,95,.22); }
        .cloud-ok { background: rgba(28,139,120,.13); color: #185f53; border: 1px solid rgba(28,139,120,.22); }
        .existing-list { display: grid; gap: 8px; margin-top: 6px; padding-top: 8px; border-top: 1px solid rgba(83,102,117,.14); }
        .existing-list h3 { margin: 0 0 4px; font-size: 1rem; }
        .existing-list article { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 10px; align-items: center; padding: 10px; border-radius: 14px; background: rgba(255,255,255,.50); border: 1px solid rgba(255,255,255,.72); }
        .existing-list span { display: grid; min-width: 0; }
        .existing-list small { color: var(--muted); overflow-wrap: anywhere; }
        .media-layer { position: fixed; inset: 0; z-index: 40; display: none; align-items: center; justify-content: center; padding: 18px; background: rgba(10,20,30,.52); backdrop-filter: blur(10px); }
        .media-layer.open { display: flex; }
        .media-layer article { width: min(920px, 100%); max-height: 92vh; overflow: auto; padding: 16px; border-radius: 24px; background: rgba(245,250,248,.97); }
        .media-layer header { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 12px; }
        .media-layer header button { width: 42px; height: 42px; border-radius: 14px; border: 1px solid rgba(83,102,117,.18); background: rgba(255,255,255,.7); font-size: 1.3rem; font-weight: 900; cursor: pointer; }
        .media-layer img, .media-layer video, .media-layer iframe { width: 100%; max-height: 70vh; object-fit: contain; border: 0; border-radius: 18px; background: rgba(255,255,255,.7); }
        .media-layer iframe { min-height: 68vh; }
        .music-pill { position: fixed; right: 16px; bottom: 16px; z-index: 12; min-height: 40px; padding: 0 14px; border: 1px solid rgba(255,255,255,.75); border-radius: 999px; background: rgba(18,51,72,.88); color: white; font-weight: 900; cursor: pointer; box-shadow: 0 14px 34px rgba(20,52,71,.22); }
        .radio-widget { position: fixed; right: 16px; bottom: 16px; z-index: 13; display: flex; align-items: center; gap: 9px; width: auto; min-width: 188px; padding: 8px 9px; border: 1px solid rgba(255,255,255,.72); border-radius: 16px; background: rgba(245,250,248,.94); box-shadow: 0 14px 32px rgba(20,52,71,.2); backdrop-filter: blur(16px); }
        .radio-widget-head { display: flex; align-items: center; gap: 10px; color: #123348; }
        .radio-widget-head span:last-child { display: grid; gap: 3px; }
        .radio-widget-head small { color: #4f6b78; font-weight: 850; }
        .radio-widget-head i { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #9aa8b2; }
        .radio-widget.is-playing .radio-widget-head i { background: #1c8b78; box-shadow: 0 0 0 4px rgba(28,139,120,.12); }
        .radio-widget.is-playing { animation: radioGlow 2.4s ease-in-out infinite; }
        @keyframes radioGlow { 0%, 100% { box-shadow: 0 18px 42px rgba(20,52,71,.2); } 50% { box-shadow: 0 18px 42px rgba(28,139,120,.3); } }
        .radio-mark { display: grid; place-items: center; width: 31px; height: 31px; flex: 0 0 auto; border-radius: 10px; background: #123348; color: #f6d365; font-size: .9rem; }
        .radio-widget-head { flex: 1 1 auto; min-width: 0; }
        .radio-widget-head strong { font-size: .85rem; }
        .radio-widget-head small { font-size: .7rem; }
        .radio-toggle { display: grid; place-items: center; width: 34px; height: 34px; min-height: 34px; padding: 0; border: 0; border-radius: 10px; background: #123348; color: #fff; font: inherit; font-weight: 900; cursor: pointer; font-size: 0; }
        .radio-toggle::before { content: "▶"; font-size: .85rem; }
        .radio-widget.is-playing .radio-toggle::before { content: "Ⅱ"; font-size: .8rem; }
        @media (max-width: 900px) {
          .home-hero, .detail-hero, .split-grid, .agenda-grid, .admin-layout, .login-card, .decom-grid, .decom-board { grid-template-columns: 1fr; }
          .home-welcome { grid-template-columns: 1fr; }
          .admin-tabs { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .decom-editor { position: static; }
          .week-list-day { grid-template-columns: 130px minmax(0, 1fr); }
          .event-grid, .year-view, .asset-grid-page { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .announcement-page-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .page-head { display: grid; }
        }
        @media (max-width: 620px) {
          .platform-shell { width: calc(100% - 14px); padding-top: 8px; }
          .radio-widget { right: 10px; bottom: 10px; }
          .platform-top { align-items: start; border-radius: 18px; }
          .platform-brand img { width: 58px; height: 58px; border-radius: 16px; }
          .nav-toggle { display: inline-flex; }
          .platform-nav { position: absolute; left: 10px; right: 10px; top: calc(100% + 8px); display: none; flex-direction: column; align-items: stretch; padding: 10px; border-radius: 18px; background: rgba(245,250,248,.96); box-shadow: 0 20px 50px rgba(31,55,72,.22); }
          .platform-nav.open { display: flex; }
          .platform-nav a { justify-content: flex-start; }
          .home-hero, .page-head, .content-card, .calendar-page, .view-switch, .month-strip, .filters, .login-card, .detail-hero { padding: 12px; border-radius: 18px; }
          .home-kicker { margin-bottom: 18px; font-size: .68rem; }
          .home-actions { align-items: stretch; flex-direction: column; }
          .home-actions a, .radio-home-action { width: 100%; justify-content: center; text-align: center; }
          .home-welcome { padding: 14px; border-radius: 18px; }
          .home-quick-links { grid-template-columns: 1fr; }
          .week-list-day { grid-template-columns: 1fr; gap: 9px; }
          .weekly-schedule-card iframe { height: 420px; }
          .hero-copy h1, .page-head h1, .detail-hero h1, .login-card h1 { font-size: 1.9rem; line-height: 1.05; }
          .info-list, .form-grid, .event-grid, .asset-grid-page, .year-view { grid-template-columns: 1fr; }
          .admin-summary { grid-template-columns: 1fr; }
          .admin-tabs { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .announcement-page-grid { grid-template-columns: 1fr; }
          .week-head, .month-grid { gap: 4px; }
          .week-head { font-size: .62rem; }
          .month-day { min-height: 70px; padding: 5px; border-radius: 12px; }
          .event-pill { font-size: 0; padding: 3px; }
          .event-pill img { width: 22px; height: 22px; }
          .event-pill span { display: none; }
          .mini-card, .agenda-item, .file-public-list article { grid-template-columns: 58px minmax(0, 1fr); }
          .mini-card img, .agenda-item img { width: 58px; height: 48px; }
          .agenda-item .small-action { grid-column: 1 / -1; }
          .month-strip { overflow-x: auto; flex-wrap: nowrap; justify-content: flex-start; }
          .month-strip button { flex: 0 0 auto; }
          .decom-months { overflow-x: auto; flex-wrap: nowrap; }
          .decom-months button { flex: 0 0 auto; }
          .decom-calendar-shell, .decom-editor { padding: 9px; border-radius: 16px; }
          .decom-week-head, .decom-calendar-grid { gap: 4px; }
          .decom-week-head, .decom-calendar-grid { min-width: 610px; }
          .decom-week-head { font-size: .58rem; }
          .decom-day { min-height: 76px; padding: 6px; border-radius: 10px; }
          .decom-day-number { width: 22px; height: 22px; border-radius: 7px; font-size: .82rem; }
          .decom-day small { font-size: .58rem; }
          .decom-day strong { font-size: .68rem; line-height: 1; }
          .decom-day em, .decom-day b { display: none; }
          .decom-month-title { display: grid; gap: 2px; }
          .decom-form { grid-template-columns: 1fr; }
          .decom-form .full { grid-column: auto; }
          .decom-readonly { grid-template-columns: 1fr; }
          .decom-readonly .full { grid-column: auto; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; animation: none !important; transition: none !important; }
        }
      `;
      document.head.appendChild(style);
    }
