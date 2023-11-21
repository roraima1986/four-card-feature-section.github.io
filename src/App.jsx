import Card from "./assets/components/Card";

function App() {
  
    return (

        <main className="main">
            <div className="container__grid">
                
                <div className="grid__column">
                    <Card 
                        title={'Supervisor'} 
                        description={'Monitors activity to identify project roadblocks'} 
                        image={'./src/assets/images/icon-supervisor.svg'}
                        color={'cyan'} />                    
                </div>

                <div className="grid__column">
                    <Card 
                        title={'Team Builder'} 
                        description={'Scans our talent network to create the optimal team for your project'} 
                        image={'./src/assets/images/icon-team-builder.svg'}
                        color={'red'} />

                    <Card 
                        title={'Karma'} 
                        description={'Regularly evaluates our talent to ensure quality'} 
                        image={'./src/assets/images/icon-karma.svg'}
                        color={'orange'} />                    
                    
                </div>

                <div className="grid__column">
                    <Card 
                        title={'Calculator'} 
                        description={'Uses data from past projects to provide better delivery estimates'} 
                        image={'./src/assets/images/icon-calculator.svg'}
                        color={'blue'} />
                    
                </div>

            </div>
        </main>
    );
}

export default App
