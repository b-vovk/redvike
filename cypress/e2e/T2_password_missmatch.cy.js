import ApplicationForm from '../pages/application_form'

const application_form = new ApplicationForm()

const first_name = 'Auto'
const last_name = 'Tester'
const email = 'auto_tester@redvike.com'
const password = 'password'
const confirmation_password_missmatch = 'password_missmatch'

const error_message = 'Passwords do not match!'

const file = '/avatar.png'

describe('Application form', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Register as a new user', () => {
    cy.step('Enter user data')
    application_form.enter_first_name(first_name)
    application_form.enter_last_name(last_name)
    application_form.enter_email(email)
    application_form.enter_password(password)
    application_form.confirm_password(confirmation_password_missmatch)

    cy.step('Upload the file')
    application_form.upload_file(file)

    cy.step('Slide thumb')
    application_form.slide_thumb()

    cy.step('Click the Submit button')
    application_form.click_submit_button()

    cy.step('Verify the form is submited sucesfully')
    cy.contains(error_message)
  })
})
