import React, { useState, useEffect } from "react";
import Style from "../../sass/default.module.scss";
import { InputOne } from "../../components/inputs";
import { SelectOne } from "../../components/selects";
import { ButtonOne } from "../../components/buttons";
import { ErrorMessage } from "../../components/errorMessage";
import { Main } from "../../components/main";

function Players() {
  const [namePlayer1, setNamePlayer1] = useState("");
  const [symbol, setSymbol] = useState(true);
  const [namePlayer2, setNamePlayer2] = useState("");
  const [errorPlayer1, setErrorPlayer1] = useState(false);
  const [errorPlayer2, setErrorPlayer2] = useState(false);

  useEffect(() => {
    localStorage.setItem("namePlayer1", "");
    localStorage.setItem("symbol", true);
    localStorage.setItem("namePlayer2", "");
  }, []);

  const saveInLocalStorage = () => {
    errorMessage();
    localStorage.setItem("namePlayer1", namePlayer1);
    localStorage.setItem("symbol", symbol);
    localStorage.setItem("namePlayer2", namePlayer2);
  };

  const errorMessage = () => {
    if (!namePlayer1) {
      setErrorPlayer1(true);
    }

    if (!namePlayer2) {
      setErrorPlayer2(true);
    }

    if (namePlayer1 && namePlayer2) {
      window.location.href = "/game";
    }
  };

  return (
    <Main>
      <div className={Style.globalBox}>
        <div className={Style.boxColumnCenter}>
          <div className={Style.boxCenter}>
            <label htmlFor="player1" className={Style.text}>
              Nome e simbolo do jogador 1:
            </label>
            <br />
            <InputOne
              id="player1"
              name="player1"
              type="text"
              value={namePlayer1}
              onChange={(e) => setNamePlayer1(e.target.value)}
              maxLength={4}
              placeholder="Nome jogador 1"
              aria-label="Nome jogador 1"
              aria-required="true"
              margin="10px 10px 0 0"
              className={Style.input}
            />
            <SelectOne
              value={symbol}
              onChange={(e) => setSymbol(e.target.value)}
              options={[
                { text: "X", value: true },
                { text: "O", value: false },
              ]}
              margin="10px 10px 0 0"
            />
            <ErrorMessage
              text="Informe o nome do jogador 1"
              display={errorPlayer1 ? "block" : "none"}
            />
          </div>
          <div className={Style.boxCenter}>
            <label htmlFor="player2" className={Style.text}>
              Nome do jogador 2:
            </label>
            <br />
            <InputOne
              id="player2"
              name="player2"
              type="text"
              value={namePlayer2}
              onChange={(e) => setNamePlayer2(e.target.value)}
              maxLength={4}
              placeholder="Nome jogador 2"
              aria-label="Nome jogador 2"
              aria-required="true"
              className={Style.input}
              margin="10px 0 0 0"
            />
            <br />
            <ErrorMessage
              text="Informe o nome do jogador 2"
              display={errorPlayer2 ? "block" : "none"}
            />
          </div>
          <ButtonOne
            text="Jogar"
            onClick={saveInLocalStorage}
            ariaLabel="Jogar"
            className={Style.text}
          />
        </div>
      </div>
    </Main>
  );
}

export default Players;
