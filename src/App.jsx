
import UseFetch from "./Components/UseFetch"
import {useEffect, useState} from 'react'
import {NextUIProvider} from "@nextui-org/react";
import {Switch} from "@nextui-org/react";
import {MoonIcon} from "./Components/MoonIcon";
import {SunIcon} from "./Components/Sunicon";


function App() {
 
const[theme,setTheme]=useState(()=>{
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "ligth";
});
useEffect(()=>{
  if (theme === "dark") {
  document.querySelector("html").classList.add("dark")
}else {
  document.querySelector("html").classList.remove("dark")
  
}

},[theme])
const handleChangeTheme=()=>{
setTheme(prevTheme => prevTheme === "ligth" ? "dark":"ligth")
}
  return (
    <NextUIProvider className="w-full h-screen bg-gradientBg bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center px-4 lg:px-0">
 
<Switch
      defaultSelected
      onClick={handleChangeTheme}
      color="secondary"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
       className=" w-1/2 h-1/2 absolute top-0 left-0" ></Switch>
      <UseFetch className="w-full max-w[450px] bg-black/20 min-h-[584px] text-white backdrop-blur-[32px] rounded-[32px]"/>
   
    </NextUIProvider>
    )
}

export default App
