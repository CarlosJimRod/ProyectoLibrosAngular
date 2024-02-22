export class Editorial {
  id: number;
  name: string;
  fechaCreacion: any;
  emailDirector: string;

  constructor(id: number, name: string, fechaCreacion: any, emailDirector: string) {
    this.id = id;
    this.name = name;
    this.fechaCreacion = fechaCreacion;
    this.emailDirector = emailDirector;
  }
}
