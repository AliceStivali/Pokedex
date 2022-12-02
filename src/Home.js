import { useState } from "react";
import { useFetch } from "./useFetch";

export function Home() {
  const [value, setValue] = useState("");
  const [pokemonName, setPokemonName] = useState("pikachu");
  const { data, loading, error } = useFetch(pokemonName);
  const [showFront, setShowFront] = useState(true);

  function handleInput(event) {
    const value = event.target.value;
    setValue(value);
  }
  function handleFetch() {
    setPokemonName(value);
    let mySound = new Audio("./caught-sound.wav");
    mySound.play();
  }
  function changeImageView() {
    if (showFront === true) {
      setShowFront(false);
    } else {
      setShowFront(true);
    }
    let mySound = new Audio("./arrow-sound.wav");
    mySound.play();
  }

  return (
    <div className="container border">
      <div className="border outer-left">
        <div className="lights-container">
          <div className="light"></div>
          <div className="lights">
            <div className="red-light"></div>
            <div className="yellow-light"></div>
            <div className="green-light"></div>
          </div>
        </div>
        <div className="left-side-white border">
          <div className="left-side border">
            {error && <div>Error</div>}
            {loading && <div>Loading</div>}
            {data && (
              <div>
                <div className="name-pic-container">
                  <div className="pokemon-name">{data.name}</div>
                  {showFront && (
                    <div className="img-container">
                      <img
                        src={data.sprites.front_default}
                        alt=""
                        width={"170px"}
                      />
                    </div>
                  )}
                  {!showFront && (
                    <div className="img-container">
                      <img
                        src={data.sprites.back_default}
                        alt=""
                        width={"170px"}
                      />
                    </div>
                  )}
                  <button onClick={changeImageView} className="rotate-button">
                    Rotate
                    <img
                      src="./rotating-circular-arrow.png"
                      alt=""
                      width={"20px"}
                    />
                  </button>
                </div>
                <div className="lines-margin">
                  Type: {data.types[0].type.name}
                </div>
                <div className="lines-margin">Height: {data.height}</div>
                <div className="lines-margin">Weight: {data.height}</div>
                <div className="lines-margin">
                  Moves: {data.moves[0].move.name}, {data.moves[1].move.name},{" "}
                  {data.moves[2].move.name}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="border outer-right">
        <div className="right-side-white border">
          <div className="right-side border">
            <div className="search-pokemon">Search Pokemon</div>
            <input
              type="text"
              placeholder="Pikachu"
              onChange={handleInput}
              className="input-search lines-margin"
            ></input>
            <button onClick={handleFetch} className="go-button">
              Go!
            </button>
          </div>
        </div>
        <div className="keyboard-flex-container">
          <div className="keyboard">
            <div className="keyboard-row">
              <div className="keyboard-box keyboard-1"></div>
              <div className="keyboard-box"></div>
              <div className="keyboard-box"></div>
              <div className="keyboard-box"></div>
              <div className="keyboard-box keyboard-2"></div>
            </div>
            <div className="keyboard-row">
              <div className="keyboard-box keyboard-4"></div>
              <div className="keyboard-box"></div>
              <div className="keyboard-box"></div>
              <div className="keyboard-box"></div>
              <div className="keyboard-box keyboard-3"></div>
            </div>
          </div>
          <div className="directional">
            <div>
              <div className="dir-red"></div>
              <div className="dir-blue"></div>
              <div className="dir-red"></div>
            </div>
            <div>
              <div className="dir-blue"></div>
              <div className="dir-blue"></div>
              <div className="dir-blue"></div>
            </div>
            <div>
              <div className="dir-red"></div>
              <div className="dir-blue"></div>
              <div className="dir-red"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
