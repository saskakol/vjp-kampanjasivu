import Button from '../components/Button'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="container hero-container">
                <span className="hero-subtitle item-title blue-text">Turvataan opiskelijoille</span>
                <h1 className="hero-title blue-text">Oikeus <br />opiskella</h1>
                <Button type="cta-button" text="Allekirjoita vetoomus" />
            </div>

            <div className='container info-container'>
                <h2 className='item-title'>Opiskelijoiden tuen tilanne on kriittinen.</h2>
                <p className='body-text'>Opiskelijat kohtaavat päivittäin puutteellisia mielenterveyspalveluita, riittämätöntä taloudellista tukea ja liian vähäistä opinto-ohjausta. Siksi on aika tehdä reformeja opiskelijoiden tuen uudistamiseksi.</p>

                <span className='item-title'>Katso video</span>
                <span className='body-text'>Rafaelin kokemuksista</span>

                <video controls className='video-player'>
                    <source src="https://users.aalto.fi/~kolehms10/vjp_videotuotanto_final.mp4" type="video/mp4" />
                </video>
                <Button onClick={() => {navigate('/tavoitteet'); window.scrollTo(0, 0);}} type="info-button" text="Lue tavoitteistamme"/>
            </div>
        </div>
    );
}

export default Home;