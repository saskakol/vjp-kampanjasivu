import Button from '../components/Button'

const Home = () => {
    return (
        <div>
            <div className="container hero-container">
                <h2 className="hero-subtitle item-title blue-text">Turvataan opiskelijoille</h2>
                <h1 className="hero-title blue-text">Oikeus <br />opiskella</h1>
                <Button type="cta-button" text="Allekirjoita vetoomus" />
            </div>

            <div className='container info-container'>
                <h3 className='item-title'>Opiskelijoiden mielenterveystilanne on kriittinen.</h3>
                <p className='body-text'>Siksi on aika tehdä reformeja opiskelijoiden tuen uudistamiseksi.</p>

                <h3 className='item-title'>Katso video</h3>
                <p className='body-text'>Rafaelin kokemuksista</p>

                <video width="480" height="270" controls>
                    <source src="https://users.aalto.fi/~kolehms10/vjp_videotuotanto_final.mp4" type="video/mp4" />
                </video>
                <Button type="info-button" text="Lue tavoitteistamme"/>
            </div>
        </div>
    );
}

export default Home;