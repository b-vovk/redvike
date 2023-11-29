const CONFIRMATION_TEXT = 'Successful Form Submissions'
const BACK_TO_FORM_BUTTON = 'Back to Form'
const AVATAR_IMG = 'img'

class SuccessPage {
  verify_confirmation_text_visible () {
    cy.contains(CONFIRMATION_TEXT).should('be.visible')
  }

  click_back_to_form_button () {
    cy.contains(BACK_TO_FORM_BUTTON).click()
  }

  verify_avatar_img_visible () {
    cy.get(AVATAR_IMG).should('be.visible')
  }
}

export default SuccessPage
