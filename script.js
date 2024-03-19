"use strict";

const gameContainer = document.querySelector(".container");
const user = document.querySelector(".user_result img");
const cpu = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const options = document.querySelectorAll(".option_image");

options.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    img.classList.add("active");
    // Repeat the loop again, to match the index.
    options.forEach((image, index) => {
      // Once the Index got matched, remove active class for remaining images.
      if (i !== index) {
        image.classList.remove("active");
      }
    });
    // Getting the Source of the Clicked Event.
    let imgSrc = e.currentTarget.querySelector("img").src; // Currernt Target -> returns element, where event is called.
    user.src = imgSrc;

    // Generating a Random number between 0, 1, 2.
    let randomNum = Math.floor(Math.random() * 3);
    // List Image Values.
    let cpuImages = ["rock.png", "paper.png", "scissors.png"];
    cpu.src = cpuImages[randomNum];

    // Check Values For User and Cpu.

    let userValues = ["R", "P", "S"][i];
    let cpuValues = ["R", "P", "S"][randomNum];

    // Object All the Possible Outcomes.

    let outComes = {
      RR: "Draw",
      RP: "CPU",
      RS: "User",
      PP: "Draw",
      PS: "CPU",
      PR: "User",
      SS: "Draw",
      SP: "User",
      SR: "CPU",
    };

    let outCome = outComes[userValues + cpuValues];

    // Display Result....

    result.textContent =
      userValues === cpuValues ? "Match Draw..." : `${outCome} Won...`;
  });
});
