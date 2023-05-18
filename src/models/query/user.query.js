import { user } from "../schemas/users";


export const saveUserInfo = async (userData) => {
    try {
        return await user.create(userData);
    } catch (error) {
        console.log("Student info error", error);
    }
}

export const getAllUserInfo = async () => {
    try {
        return await user.find();
    } catch (error) {
        console.log("Student info error", error);
    }
}

export const getOneUserDataByEmail = async (email) => {
    try {
        return await user.findOne({email: email});
    } catch (error) {
        console.log("Student info error", error);
    }
}

export const getOneUserDataByUserId = async (userId) => {
    try {
        return await user.findOne({userId: userId});
    } catch (error) {
        console.log("Student info error", error);
    }
}


export const updateUserDataByEmail = async (email, dataQuery) => {
    const userInfo = await user.findOne({ email: email});
    if (userInfo) {
        // update the participants
        return await user.updateOne(
            {email: email},
            {$set: dataQuery },
            {new: true}
        );
    }
    else {
        return false;
    }
}


export const updateUserDataByUserId = async (userId, dataQuery) => {
    const userInfo = await user.findOne({ userId: userId});
    if (userInfo) {
        // update the participants
        return await user.updateOne(
            {userId: userId},
            {$set: dataQuery },
            {new: true}
        );
    }
    else {
        return false;
    }
}

export const updateUserDataById = async (id, dataQuery) => {
    const userInfo = await user.findOne({ _id: id});
    if (userInfo) {
        // update the participants
        return await user.updateOne(
            {_id: id},
            {$set: dataQuery },
            {new: true}
        );
    }
    else {
        return false;
    }
}


export const deleteUserInfoByEmail = async () => {
    try {
        return await user.deleteOne({email: email});
    } catch (error) {
        console.log("Student info error", error);
        return false
    }
}

export const deleteUserInfoById = async (_id) => {
    try {
        return await user.deleteOne({_id: _id});
    } catch (error) {
        console.log("Student info error", error);
        return false
    }
}


export const deleteUserInfoByUserId = async (userId) => {
    try {
        return await user.deleteOne({userId: userId});
    } catch (error) {
        console.log("Student info error", error);
        return false
    }
}

