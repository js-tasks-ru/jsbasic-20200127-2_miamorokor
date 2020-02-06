/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(f){
  let n=1;
  for(i=1;i<=f;i++) n=n*i;
  return(n);
}
x=0;
y=factorial(x);
console.log(y);
