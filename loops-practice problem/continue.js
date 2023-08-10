// continue break er motoi likhte hoi , continue sorto ta holo ager sobkicu skip kore pore item gulo anbe
var numbers = [14, 50 , 80, 100, 110, 150 , 220];
for(i=0; i<numbers.length; i++){
    number = numbers[i];
    if(number < 80){
        continue;
        // eke skip o bola hoi
        // 80 and 80 er porer number gulo dekhabe
        // if (number > 80)
        // tahole 80 er ager number gulo output asto
    }
    console.log(number);
}