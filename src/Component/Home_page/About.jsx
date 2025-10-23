// About component
import "./Style/About.css"

const About = () => {
    return (
        <>
            <section className="about-content">
                <div className="content-section">
                    <div className="content-img">
                        <img src="/image/about.png" alt="About Mekong Water Solutions" />
                    </div>
                    <div className="content-title">
                        <div className="content-title-home">
                            <h1>About our program</h1>
                            <p className="content-title-About1">
                                Mekong Water Solutions is an Australian Government initiative supporting the planning, development, and management of water resources and water sector systems. We work with Governments, development partners the private sector, and academic institutions to raise the quality and economic returns for water sector investments across the Mekong.
                            </p>
                            <p className="content-title-About2"> 
                                Our services promote social inclusion, economic development, environmental sustainability, and climate resilience.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About