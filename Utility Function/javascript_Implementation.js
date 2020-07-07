 const inflect = (singular, plural, number) => {
  if(number == 1 ) {
    return singular;
  }
    
  else {
    return plural;
  }
}