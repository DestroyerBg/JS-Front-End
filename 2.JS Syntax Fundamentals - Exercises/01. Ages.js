function agesResult(age) {
    let type;
    if (age >= 0 && age <= 2) {
        type = 'baby';
    }
    else if(age >=3 && age <= 13){
        type = 'child';
    }
    else if(age >=14 && age <= 19){
        type = 'teenager';
    }
    else if(age >=20 && age <= 65){
        type = 'adult';
    }
    else if(age >= 66){
        type = 'elder';
    }
    else{
        type = 'out of bounds';
    }
    console.log(type);
}

agesResult(20);
agesResult(1);
agesResult(100);
agesResult(-1);