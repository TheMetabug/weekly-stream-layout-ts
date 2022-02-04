import { Fragment } from "react";
import { Link } from "react-router-dom";
import PlayerData from "../../../Models/playerData";
import classes from "./EditPage.module.css";

const DUMMY_DATA = [new PlayerData(1), new PlayerData(2)]

const EditPage: React.FC = () => {

    return (
        <Fragment>
            <div className="debug-div">
                <div>
                    <Link className='debug-button' to="/welcome">Back</Link>
                </div>      
            </div>
            <div className="centered">       
            </div>
        </Fragment>
    );
}

export default EditPage;