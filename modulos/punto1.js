module.exports = (x,y) =>{
    suma=0;
    x=parseFloat(x);
    y=parseFloat(y);
    signoY=1;
    if(y<0)  {
        y=y*-1;
        signoY=-1;
    }
    for (let i = 0; i < y; i++) {
        suma=suma+x;
    }
    return suma*signoY;
}