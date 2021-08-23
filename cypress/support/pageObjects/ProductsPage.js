class ProductsPage {
    productClick = () => cy.get(':nth-child(5) > .MuiButtonBase-root');
    addProductButton = () => cy.get('#btnaddproduct');
    productNameTextBox = () => cy.get('#txtproductname');
    nominalCapacityTextBox = () => cy.get('#numnominalcapacity');
    actualStartDateOfProductionCalendar = () => cy.get('#dtstartdateproduction');
    actualEndDateOfProductionCalendar = () => cy.get('#dtendofproduction');
    unitofMeasurementSelect = () => cy.get('select');
    saveProductDetailsButton = () => cy.get('#btnsubmitproductdetails');
 
}
export default ProductsPage;