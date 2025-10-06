import "./Repertoire.css";
import downtownabby from "../assets/films/downtownabby.jpg";

function Repertoire() {
  return (
    <div className="repertoire">
      <h2 className="repertoireTitle">
        Repertuar <span>na dzień 23 września 2025</span>
      </h2>
      <div className="repertoireContainer">
        <div className="repertoireRow">
          <div className="repertoireCol">
            <div className="repertoireCard">
              <div className="repertoireCardRow">
                <div className="repertoireColPoster">
                  <div className="repertoirePoster">
                    <a href="#">
                      <img src={downtownabby} alt="plakat downtown abby" />
                    </a>
                  </div>
                </div>
                <div className="repertoireColBody">
                  <div className="repertoireCardBody">
                    <a href="#">
                      <strong>DOWNTON ABBEY. WIELKI FINAŁ</strong>
                    </a>
                    <p className="filmGenreTags">
                      obyczajowy
                      <em className="tagAge">od lat 13</em>
                    </p>
                    <p className="filmDescription">
                      <small>
                        Finałowa część opowiada o losach rodziny i posiadłości
                        Anglii w latach 30. XX wieku, kiedy Lady Mary staje w
                        centrum publicznego skandalu, a rodzina boryka się z
                        problemami finansowymi. Crawleyowie...
                      </small>
                    </p>
                  </div>
                </div>
                <div className="repertoireCardFooter">
                  <div className="repertoireRow">
                    <div className="repertoireCol">
                      <strong className="repertoireTicket">KUP BILET</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Repertoire;
