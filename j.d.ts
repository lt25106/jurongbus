interface Busdata {
  services: {
    no: number;
    operator: string;
    next?: Next;
    next2?: Next;
    next3?: Next;
  }[];
}
interface Next {
  destination_code: string;
  duration_ms: number;
  feature: string;
  lat: number;
  lng: number;
  load: string;
  monitored: number;
  origin_code: string;
  time: string; // ISO 8601 format
  type: string;
  visit_number: number;
}