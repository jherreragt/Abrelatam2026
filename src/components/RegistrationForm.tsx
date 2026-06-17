import { useState } from 'react';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useLanguage, type Language } from '../context/LanguageContext';

type FormData = {
  nombre_apellido: string;
  correo_electronico: string;
  pais: string;
  organizacion: string;
  cargo: string;
  sector: string;
  identidad_genero: string;
  autoidentificacion_etnica: string;
  pueblo_comunidad_grupo: string;
  rango_edad: string;
  idioma: string;
  asistencia_previa: string;
  preferencias_alimentacion: string;
  alergias_intolerancias: string;
  necesidades_accesibilidad: string;
  otras_necesidades_accesibilidad: string;
  financiamiento: string;
  confirmacion_entendimiento: boolean;
  politica_datos: boolean;
};

const initial: FormData = {
  nombre_apellido: '', correo_electronico: '', pais: '', organizacion: '', cargo: '',
  sector: '', identidad_genero: '', autoidentificacion_etnica: '', pueblo_comunidad_grupo: '',
  rango_edad: '', idioma: '', asistencia_previa: '', preferencias_alimentacion: '',
  alergias_intolerancias: '', necesidades_accesibilidad: '', otras_necesidades_accesibilidad: '',
  financiamiento: '', confirmacion_entendimiento: false, politica_datos: false,
};

