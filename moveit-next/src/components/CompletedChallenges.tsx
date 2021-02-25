import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import '../styles/components/CompletedChallenges.module.css'

export function CompletedChallenges() {
    const { challengesCompleted } = useContext(ChallengeContext)

    return (
        <div className="CompletedChallengesContainer">
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}