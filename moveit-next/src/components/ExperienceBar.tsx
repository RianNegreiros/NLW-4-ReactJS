import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengeContext';
import  '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengeContext);

  const percentToNxtLevel = Math.round(currentExperience * 100 / experienceToNextLevel);

  return (
    <header className="experienceBar">
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNxtLevel}` }} />

        <span className="currentExperience" style={{ left: `${percentToNxtLevel}` }}>
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </header>
  );
}
