import ApplicationForm from '../pages/application_form'
import SuccessPage from '../pages/success'

const application_form = new ApplicationForm()
const success_page = new SuccessPage()

const first_name = 'Auto'
const last_name = 'Tester'
const email = 'auto_tester@redvike.com'
const password = 'password'

// There is an issue uploading '/avatar.gif' type of file
// TODO: enable execution for '/avatar.gif' once the issue JIRA-21 resolved, append the above array with the '/avatar.gif' value
const files = ['/avatar.jpeg', '/avatar.bmp', '/avatar.jpg']

files.forEach((file) => {
  describe('Application form', () => {
    beforeEach(() => {
      cy.visit('/')
    })
    it(`Submit application form successfully with ${file} type`, () => {
      cy.step('Enter user data')
      application_form.enter_first_name(first_name)
      application_form.enter_last_name(last_name)
      application_form.enter_email(email)
      application_form.enter_password(password)
      application_form.confirm_password(password)

      cy.step('Upload the file')
      application_form.upload_file(file)

      cy.step('Slide thumb')
      application_form.slide_thumb(340)

      cy.step('Click the Submit button')
      application_form.click_submit_button()

      cy.step('Verify the form is submited sucesfully')
      success_page.verify_confirmation_text_visible()
      cy.contains(first_name)
      cy.contains(last_name)
      cy.contains(email)

      cy.step('Verify the avatar image is visible')
      success_page.verify_avatar_img_visible()
    })
  })
})
