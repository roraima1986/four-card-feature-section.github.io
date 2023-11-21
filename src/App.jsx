function App() {
  
    return (

        <main className="main">
            <div className="container__grid">
                
                <div className="grid__column">
                    <div className="card cyan">
                        <h3 className="card__title">Supervisor</h3>
                        <p className="card__description">Monitors activity to identify project roadblocks</p>
                        <div className="card__container-icon">
                            <img src="./src/assets/images/icon-supervisor.svg" alt="Supervisor" className="card__icon" />
                        </div>
                    </div>
                </div>

                <div className="grid__column">
                    <div className="card red">
                        <h3 className="card__title">Team Builder</h3>
                        <p className="card__description">Scans our talent network to create the optimal team for your project</p>
                        <div className="card__container-icon">
                            <img src="./src/assets/images/icon-team-builder.svg" alt="Team Builder" className="card__icon" />
                        </div>
                    </div>

                    <div className="card orange">
                        <h3 className="card__title">Karma</h3>
                        <p className="card__description">Regularly evaluates our talent to ensure quality</p>
                        <div className="card__container-icon">
                            <img src="./src/assets/images/icon-karma.svg" alt="Karma" className="card__icon" />
                        </div>
                    </div>
                </div>

                <div className="grid__column">
                    <div className="card blue">
                        <h3 className="card__title">Calculator</h3>
                        <p className="card__description">Uses data from past projects to provide better delivery estimates</p>
                        <div className="card__container-icon">
                            <img src="./src/assets/images/icon-calculator.svg" alt="Calculator" className="card__icon" />
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default App
