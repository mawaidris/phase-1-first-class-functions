 
 const receivesAFunction = (aFunction) => {
 aFunction()
 }
  const returnsANamedFunction = () => {
       return (function name (){
        console.log("ok");
       })
  }
  function returnsAnAnonymousFunction (){
    return function (){
        console.log("fine");
    }
  }