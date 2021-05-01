interface IWrite {
  create(item: object): Promise<object>;

  updateOne(id: number | string, item: object): Promise<object>;

  updateMany(
    columnName: string,
    pointers: Array<number | string>,
    item: object,
  ): Promise<boolean>;

  deleteById(id: number | string): Promise<boolean>;

  deleteWhere(condition: object): Promise<boolean>;

  deleteMany(
    columnName: string,
    pointers: Array<number | string>,
  ): Promise<boolean>;
}

export default IWrite;
