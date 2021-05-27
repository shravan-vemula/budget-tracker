 
import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {

    visitHomePage() {
        this.accessUrl('http://localhost:8080/');
    }
}

export class RobotEyes extends BaseEyes {
    seesMainPage() {
        this.seesDomVisible("Main page")
    }
}

export class RobotHands extends BaseHands {
    clickSignupSubmit() {
        cy.get("[data-testid=submitButton]").click();
      }

}