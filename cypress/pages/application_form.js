const FIRST_NAME = '[name="first_name"]'
const LAST_NAME = '[name="last_name"]'
const EMAIL = '[name="email"]'
const PASSWORD = '[name="password"]'
const CONFIRM_PASSWORD = '[name="confirm_password"]'
const FILE_FIELD = '[type="file"]'
const SLIDER_THUMB = '[id="slider-thumb"]'
const SUBMIT_BUTTON = '[type="submit"]'

class ApplicationForm {
  enter_first_name (first_name) {
    cy.get(FIRST_NAME).should('be.not.disabled').clear().type(first_name)
  }

  enter_last_name (last_name) {
    cy.get(LAST_NAME).should('be.not.disabled').clear().type(last_name)
  }

  enter_email (email) {
    cy.get(EMAIL).should('be.not.disabled').clear().type(email)
  }

  enter_password (password) {
    cy.get(PASSWORD).should('be.not.disabled').clear().type(password)
  }

  confirm_password (password) {
    cy.get(CONFIRM_PASSWORD).should('be.not.disabled').clear().type(password)
  }

  upload_file (file) {
    cy.get(FILE_FIELD).attachFile(file)
  }

  slide_thumb () {
    cy.drag(SLIDER_THUMB)
  }

  click_submit_button () {
    cy.get(SUBMIT_BUTTON).click()
  }
}

export default ApplicationForm
