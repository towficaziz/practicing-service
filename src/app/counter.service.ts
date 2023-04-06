export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActivecounter = 0;

  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive(){
    this.inactiveToActivecounter++;
    console.log('Inactive to Active: ' + this.inactiveToActivecounter);

  }
}
