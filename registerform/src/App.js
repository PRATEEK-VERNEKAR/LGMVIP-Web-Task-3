import './App.css';
import {useState} from 'react';

function App() {
  const [studList,setStudList]=useState([])
  const [tempStud,setTempStud]=useState({name:"",email:"",website:"",image:"",gender:"",skills:[]})


  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;

    if(name==='skills'){
      let newSkills=tempStud.skills;

      console.log(newSkills);
      console.log(tempStud.skills.includes(value))
      if(tempStud.skills.includes(value)){
        const index=tempStud.skills.indexOf(value);
        newSkills.splice(index,1);
        console.log(newSkills);
      }        
      else{
        newSkills.push(value);
      }
      setTempStud({...tempStud,[name]:newSkills})
    }
    else{
      setTempStud({...tempStud,[name]:value});
    }
  }

  const handleClear=(e)=>{
    e.preventDefault();
    setTempStud({name:"",email:"",website:"",image:"",gender:"",skills:[]})
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(tempStud.name && tempStud.email && tempStud.website && tempStud.image && tempStud.gender){
      setStudList([...studList,tempStud]);
    }
  }

  return (
    <div className="App">
      <form className='Form'>
        <h1>Enter Student Details</h1>
        <div className='inputRow inputTag'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' onChange={handleChange} value={tempStud.name}></input>
        </div>
        <div className='inputRow inputTag'>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' onChange={handleChange} value={tempStud.email}></input>
        </div>
        <div className='inputRow inputTag'>
          <label htmlFor='website'>Website</label>
          <input type='text' name='website' id='website' onChange={handleChange} value={tempStud.website}></input>
        </div>
        <div className='inputRow inputTag'>
          <label htmlFor='image'>Image</label>
          <input type='text' name='image' id='image' onChange={handleChange} value={tempStud.image}></input>
        </div>
        <div className='inputRow'>
          <p>Gender</p>
          <div>
            <div>
              <input type='radio' name='gender' id='gender_male' onClick={handleChange} value='Male'></input>
              <label htmlFor='gender_male'>Male</label>
            </div>
            <div>
              <input type='radio' name='gender' id='gender_female' onClick={handleChange} value='Female'></input>
              <label htmlFor='gender_female'>Female</label>
            </div>
          </div>
        </div>
        <div className='inputRow'>
          <p>Skills</p>
          <div className='skills_checkbox'>
            <div className='skills_ele'>
              <input type='checkbox' name='skills' id='skills_html' onClick={handleChange} value='HTML'></input>
              <label htmlFor='skills_html'>HTML</label>
            </div>
            <div className='skills_ele'>
              <input type='checkbox' name='skills' id='skills_css' onClick={handleChange} value='CSS'></input>
              <label htmlFor='skills_css'>CSS</label>
            </div>
            <div className='skills_ele'>
              <input type='checkbox' name='skills' id='skills_java' onClick={handleChange} value='JAVA'></input>
              <label htmlFor='skills_java'>JAVA</label>
            </div>
          </div>
        </div>
        <div className='but_sec'>
          <button onClick={handleClear}>Clear</button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
      <div className='Window'>
        <h1>Enrolled Students</h1>
          <div className='display_header'>
            <div className='description desc-head'>Description</div>
            <div className='image img-head'>Image</div>
          </div>
          <div className='display_stud'>
            {studList.map((data ,index)=>{
              return(
                <div className='inner_display_stud' key={index} >
                  <div className='description desc-child'>
                    <p>{data.name}</p>
                    <p>{data.gender}</p>
                    <p>{data.email}</p>
                    <p>{data.website}</p>
                    <p>{data.skills}</p>
                  </div>
                  <div className='image img-child'>
                    <img src={data.image} alt='Profile'></img>
                    {/* <img src={"https://images.unsplash.com/photo-1675703236969-e4ce4d298618?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1928&q=80"} height='120px' width='130px' alt='Profile'></img> */}
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </div>
  );
}

export default App;
