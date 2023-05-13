export const dataValidator = (req, res, next) => {
    const data = req.body;
    const { userId } = req.headers;
    /**five main sections of questionaire */
    const natureOfBuisness = data.natureOfBuisness;
    const experience       = data.experience;
    const businessHistory  = data.businessHistory;
    const equityAndCapital = data.equityAndCapital;
    const viability        = data.viability;
    const marketBase       = data.marketBase;
    const repayment        = data.repayment
  
    console.log('userdata', data, 'userId', userId);
  
    if (natureOfBuisness.industryType === null || natureOfBuisness.industryType === ' ' || natureOfBuisness.industryType == undefined) {
  
      res.status(400).json({
        "message": "nature of business; industry type missing"
  
      });
    } else if (natureOfBuisness.specificBusinessType === null || natureOfBuisness.specificBusinessType === ' ' || natureOfBuisness.specificBusinessType == undefined) {
      res.status(400).json({
        "message": "nature of business; specific business type missing"
  
      });
      
    } else if (natureOfBuisness.District === null || natureOfBuisness.District === ' ' || natureOfBuisness.District == undefined) {
      res.status(400).json({
        "message": "nature of business; District missing"
  
      });
      
    }else if (natureOfBuisness.stateOfResident === null || natureOfBuisness.stateOfResident === ' ' || natureOfBuisness.stateOfResident == undefined) {
      res.status(400).json({
        "message": "nature of business; state of resident missing"
  
      });
      
    }else if (natureOfBuisness.BusinessAddress === null || natureOfBuisness.BusinessAddress === ' ' || natureOfBuisness.BusinessAddress == undefined) {
      res.status(400).json({
        "message": "nature of business; Business address missing"
  
      });
      
    }else if (experience.anyPreviousBuisnessExperince === null || experience.anyPreviousBuisnessExperince === ' ' || experience.anyPreviousBuisnessExperince == undefined) {
      res.status(400).json({
        "message": "experience; any previous business experience missing"
  
      });
      
    }else if (experience.tellUSAboutIt === null || experience.tellUSAboutIt === ' ' || experience.tellUSAboutIt == undefined) {
      res.status(400).json({
        "message": "experience; tell us about it missing"
  
      });
      
    }else if (experience.howManyYears === null || experience.howManyYears === ' ' || experience.howManyYears == undefined) {
      res.status(400).json({
        "message": "experience; how many years missing"
  
      });
      
    }else if (businessHistory.businessExistenceInYears === null || businessHistory.businessExistenceInYears === ' ' || businessHistory.businessExistenceInYears == undefined) {
      res.status(400).json({
        "message": "business History; business existence in years missing"
  
      });
      
    }else if (businessHistory.anyBusinessPerformace === null || businessHistory.anyBusinessPerformace === ' ' || businessHistory.anyBusinessPerformace == undefined) {
      res.status(400).json({
        "message": "business History; any business performance missing"
  
      });
      
    }else if (businessHistory.averageProfitPerWkMthYr === null || businessHistory.averageProfitPerWkMthYr === ' ' || businessHistory.averageProfitPerWkMthYr == undefined) {
      res.status(400).json({
        "message": "business History; average profit per Week month year missing"
  
      });
      
    }else if (equityAndCapital.amountNeededToStart === null || equityAndCapital.amountNeededToStart === ' ' || equityAndCapital.amountNeededToStart == undefined) {
      res.status(400).json({
        "message": "equity and capital; amount needed to start missing"
  
      });
      
    }else if (equityAndCapital.capitalAtHand === null || equityAndCapital.capitalAtHand === ' ' || equityAndCapital.capitalAtHand == undefined) {
      res.status(400).json({
        "message": "equity and capital; capital at hand missing"
  
      });
      
    }else if (equityAndCapital.totalCapitalNeeded === null || equityAndCapital.totalCapitalNeeded === ' ' || equityAndCapital.totalCapitalNeeded == undefined) {
      res.status(400).json({
        "message": "equity and capital; total capital needed missing"
  
      });
      
    }else if (viability.problemToSolve === null || viability.problemToSolve === ' ' || viability.problemToSolve == undefined) {
      res.status(400).json({
        "message": "viability; problem to solve missing"
  
      });
      
    }else if (viability.explainHowToSolveProblem === null || viability.explainHowToSolveProblem === ' ' || viability.explainHowToSolveProblem == undefined) {
      res.status(400).json({
        "message": "viability; explain how to solve problem missing"
  
      });
      
    }else if (viability.readyToLunchToMarket === null || viability.readyToLunchToMarket === ' ' || viability.readyToLunchToMarket == undefined) {
      res.status(400).json({
        "message": "viability; ready to lunch to market missing"
  
      });
      
    }else if (viability.uniqueSolution === null || viability.uniqueSolution === ' ' || viability.uniqueSolution == undefined) {
      res.status(400).json({
        "message": "viability; unique solution missing"
  
      });
      
    }else if (viability.isUniqueSolutionAlreadyInUse === null || viability.isUniqueSolutionAlreadyInUse === ' ' || viability.isUniqueSolutionAlreadyInUse == undefined) {
      res.status(400).json({
        "message": "viability; is unique solution already in use missing"
  
      });
      
    }else if (viability.actionInMakingItReady === null || viability.actionInMakingItReady === ' ' || viability.actionInMakingItReady == undefined) {
      res.status(400).json({
        "message": "viability; action in making it ready missing"
  
      });
      
    }else if (marketBase.anyBuisnessPerformace === null || marketBase.anyBuisnessPerformace === ' ' || marketBase.anyBuisnessPerformace == undefined) {
      res.status(400).json({
        "message": "market Base; any business performance missing"
  
      });
      
    }else if (marketBase.averageProfitPerWkMthYear === null || marketBase.averageProfitPerWkMthYear === ' ' || marketBase.averageProfitPerWkMthYear == undefined) {
      res.status(400).json({
        "message": "market Base; average profit per week month year missing"
  
      });
      
    }else if (marketBase.projectedNewProfit === null || marketBase.projectedNewProfit === ' ' || marketBase.projectedNewProfit == undefined) {
      res.status(400).json({
        "message": "market Base; projected new profit missing"
  
      });
      
    }else if (repayment.easyToRepay === null || repayment.easyToRepay === ' ' || repayment.easyToRepay == undefined) {
      res.status(400).json({
        "message": "repayment; easy to repay missing"
  
      });
      
    }else if (repayment.durationForFullRepayment === null || repayment.durationForFullRepayment === ' ' || repayment.durationForFullRepayment == undefined) {
      res.status(400).json({
        "message": "repayment; duration for full repayment missing"
  
      });
      
    }else if (repayment.howToRefundGrant === null || repayment.howToRefundGrant === ' ' || repayment.howToRefundGrant == undefined) {
      res.status(400).json({
        "message": "repayment; how to refund grant missing"
  
      });
      
    }else {
    //   res.status(200).json({
    //     "message": "all files verified and ok" 
    //   });
    next();
    }
}