const copy: Record<Language, {
  title: string;
  dateLine: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successText: string;
  errorDuplicate: string;
  errorGeneric: string;
  required: string;
  fields: Record<string, string>;
  sections: Record<string, string>;
  options: Record<string, string[]>;
  optionLabels: Record<string, string>;
  conditionalLabel: string;
  conditionalPlaceholder: string;
  alergiaLabel: string;
  alergiaPlaceholder: string;
  otraAccesibilidadLabel: string;
  otraAccesibilidadPlaceholder: string;
  genderNote: string;
  ethnicNote: string;
  freeEventNote: string;
  confirmNotice: string;
  privacyText: string;
  optional: string;
}> = {
  es: {
    title: 'Formulario de registro',
    dateLine: 'Ciudad de Guatemala — 7 al 9 de octubre, 2026',
    submit: 'REGISTRARSE',
    submitting: 'Enviando...',
    successTitle: '¡Registro completado!',
    successText: 'Gracias por registrarte en ABRELATAM / CONDATOS 2026. Antes del evento te enviaremos un requerimiento de confirmación para asegurar tu inscripción.',
    errorDuplicate: 'Este correo electrónico ya está registrado. Si crees que es un error, escríbenos a abrelatam@idatosabiertos.org.',
    errorGeneric: 'Ocurrió un error al enviar el formulario. Por favor intenta de nuevo.',
    required: 'Este campo es obligatorio',
    sections: {
      personal: 'Datos personales',
      professional: 'Perfil profesional',
      statistical: 'Datos estadísticos',
      experience: 'Experiencia en el evento',
      logistics: 'Logística',
      confirmation: 'Confirmación',
    },
    fields: {
      nombre_apellido: 'Nombre y apellido',
      correo_electronico: 'Correo electrónico',
      pais: 'País',
      organizacion: 'Organización',
      cargo: 'Cargo',
      sector: 'Sector',
      identidad_genero: 'Identidad de género',
      autoidentificacion_etnica: 'Autoidentificación étnica o cultural',
      rango_edad: 'Rango de edad',
      idioma: 'Idioma',
      asistencia_previa: '¿Has asistido previamente a Abrelatam-ConDatos?',
      preferencias_alimentacion: 'Preferencias o restricciones de alimentación',
      necesidades_accesibilidad: 'Necesidades de accesibilidad',
      financiamiento: '¿Cuentas con financiamiento propio para asistir presencialmente a Abrelatam-ConDatos en Ciudad de Guatemala?',
      confirmacion_entendimiento: 'Entiendo',
      politica_datos: 'He leído y entiendo la política de datos',
    },
    genderNote: 'Campo exclusivamente para fines estadísticos, no obligatorio.',
    ethnicNote: 'Campo opcional, con fines estadísticos.',
    freeEventNote: 'El evento es gratuito, sin embargo, cada participante deberá ser responsable de su transporte y estadía (con excepción de quienes reciben una beca del evento).',
    confirmNotice: 'Antes de la conferencia, te enviaremos un requerimiento de confirmación para tu participación en el evento, el cual será necesario que valides para asegurar tu inscripción.',
    privacyText: 'Los datos suministrados quedarán incorporados en la base de datos de ABRELATAM/CONDATOS, la cual será procesada exclusivamente para la siguiente finalidad: comunicaciones sobre los eventos ABRELATAM/CONDATOS. Los datos personales serán tratados con el grado de protección adecuado, tomándose las medidas de seguridad necesarias para evitar su alteración, pérdida, tratamiento o acceso no autorizado por parte de terceros. La institución responsable de la base de datos es ILDA y la dirección donde podrás ejercer los derechos de acceso, rectificación, actualización, inclusión o supresión es Rincón 477 Of. 803, Uruguay.',
    optional: 'Opcional',
    conditionalLabel: '¿A qué pueblo, comunidad o grupo pertenece?',
    conditionalPlaceholder: 'Ej: K\'iche\', Mapuche, Quechua, Garífuna, Aymara...',
    alergiaLabel: '¿Tienes alergias o intolerancias específicas?',
    alergiaPlaceholder: 'Describe tus alergias o intolerancias...',
    otraAccesibilidadLabel: 'Especifica tu necesidad de accesibilidad',
    otraAccesibilidadPlaceholder: 'Describe tu necesidad...',
    options: {
      sector: ['Gobierno', 'Sociedad civil', 'Multilaterales', 'Donantes', 'Academia', 'Sector privado', 'Medios/Prensa', 'Estudiante', 'Otro'],
      identidad_genero: ['Mujer', 'Mujer trans', 'Hombre', 'Hombre trans', 'No binario', 'Prefiero no decirlo'],
      autoidentificacion_etnica: ['Pueblo indígena', 'Afrodescendiente', 'Mestizo/a', 'Blanco/a', 'Otro', 'Prefiero no decirlo'],
      rango_edad: ['18 - 25 años', '26 - 35 años', '36 - 45 años', '46 - 55 años', '56 - 65 años', 'Más de 65 años'],
      idioma: ['Español', 'Inglés', 'Portugués', 'Otro'],
      asistencia_previa: ['No, esta es la primera vez que participo', 'Sí, he asistido a entre 1-3 ediciones', 'Sí, he asistido a entre 4-7 ediciones', 'Sí, he asistido a más de 7 ediciones'],
      preferencias_alimentacion: ['No tengo preferencias ni restricciones alimenticias', 'Sin gluten', 'Vegetariano/a', 'Vegano/a'],
      necesidades_accesibilidad: ['No tengo necesidad de accesibilidad', 'Accesibilidad al medio físico', 'Intérprete de lengua de señas (LSU)', 'Otra'],
      financiamiento: ['Sí, cuento con recursos propios o de mi organización', 'No cuento con recursos financieros propios', 'No estoy seguro/a'],
    },
    optionLabels: {},
  },
  en: {
    title: 'Registration form',
    dateLine: 'Guatemala City — October 7–9, 2026',
    submit: 'REGISTER',
    submitting: 'Sending...',
    successTitle: 'Registration complete!',
    successText: 'Thank you for registering for ABRELATAM / CONDATOS 2026. Before the event, we will send you a confirmation request to secure your registration.',
    errorDuplicate: 'This email address is already registered. If you think this is an error, contact us at abrelatam@idatosabiertos.org.',
    errorGeneric: 'An error occurred while submitting the form. Please try again.',
    required: 'This field is required',
    sections: {
      personal: 'Personal information',
      professional: 'Professional profile',
      statistical: 'Statistical data',
      experience: 'Event experience',
      logistics: 'Logistics',
      confirmation: 'Confirmation',
    },
    fields: {
      nombre_apellido: 'Full name',
      correo_electronico: 'Email address',
      pais: 'Country',
      organizacion: 'Organization',
      cargo: 'Position',
      sector: 'Sector',
      identidad_genero: 'Gender identity',
      autoidentificacion_etnica: 'Ethnic or cultural self-identification',
      rango_edad: 'Age range',
      idioma: 'Language',
      asistencia_previa: 'Have you previously attended Abrelatam-ConDatos?',
      preferencias_alimentacion: 'Dietary preferences or restrictions',
      necesidades_accesibilidad: 'Accessibility needs',
      financiamiento: 'Do you have your own funding to attend Abrelatam-ConDatos in Guatemala City in person?',
      confirmacion_entendimiento: 'I understand',
      politica_datos: 'I have read and understand the data policy',
    },
    genderNote: 'For statistical purposes only, not required.',
    ethnicNote: 'Optional field, for statistical purposes.',
    freeEventNote: 'The event is free, however each participant must be responsible for their transportation and accommodation (except for those who receive a scholarship from the event).',
    confirmNotice: 'Before the conference, we will send you a confirmation request for your participation, which you will need to validate to secure your registration.',
    privacyText: 'The data provided will be incorporated into the ABRELATAM/CONDATOS database, which will be processed exclusively for the following purpose: communications about ABRELATAM/CONDATOS events. Personal data will be handled with the appropriate level of protection, taking the necessary security measures to prevent alteration, loss, processing, or unauthorized access by third parties. The institution responsible for the database is ILDA and the address where you can exercise your rights of access, rectification, update, inclusion, or deletion is Rincón 477 Of. 803, Uruguay.',
    optional: 'Optional',
    conditionalLabel: 'Which people, community, or group do you belong to?',
    conditionalPlaceholder: 'E.g.: K\'iche\', Mapuche, Quechua, Garífuna, Aymara...',
    alergiaLabel: 'Do you have specific allergies or intolerances?',
    alergiaPlaceholder: 'Describe your allergies or intolerances...',
    otraAccesibilidadLabel: 'Specify your accessibility need',
    otraAccesibilidadPlaceholder: 'Describe your need...',
    options: {
      sector: ['Government', 'Civil society', 'Multilaterals', 'Donors', 'Academia', 'Private sector', 'Media/Press', 'Student', 'Other'],
      identidad_genero: ['Woman', 'Trans woman', 'Man', 'Trans man', 'Non-binary', 'Prefer not to say'],
      autoidentificacion_etnica: ['Indigenous people', 'Afro-descendant', 'Mestizo/a', 'White', 'Other', 'Prefer not to say'],
      rango_edad: ['18 - 25 years', '26 - 35 years', '36 - 45 years', '46 - 55 years', '56 - 65 years', 'Over 65 years'],
      idioma: ['Spanish', 'English', 'Portuguese', 'Other'],
      asistencia_previa: ['No, this is my first time', 'Yes, I have attended 1-3 editions', 'Yes, I have attended 4-7 editions', 'Yes, I have attended more than 7 editions'],
      preferencias_alimentacion: ['No preferences or dietary restrictions', 'Gluten-free', 'Vegetarian', 'Vegan'],
      necesidades_accesibilidad: ['No accessibility needs', 'Physical environment accessibility', 'Sign language interpreter (ASL/LSU)', 'Other'],
      financiamiento: ['Yes, I have my own resources or from my organization', 'I do not have my own financial resources', 'I am not sure'],
    },
    optionLabels: {},
  },
  pt: {
    title: 'Formulário de registro',
    dateLine: 'Cidade da Guatemala — 7 a 9 de outubro de 2026',
    submit: 'REGISTRAR-SE',
    submitting: 'Enviando...',
    successTitle: 'Registro concluído!',
    successText: 'Obrigado por se registrar no ABRELATAM / CONDATOS 2026. Antes do evento, enviaremos uma solicitação de confirmação para garantir sua inscrição.',
    errorDuplicate: 'Este endereço de e-mail já está registrado. Se achar que é um erro, entre em contato conosco em abrelatam@idatosabiertos.org.',
    errorGeneric: 'Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.',
    required: 'Este campo é obrigatório',
    sections: {
      personal: 'Dados pessoais',
      professional: 'Perfil profissional',
      statistical: 'Dados estatísticos',
      experience: 'Experiência no evento',
      logistics: 'Logística',
      confirmation: 'Confirmação',
    },
    fields: {
      nombre_apellido: 'Nome e sobrenome',
      correo_electronico: 'Endereço de e-mail',
      pais: 'País',
      organizacion: 'Organização',
      cargo: 'Cargo',
      sector: 'Setor',
      identidad_genero: 'Identidade de gênero',
      autoidentificacion_etnica: 'Autoidentificação étnica ou cultural',
      rango_edad: 'Faixa etária',
      idioma: 'Idioma',
      asistencia_previa: 'Você já participou do Abrelatam-ConDatos anteriormente?',
      preferencias_alimentacion: 'Preferências ou restrições alimentares',
      necesidades_accesibilidad: 'Necessidades de acessibilidade',
      financiamiento: 'Você tem financiamento próprio para participar presencialmente do Abrelatam-ConDatos na Cidade da Guatemala?',
      confirmacion_entendimiento: 'Entendo',
      politica_datos: 'Li e compreendo a política de dados',
    },
    genderNote: 'Campo exclusivamente para fins estatísticos, não obrigatório.',
    ethnicNote: 'Campo opcional, para fins estatísticos.',
    freeEventNote: 'O evento é gratuito, porém cada participante deverá ser responsável por seu transporte e hospedagem (exceto para quem recebe uma bolsa do evento).',
    confirmNotice: 'Antes da conferência, enviaremos uma solicitação de confirmação para sua participação no evento, que você precisará validar para garantir sua inscrição.',
    privacyText: 'Os dados fornecidos serão incorporados ao banco de dados da ABRELATAM/CONDATOS, que será processado exclusivamente para a seguinte finalidade: comunicações sobre os eventos ABRELATAM/CONDATOS. Os dados pessoais serão tratados com o grau de proteção adequado, tomando as medidas de segurança necessárias para evitar sua alteração, perda, tratamento ou acesso não autorizado por terceiros. A instituição responsável pelo banco de dados é a ILDA e o endereço onde você pode exercer seus direitos de acesso, retificação, atualização, inclusão ou exclusão é Rincón 477 Of. 803, Uruguai.',
    optional: 'Opcional',
    conditionalLabel: 'A qual povo, comunidade ou grupo você pertence?',
    conditionalPlaceholder: 'Ex: K\'iche\', Mapuche, Quechua, Garífuna, Aymara...',
    alergiaLabel: 'Você tem alergias ou intolerâncias específicas?',
    alergiaPlaceholder: 'Descreva suas alergias ou intolerâncias...',
    otraAccesibilidadLabel: 'Especifique sua necessidade de acessibilidade',
    otraAccesibilidadPlaceholder: 'Descreva sua necessidade...',
    options: {
      sector: ['Governo', 'Sociedade civil', 'Multilaterais', 'Doadores', 'Academia', 'Setor privado', 'Mídia/Imprensa', 'Estudante', 'Outro'],
      identidad_genero: ['Mulher', 'Mulher trans', 'Homem', 'Homem trans', 'Não-binário', 'Prefiro não dizer'],
      autoidentificacion_etnica: ['Povo indígena', 'Afrodescendente', 'Mestiço/a', 'Branco/a', 'Outro', 'Prefiro não dizer'],
      rango_edad: ['18 - 25 anos', '26 - 35 anos', '36 - 45 anos', '46 - 55 anos', '56 - 65 anos', 'Mais de 65 anos'],
      idioma: ['Espanhol', 'Inglês', 'Português', 'Outro'],
      asistencia_previa: ['Não, esta é a primeira vez que participo', 'Sim, participei de 1 a 3 edições', 'Sim, participei de 4 a 7 edições', 'Sim, participei de mais de 7 edições'],
      preferencias_alimentacion: ['Sem preferências ou restrições alimentares', 'Sem glúten', 'Vegetariano/a', 'Vegano/a'],
      necesidades_accesibilidad: ['Sem necessidades de acessibilidade', 'Acessibilidade ao meio físico', 'Intérprete de língua de sinais (Libras)', 'Outra'],
      financiamiento: ['Sim, tenho recursos próprios ou da minha organização', 'Não tenho recursos financeiros próprios', 'Não tenho certeza'],
    },
    optionLabels: {},
  },
};

