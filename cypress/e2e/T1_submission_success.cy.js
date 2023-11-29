import ApplicationForm from '../pages/application_form'
import SuccessPage from '../pages/success'

const application_form = new ApplicationForm()
const success_page = new SuccessPage()

const first_name = 'Auto'
const last_name = 'Tester'
const email = 'auto_tester@redvike.com'
const password = 'password'

const file = '/avatar.png'

describe('Application form', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('Submit application form successfully', () => {
    cy.step('Enter user data')
    application_form.enter_first_name(first_name)
    application_form.enter_last_name(last_name)
    application_form.enter_email(email)
    application_form.enter_password(password)
    application_form.confirm_password(password)

    cy.step('Upload the file')
    application_form.upload_file(file)

    cy.step('Slide thumb')
    application_form.slide_thumb()

    cy.step('Click the Submit button')
    application_form.click_submit_button()

    cy.step('Verify the form is submited sucesfully')
    success_page.verify_confirmation_text_visible()
    cy.contains(first_name)
    cy.contains(last_name)
    cy.contains(email)
    success_page.verify_avatar_img_visible()
  })
})
