import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import "./portfolio-page.scss";
import { Text, defaultLanguage } from "../../containers/Language";
import ArticleReference from "../../components/article-reference/article-reference";
import Footer from "../../components/footer/Footer";

function PortfolioPage(props: any) {
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const articles = require("../../resources/articles/articles.json");

  useEffect(() => {
    props.githubApi.getRepos().subscribe((res: any) => {
      setRepos(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="page">
      <h1>
        <Text tid="portfolioArticlesHeader"></Text>
      </h1>
      <p>Startups, tecnología, herramientas, agile, métricas, negocio y otras reflexiones...</p>
      <div className="posts-container">
        {articles.map((article: any) => {
          let i18nArticle = {} as any;
          Object.keys(article).forEach((articleKey: string) => {
            i18nArticle[articleKey] = article[articleKey][defaultLanguage];
          });

          return (
            <ArticleReference articleData={i18nArticle}></ArticleReference>
          );
        })}
      </div>
      <h1>
        <Text tid="portfolioReposHeader"></Text>
      </h1>
      <p>Un workspace en el ir iniciando proyectos, tests y otras cosas de laboratorio...</p>
      <div className="project-cards-container">
        {isLoading && (
          <div className="loader">
            <p>
              <Text tid="portfolioLoadingRepos"></Text>
            </p>
            <div className="loader-positioning">
              <div className="lds-dual-ring"></div>
            </div>
          </div>
        )}
        {!isLoading &&
          repos.map((repository: any, index) => {
            return (
              <div className="project-card" key={index}>
                <span style={{ float: "right" }}>
                  Última actualización:{" "}
                  <Moment format="DD/MM/YYYY" date={repository.updated_at} />
                </span>
                <br></br>
                <h1>
                  <a
                    href={repository.repository_url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {repository.project_name}
                  </a>
                </h1>
                <p>{repository.description}</p>
                {!!repository?.live_demo_url && (
                  <p>
                    <a
                      href={repository.live_demo_url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Live Demo
                    </a>
                  </p>
                )}
                <div className="tags-container">
                  {repository.tags.map((tag: string, tagIndex: number) => {
                    return <span key={tagIndex}>#{tag}</span>;
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default PortfolioPage;
