import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './component-styles.css'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef} from 'react'
import classNames from 'classnames'

const ReactionPicker = (props) => {

    const [opened, setOpened] = useState(false)
    const [visible, setVisible] = useState(false)

    const handleReactionSelect = (reaction) => {
        props.setReactions([...props.commentReactions, reaction])
        setOpened(false);
        setVisible(false)
    }

    const pickerRef = useRef(null)

    const handlePickerOpen = () => {
        
        if (!opened) {
            setOpened(true);
            pickerRef.current.addEventListener("transitionend", (e) => {
                // show reaction options only after the transition has completed to avoid flickering
                setVisible(true)
            }, {once: true})
        } else {
            setVisible(false)
            setOpened(false)
        }
        
    }

    return (
        <div className={classNames("reaction-picker", opened ? 'opened' : '')} ref={pickerRef}>
            <FontAwesomeIcon icon={faPlus} size='s' className='add-reaction' onClick={handlePickerOpen}/>
            <div className={classNames('picker-reactions', visible ? 'visible' : '')}>
                <span className="reaction-button" onClick={(e) => {handleReactionSelect(e.target.innerHTML)}}>😢</span>
                <span className="reaction-button" onClick={(e) => {handleReactionSelect(e.target.innerHTML)}}>😲</span>
                <span className="reaction-button" onClick={(e) => {handleReactionSelect(e.target.innerHTML)}}>😡</span>
            </div>
        </div>
    )
}

export default ReactionPicker