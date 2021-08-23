export default class CommonPage {
    projectNavigationBar = () => cy.get('.pr-3 > .sidenav-toggler-inner > :nth-child(1)');
    projectsDropdown = () => cy.get('.active.nav-link');
    createProjectLink = () => cy.contains('Create Project');
}
