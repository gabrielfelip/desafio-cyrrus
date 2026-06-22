import { Injectable } from '@angular/core';
import { CHILDREN, VACCINES, VACCINATIONS } from '../data/mock-data';

@Injectable({
  providedIn: 'root'
})
export class VaccineService {

  private children = [...CHILDREN];
  private vaccinations = [...VACCINATIONS];

  // 👶 CHILDREN CRUD
  getChildren() {
    return this.children;
  }

  addChild(child: any) {
    child.id = this.children.length + 1;
    this.children.push(child);
  }

  deleteChild(id: number) {
    this.children = this.children.filter(c => c.id !== id);
    this.vaccinations = this.vaccinations.filter(v => v.childId !== id);
  }

  // 💉 VACCINES
  getVaccines() {
    return VACCINES;
  }

  // 💉 VACCINATION CRUD (NOVO)
  getVaccinations() {
    return this.vaccinations;
  }

  addVaccination(vaccination: any) {
    this.vaccinations.push(vaccination);
  }

  updateVaccinationStatus(childId: number, vaccineId: number, applied: boolean, date?: string) {
    const v = this.vaccinations.find(
      x => x.childId === childId && x.vaccineId === vaccineId
    );

    if (v) {
      v.applied = applied;
      if (date) v.applicationDate = date;
    }
  }

  deleteVaccination(childId: number, vaccineId: number) {
    this.vaccinations = this.vaccinations.filter(
      v => !(v.childId === childId && v.vaccineId === vaccineId)
    );
  }

  // helpers
  getVaccinationsByChild(childId: number) {
    return this.vaccinations.filter(v => v.childId === childId);
  }

  getVaccineName(id: number) {
    return VACCINES.find(v => v.id === id)?.name || 'Desconhecida';
  }

  getStatus(v: any) {
    const today = new Date().toISOString().split('T')[0];

    if (v.applied) return 'OK';
    if (v.scheduledDate < today) return 'ATRASADA';
    return 'PENDENTE';
  }

  getDashboardSummary() {

  let pending = 0;
  let late = 0;

  this.vaccinations.forEach(v => {

    const status = this.getStatus(v);

    if (status === 'PENDENTE') pending++;
    if (status === 'ATRASADA') late++;
  });

  return {
    totalChildren: this.children.length,
    pendingVaccines: pending,
    lateVaccines: late
  };
}
}