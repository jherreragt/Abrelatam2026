
CREATE TABLE IF NOT EXISTS registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  nombre_apellido TEXT NOT NULL,
  correo_electronico TEXT NOT NULL UNIQUE,
  pais TEXT NOT NULL,
  organizacion TEXT NOT NULL,
  cargo TEXT,
  sector TEXT NOT NULL,
  identidad_genero TEXT,
  autoidentificacion_etnica TEXT,
  pueblo_comunidad_grupo TEXT,
  rango_edad TEXT NOT NULL,
  idioma TEXT,
  asistencia_previa TEXT NOT NULL,
  preferencias_alimentacion TEXT NOT NULL,
  alergias_intolerancias TEXT,
  necesidades_accesibilidad TEXT NOT NULL,
  otras_necesidades_accesibilidad TEXT,
  financiamiento TEXT NOT NULL,
  confirmacion_entendimiento BOOLEAN NOT NULL DEFAULT FALSE,
  politica_datos BOOLEAN NOT NULL DEFAULT FALSE
);

ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "insert_registrations" ON registrations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE POLICY "select_registrations" ON registrations FOR SELECT
  TO authenticated USING (true);

CREATE POLICY "update_registrations" ON registrations FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "delete_registrations" ON registrations FOR DELETE
  TO authenticated USING (true);
