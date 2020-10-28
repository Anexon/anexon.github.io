import React from "react";
import "./knowledge-areas.scss";
import { Text } from "../../containers/Language";
import SpecializationCard from "../specialization-card/SpecializationCard";
function KnowledgeAreas() {
  return (
    <div className="knowledge-areas">
      <div className="title">
        <h2>
          <Text tid="knowledgeAreas"></Text>
        </h2>
        <p>
          Como manager de operaciones me encanta estar en todo, pero hay algunas áreas que me apasionan...
        </p>
      </div>
      <div className="specialization-carrousel">
        <SpecializationCard title="Desarrollo" description="Una descripción de porqué me apasiona o que cosas se hacen en este área. Porque me mola mucho y quiero dedicarle más tiempo." imgUrl="/resources/develop.svg"></SpecializationCard>
        <SpecializationCard title="Administración de Empresas" description="Una descripción de porqué me apasiona o que cosas se hacen en este área. Porque me mola mucho y quiero dedicarle más tiempo." imgUrl="/resources/business_administration.svg" highlighted="true"></SpecializationCard>
        <SpecializationCard title="Análisis de Datos" description="Una descripción de porqué me apasiona o que cosas se hacen en este área. Porque me mola mucho y quiero dedicarle más tiempo." imgUrl="/resources/data_analytics.svg"></SpecializationCard>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/organization.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@austindistel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Austin Distel
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>
            <Text tid="businessAdministrationTitle"></Text>
          </h1>
          <Text tid="businessAdministrationDescription"></Text>
          <br></br>
          <br></br>
          <Text tid="businessAdminIntro"></Text>
          <ul>
            <li>
              <Text tid="businessItem1Title"></Text>
            </li>
            <Text tid="businessItem1Description"></Text>
            <li>
              <Text tid="businessItem2Title"></Text>
            </li>
            <Text tid="businessItem2Description"></Text>
            <li>
              <Text tid="businessItem3Title"></Text>
            </li>
            <Text tid="businessItem3Description"></Text>
            <li>
              <Text tid="businessItem4Title"></Text>
            </li>
            <Text tid="businessItem4Description"></Text>
            <li>
              <Text tid="businessItem5Title"></Text>
            </li>
            <Text tid="businessItem5Description"></Text>
          </ul>
        </div>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/data-analyst.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@kmuza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Carlos Muza
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>
            <Text tid="dataAnalystTitle"></Text>
          </h1>
          <Text tid="dataAnalystDescription"></Text>
          <br></br>
          <br></br>
          <Text tid="dataAnalystIntro"></Text>
          <ul>
            <li>
              <Text tid="dataItem1Title"></Text>
            </li>
            <Text tid="dataItem1Description"></Text>
            <li>
              <Text tid="dataItem2Title"></Text>
            </li>
            <Text tid="dataItem2Description"></Text>
            <li>
              <Text tid="dataItem3Title"></Text>
            </li>
            <Text tid="dataItem3Description"></Text>
            <li>
              <Text tid="dataItem4Title"></Text>
            </li>
            <Text tid="dataItem4Description"></Text>
          </ul>
        </div>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/growth.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@campaign_creators?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Campaign Creators
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>
            <Text tid="growthTitle"></Text>
          </h1>
          <Text tid="growthDescription"></Text>
          <br></br>
          <br></br>
          <Text tid="growthIntro"></Text>
          <ul>
            <li>
              <Text tid="growthItem1Title"></Text>
            </li>
            <Text tid="growthItem1Description"></Text>
            <li>
              <Text tid="growthItem2Title"></Text>
            </li>
            <Text tid="growthItem2Description"></Text>
            <li>
              <Text tid="growthItem3Title"></Text>
            </li>
            <Text tid="growthItem3Description"></Text>
          </ul>
        </div>
      </div>
      <div className="knowledge-section">
        <figure className="section-header">
          <div
            className="section-photo"
            style={{ backgroundImage: "url('/resources/developer.jpg')" }}
          ></div>
          <figcaption>
            Photo by{" "}
            <a href="https://unsplash.com/@fatosi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Fatos Bytyqi
            </a>{" "}
            on <a href="https://unsplash.com/">Unsplash</a>
          </figcaption>
        </figure>
        <div className="section-body">
          <h1>
            <Text tid="devFullstackTitle"></Text>
          </h1>
          <Text tid="devFullstackDescription"></Text>
          <br></br>
          <br></br>
          <Text tid="devFullstackIntro"></Text>
          <ul>
            <li>
              <Text tid="devFullstackItem1Title"></Text>
            </li>
            <Text tid="devFullstackItem1Description"></Text>
            <li>
              <Text tid="devFullstackItem2Title"></Text>
            </li>
            <Text tid="devFullstackItem2Description"></Text>
            <li>
              <Text tid="devFullstackItem3Title"></Text>
            </li>
            <Text tid="devFullstackItem3Description"></Text>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeAreas;
