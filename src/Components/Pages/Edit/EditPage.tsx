import { Link } from "react-router-dom";
import Players from "./Player/Players";

import { Card, Container } from "react-bootstrap";

import classes from "./EditPage.module.css";
import Settings from "./Settings/Settings";
import Match from "./Info/Match";
import { useAppSelector } from "../../../hooks";

const EditPage: React.FC = () => {
    const currentWave = useAppSelector((state) => state.editMatchData.currentWave);
    const currentBestOf = useAppSelector((state) => state.editMatchData.currentBestOf);
    const currentPool = useAppSelector((state) => state.editMatchData.currentPool);
    const currentRound = useAppSelector((state) => state.editMatchData.currentRound);
    const playerList = useAppSelector((state) => state.editPlayerData.playerList);

    const generatePlayerData = () => {
        let playerData = [];
        for (let index = 0; index < playerList.length; index++) {
            const element = playerList[index];
            playerData.push({
                name: element.name.toString(),
                id: element.id.toString(),
                score: element.score.toString(),
            })      
        }
        return playerData;
    }

    const generateMatchData = () => {      
        return {
            currentPool: currentPool.toString(),
            currentBestOf: currentBestOf.toString(),
            currentWave: currentWave.toString(),
            currentRound: currentRound.toString(),
        }
    }

    const onUpdateHandler: any = () => {
        const playerData = generatePlayerData();
        const matchData = generateMatchData();
        const data = {
            playerData,
            matchData
        }
        const dataJSON = JSON.stringify(data);
        localStorage.setItem("overlayData", dataJSON);
        localStorage.setItem("lastUpdate", Date.now().toString())
    }

    return (
        <Container fluid>
            <Container className="p-2">
                <Link to="/welcome" className="debug-button mr-2">Back</Link>
            </Container>
            <Container className="p-2">
                <Card body className={`centered dark-theme-bg ${classes.content}`}>
                    <Players onUpdate={onUpdateHandler} />
                    <Match />
                    <Settings />
                </Card>
            </Container>
        </Container>
    );
}

export default EditPage;