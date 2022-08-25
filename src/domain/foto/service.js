export class FotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }
  list() {
    return this._resource.query();
  }

  save(foto) {
    return this._resource.save(foto);
  }

  delete(idFoto) {
    return this._resource.delete({ id: idFoto });
  }
}
