import classNames from "classnames";

const Button = (props) => {
    return (
        <button className={classNames('button', props.type)} onClick={props.onClick}>{props.text}</button>
    );
};


export default Button