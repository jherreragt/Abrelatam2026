export interface ConvocatoriaStatus {
  title: string;
  description: string;
  status: 'proximamente' | 'abierta' | 'cerrada';
  deadline?: string;
}

export interface AgendaDay {
  date: string;
  day: string;
  events: AgendaEvent[];
}

export interface AgendaEvent {
  time: string;
  title: string;
  description?: string;
  location?: string;
  type?: 'keynote' | 'panel' | 'workshop' | 'break' | 'social';
}
