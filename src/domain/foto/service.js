export class FotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }
  list() {
    return this._resource.query();
  }

  save(foto) {
    const isIdSet = foto._id !== undefined;
    if (isIdSet) {
      return this._resource.update({ id: foto._id }, foto);
    }
    return this._resource.save(foto);
  }

  delete(idFoto) {
    return this._resource.delete({ id: idFoto });
  }

  get(idFoto) {
    const promise = this._resource.get({ id: idFoto });
    const json = promise.then(response => response.json());
    console.log(json);
    return json;
  }
}
