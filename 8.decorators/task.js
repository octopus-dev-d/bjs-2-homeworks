// Задача 1

function cachingDecoratorNew(func) {
  const cache = [];
  function cashing(...args){
    let hash = String(args);
    let yes = cache.findIndex((index)=> index.hash == hash);
    if (yes != -1) {
      let result = cache[yes].result;            
      console.log("Из кэша: "+ result); 
      return "Из кэша: " + result;       
    } 
    let result = func(...args);

      if (cache.length>=5){
        cache.shift()
      } 
               
       cache.push({
         result:result,
         hash:hash
        });            
       console.log("Вычисляем: " + result); 
       return "Вычисляем: " + result;       
      }
      return cashing;
}

// Задача 2


function debounceDecoratorNew(func) {
  let allImmediate;
  let flag = false;
  return function wrapper(...args) {
    if (!flag) {
      func.apply(this, args);
    }
  flag = true;
  clearTimeout(allImmediate);
    allImmediate = setTimeout(() => {
      func.apply(this, args);
    flag = false;
    }, ms);
  };
}

// Задача 3

function debounceDecorator2(func) {
  let allImmediate;
  let flag = false;
  wrapper.count = 0;
  function wrapper(...args) {
  wrapper.count ++;
    if (!flag) {
      func.apply(this, args);  
    }
  flag = true;
	clearTimeout(allImmediate);
    allImmediate = setTimeout(() => {
      func.apply(this, args);
	    flag = false;
    }, ms);  
  };
  return wrapper;
}