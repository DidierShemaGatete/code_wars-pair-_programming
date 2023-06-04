function reverseNumber(n) {
    
    n+=''
    return n[0]=='-'? Number.parseInt('-'+n.slice(1).split('').reverse().join('')) :  Number.parseInt(n.split('').reverse().join('')) 

  }

  console.log(reverseNumber(-100))
