// Portfolios component
import "./Style/Portfolios.css"

const Portfolios = () => {
    return (
        <>
            <div className="container-portfolios">
                <div className="content-portfolios-text">
                    <p>what we Have done</p>
                    <h1>Our Portfolios</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>
                <div className="content-portfolios-img">
                    <div className="img-box1">
                        <img src="/image/img-k.jpg" alt="Water resources project" />
                    </div>
                    <div className="img-box2">
                        <img src="/image/hero-home.jpg" alt="Sustainable development" />
                    </div>
                    <div className="img-box3">
                        <img src="https://media.istockphoto.com/id/1195692701/photo/mekong-river-in-laos-luang-prabang-pak-ou-drone-view.jpg?s=612x612&w=0&k=20&c=fwnkpYROOYgR90Bk6qHfrn-NKkWVX9TCM_A9qiF4rAM=" alt="Mekong river initiative" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolios;