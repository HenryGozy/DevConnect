import { useRef, useState } from "react"

export default function ProfileForm() {
    const [skillList, setSkillList] = useState<string[]>([])
    const skillName = useRef(null)
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
        setSkillList(prev => [...prev , value.toUpperCase()])
        }

    }
    function remove(listItem:string){
      setSkillList(prev => prev.filter(list => list !== listItem ))  
    }
    return (
        <>
            <form action="" className="ProfileForm">
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Henry" id="name" />
                </div>

                <div>
                    <label htmlFor="skill">skills</label>
                    <div className="inputDivSkill">
                        <input type="text" placeholder="Henry" id="skill" ref={skillName} />
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
                    <label htmlFor="bio">Name</label>
                    <textarea name="" id="bio"></textarea>
                </div>

                <button type="submit" className="Submit">submit your data</button>
            </form>
        </>
    )
}