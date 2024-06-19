let f = [0,1,1,2]; 
for( let i=4; i<11; i++){

    f[i] = f[i - 1] + f[i - 2];
}
{
console.log(f);

}