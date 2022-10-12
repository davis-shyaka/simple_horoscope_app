document.querySelector("#button").addEventListener("click", getHoroscope);

// Aquarius (January 20 - February 18)
// Pisces (February 19 - March 20)
// Aries (March 21 - April 19)
// Taurus (April 20 - May 20)
// Gemini (May 21 - June 20)
// Cancer (June 21 - July 22)
// Leo (July 23 - August 22)
// Virgo (August 23 - September 22)
// Libra (September 23 - October 22)
// Scorpio (October 23 - November 21)
// Sagittarius (November 22 - December 21)
// Capricorn (December 22 - January 19)

function getHoroscope() {
  let visitor = document.getElementById("visitorName").value;
  let birthDay = Number(document.querySelector("#birthDay").value);
  let birthMonth = Number(document.querySelector("#birthMonth").value);
  let horoscopeID = 0;

  if (
    (birthMonth === 3 && birthDay >= 21) ||
    (birthMonth === 4 && birthDay <= 19)
  ) {
    //Aries
    horoscopeID = 1;
  } else if (
    (birthMonth === 4 && birthDay >= 20) ||
    (birthMonth === 5 && birthDay <= 20)
  ) {
    //Taurus
    horoscopeID = 2;
  } else if (
    (birthMonth === 5 && birthDay >= 21) ||
    (birthMonth === 6 && birthDay <= 20)
  ) {
    //Gemini
    horoscopeID = 3;
  } else if (
    (birthMonth === 6 && birthDay >= 21) ||
    (birthMonth === 7 && birthDay <= 22)
  ) {
    //Cancer
    horoscopeID = 4;
  } else if (
    (birthMonth === 7 && birthDay >= 23) ||
    (birthMonth === 8 && birthDay <= 22)
  ) {
    //Leo
    horoscopeID = 5;
  } else if (
    (birthMonth === 8 && birthDay >= 23) ||
    (birthMonth === 9 && birthDay <= 22)
  ) {
    //Virgo
    horoscopeID = 6;
  } else if (
    (birthMonth === 9 && birthDay >= 23) ||
    (birthMonth === 10 && birthDay <= 22)
  ) {
    //Libra
    horoscopeID = 7;
  } else if (
    (birthMonth === 9 && birthDay >= 23) ||
    (birthMonth === 10 && birthDay <= 22)
  ) {
    //Scorpio
    horoscopeID = 8;
  } else if (
    (birthMonth === 11 && birthDay >= 22) ||
    (birthMonth === 12 && birthDay <= 21)
  ) {
    //Sagittarius
    horoscopeID = 9;
  } else if (
    (birthMonth === 12 && birthDay >= 22) ||
    (birthMonth === 1 && birthDay <= 19)
  ) {
    //Capricorn
    horoscopeID = 10;
  } else if (
    (birthMonth === 1 && birthDay >= 20) ||
    (birthMonth === 2 && birthDay <= 18)
  ) {
    //Aquarius
    horoscopeID = 11;
  } else if (
    (birthMonth === 2 && birthDay >= 19) ||
    (birthMonth === 3 && birthDay <= 20)
  ) {
    //Pisces
    horoscopeID = 12;
  } else {
    //Wrong date
    horoscopeID = 404;
  }
  //Horoscope Object

  const starSigns = [
    {
      title: "Aries",
      image: "",
      body: "March 21 - April 19 ",
      description:
        "Independent and strong‒willed, you are a force to be reckoned with! You love nothing more than an exciting new goal to tackle, and you do your best work when you’re flying solo. Your passion and energy keep the rest of us on our toes!",
      id: 1
    },
    {
      title: "Taurus",
      image: "",
      body: "April 20 - May 20",
      description:
        "As a Taurus, you’re a wonderful combination of laid‒back and hard‒working. You’re honest and loyal, occasionally to a fault. Your determination and attention to detail will take you far in life.",
      id: 2
    },
    {
      title: "Gemini",
      image: "",
      body: "May 21 - June 20",
      description:
        "Your ability to get along with a wide variety of people makes you a bit of a social butterfly, but you’ll take advantage of some alone time when it comes your way. Curious and deeply emotional, you love ritual and celebration.",
      id: 3
    },
    {
      title: "Cancer",
      image: "",
      body: "June 21 - July 22",
      description:
        "Your intuition is downright uncanny! You do your best socializing in small groups and prefer intimate relationships even if it means your social circle is on the smaller side. Your creative spirit will bring joy to all you meet.",
      id: 4
    },
    {
      title: "Leo",
      image: "",
      body: "July 23 - August 22",
      description:
        " It’s no wonder your symbol is a lion. Your personality and presence are impressive to all. This may intimidate some, but your inviting spirit will help you easily make friends. Your confidence will be an asset to you throughout your life.",
      id: 5
    },
    {
      title: "Virgo",
      image: "",
      body: "August 23 - September 22",
      description:
        "You are the picture of poise and elegance. You love to stay organized and have a strong focus on keeping things aesthetic. But you’re not just beauty. You’ve got brains, too! You’ll continue seeking knowledge and intellectual growth as you age",
      id: 6
    },
    {
      title: "Libra",
      image: "",
      body: "September 23 - October 22 ",
      description:
        "You have a large social circle, and your open‒mindedness helps you get along with just about anyone. But don’t get lost in the crowd! A focus on self‒care and personal reflection will help you build your confidence over time. ",
      id: 7
    },
    {
      title: "Scorpio",
      image: "",
      body: "October 23 - November 21",
      description:
        "As a Scorpio, you can have a sharp edge, but this isn’t always a negative quality. It gives you an appreciation for authenticity and a strong sense of independence. However, you’re not always as tough as you appear. Once you let people into your life, you’re a bit of a softy.",
      id: 8
    },
    {
      title: "Sagittarius",
      image: "",
      body: "November 22 - December 21",
      description:
        "The road less traveled is your favorite place to be! Your bravery is admirable and will make you a good fit for leadership roles. You also have a bit of an itch in your shoes and will always be ready to take on a new adventure. ",
      id: 9
    },
    {
      title: "Capricorn",
      image: "",
      body: "December 22 - January 19",
      description:
        "Your perfectionism and high standards, though sometimes an obstacle, can be one of your superpowers when handled wisely. You have a strong sense of self, which enables you to make meaningful connections and lead the way. ",
      id: 10
    },
    {
      title: "Aquarius",
      image: "",
      body: "Jan 20 - Feb 18",
      description:
        "You may fall on the introvert side of the spectrum, but that doesn’t mean you don’t know how to have fun. You have an enviable combination of intelligence and intuition, and you are able to identify positive opportunities even in dark times.",
      id: 11
    },
    {
      title: "Pisces",
      image: "",
      body: "Feb 19 - March 20",
      description:
        "You wouldn’t hurt a fly! Empathy is your superpower, and you are an asset to any team you join or cause you support. Your gentleness is a virtue. However, be careful to not let your feelings get hurt too easily. Be sure to spend time building your self‒confidence.",
      id: 12
    }
  ];

  const length = starSigns.length;

  console.log(horoscopeID);

  for (let i = 0; i < length; i++) {
    if (starSigns[i].id === horoscopeID) {
      document.querySelector(
        "#visitor"
      ).innerHTML = `Dear, ${visitor}, you are`;
      document.querySelector("#response").innerHTML = starSigns[i].title;
      document.querySelector("#date").innerHTML = starSigns[i].body;
      document.querySelector("#horoscope").innerHTML = starSigns[i].description;
      document.querySelector("#responseSection").classList.add("active");
      document.querySelector("#input-prompt").classList.add("active");
    }
  }
}
