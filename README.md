# Thermostat

### Instructions

We worked on this project for three days in rotating pairs. This was our first introduction to Javascript and my first time using the language.

Below are the instructions and goal of the project:

> In this challenge, you will build the logic needed to model a simple thermostat.
>
> * Your thermostat starts at 20 degrees
> * You can increase the temperature with an up function
> * You can decrease the temperature with a down function
> * The minimum temperature is 10 degrees
> * If power saving mode is on, the maximum temperature is 25 degrees
> * If power saving mode is off, the maximum temperature is 32 degrees
> * Power saving mode is on by default
> * You can reset the temperature to 20 with a reset function
> * You can ask about the thermostat's current energy usage: less than 18 is low-usage, less than 25 is medium-usage, anything else is high-usage.


### Objectives

* Are you having fun?
* Are you a better developer than you were yesterday?
* **Can you learn a new language and its patterns?**

### Using the application

* Download the source code using `$ git clone`
* Open the `src/index.html` file in the browser to view the app

### Running the tests

* Open the `SpecRunner.html` file in the browser to run the tests and view the results

### Dependencies

* Written in **JavaScript**
* Tested using **Jasmine**


### Approach

* Developed a written plan that described the thermostat objects interactions
* Designed the business logic to have a single thermostat object written using the constructor/prototype pattern
* Started off by adding all the specification logic to the thermostat object and test-driving this implementation with unit tests.
* The logic was built up gradually based on each specification rising in complexity

### Reflections

* This was my first real introduction into JavaScript and found I picked it up naturally and could see how the language functioned from a bottom level for some of its operations, it was also interesting to see what additional functionality it offers compared to ruby
* Had some interesting debates with my pair partners around raising errors and error handling
* If I were to tackle this project again or add additional functionality I would like to refactor using ES6 JavaScript syntax and observe the similarities/differences, on the topic of additional functionality, adding a GUI would improve ease of user interaction greatly.
