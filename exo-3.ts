function operationsDeBase() {
    // Déclaration et assignation d'un nombre
    let nombre: number = 42;
    console.log("Nombre:", nombre); // Output: Nombre: 42
    nombre += 8;
    console.log("Nombre après addition:", nombre); // Output: Nombre après addition: 50
  
    // Déclaration et assignation d'une chaîne de caractères
    let chaine: string = "Bonjour, TypeScript!";
    console.log("Chaîne:", chaine); // Output: Chaîne: Bonjour, TypeScript!
    chaine = chaine + " Comment ça va?";
    console.log("Chaîne après concaténation:", chaine); // Output: Chaîne après concaténation: Bonjour, TypeScript! Comment ça va?
  
    // Déclaration et assignation d'un booléen
    let vraiOuFaux: boolean = true;
    console.log("Booléen:", vraiOuFaux); // Output: Booléen: true
    vraiOuFaux = !vraiOuFaux;
    console.log("Booléen après négation:", vraiOuFaux); // Output: Booléen après négation: false
  
    // Déclaration d'une variable non définie
    let nonDefini: undefined = undefined;
    console.log("Non défini:", nonDefini); // Output: Non défini: undefined
    nonDefini = undefined; // Assignation explicite, même si c'est déjà undefined
    console.log("Non défini après assignation:", nonDefini); // Output: Non défini après assignation: undefined
  }
  
  operationsDeBase();
  