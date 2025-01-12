import { FormEvent, useRef, useState } from "react"

type Profile = {
    name: string;
    skills: string[];
    bio: string;
    website: string;
  };
export default function ProfileForm({addNewList,}:{addNewList: (profile: Profile) => void;}){
   
    const [skillList, setSkillList] = useState<string[]>([])
    const [ProfileData , setProfileData] = useState<{name:string , skills:string[] , bio: string ,website:string}>({name:"",skills:[],bio:"",website:""})
    const skillName = useRef(null)
    const formName = useRef<HTMLInputElement | null>(null)
    const formWebsite = useRef<HTMLInputElement | null>(null)
    const formBio = useRef <HTMLTextAreaElement | null>(null)
    function submitSkill(e:React.MouseEvent){   
        e.preventDefault()
        if(skillName.current){
        let value = (skillName.current as HTMLInputElement).value
        if(value.trim()===""){
            alert("invalid-value\n input value a correct value")
            return ;    
        }

        if(skillList.includes(value.toUpperCase())){
            alert("already chosen value")
            return
        }
        setSkillList(prev => [...prev , value.toUpperCase()]);

        (skillName.current as HTMLInputElement).value = ''
        }

    }
    function remove(listItem:string){
      setSkillList(prev => prev.filter(list => list !== listItem ))  
    }

    function submitProfileForm(e:React.FormEvent){
        e.preventDefault()
        if(formName.current && formBio.current && formWebsite.current){
        const nameData = formName.current.value
        const newBio = formBio.current.value
        const newWebsite = formWebsite.current.value
        setProfileData(prev => ({...prev , name:nameData , bio:newBio , skills:skillList,website:newWebsite}))
        addNewList({name:nameData , bio:newBio , skills:skillList,website:newWebsite})
    
         // Reset the form
      setSkillList([]);
      formName.current.value = "";
      formBio.current.value = "";
      formWebsite.current.value = "";
        }

        else{
            alert('invalid form field')
        }

       
    }
    return (
        <>
            <form action="" className="ProfileForm" onSubmit={submitProfileForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Henry" id="name" ref={formName} />
                </div>

                <div>
                    <label htmlFor="skill">Skills</label>
                    <div className="inputDivSkill">
                        <input type="text" placeholder="Eg: React" id="skill" ref={skillName} />
                        <button className="submitSkll" onClick={submitSkill}>
                            <i className="fa-solid fa-arrow-right"></i>
                        </button>
                    </div>
                    <div className="skill-list">
                        <ul>
                            {skillList.map(list => <li>{list}  <span  onClick={()=>remove(list)}><i className="fa-solid fa-xmark"></i></span></li>)}
                        </ul>
                    </div>
                </div>

                <div>
                    <label htmlFor="website">Website</label>
                    <input type="text" placeholder="github.com" id="website" ref={formWebsite} />
                </div>


                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea name="" id="bio" ref={formBio}></textarea>
                </div>

                <button type="submit" className="Submit">submit your data</button>
            </form>
        </>
    )
}