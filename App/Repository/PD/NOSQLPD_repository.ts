import IRead from "./IRead";
import IWrite from "./IWrite";
import mongoose from "mongoose";

abstract class NOSQLPD_repository implements IRead, IWrite {
  private readonly _collection: any;
  private columnName: string;
  private order: string;
  private sortBy: object;
  private _id: mongoose.Types._ObjectId;

  constructor(collection: any) {
    this._collection = collection;
    this.columnName = "id";
    this.order = "asc";
    this.sortBy = {};
    this._id = new mongoose.Types.ObjectId();
  }
  async getAll(
    sortBy?: { columnName: string; order: string },
    paginate?: { pageNumber: number; dataSize: number },
  ): Promise<object[]> {
    if (sortBy !== undefined) {
      this.columnName = sortBy.columnName;
      this.order = sortBy.order.toLowerCase();
      this.sortBy[`${this.columnName}`] = this.order;
    }

    if (paginate !== undefined) {
      let pageNumber = paginate.pageNumber;
      let dataSize = paginate.dataSize;
      let skipIndex = (pageNumber - 1) * dataSize;
      return await this._collection
        .estimatedDocumentCount()
        .then((count: any) => {
          return this._collection
            .find()
            .sort(this.sortBy)
            .limit(dataSize)
            .skip(skipIndex)
            .exec()
            .then((result: any) => {
              result.push([{ "total document": count }]);
              return result;
            })
            .catch((error: any) => {
              return error;
            });
        });
    } else {
      return await this._collection
        .find()
        .sort(this.sortBy)
        .exec()
        .then((result: object) => {
          console.log("Alex");
          return result;
        })
        .catch((error: any) => {
          return error;
        });
    }
  }

  async findBy(
    columnName: String,
    item: string | number,
  ): Promise<Array<object> | object> {
    let searchQuery: any = {};
    searchQuery[`${columnName}`] = item;
    return await this._collection
      .find(searchQuery)
      .exec()
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async findOne(whereArgs: object): Promise<object> {
    return await this._collection
      .find(whereArgs)
      .exec()
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
    let searchQuery: any = {};
    searchQuery[`${columnName}`] = pointers;
    return await this._collection
      .find(searchQuery)
      .exec()
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async create(item: object): Promise<object> {
    item["_id"] = this._id;
    let data = await new this._collection(item);
    return data
      .save()
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async updateOne(id: number | string, item: object): Promise<object> {
    mongoose.set("useFindAndModify", false);
    return await this._collection
      .findOneAndUpdate({ _id: id }, item, {
        new: true,
      })
      .exec(id, item)
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
    mongoose.set("useFindAndModify", false);
    let searchQuery: any = {};
    searchQuery[`${columnName}`] = { $in: pointers };
    return await this._collection
      .updateMany(item, searchQuery, { multi: true })
      .exec()
      .then((result: object) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async deleteById(id: string | number): Promise<boolean> {
    mongoose.set("useFindAndModify", false);
    return await this._collection
      .findOneAndRemove({ _id: id })
      .exec()
      .then((result: boolean) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }

  async deleteWhere(condition: object): Promise<boolean> {
    mongoose.set("useFindAndModify", false);
    return await this._collection
      .findOneAndRemove(condition)
      .exec()
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
    mongoose.set("useFindAndModify", false);
    let searchQuery: any = {};
    searchQuery[`${columnName}`] = { $in: pointers };
    return await this._collection
      .deleteMany(searchQuery)
      .exec()
      .then((result: boolean) => {
        return result;
      })
      .catch((error: any) => {
        return error;
      });
  }
}

export default NOSQLPD_repository;
