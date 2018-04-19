export class Dish {
    _id: string;
    name: string;
    date: string;
    description: string;
    energyValue: string;
    selected: boolean;
    disabled: boolean;
    showDetails: boolean;

    constructor(data: Object = {}) {
        Object.assign(this, data);
    }
}
