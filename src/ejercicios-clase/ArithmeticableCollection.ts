import { Arithmeticable } from "./Arithmeticable";

export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elementos_: T[] = [];

  addArithmeticable(elemento: T) {
    this.elementos_.push(elemento);
  }
  getArithmeticable(posicion: number): T {
    return this.elementos_[posicion];
  }
  getNumberOfArithmeticables(): number {
    return this.elementos_.length;
  }
}
