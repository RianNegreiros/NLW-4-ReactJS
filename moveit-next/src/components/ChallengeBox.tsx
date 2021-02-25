import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';

import '../styles/components/ChallegenBox.module.css'

export function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengeContext)

    return (
        <div className="chanllegenBoxContainer">
            { activeChallenge ? (
                <div className="challengeActive">
                    <header>Ganhe {activeChallenge.amount}</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <button
                        type="button"
                        className="challengeFailButton"
                        onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                        type="button"
                        className="challengeSucceededButton"
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className="challengNotActive">
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            ) }
        </div>
    );
}