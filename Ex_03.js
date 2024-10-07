function addCarToAgent(agent, brand, model, color, power) {
    if (!agent || typeof brand !== 'string' || typeof power !== 'string' ) {
        console.error("Erreur : L'un des parametres est manquant ou incorrect.");
        return null
    }
      agent.car = {
        brand: brand,
        model: model,
        color: color,
        power: power
      };

    console.log("Voiture ajoutée a l'agent :", agent);
    return agent;
}

let agent = { name:"James Bond", code: "007"};
addCarToAgent(agent,"Aston Martin", "DB5", "Grey", "285hp");
