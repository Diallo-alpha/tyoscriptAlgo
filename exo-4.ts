function inferenceDeType() {
    // Déclaration et assignation d'un nombre sans spécification de type
    let nombre = 42; 
    console.log("Nombre:", nombre); 
    nombre += 8;
    console.log("Nombre après addition:", nombre); 
  
    // Déclaration et assignation d'une chaîne de caractères sans spécification de type
    let chaine = "Bonjour, TypeScript!"; 
    console.log("Chaîne:", chaine); 
    chaine = chaine + " Comment ça va?";
    console.log("Chaîne après concaténation:", chaine); 
  
    // Déclaration et assignation d'un booléen sans spécification de type
    let vraiOuFaux = true; 
    console.log("Booléen:", vraiOuFaux); 
    vraiOuFaux = !vraiOuFaux;
    console.log("Booléen après négation:", vraiOuFaux); 
  
    let nonDefini; 
    console.log("Non défini avant assignation:", nonDefini); 
    nonDefini = "Maintenant j'ai une valeur";
    console.log("Non défini après assignation:", nonDefini); 
  }
  
  inferenceDeType();
  