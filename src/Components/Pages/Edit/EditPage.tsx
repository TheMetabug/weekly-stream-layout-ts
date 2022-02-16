import { Link } from "react-router-dom";
import Players from "./Player/Players";

import { Card, Container } from "react-bootstrap";

import classes from "./EditPage.module.css";
import Settings from "./Settings/Settings";
import Match from "./Info/Match";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { useEffect } from "react";
import { editMatchActions } from "../../../store/editMatchSlice";
import { editPlayerActions } from "../../../store/editPlayersSlice";

const EditPage: React.FC = () => {
    const dispatch = useAppDispatch();

    const currentWave = useAppSelector((state) => state.editMatchData.currentWave);
    const currentBestOf = useAppSelector((state) => state.editMatchData.currentBestOf);
    const currentPool = useAppSelector((state) => state.editMatchData.currentPool);
    const currentRound = useAppSelector((state) => state.editMatchData.currentRound);
    const playerList = useAppSelector((state) => state.editPlayerData.playerList);
  
    const useMountEffect = (func: any) => useEffect(func, []);

    // This handles data fetching from localstorage
    // TODO: fetch similiar data from actual database
    const fetchData = () => {
        console.log("fetch data from local storage");
        dispatch(editMatchActions.fetchData());
        dispatch(editPlayerActions.fetchData());
    }

    // Generate player data for JSON
    // TODO: create util class for these kind of calls
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

    // Generate match data for JSON
    // TODO: create util class for these kind of calls
    const generateMatchData = () => {      
        return {
            currentPool: currentPool.toString(),
            currentBestOf: currentBestOf.toString(),
            currentWave: currentWave.toString(),
            currentRound: currentRound.toString(),
        }
    }

    // Get data and send it to local storage
    // TODO: send it to database and automate sending onblur or something
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

    // Make sure use effect is used only once on arriving to page
    // This is used for initializing data when you refresh page
    useMountEffect(fetchData);

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