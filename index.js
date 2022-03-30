console.log("would you like a bottl of woter")

function clickedAboutMe() {
    console.log("you are on the about me section!");
    document.getElementById("about-me").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
  }

  function clickedPortfolio() {
    console.log("you are on the portfolio section!")
    document.getElementById("portfolio").style.display = "block";
    document.getElementById("about-me").style.display = "none";
  }