import React, { Fragment } from "react";
import "./SpecializationCard.scss";
import { Text } from "../../containers/Language";

function SpecializationCard(params?: any) {

    return (
        <div className={`specialization-card-container show-on-scroll ${params.highlighted == "true" ? "highlighted" : ""}`}>
            <img src={`${params.imgUrl.split(".")[0]}${params.highlighted == "true" ? "_highlighted.svg" : ".svg"}`}></img>
            <h3>{params.title}</h3>
            <p>{params.description}</p>
        </div >
    );
}
export default SpecializationCard;
