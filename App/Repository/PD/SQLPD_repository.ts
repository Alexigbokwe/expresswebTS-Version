import IRead from "./IRead";
import IWrite from "./IWrite";

abstract class SQLPD_repository implements IRead, IWrite {
  public readonly _collection: any;
  private columnName: string;
  private order: string;

  constructor(collection: any) {
    this._collection = collection;
    this.columnName = "id";
    this.order = "ASC";
  }
  async getAll(
    sortBy?: { columnName: string; order: string },
    paginate?: { pageNumber: number; dataSize: number },
  ): Promise<object[]> {
    if (sortBy !== undefined) {
      this.columnName = sortBy.columnName;
      this.order = sortBy.order.toUpperCase();
    }

    if (paginate !== undefined) {
      let pageNumber = paginate.pageNumber;
      let dataSize = paginate.dataSize;
      return await this._collection
        .query()
        .orderBy(this.columnName, this.order)
        .page(pageNumber, dataSize)
        .then((result: object) => {
          return result;
        })
        .catch((error: any) => {
          return error;
        });
    } else {
      return await this._collection
        .query()
        .orderBy(this.columnName, this.order)
        .then((result: object) => {
          return result;
        })
        .catch((error: any) => {
          return error;
        });
    }
  }

  async findBy(
    columeName: String,
    item: string | number,
  ): Promise<Array<object> | object> {
    return await this._collection
      .query()
      .where(`${columeName}`, item)
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async findOne(whereArgs: object): Promise<object> {
    return await this._collection
      .query()
      .findOne(whereArgs)
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async findMany(
    columnName: string,
    pointers: (string | number)[],
  ): Promise<Array<object>> {
    return await this._collection
      .query()
      .whereIn(`${columnName}`, pointers)
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async create(item: object): Promise<object> {
    return await this._collection
      .query()
      .insert(item)
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async updateOne(id: number | string, item: object): Promise<object> {
    return await this._collection
      .query()
      .patchAndFetchById(id, item)
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async updateMany(
    columnName: string,
    pointers: (string | number)[],
    item: object,
  ): Promise<boolean> {
    return await this._collection
      .query()
      .whereIn(`${columnName}`, pointers)
      .patch(item)
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async deleteById(id: string | number): Promise<boolean> {
    return await this._collection
      .query()
      .deleteById(id)
      .then((result: boolean) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async deleteWhere(condition: object): Promise<boolean> {
    return await this._collection
      .query()
      .delete()
      .where(condition)
      .then((result: boolean) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async deleteMany(
    columnName: string,
    pointers: (string | number)[],
  ): Promise<boolean> {
    return await this._collection
      .query()
      .delete()
      .whereIn(`${columnName}`, pointers)
      .then((result: boolean) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }
}

export default SQLPD_repository;
