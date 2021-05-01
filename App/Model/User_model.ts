import { Model } from "Elucidate/Database/Model";

class User extends Model {
  // Model attributes
  id!: number;
  username!: string;
  email!: string;
  password!: string;

  // Table name
  static tableName = "users";
}

export default User;
