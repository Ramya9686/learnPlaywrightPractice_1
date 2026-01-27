import LoginPage from '../../pageObjectModel/loginFunctionality.po'

describe ('Login to orangeHRM', () => {
    it('Login to orangeHRM using valid creds', () =>{
        LoginPage.loginWithValidCreds()
        LoginPage.verifyDashboardPage()
    })

     it('Login to orangeHRM using Invalid Username', () =>{
        LoginPage.loginWithInvalidUserName()
        LoginPage.verifyInvalidCredsError()
    })

    it('Login to orangeHRM using Invalid Password', () =>{
        LoginPage.loginWithInvalidPassword()
        LoginPage.verifyInvalidCredsError()
    })

    it('Login to orangeHRM using Invalid Credentials', () =>{
        LoginPage.loginWithInvalidCreds()
        LoginPage.verifyInvalidCredsError()
    })
})