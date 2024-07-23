function declarationsDeVariables() {
  // Déclaration avec let
  let variableLet = "variable let";
  console.log(variableLet); // Output: variable let
  variableLet = "changer le let";
  console.log(variableLet); // Output: changer le let

  // Déclaration avec const
  const variableConst = "variable const";
  console.log(variableConst); // Output: variable const
  // variableConst = "ne peut pas être changée"; // Erreur: Assignment to constant variable.

  // Déclaration avec var
  var variableVar = "variable var";
  console.log(variableVar); // Output: variable var
  variableVar = "changer var";
  console.log(variableVar); // Output: changer var

  // Démonstration de la portée
  if (true) {
    let porteeBloc = "portée bloc (let)";
    var porteeFonction = "portée fonction (var)";
    console.log(porteeBloc); // Output: portée bloc (let)
    console.log(porteeFonction); // Output: portée fonction (var)
  }

  // console.log(porteeBloc); // Erreur: porteeBloc is not defined
  console.log(porteeFonction); // Output: portée fonction (var)
}

declarationsDeVariables();
