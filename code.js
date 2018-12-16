let cargoHold = {
  cleaned: false,
  daysSinceLastIncident: 3,
  fuel: 0,
  hyperdrive: null,
  recyclables: [],
  toolBin: {
    label: "Primary Tool Bin",
    tools: []
  },
  robotsForSale: [],
  dilithiumOreWeight: 0,
  trash: [],
  toogleCleanedStatus: function (){
    switch (cargoHold.cleaned){
      case true:
        this.cleaned = false;
        break;
      case false:
        this.cleaned = true;
    }
  },
  addDayForIncidentReport: function() {
    this.daysSinceLastIncident += 1;
  },
  consolidateFuel: function(fuelCanisterPile){
    this.fuel = fuelCanisterPile.reduce((total, next) =>
      total = total + next)
  },
  retriveWorkingHyperdrive: function(hyperDrivePile){
    this.hyperdrive = hyperDrivePile.find(string => string.includes('rusty') === false)
  },
  filterOutRecyclables: function(recyclablesPile){
    this.recyclables = recyclablesPile.filter(item =>
      item === 'paper' || item === 'plastic' ||
      item === 'metal can' || item === 'glass'
    )
  },
  consolidateTools: function(oldToolBinsPile){
    oldToolBinsPile.forEach((item) => item.items.forEach (tool => this.toolBin.tools.push(tool)))
  },
  filterRobots: function(robotsPile){
    this.robotsForSale = robotsPile.filter(robot => robot.yearsOld <= 15)
  },
  consolidateOre: function(orePile){
    orePile.forEach((item) =>
    {
      if(item.status === "stable") {
        this.dilithiumOreWeight += item.weight
      }
    }
    )
  },
  fuelUpRobots: function(){
    this.robotsForSale.forEach((robot) => {
      this.fuel = this.fuel - (5 - robot.fuel);
      robot.fuel = 5;
    })
  }
};

let fuelCanisterPile = [2, 5, 9, 2, 3, 4, 6, 8, 8, 2, 1, 0]

let hyperDrivePile = ["rusty hyperdrive", "millennium hyperdrive", "hyperdrive XL", "rusty hyperdrive", "rusty hyperdrive XL"]

let recyclablesPile = ["paper", "space banana peel", "plastic", "plastic", "glass", "styrofoam coffee mug", "old dilithium battery", "metal can", "paper"]

let oldToolBinsPile = [
 {
   label: "Tool Bin 1",
   items: []
 },
 {
   label: "Tool Bin 2",
   items: ["flux capicitor wrench", "hydrospanner", "android eye scanner", "skeleton key-card"]
 },
 {
   label: "Tool Bin 3",
   items: []
 },
 {
   label: "Tool Bin 4",
   items: ["transponder", "body scanner"]
 },
 {
   label: "Tool Bin 5",
   items: ["multi-pass", "sonic screwdriver", "teleporter gun"]
 }
]

let robotsPile = [
  {
    robotType: "Protocol Droid",
    yearsOld: 41,
    fuel: 0
  },
  {
    robotType: "Astromech Droid",
    yearsOld: 3,
    fuel: 2
  },
  {
    robotType: "Maintenance Droid",
    yearsOld: 10,
    fuel: 1
  },
  {
    robotType: "Bending Robot",
    yearsOld: 19,
    fuel: 0
  }
]

let orePile = [
  {
    status: "glowing",
    weight: 20.5
  },
  {
    status: "stable",
    weight: 15.5
  },
  {
    status: "stable",
    weight: 4.5
  },
  {
    status: "glowing",
    weight: 0.5
  }
]

// let toogleCleanedStatus = () => {
//   switch (cargoHold.cleaned){
//     case true:
//       cargoHold.cleaned = false;
//       break;
//     case false:
//       cargoHold.cleaned = true;
//   }
// }

cargoHold.toogleCleanedStatus();
console.log(cargoHold.cleaned)
cargoHold.toogleCleanedStatus();
console.log(cargoHold.cleaned)

cargoHold.addDayForIncidentReport();
console.log(cargoHold.daysSinceLastIncident)

cargoHold.consolidateFuel(fuelCanisterPile);
console.log(cargoHold.fuel)

cargoHold.retriveWorkingHyperdrive(hyperDrivePile);
console.log(cargoHold.hyperdrive)

cargoHold.filterOutRecyclables(recyclablesPile);
console.log(cargoHold.recyclables)

cargoHold.consolidateTools(oldToolBinsPile);
console.log(cargoHold.toolBin)

cargoHold.filterRobots(robotsPile);
console.log(cargoHold.robotsForSale)

cargoHold.consolidateOre(orePile);
console.log(cargoHold.dilithiumOreWeight)

cargoHold.fuelUpRobots();
console.log(cargoHold.robotsForSale)
console.log(cargoHold.fuel)
