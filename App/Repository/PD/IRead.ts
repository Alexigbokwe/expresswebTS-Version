interface IRead {
  getAll(
    sortBy?: {
      columnName: string;
      order: string;
    },
    paginate?: { pageNumber: number; dataSize: number },
  ): Promise<Array<object>>;

  findBy(
    columeName: String,
    item: number | string,
  ): Promise<Array<object> | object>;

  findOne(whereArgs: object): Promise<object>;

  findMany(
    columnName: string,
    pointers: Array<number | string>,
  ): Promise<Array<object>>;
}

export default IRead;
