Feature: Calculation

    Calculate and display the output (possibly an "ERROR") correctly

    Background:
        Given I launched Calcu

    Scenario: Missing every required input
        When I do nothing
        But I click the CALC button
        Then the output should be displayed as "ERROR"

    Scenario: Missing the operation selection
        When I type "1457" in the top-left box
        And I type "38.4909" in the bottom-left box
        And I click the CALC button
        Then the output should be displayed as "ERROR"

    Scenario: Missing the second input value
        When I type "1.9341" in the top-left box
        And I select the plus operator
        And I click the CALC button
        Then the output should be displayed as "ERROR"

    Scenario: Divided by zero
        When I type "1234" in the top-left box
        And I type "0" in the bottom-left box
        And I select the divide operator
        And I click the CALC button
        Then the output should be displayed as "Infinity"

    Scenario: Invalid input 1
        When I type "Weeeee" in the top-left box
        And I type "256" in the bottom-left box
        And I select the multiply operator
        And I click the CALC button
        Then the output should be displayed as "ERROR"

    Scenario: Invalid input 2
        When I type "45" in the top-left box
        And I type "10,9" in the bottom-left box
        And I select the multiply operator
        And I click the CALC button
        Then the output should be displayed as "ERROR"

    Scenario: Normal calculation 1
        When I type "456" in the top-left box
        And I type "100" in the bottom-left box
        And I select the minus operator
        And I click the CALC button
        Then the output should be displayed as "356"

    Scenario: Normal calculation 2
        When I type "22.5" in the top-left box
        And I type "-118" in the bottom-left box
        And I select the multiply operator
        And I click the CALC button
        Then the output should be displayed as "-2655"
    