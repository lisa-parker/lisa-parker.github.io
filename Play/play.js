var townData = {
  "towns" : [
  {
    "name": "Franklin",
    "motto": "Where you will grow!",
    "yearFounded": 1788,
    "currentPopulation": 30458,
    "averageRainfall": 21,
    "events" : [
      "March 4: March to the Drum of Donuts",
      "September 5 - 11: Founder Days",
      "December 1 - 26: Christmas in the Heart"
    ]
  },
  {
    "name": "Greenville",
    "motto": "Green is our way of life.",
    "yearFounded": 1805,
    "currentPopulation": 33458,
    "averageRainfall": 25,
    "events" : [
      "February 10-12: Greenbration",
      "May 8 - 18: Greenville Founder Days",
      "June 20: Verde and Valiant Day",
      "November 15-16: Greensome Gathering"
    ]
  },

  {
    "name": "Placerton",
    "motto": "Positive Placement in Placerton.",
    "yearFounded": 1946,
    "currentPopulation": 512,
    "averageRainfall": 39,
    "events" : [
      "July 4: A Blaze of Glory",
      "October 20: Fall through Fall"
    ]
  },

  {
    "name": "Springfield",
    "motto": "Where everyone is lifted.",
    "yearFounded": 1826,
    "currentPopulation": 17852,
    "averageRainfall": 17,
    "events" : [
      "January 8: Spring into Winter",
      "April 10-20: Celebration of Life",
      "July 31-Aug 15: Dog Days of Summer Festival"
    ]
  }
 ]
}

var events = townData.towns[0].events
for (i=0; i<events.length; i++) {
  console.log(events[i])
}

// for loop to get each town
//     var town = ...
//     console.log(town.name)
//     for loop to get each event for that town (town.events)