const INDIGENOUS_VALUES: Record<Language, string[]> = {
  es: ['Pueblo indígena', 'Afrodescendiente'],
  en: ['Indigenous people', 'Afro-descendant'],
  pt: ['Povo indígena', 'Afrodescendente'],
};

const OTHER_ACCESSIBILITY: Record<Language, string> = {
  es: 'Otra',
  en: 'Other',
  pt: 'Outra',
};

function FieldLabel({ label, required, note, optional }: { label: string; required?: boolean; note?: string; optional?: string }) {
  return (
    <div className="mb-2">
      <label className="block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="ml-1 text-[#329bd0]">*</span>}
        {!required && optional && <span className="ml-2 text-xs font-normal text-slate-400">({optional})</span>}
      </label>
      {note && <p className="mt-0.5 text-xs text-slate-500">{note}</p>}
    </div>
  );
}

function RadioGroup({ options, value, onChange, name }: { options: string[]; value: string; onChange: (v: string) => void; name: string }) {
  return (
    <div className="flex flex-col gap-2">
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`flex items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-all ${
            value === opt
              ? 'border-[#329bd0] bg-[#329bd0]/5 text-[#262262] font-medium'
              : 'border-slate-200 bg-white text-slate-700 hover:border-[#329bd0]/50'
          }`}
          role="radio"
          aria-checked={value === opt}
          name={name}
        >
          <span className={`flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full border-2 ${
            value === opt ? 'border-[#329bd0]' : 'border-slate-300'
          }`}>
            {value === opt && <span className="h-2 w-2 rounded-full bg-[#329bd0]" />}
          </span>
          {opt}
        </button>
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mb-6 text-base font-bold uppercase tracking-wider text-[#262262] after:mt-2 after:block after:h-0.5 after:w-10 after:bg-[#329bd0] after:content-['']">
      {children}
    </h3>
  );
}

function TextInput({ value, onChange, placeholder, type = 'text', required }: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string; required?: boolean;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-[#329bd0] focus:ring-2 focus:ring-[#329bd0]/20"
    />
  );
}

function TextArea({ value, onChange, placeholder }: { value: string; onChange: (v: string) => void; placeholder?: string }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      rows={2}
      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-800 placeholder-slate-400 outline-none transition focus:border-[#329bd0] focus:ring-2 focus:ring-[#329bd0]/20"
    />
  );
}

export default function RegistrationForm() {
  const { language } = useLanguage();
  const t = copy[language];
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const set = (field: keyof FormData) => (value: string | boolean) =>
    setForm(prev => ({ ...prev, [field]: value }));

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    const req = t.required;

    const requiredTextFields: (keyof FormData)[] = [
      'nombre_apellido', 'correo_electronico', 'pais', 'organizacion',
    ];
    requiredTextFields.forEach(f => {
      if (!form[f]) newErrors[f] = req;
    });

    if (form.correo_electronico && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo_electronico)) {
      newErrors.correo_electronico = language === 'es' ? 'Correo inválido' : language === 'en' ? 'Invalid email' : 'E-mail inválido';
    }

    const requiredRadioFields: (keyof FormData)[] = [
      'sector', 'rango_edad', 'asistencia_previa',
      'preferencias_alimentacion', 'necesidades_accesibilidad', 'financiamiento',
    ];
    requiredRadioFields.forEach(f => {
      if (!form[f]) newErrors[f] = req;
    });

    if (!form.confirmacion_entendimiento) newErrors.confirmacion_entendimiento = req;
    if (!form.politica_datos) newErrors.politica_datos = req;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      const firstError = document.querySelector('[data-error]');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setStatus('submitting');

    const { error } = await supabase.from('registrations').insert([{
      nombre_apellido: form.nombre_apellido,
      correo_electronico: form.correo_electronico.toLowerCase().trim(),
      pais: form.pais,
      organizacion: form.organizacion,
      cargo: form.cargo || null,
      sector: form.sector,
      identidad_genero: form.identidad_genero || null,
      autoidentificacion_etnica: form.autoidentificacion_etnica || null,
      pueblo_comunidad_grupo: form.pueblo_comunidad_grupo || null,
      rango_edad: form.rango_edad,
      idioma: form.idioma || null,
      asistencia_previa: form.asistencia_previa,
      preferencias_alimentacion: form.preferencias_alimentacion,
      alergias_intolerancias: form.alergias_intolerancias || null,
      necesidades_accesibilidad: form.necesidades_accesibilidad,
      otras_necesidades_accesibilidad: form.otras_necesidades_accesibilidad || null,
      financiamiento: form.financiamiento,
      confirmacion_entendimiento: form.confirmacion_entendimiento,
      politica_datos: form.politica_datos,
    }]);

    if (error) {
      setStatus('error');
      setErrorMsg(
        error.code === '23505' ? t.errorDuplicate : t.errorGeneric
      );
    } else {
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-2xl text-center py-16">
        <div className="flex justify-center mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#329bd0]/10">
            <CheckCircle2 size={40} className="text-[#329bd0]" />
          </div>
        </div>
        <h2 className="mb-4 text-2xl font-bold text-[#262262]">{t.successTitle}</h2>
        <p className="text-slate-600 leading-relaxed">{t.successText}</p>
      </div>
    );
  }

  const showConditionalEtnia = INDIGENOUS_VALUES[language].includes(form.autoidentificacion_etnica);
  const showOtraAccesibilidad = form.necesidades_accesibilidad === OTHER_ACCESSIBILITY[language];

  return (
    <form onSubmit={handleSubmit} noValidate className="mx-auto max-w-2xl">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-[#262262] md:text-3xl">{t.title}</h2>
        <p className="mt-2 text-sm text-slate-500">{t.dateLine}</p>
      </div>

      <div className="space-y-8">

        {/* Personal */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle>{t.sections.personal}</SectionTitle>
          <div className="space-y-5">
            <div data-error={errors.nombre_apellido ? true : undefined}>
              <FieldLabel label={t.fields.nombre_apellido} required />
              <TextInput value={form.nombre_apellido} onChange={set('nombre_apellido')} required />
              {errors.nombre_apellido && <p className="mt-1 text-xs text-red-500">{errors.nombre_apellido}</p>}
            </div>

            <div data-error={errors.correo_electronico ? true : undefined}>
              <FieldLabel label={t.fields.correo_electronico} required />
              <TextInput value={form.correo_electronico} onChange={set('correo_electronico')} type="email" required />
              {errors.correo_electronico && <p className="mt-1 text-xs text-red-500">{errors.correo_electronico}</p>}
            </div>

            <div data-error={errors.pais ? true : undefined}>
              <FieldLabel label={t.fields.pais} required />
              <TextInput value={form.pais} onChange={set('pais')} required />
              {errors.pais && <p className="mt-1 text-xs text-red-500">{errors.pais}</p>}
            </div>

            <div data-error={errors.organizacion ? true : undefined}>
              <FieldLabel label={t.fields.organizacion} required />
              <TextInput value={form.organizacion} onChange={set('organizacion')} required />
              {errors.organizacion && <p className="mt-1 text-xs text-red-500">{errors.organizacion}</p>}
            </div>

            <div>
              <FieldLabel label={t.fields.cargo} optional={t.optional} />
              <TextInput value={form.cargo} onChange={set('cargo')} />
            </div>
          </div>
        </div>

        {/* Professional */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle>{t.sections.professional}</SectionTitle>
          <div data-error={errors.sector ? true : undefined}>
            <FieldLabel label={t.fields.sector} required />
            <RadioGroup options={t.options.sector} value={form.sector} onChange={set('sector')} name="sector" />
            {errors.sector && <p className="mt-2 text-xs text-red-500">{errors.sector}</p>}
          </div>
        </div>

        {/* Statistical */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle>{t.sections.statistical}</SectionTitle>
          <div className="space-y-7">
            <div>
              <FieldLabel label={t.fields.identidad_genero} note={t.genderNote} optional={t.optional} />
              <RadioGroup options={t.options.identidad_genero} value={form.identidad_genero} onChange={set('identidad_genero')} name="identidad_genero" />
            </div>

            <div>
              <FieldLabel label={t.fields.autoidentificacion_etnica} note={t.ethnicNote} optional={t.optional} />
              <RadioGroup options={t.options.autoidentificacion_etnica} value={form.autoidentificacion_etnica} onChange={set('autoidentificacion_etnica')} name="autoidentificacion_etnica" />
              {showConditionalEtnia && (
                <div className="mt-4 rounded-lg bg-slate-50 p-4">
                  <FieldLabel label={t.conditionalLabel} optional={t.optional} />
                  <TextArea value={form.pueblo_comunidad_grupo} onChange={set('pueblo_comunidad_grupo')} placeholder={t.conditionalPlaceholder} />
                </div>
              )}
            </div>

            <div data-error={errors.rango_edad ? true : undefined}>
              <FieldLabel label={t.fields.rango_edad} required />
              <RadioGroup options={t.options.rango_edad} value={form.rango_edad} onChange={set('rango_edad')} name="rango_edad" />
              {errors.rango_edad && <p className="mt-2 text-xs text-red-500">{errors.rango_edad}</p>}
            </div>

            <div>
              <FieldLabel label={t.fields.idioma} optional={t.optional} />
              <RadioGroup options={t.options.idioma} value={form.idioma} onChange={set('idioma')} name="idioma" />
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle>{t.sections.experience}</SectionTitle>
          <div data-error={errors.asistencia_previa ? true : undefined}>
            <FieldLabel label={t.fields.asistencia_previa} required />
            <RadioGroup options={t.options.asistencia_previa} value={form.asistencia_previa} onChange={set('asistencia_previa')} name="asistencia_previa" />
            {errors.asistencia_previa && <p className="mt-2 text-xs text-red-500">{errors.asistencia_previa}</p>}
          </div>
        </div>

        {/* Logistics */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle>{t.sections.logistics}</SectionTitle>
          <div className="space-y-7">
            <div data-error={errors.preferencias_alimentacion ? true : undefined}>
              <FieldLabel label={t.fields.preferencias_alimentacion} required />
              <RadioGroup options={t.options.preferencias_alimentacion} value={form.preferencias_alimentacion} onChange={set('preferencias_alimentacion')} name="preferencias_alimentacion" />
              {errors.preferencias_alimentacion && <p className="mt-2 text-xs text-red-500">{errors.preferencias_alimentacion}</p>}
              <div className="mt-4">
                <FieldLabel label={t.alergiaLabel} optional={t.optional} />
                <TextArea value={form.alergias_intolerancias} onChange={set('alergias_intolerancias')} placeholder={t.alergiaPlaceholder} />
              </div>
            </div>

            <div data-error={errors.necesidades_accesibilidad ? true : undefined}>
              <FieldLabel label={t.fields.necesidades_accesibilidad} required />
              <RadioGroup options={t.options.necesidades_accesibilidad} value={form.necesidades_accesibilidad} onChange={set('necesidades_accesibilidad')} name="necesidades_accesibilidad" />
              {errors.necesidades_accesibilidad && <p className="mt-2 text-xs text-red-500">{errors.necesidades_accesibilidad}</p>}
              {showOtraAccesibilidad && (
                <div className="mt-4 rounded-lg bg-slate-50 p-4">
                  <FieldLabel label={t.otraAccesibilidadLabel} optional={t.optional} />
                  <TextArea value={form.otras_necesidades_accesibilidad} onChange={set('otras_necesidades_accesibilidad')} placeholder={t.otraAccesibilidadPlaceholder} />
                </div>
              )}
            </div>

            <div className="rounded-lg bg-[#329bd0]/5 border border-[#329bd0]/20 px-5 py-4">
              <p className="text-sm text-slate-700 leading-relaxed">{t.freeEventNote}</p>
            </div>

            <div data-error={errors.financiamiento ? true : undefined}>
              <FieldLabel label={t.fields.financiamiento} required />
              <RadioGroup options={t.options.financiamiento} value={form.financiamiento} onChange={set('financiamiento')} name="financiamiento" />
              {errors.financiamiento && <p className="mt-2 text-xs text-red-500">{errors.financiamiento}</p>}
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div className="rounded-2xl border border-slate-100 bg-white p-6 md:p-8 shadow-sm">
          <SectionTitle>{t.sections.confirmation}</SectionTitle>
          <div className="space-y-5">
            <div className="rounded-lg bg-slate-50 px-5 py-4">
              <p className="text-sm text-slate-700 leading-relaxed">{t.confirmNotice}</p>
            </div>

            <div data-error={errors.confirmacion_entendimiento ? true : undefined}>
              <button
                type="button"
                onClick={() => set('confirmacion_entendimiento')(!form.confirmacion_entendimiento)}
                className="flex items-start gap-3 text-left"
              >
                <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  form.confirmacion_entendimiento ? 'border-[#329bd0] bg-[#329bd0]' : 'border-slate-300 bg-white'
                }`}>
                  {form.confirmacion_entendimiento && (
                    <svg viewBox="0 0 12 10" className="h-3 w-3 fill-none stroke-white stroke-2">
                      <polyline points="1,5 4,8 11,1" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-slate-800 font-medium">{t.fields.confirmacion_entendimiento} <span className="text-[#329bd0]">*</span></span>
              </button>
              {errors.confirmacion_entendimiento && <p className="mt-1 ml-8 text-xs text-red-500">{errors.confirmacion_entendimiento}</p>}
            </div>

            <div className="rounded-lg bg-slate-50 px-5 py-4">
              <p className="text-xs text-slate-600 leading-relaxed">{t.privacyText}</p>
            </div>

            <div data-error={errors.politica_datos ? true : undefined}>
              <button
                type="button"
                onClick={() => set('politica_datos')(!form.politica_datos)}
                className="flex items-start gap-3 text-left"
              >
                <span className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  form.politica_datos ? 'border-[#329bd0] bg-[#329bd0]' : 'border-slate-300 bg-white'
                }`}>
                  {form.politica_datos && (
                    <svg viewBox="0 0 12 10" className="h-3 w-3 fill-none stroke-white stroke-2">
                      <polyline points="1,5 4,8 11,1" />
                    </svg>
                  )}
                </span>
                <span className="text-sm text-slate-800 font-medium">{t.fields.politica_datos} <span className="text-[#329bd0]">*</span></span>
              </button>
              {errors.politica_datos && <p className="mt-1 ml-8 text-xs text-red-500">{errors.politica_datos}</p>}
            </div>
          </div>
        </div>

        {status === 'error' && (
          <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
            <AlertCircle size={18} className="mt-0.5 flex-shrink-0 text-red-500" />
            <p className="text-sm text-red-700">{errorMsg}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full rounded-xl bg-[#329bd0] py-4 text-sm font-bold tracking-widest text-white shadow-md transition hover:bg-[#2789b8] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'submitting' ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 size={16} className="animate-spin" />
              {t.submitting}
            </span>
          ) : t.submit}
        </button>
      </div>
    </form>
  );
}
