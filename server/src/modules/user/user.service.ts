import { User } from "./user.interface";
import UserCollection from "./user.model";
import { ObjectId } from "mongodb";

export class UserService {
  async register(
    displayName: string,
    email: string,
    avatar: string,
    uid: string
  ) {
    const userExisted = await UserCollection.findOne({ uid });

    if (userExisted) return userExisted;

    const user: User = {
      displayName,
      email,
      avatar,
      createdAt: new Date(),
      updatedAt: null,
      uid,
    };
    const { insertedId } = await UserCollection.insertOne(user);
    return UserCollection.findOne({
      _id: new ObjectId(insertedId),
    });
  }

  async getOneByUID(uid: string) {
    const userExisted = await UserCollection.findOne({ uid });

    if (!userExisted) return Error("User not found");

    return userExisted;
  }
}
