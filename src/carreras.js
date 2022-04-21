import * as data from "./data";
import { COLORS } from "./theme";

export const CARRERAS = [
  {
    id: "administracion",
    link: "http://www.economicas.uba.ar/carreras/administracion/",
    graph: data.administracion,
    nombre: "Administración de Empresas",
    nombrecorto: "Administracion",
    finDeCarrera: [
      // Aca esta el seminario en el menu de inicio de sesion
      //{ id: "tesis", materia: "460" },
      //{ id: "tpp", materia: "70.99" },
    ],
    creditos: {
      total: 120,
      obligatorias: 112,
      //checkbox: [
        //{
        //  nombre: "Estadía Supervisada de al menos 200 horas",
        //  nombrecorto: "Estadía",
        //  bg: COLORS.habilitadas[50],
        //  color: "habilitadas",
        //},
      //],
      electivas: 8,
    },
  },
  {
    id: "contador",
    link: "http://www.economicas.uba.ar/carreras/contador-publico/",
    graph: data.contador,
    nombre: "Contador Publico",
    nombrecorto: "Contador",
    // "No me decidi":
    finDeCarrera: [
    ],
    creditos: {
      total: 234,
      materias: [
        {
          id: "1358",
          nombrecorto: "pp",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          id: "1361",
          nombrecorto: "pp",
          bg: COLORS.habilitadas[50],
          color: "habilitadas",
        },
        {
          id: "76.90",
          nombrecorto: "tesis",
          bg: COLORS.findecarrera[50],
          color: "findecarrera",
        },
      ],
      obligatorias: 208,
      electivas: 10,
    },
  },
  {
    id: "sistemas",
    link: "http://www.economicas.uba.ar/carreras/sistemas/",
    graph: data.sistemas,
    nombre: "Licenciatura en Sistemas de Información de las Organizaciones",
    nombrecorto: "Sistemas",
    creditos: {
      total: 257,
      obligatorias: 210,
      electivas: 34,
      materias: [
        {
          id: "84.99",
          nombrecorto: "TPP",
          bg: COLORS.findecarrera[50],
          color: "findecarrera",
        },
      ],
      //checkbox: [
      //  {
      //    nombre: "Estadía Supervisada de al menos 200 horas",
      //    nombrecorto: "Estadía",
      //    bg: COLORS.habilitadas[50],
      //    color: "habilitadas",
      //  },
        //{
        //  nombre: "Prueba de nivel de idioma inglés",
        //  nombrecorto: "Inglés",
        //  bg: COLORS.enfinal[50],
        //  color: "enfinal",
        //},
      //],
    },
  },
  {
    id: "actuarioeco",
    link: "http://www.economicas.uba.ar/carreras/actuario/",
    graph: data.actuarioeco,
    nombre: "Actuario - Economía",
    nombrecorto: "Actuario E",
    finDeCarrera: [
      //{ id: "tesis", materia: "85.00" },
      //{ id: "tpp", materia: "85.99" },
    ],
    creditos: {
      total: 132,
      obligatorias: 124,
      checkbox: [
        //{
        //  nombre: "Estadía Supervisada de al menos 200 horas",
        //  nombrecorto: "Estadía",
        //  bg: COLORS.habilitadas[50],
        //  color: "habilitadas",
        //},
        //{
        //  nombre: "Prueba de nivel de idioma inglés",
        //  nombrecorto: "Inglés",
        //  bg: COLORS.enfinal[50],
        //  color: "enfinal",
        //},
      ],
      electivas: 8,
    },
  },
  {
    id: "actuarioadmin",
    link: "http://www.economicas.uba.ar/carreras/actuario/",
    graph: data.actuarioadmin,
    nombre: "Actuario - Administración",
    nombrecorto: "Actuario A",
    //orientaciones: [
    //  { nombre: "Procesamiento de Señales", colorScheme: "orientacion1" },
    //  { nombre: "Automatización y Control", colorScheme: "orientacion2" },
    //  { nombre: "Física Electrónica", colorScheme: "orientacion3" },
    //  { nombre: "Telecomunicaciones", colorScheme: "orientacion4" },
    //  {
    //    nombre: "Sistemas Digitales y Computación",
    //    colorScheme: "orientacion5",
    //  },
    //  { nombre: "Multimedia", colorScheme: "orientacion6" },
    //  { nombre: "Instrumentación Biomédica", colorScheme: "orientacion7" },
    //  { nombre: "Multiples Orientaciones", colorScheme: "orientacion8" },
    //],
    finDeCarrera: [
      //{ id: "tesis", materia: "86.00" },
      //{ id: "tpp", materia: "86.99" },
    ],
    creditos: {
      total: 132,
      obligatorias: 124,
      electivas: 8,
      checkbox: [
        //{
        //  nombre: "Práctica  Profesional",
        //  nombrecorto: "PP",
        //  bg: COLORS.habilitadas[50],
        //  color: "habilitadas",
        //},
        //{
        //  nombre: "Prueba de nivel de idioma inglés",
        //  nombrecorto: "Inglés",
        //  bg: COLORS.enfinal[50],
        //  color: "enfinal",
        //},
      ],
    },
  },
  {
    id: "economia",
    link: "http://www.economicas.uba.ar/carreras/economia/",
    graph: data.economia,
    nombre: "Licenciatura en Economía",
    nombrecorto: "Economía",
    finDeCarrera: [
      // cambie la tesis de 92.00 a 990
      //{ id: "tesis", materia: "990" },
      //{ id: "tpp", materia: "92.99" },
    ],
    creditos: {
      total: 245,
      obligatorias: 196,
      materias: [
        {
          id: "HUM",
          nombrecorto: "Humanística",
          bg: COLORS.orientacion1[50],
          color: "orientacion1",
        },
      ],
      checkbox: [
        //{
        //  nombre: "Práctica Profesional de al menos 200 horas",
        //  nombrecorto: "PP",
        //  bg: COLORS.habilitadas[50],
        //  color: "habilitadas",
        //},
        //{
        //  nombre: "Prueba de nivel de idioma inglés",
        //  nombrecorto: "Inglés",
        //  bg: COLORS.enfinal[50],
        //  color: "enfinal",
        //},
      ],
      electivas: 32,
    },
  },
];

export default CARRERAS;
