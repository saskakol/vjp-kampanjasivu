import { useState } from "react";
import Button from "../components/Button";
import classNames from "classnames";




const Form = (props) => {

    const initialFormState = {firstName: "", lastName: "", email: "", comment: "", submitted: false, errorFields: []}
    const [formState, setFormState] = useState(initialFormState)
    

    const handleSubmit = (setComments) => {

        // Check that required fields are filled
        if (formState.firstName !== "" && formState.lastName !== "" && formState.email !== "") {

            // Check if the user entered a comment
            if (formState.comment !== "") {

                // Create id to be used to identify a potentially created comment
                const id = Date.now()
            
                // Pass form state up to parent if a comment was entered
                props.commentHook([...props.currentState, {id: id, name: formState.firstName, text: formState.comment, reactions: []}])
            }

            // Clear fields
            setFormState({...initialFormState, submitted: true})

        } else {

            let errorFields = []

            if (formState.firstName === "") {
                errorFields.push('firstName')
            }  

            if (formState.lastName === "") {

                errorFields.push('lastName')
            }  

            if (formState.email === "") {
                errorFields.push('email')
            }  

            setFormState({...formState, errorFields: errorFields})
        }
    }


    return (

        formState.submitted ? 
        <div className="petition-after-submit">
            <h2 className="item-title blue-text">Kiitos, kun tuet opiskelijaliikettä!</h2>
            <p className="body-text blue-text">Allekirjoituksesi on merkityksellinen askel kohti muutosta ja parempaa opiskelijoiden tukea. Yhdessä voimme vaikuttaa päätöksentekijöihin ja luoda todellisia parannuksia opiskelijoiden hyvinvointiin, taloudellisen tukeen, opinto-ohjaukseen ja osallistumismahdollisuuksiin!</p>
        </div> :

        <div className="petition-form">
            <div className="petition-form-name">

                <input type="text" className={classNames('input-field', formState.errorFields.includes('firstName') ? 'error-field' : '')} placeholder="Etunimi*" 
                    value={formState.firstName} 
                    onChange={(e) => {setFormState({...formState, firstName: e.target.value})}}
                    required
                />

                <input type="text" className={classNames('input-field', formState.errorFields.includes('lastName') ? 'error-field' : '')} placeholder="Sukunimi*" 
                    value={formState.lastName}
                    onChange={(e) => {setFormState({...formState, lastName: e.target.value})}}
                    required
                />

            </div>

            <input type="email" className={classNames('input-field', formState.errorFields.includes('email') ? 'error-field' : '')} placeholder="Sähköposti*" 
            value={formState.email}
            onChange={(e) => {setFormState({...formState, email: e.target.value})}}
            required/>

            <label htmlFor="comment-field" className="body-text blue-text">Voit myös lisätä omakohtaisen kokemuksesi opiskelijoiden tuesta tähän:</label>
            <textarea id="comment-field" className="input-field multiline-field" placeholder="Kokemuksesi" 
            value={formState.comment}
            onChange={(e) => {setFormState({...formState, comment: e.target.value})}}
            />
            <Button type="cta-button" text="Allekirjoita" onClick={handleSubmit}/>
        </div>
        
    );
}

export default Form;