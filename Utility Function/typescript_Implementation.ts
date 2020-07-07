function utility(single:string,plural:string,number:number):string {
    if(number == 1) {
      return single;
    }
    else {
      return plural;
    }
}