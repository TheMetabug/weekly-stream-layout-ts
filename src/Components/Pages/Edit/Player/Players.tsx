import PlayerData from "../../../../Models/playerData";
import PlayerCard from "./PlayerCard";
import Card from "../../../UI/Card";

const Players: React.FC<{playerList: PlayerData[]}> = (props) => {
    const playerList = props.playerList.map((playerData) => {
        return (
            <PlayerCard data={playerData} />
        );
    });
    
    return (
        <Card className="" borderColor="">
            <ul>
                {playerList}
            </ul>
        </Card>
    );
}

export default Players;