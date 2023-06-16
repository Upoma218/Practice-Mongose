import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload:IUser): Promise<IUser> => {

    // creating new user
    const user = await new User(payload);  //User -> class, user -> instance

    await user.save();  //[.save()] -> built in instance methods,
    
    console.log(user.fullName()); //custom instance methods

    return user;
}

export const getUserFromDB = async (): Promise<IUser[]> => {
    const users = await User.find();

    return users;
}

export const getUserByIdFromDB = async(payload:string): Promise<IUser | null> => {
    const user = await User.findOne({id: payload}, {name: 1, role: 1});
    return user;
 }

 export const getAdminUsersFromDB = async() => {

    const admins = await User.getAdminUsers();
    return admins
    /* const user1 = new User(); //static User. */
 }

//  CLass -> Attach -> Method -> Directy call using method
// user = new User
// User.getAdminUsers()