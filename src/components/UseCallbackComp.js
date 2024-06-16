import React,{useCallback,useState} from 'react'
import SkillList from './SkillList';


const UseCallbackComp = () => {
    const [skills, setSkills] = useState(['HTML', 'CSS', 'JavaScript', 'React']);
    const [input, setInput] = useState('');
  
    const handleAdd = useCallback(() => {
      if (input && !skills.includes(input)) {
        setSkills([...skills, input]);
        setInput('');
      }
    }, [input, skills]);
  
    const handleDelete = useCallback(
      (skillToDelete) => {
        setSkills(skills.filter((skill) => skill !== skillToDelete));
      },
      [skills]
    );
  
    const handleInputChange = useCallback((event) => {
      setInput(event.target.value);
    }, []);
  
    return (
      <div>
        <h1 id="heading">Skills</h1>
        <input id="skill-input" value={input} onChange={handleInputChange} />
        <button id="skill-add-btn" onClick={handleAdd}>
          Add Skill
        </button>
        <SkillList skills={skills} onDelete={handleDelete} />
      </div>
    );
  };
  
  export default UseCallbackComp;