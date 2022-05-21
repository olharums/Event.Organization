import { makeAutoObservable } from "mobx";
import { IData } from "../shared/types/IData";
import { ITaxation } from "../shared/types/ITaxation";

export default class TaxationStore {
  _taxations: ITaxation[] = [];

  constructor() {
    this._taxations = [];
    makeAutoObservable(this);
  }

  setTaxations(taxations: IData<ITaxation>) {
    this._taxations = taxations.rows;
  }

  get taxations() {
    return this._taxations;
  }
}
