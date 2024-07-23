// Écrivez un programme TypeScript qui déclare des variables en utilisant let, const et var. Décrivez ensuite comment chaque type de déclaration se comporte par rapport à la portée et à la mutabilité.
// Dans cet 1er exemple ci-dessus, g a capturé la variable a déclarée dans f. À tout moment où g est appelé, la valeur de a sera liée à la valeur de a dans f. Même si g est appelé une fois f terminé, il pourra accéder et modifier a.
function f() {
    var a = 1;
    a = 2;
    var b = g();
    a = 3;
    return b;
    function g() {
        return a;
    }
}
var result = f();
console.log(result);
