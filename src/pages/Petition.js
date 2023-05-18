import CommentView from "../components/CommentView";
import Form from "./Form";

const Petition = () => {
    return (
        <div>
            <div className="container">
                <h2 className="item-title blue-text">Vetoomus</h2>
                <p className="body-text blue-text">Allekirjoita vetoomus opiskelijoiden  puolesta! Turvataan yhdessä jokaiselle opiskelijalle Oikeus opiskella.</p>
                <Form />
            </div>

            <div className="container info-container">
                <h3 className="item-title">Kokemuksia</h3>
                <p className="body-text">Kuinka opiskelijoiden tuki tänä päivänä toteutuu? Alta voit lukea opiskelijoiden omakohtaisia kokemuksia.</p>

                <CommentView />
            </div>
        </div>
    );
}

export default Petition;