
const createUserData = (req, res) => {
  const data = req.body;
  // const { userId } = req.headers;
  // /**five main sections of questionaire */
  // const natureOfBuisness = data.natureOfBuisness;
  // const experience       = data.experience;
  // const businessHistory  = data.businessHistory;
  // const equityAndCapital = data.equityAndCapital;
  // const viability        = data.viability;
  // const marketBase       = data.marketBase;
  // const repayment        = data.repayment

  try {
    console.log('userdata', data);
    res.status(200).json({
      "message": "all files verified and ok"
    });

  } catch (error) {
    console.log('error message here!', error);
    res.status(400).json({
      "message": "all files verified and ok"
    });

  }


}

export default createUserData;
// natureOfBuisness{
//   industryType
//   specificBusinessType
//   District
//   stateOfResident
//   BusinessAddress
// }

// experience{
// anyPreviousBuisnessExperince
// tellUSAboutIt
// howManyYears
// }

// businessHistory : {
//   businessExistenceInYears
//   anyBusinessPerformace
//   averageProfitPerWkMthYr
// }

// equityAndCapital : {
//   amountNeededToStart
//   capitalAtHand
//   totalCapitalNeeded
// }

// viability : {
//   problemToSolve
//   explainHowToSolveProblem
//   readyToLunchToMarket
//   uniqueSolution
//   isUniqueSolutionAlreadyInUSe
//   actionInMakingItReady
// }

// marketBase : {
//   anyBuisnessPerformace
//   averageProfitPerWkMthYear
//   projectedNewProfit
// }

// repayment : {
//   easyToRepay
//   durationForFullRepayment
//   howToRefundGrant
// }