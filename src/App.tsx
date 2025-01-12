import { useState } from "react"
import "./App.css"
import ProfileForm from "./component/ProfileForm.tsx"
import SearchFilter from "./component/SearchFilter.tsx"
import ProfileList from "./component/ProfileList.tsx"

type ProfileType = {
  name: string;
  skills: string[];
  bio: string;
  website: string;
};

export default function App(){
  const [profiles,setProfile] = useState<ProfileType[]>([])

  function addNewList(profile:ProfileType){
    setProfile(prev => [...prev,profile])
  }
  return (
    <>
    <SearchFilter />
    <div className="mainWrap">
      <ProfileForm  addNewList={addNewList} />
      <ProfileList profiles={profiles}/>
    </div> 
    </>
  )
}