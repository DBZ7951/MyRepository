Feature: Accessing opencart webpage

    Scenario Outline: Validate error message in opencart website
        Given user navigates to <url>
        And user verifies title
        When user enters the invalid login name <login_name>
        And enters the invalid password <password>
        Then click on Login button
        And verify the error message

        Examples:
            | url                                  | login_name          | password |
            | "http://10.207.182.111:84/opencart/" | "r.rohit@gmail.com" | "ROhit1"  |





























