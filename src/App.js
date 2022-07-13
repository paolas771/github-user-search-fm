import React from 'react'
import UserInfo from './Components/UserInfo'

export default function App() {
  const [colorTheme, setColorTheme] = React.useState(true)
  const [userNameInput, setUserNameInput] = React.useState({
    userName: ""
  })
  //state used to store final input 
  const [finalName, setFinalName] = React.useState("octocat")
  const [userInfo, setUserInfo] = React.useState('https://api.github.com/users/octocat')
  const [valid, setValid] = React.useState(true)

  React.useEffect(() => {  
    fetch(`https://api.github.com/users/${finalName}`)
      .then(res => res.json())
      .then(info => 
       {if(info.message !== "Not Found"){
         setValid(true)
         setUserInfo(info)
       }else{
         setValid(preValid => !preValid)
         throw console.error("User not found");
       }
         
      })
  }, [finalName])
  //css styles for when user switches between light mode and dark mode
  const inputClassName = colorTheme ? "lightMode" : "darkMode"
  const bgStyle = {
    backgroundColor: colorTheme ? "#F6F8FF" : "#141D2F"
  }
  const nameColor = {
    color: colorTheme ? "#222731" : "#ffffff"
  }
  const buttonColor = {
    color: colorTheme ? "#4B6A9B" : "#ffffff"
  }
  const searchStyle = {
    color: colorTheme ? "#2B3442" : "#ffffff"
  }
  const formStyle = {
    backgroundColor: colorTheme ? "#FEFEFE" : "#1E2A47",
    boxShadow: colorTheme ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)" : "none"
  }
  const colorThemeImg = colorTheme ? "../assets/icon-moon.svg" : "../assets/icon-sun.svg"
  
  function changeTheme(){
    setColorTheme(oldTheme => !oldTheme)
  }
  function handleInput(e){
    const {name, value} = e.target
    setUserNameInput(oldUser => {
      return {
        ...oldUser,
        [name]: value
      }
    })
  }
  function search(e){
    e.preventDefault()
    setFinalName(userNameInput.userName)
  }
  
  return (
  <div className="app" style={bgStyle}>
     <nav >
       <h2 className="name" style={nameColor}>devfinder</h2>
       <button className="themeButton" onClick={changeTheme} style={buttonColor}>
         {colorTheme ? 'dark' : 'light'}
         <img src={colorThemeImg} className="sun-moon" alt=""/>
        </button>
     </nav>
     <form className="formInput" onSubmit={search} style={formStyle}>
       <img className="searchImg" src="../assets/icon-search.svg" alt=""/>
       <input 
        style={searchStyle}
        className={inputClassName}
        type="text"
        name="userName"
        value={userNameInput.userName}
        placeholder="Search GitHub username&#8230;"
        onChange={handleInput}
       />
       <button className="formButton">Search</button>
       {!valid && <p className="notValid">No results</p>}
     </form> 
      <UserInfo 
        name={userInfo.name}
        login={userInfo.login}
        avatar={userInfo.avatar_url}
        bio={userInfo.bio}
        created={userInfo.created_at}
        followers={userInfo.followers}
        following={userInfo.following}
        repos={userInfo.public_repos}
        twitter={userInfo.twitter_username}
        blog={userInfo.blog}
        location={userInfo.location}
        company={userInfo.company}
        theme={colorTheme}
      />
    
    </div>
  );
}

