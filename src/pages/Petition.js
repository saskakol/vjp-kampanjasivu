import { useState } from "react";
import CommentView from "../components/CommentView";
import Form from "./Form";

const Petition = () => {

    const initialComments = [
        {
            id: 1684487847179,
            name: "Rafael",
            text: "Taakka opintolainan nostamisesta jo toisella asteella vaikuttaa edelleen elämääni ja tulevaisuuteeni.",
            reactions: ["😲", "😢"]
        },

        {
            id: 1684487853209,
            name: 'Anna',
            text: 'Opintojeni aikana olen kokenut jatkuvaa stressiä ja ahdistusta ilman riittävää mielenterveys- ja tukipalveluiden saatavuutta.',
            reactions: ['😢']
        },
        {
            id: 1684487853903,
            name: 'Markus',
            text: 'Taloudelliset vaikeudet rajoittavat mahdollisuuksiani keskittyä opiskeluun täysipainoisesti ja luovat lisää stressiä ja paineita.',
            reactions: ['😡']
        },
        {
            id: 1684487854407,
            name: 'Sofia',
            text: "Opinto-ohjauksen puute jättää minut pähkäilemään tulevaisuuden suunnitelmiani yksin, ilman tarvittavaa tukea ja ohjausta.",
            reactions: ['😲']
        }
    ];

    const [commentState, setComments] = useState(initialComments);

    return (
        <div>
            <div className="container petition-container">
                <h1 className="item-title blue-text page-title">Allekirjoita vetoomus</h1>
                <p className="body-text blue-text">Allekirjoita vetoomus opiskelijoiden hyvinvoinnin puolesta! Turvataan yhdessä jokaiselle opiskelijalle Oikeus opiskella.</p>
                <Form currentState={commentState} commentHook={setComments}/>
            </div>

            <div className="container info-container">
                <h2 className="item-title">Kokemuksia</h2>
                <p className="body-text">Kuinka opiskelijoiden tuki tänä päivänä toteutuu? Alta voit lukea opiskelijoiden omakohtaisia kokemuksia.</p>

                <CommentView comments={commentState} commentHook={setComments}/>
            </div>
        </div>
    );
}

export default Petition;