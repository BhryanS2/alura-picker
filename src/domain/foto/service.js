export class FotoService {
  constructor(resource) {
    this._resource = resource("v1/fotos{/id}");
  }
  _resonseError(err, message) {
    console.error(err);
    throw new Error(message);
  }
  list() {
    const promise = this._resource.query();
    const json = promise.then(
      response => response.json(),
      err => {
        this._resonseError(err, "Não foi possível listar as fotos");
      }
    );
    return json;
  }

  save(foto) {
    const isIdSet = foto._id !== undefined;
    if (isIdSet) {
      const promise = this._resource.update({ id: foto._id }, foto);
      return promise.then(null, err => {
        this._resonseError(err, "Não foi possível atualizar a foto");
      });
    }
    const promise = this._resource.save(foto);
    return promise.then(
      res => {
        return res.json();
      },
      err => {
        this._resonseError(err, "Não foi possível salvar a foto");
      }
    );
  }

  delete(idFoto) {
    const promise = this._resource.delete({ id: idFoto });
    return promise.then(null, err => {
      this._resonseError(err, "Não foi possível deletar a foto");
    });
  }

  get(idFoto) {
    const promise = this._resource.get({ id: idFoto });
    const json = promise.then(
      response => response.json(),
      err => {
        this._resonseError(err, "Não foi possível buscar a foto");
      }
    );
    return json;
  }
}
