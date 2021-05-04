import { mongoose, Schema, Document } from "Elucidate/Database/NoSQLModel";

export interface UserInterface extends Document {
  username: string;
  email: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model<UserInterface>("User", UserSchema);
export default User;
