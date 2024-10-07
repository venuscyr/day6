function addCar(agentString, car) {
        
        let agent = JSON.parse(agentString);
        
        agent.car = car;
        
        return agent;
    } 
