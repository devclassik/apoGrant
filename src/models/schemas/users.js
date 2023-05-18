import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    userId: { type: String, required: true },
    email: { type: String, required: false },
    natureOfBuisness: {
      industryType: { type: String, required: false },
      specificBusinessType: { type: String, required: false },
      District: { type: String, required: false },
      stateOfResident: { type: String, required: false },
      BusinessAddress: { type: String, required: false },
    },

    experience: {
      anyPreviousBuisnessExperince: { type: String, required: false },
      tellUSAboutIt: { type: String, required: false },
      howManyYears: { type: String, required: false },
    },

    businessHistory: {
      businessExistenceInYears: { type: String, required: false },
      anyBusinessPerformace: { type: String, required: false },
      averageProfitPerWkMthYr: { type: String, required: false },
    },

    equityAndCapital: {
      amountNeededToStart: { type: String, required: false },
      capitalAtHand: { type: String, required: false },
      totalCapitalNeeded: { type: String, required: false },
    },

    viability: {
      problemToSolve: { type: String, required: false },
      explainHowToSolveProblem: { type: String, required: false },
      readyToLunchToMarket: { type: String, required: false },
      uniqueSolution: { type: String, required: false },
      isUniqueSolutionAlreadyInUse: { type: String, required: false },
      actionInMakingItReady: { type: String, required: false },
    },

    marketBase: {
      anyBuisnessPerformace: { type: String, required: false },
      averageProfitPerWkMthYear: { type: String, required: false },
      projectedNewProfit: { type: String, required: false },
    },

    repayment: {
      easyToRepay: { type: String, required: false },
      durationForFullRepayment: { type: String, required: false },
      howToRefundGrant: { type: String, required: false },
    },
  },
  {
    timestamps: false,
  }
);

userSchema.set("toJSON", {
  transform: function (doc, ret, options) {
    delete ret.__v;
  },
});

userSchema.plugin(mongoosePaginate);

export const user = mongoose.model("userData", userSchema);
