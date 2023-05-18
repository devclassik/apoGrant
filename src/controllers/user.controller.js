import { deleteUserInfoById, getAllUsersData, getOneUserDataByUserId, saveUserInfo, updateUserDataByUserId } from "../models/query/user.query";

const createUserData = async (req, res) => {
  const data = req.body;
  const { userId } = req.headers;
  /**five main sections of questionaire */
  const natureOfBuisness = data.natureOfBuisness;
  const experience = data.experience;
  const businessHistory = data.businessHistory;
  const equityAndCapital = data.equityAndCapital;
  const viability = data.viability;
  const marketBase = data.marketBase;
  const repayment = data.repayment;
  const email = data?.email;

  const userData = {
    userId: userId,
    email: email,
    natureOfBuisness: natureOfBuisness,
    experience: experience,
    businessHistory: businessHistory,
    equityAndCapital: equityAndCapital,
    viability: viability,
    marketBase: marketBase,
    repayment: repayment,
  };

  try {
    await saveUserInfo(userData);

    res.status(200).json({
      status: "success",
      message: "all files verified and ok",
      data: []
    });

  } catch (error) {
    console.log("error message here!", error);
    res.status(400).json({
      status: "error",
      message: "all files verified and ok",
      data: []
    });
  }
};

const updateUserData = async (req, res) => {
  const data = req.body;
  const userId = req.params.userId;

  try {
    await updateUserDataByUserId(userId, data);

    res.status(200).json({
      status: "success",
      message: "User data uodated successfully",
      data: []
    });
    
  } catch (error) {
    console.log("error message here!", error);
    res.status(400).json({
      status: "failed",
      message: "Something went wrong",
      data: []
    });
  }
};

const getAllUserData = async (req, res) => {
  try {
    const resData = await getAllUsersData(userId);

    res.status(200).json({
      status: "success",
      message: "User data updated successfully",
      data: resData
    });
    
  } catch (error) {
    console.log("error message here!", error);
    res.status(400).json({
      status: "failed",
      message: "User does not exist",
      data: []
    });
  }
}
const getUserData = async (req, res) => {
  const userId = req.params.userId;

  try {
    const resData = await getOneUserDataByUserId(userId);

    res.status(200).json({
      status: "success",
      message: "User data updated successfully",
      data: resData
    });
    
  } catch (error) {
    console.log("error message here!", error);
    res.status(400).json({
      status: "failed",
      message: "User does not exist",
      data: []
    });
  }
}

const deleteUserData = async (req, res) => {
  const userId = req.params.userId;

  try {
    await  deleteUserInfoById(userId);

    res.status(200).json({
      status: "success",
      message: "User data deleted successfully",
    });
    
  } catch (error) {
    console.log("error message here!", error);
    res.status(400).json({
      status: "failed",
      message: "Something went wrong",
    });
  }
}

export {createUserData, updateUserData, getUserData, deleteUserData, getAllUserData};
