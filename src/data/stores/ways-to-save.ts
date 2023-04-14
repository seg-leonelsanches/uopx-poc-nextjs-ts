import { makeObservable, observable, action } from "mobx"
import { makePersistable } from 'mobx-persist-store';

export class WaysToSaveStore {
    opportunities: String[] = [];
    degree: 'bachelor' | 'associate' | null = null;
    militaryActiveDuty: boolean = false;

    constructor(initialData: any = {opportunities: [], degree: null, militaryActiveDuty: false}) {
        makeObservable(this, {
            opportunities: observable,
            degree: observable,
            militaryActiveDuty: observable,
            addOpportunity: action,
            removeOpportunity: action,
            addDegree: action,
            addMilitaryActiveDuty: action,
        })

        makePersistable(this, { 
            name: 'WaysToSaveStore', 
            properties: ['opportunities', 'degree', 'militaryActiveDuty']
        })
        
        this.opportunities = initialData.opportunities;
        this.degree = initialData.degree;
        this.militaryActiveDuty = initialData.militaryActiveDuty;
    }

    addOpportunity(opportunity: String) {
        this.opportunities.push(opportunity);
    }

    removeOpportunity(opportunity: String) {
        this.opportunities = this.opportunities.filter((o) => o !== opportunity);
    }

    addDegree(degree: 'bachelor' | 'associate' | null) {
        this.degree = degree;
    }

    addMilitaryActiveDuty(militaryActiveDuty: boolean) {
        this.militaryActiveDuty = militaryActiveDuty;
    }
}