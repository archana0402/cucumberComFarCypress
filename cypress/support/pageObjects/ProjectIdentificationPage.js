class ProjectIdentificationPage{

    projectClassficationNewProjectRadio = () => cy.get('#customRadio1');
    projectClassficationRehabiliationRadio = () => cy.get('#customRadio2'); 
    isCleanDevelopmentCheckBox = () => cy.get('#customCheck6');
    depthOfAnalysisFinancialCheckBox = () => cy.get('input[name="isFinancialCheckBox"]');
    depthOfAnalysisEconomicCheckBox = () => cy.get('input[name="isEconomicCheckBox"]');
    specialFeaturesCostCenterAnalysisCheckBox = () => cy.get('#customCheck1');
    specialFeaturesCostAllocationCheckBox = () => cy.get('#customCheck2');
    specialFeaturesInflationCheckBox = () => cy.get('#customCheck3');
    specialFeaturesRevaluationOfFixedAssetsCheckBox = () => cy.get('#customCheck4');
    projectStartDateCalendar = () => cy.get('input[type="date"]');
    saveDetailsButton = () => cy.get('#btnsubmitprojectdetails');
    
}
export default ProjectIdentificationPage;
