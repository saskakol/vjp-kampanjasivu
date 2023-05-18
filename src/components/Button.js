import classNames from "classnames";

const Button = (props) => {
    return (
        <button className={classNames('button', props.type)}>{props.text}</button>
    );
};


export default Button