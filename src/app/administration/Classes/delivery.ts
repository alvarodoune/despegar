export class Delivery {

  constructor(public name: string = "",
              public descripcion: string = "",
              public especialidades: string = "",
              public direccion: string = "",
              public horarioDesde: number = 9,
              public horarioHasta: number = 18,
              public telefono: number = null,
              public caNombre: string = "",
              public caApellido: string = "",
              public caTelefono: number = null,
              public caEmail: string = "",
              public ccNombre: string = "",
              public ccApellido: string = "",
              public ccTelefono: number = null,
              public ccEmail: string = "",
              public idemCa: boolean = false) {
  }

}
