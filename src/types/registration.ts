export interface Registration {
  id: string;
  created_at: string;
  nombre_apellido: string;
  correo_electronico: string;
  pais: string;
  organizacion: string;
  cargo: string | null;
  sector: string;
  identidad_genero: string | null;
  autoidentificacion_etnica: string | null;
  pueblo_comunidad_grupo: string | null;
  rango_edad: string;
  idioma: string | null;
  asistencia_previa: string;
  preferencias_alimentacion: string;
  alergias_intolerancias: string | null;
  necesidades_accesibilidad: string;
  otras_necesidades_accesibilidad: string | null;
  financiamiento: string;
  confirmacion_entendimiento: boolean;
  politica_datos: boolean;
}
