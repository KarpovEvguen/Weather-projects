





  const App = () => {
    return (
      <div className="container">
  
  
        <section className="pets">
          <h2>Interacting with our pets</h2>
  
          <div className="cards">
            <PetCard
              img=""
              text="Rescue pups pose as ghosts in festive photo shoot"
            />
            <PetCard
              img="img/cat.jpg"
              text="Cat interrupts morning coffee on sunny Washington morning"
            />
            <PetCard
              img="img/dog2.jpg"
              text="New study finds dogs pay more attention to women"
            />
            <PetCard
              img="img/dog3.jpg"
              text="Petting dogs gives health benefit, even if they are not yours"
            />
          </div>
  
          <button className="btn">See more</button>
          
        </section>
        </div>
    )
  }