import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import "../styles/components/LevelUpModal.module.css";

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(ChallengesContext);

  return (
    <div className="overlay">
      <div className="container">
          <header>2</header>

          <strong>Parabéns</strong>
          <p>Você alcançou um novo level.</p>

          <button type="button" onClick={closeLevelUpModal}>
              <img src="/icons/close.svg" alt="Fechar modal"/>
          </button>
      </div>
    </div>
  );
}