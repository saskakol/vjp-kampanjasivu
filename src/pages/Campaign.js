import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Campaign = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div className="container campaign-container">
                <h1 className="item-title page-title blue-text">Tavoitteemme</h1>
                <p className="body-text blue-text">Opiskelijat joutuvat kantamaan raskasta opiskelutaakkaa, kärsivät mielenterveysongelmista, kohtaavat taloudellisia vaikeuksia ja saavat puutteellista tukea. Tähän on saatava muutos. "Oikeus opiskella" -kampanja on syntynyt vastauksena opiskelijoiden kriittiseen tilanteeseen. </p>
            </div>

            <div className="container info-container">
                <h2 className="item-title">Opiskelijoiden hyvinvointi etusijalle</h2>
                <ul>
                    <li className="body-text">Lisätään matalan kynnyksen mielenterveyspalveluiden saatavuutta</li>
                    <li className="body-text">Toteutetaan terapiatakuu</li>
                </ul>

                <h2 className="item-title">Taloudellinen tuki kuntoon</h2>
                <ul>
                    <li className="body-text">Vähennetään opintotuen lainapainoitteisuutta</li>
                    <li className="body-text">Tehdään 100€ tasokorotus opintorahaan</li>
                    <li className="body-text">Kevennetään opintotuen tulorajoja</li>
                </ul>

                <h2 className="item-title">Ohjausta opintopolulle</h2>
                <ul>
                    <li className="body-text">Tarjotaan enemmän henkilökohtaista opinto-ohjausta ja urasuunnittelua</li>
                    <li className="body-text">Luodaan mentorointiohjelmia, joissa opiskelijat saavat tukea ja ohjausta kokeneilta opiskelijoilta tai ammattilaisilta omien tavoitteidensa saavuttamiseksi.</li>
                </ul>

                <Button type="cta-button" text="Allekirjoita vetoomus" onClick={() => {navigate('/vetoomus'); window.scrollTo(0, 0);}}/>
            </div>
        </div>
    );
}

export default Campaign;