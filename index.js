class Formatter {

  static capitalize (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize (string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize (phrase) {
    let exceptionArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from',];
    let array = phrase.split(" ");
    let newArray = array.map ((string, index) => {
      if (exceptionArray.includes(string) && index !==0) {
        return string
      } else {
        return this.capitalize(string)
      }  
    })
    return newArray.join(" ")
  }

}