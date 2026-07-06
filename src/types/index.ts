export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  role: 'admin' | 'doctor' | 'patient' | 'staff';
}

export interface Patient {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  address?: string;
  blood_group?: string;
  insurance_id?: string;
  allergies?: string[];
  created_at: string;
  updated_at: string;
}

export interface Doctor {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  specialization: string;
  department?: string;
  qualification?: string;
  experience_years?: number;
  consultation_fee?: number;
  rating?: number;
  is_available: boolean;
  available_days?: string[];
  bio?: string;
}

export interface Appointment {
  id: string;
  patient_id: string;
  doctor_id: string;
  patient_name?: string;
  doctor_name?: string;
  doctor_specialization?: string;
  appointment_date: string;
  time_slot: string;
  status: 'scheduled' | 'confirmed' | 'in_progress' | 'completed' | 'cancelled' | 'no_show';
  type: 'consultation' | 'follow_up' | 'emergency' | 'lab_test' | 'surgery';
  reason?: string;
  notes?: string;
  fee?: number;
  created_at: string;
}

export interface MedicalRecord {
  id: string;
  patient_id: string;
  doctor_id: string;
  doctor_name?: string;
  visit_date: string;
  diagnosis: string;
  symptoms?: string;
  treatment?: string;
  prescriptions?: Prescription[];
  lab_results?: string[];
  notes?: string;
}

export interface Prescription {
  medicine_name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    total: number;
    page: number;
    limit: number;
    total_pages: number;
  };
}
