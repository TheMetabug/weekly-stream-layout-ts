import classes from './Card.module.css';

const Card: React.FC<{
    className: string;
}> = (props) => {

    // Create css classes list
    const cssClasses: string[] = [
        classes.card,
        props.className
    ];

    return (
        <div className={cssClasses.join(' ')}>
            {props.children}
        </div>
    );
}

export default Card;