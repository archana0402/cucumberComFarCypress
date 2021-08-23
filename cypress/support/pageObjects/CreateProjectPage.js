export default class CreateProjectPage{
    projectTitleTextBox = () => cy.get('input[placeholder="Project Title"]');
    createProjectClick = () => cy.contains('Create Project');
    projectDescriptionTextBox = () => cy.get('form > :nth-child(2) > .form-control');
    projectTypeSelect = () => cy.get('select').eq(0);
    levelOfAnalysisSelect = () => cy.get('select').eq(1);
    projectCreateButton = () => cy.get('form > .text-center > :nth-child(1)');
}

