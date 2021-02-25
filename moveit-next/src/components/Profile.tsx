import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className="profileContainer">
            <img src="" alt=""/>
            <div>
                <strong>Rian Negreiros</strong>
                <p>
                    <img src="icons/level.svg" alt="level" />
                    level {level}
                </p>
            </div>
        </div>
    )
}