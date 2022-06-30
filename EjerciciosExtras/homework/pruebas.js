var closureMult = function (multiplier) {
    // Tu código aca:
    this.num = multiplier;
    return newNum =>{
        return this.num * newNum;
    }
}

var multiplicandonumero = closureMult(5);

console.log(multiplicandonumero());