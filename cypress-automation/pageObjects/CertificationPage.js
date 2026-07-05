class CertificationPage {
  addCertification(name, expiry) {
    cy.get('#certName').type(name);
    cy.get('#expiryDate').type(expiry);
    cy.get('#saveCertBtn').click();
  }
}
export default new CertificationPage();
