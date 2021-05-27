import { RobotEyes, RobotHands, Dependencies } from '../../robots/budget-tracker/Robot';

context('Signup Screen', () => {
    const robotEyes = new RobotEyes();
    const robotHands = new RobotHands();
    const dependencies = new Dependencies()

    describe('Signup page should be visible with email and password fields', () => {
        it("navigate to Sign up Page", () => {
            dependencies.visitHomePage();
        });
        it("search for the email and password fields", () => {
            robotEyes.seesPathNameInUrl("/");
            robotEyes.containsText("Email Address");
            robotEyes.containsText("Password");
        
        })
        it("clicks on create account button", () => {
            robotHands.wait(2000);
            robotHands.clickSignupSubmit();
        
        })
    });

   
});