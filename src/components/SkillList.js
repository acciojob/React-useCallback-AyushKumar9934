import React from 'react'

const SkillList = ({ skills, onDelete }) => {
    return (
      <ul>
        {skills.map((skill, idx) => (
          <li key={idx} id={`skill-number-${idx}`} onClick={() => onDelete(skill)}>
            {skill}
          </li>
        ))}
      </ul>
    );
  };

export default SkillList