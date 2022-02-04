import PlayerData from '../../../../Models/playerData';
import Card from '../../../UI/Card';
import classes from './PlayerCard.module.css';

const playerBorderColors: string[] = [
    '', // 0 is null so no colors
    'red',
    'blue',
    'green',
    'yellow'
];

const PlayerCard: React.FC<{data: PlayerData}> = (props) => {
    const playerData = props.data;

    const playerBorderColor = playerBorderColors[playerData.id];

    return (
        <li>
            <Card className={classes.player} borderColor={playerBorderColor}>
                <p>{playerData.name}</p>
            </Card>
        </li>
    );
}

export default PlayerCard;