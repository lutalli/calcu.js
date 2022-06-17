const { When, Then, Given, AfterAll } = require("@cucumber/cucumber");
const { Builder, Capabilities, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chai").should();

let capabilities = Capabilities.chrome();
let options = new chrome.Options();
let nextPort = 9000;
options.addArguments([`--remote-debugging-port=${nextPort}`]);

const driver = new Builder()
    .withCapabilities(capabilities)
    .build()

Given("I launched Calcu", async function () {
    await driver.get("http://localhost:8000");
});

When("I do nothing", function () {});

When("I type {string} in the {word} box", async function (input, box) {
    let id;
    if (box == "top-left") {
        id = "input-box-a";
    } else if (box == "bottom-left") {
        id = "input-box-b";
    }
    await driver.findElement(By.id(id)).sendKeys(...Array.from(input));
});

When("I click the CALC button", async function () {
    await driver.findElement(By.id("calc-button")).click(); 
});

When("I select the {word} operator", async function (oper) {
    await driver.findElement(By.id(`${oper}-button`)).click();
})

Then("the output should be displayed as {string}", async function (desiredOutput) {
    let output = await driver.findElement(By.id("output-display")).getText();
    output.should.equal(desiredOutput);
});

AfterAll(async function () {
    driver.quit()
});
