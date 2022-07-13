export default function UserInfo(props){
    //https://stackoverflow.com/questions/6291225/convert-date-from-thu-jun-09-2011-000000-gmt0530-india-standard-time-to
    function convert(str) {
        var date = new Date(str)
        var month = date.toLocaleString('default', { month: 'short' })
        var day = ("0" + date.getDate()).slice(-2)
        return [day, month, date.getFullYear()].join(" ")
    }
    const date = convert(props.created)

    //removes the @ character to create a link to company github
    const companyUrl = "https://github.com/" + props.company?.replace('@', '') 
    const twitterUrl = "https://twitter.com/" + props.twitter

    const userStyles = {
        backgroundColor: props.theme ? "#FEFEFE" : "#1E2A47",
        boxShadow: props.theme ? "0px 16px 30px -10px rgba(70, 96, 187, 0.198567)" : "none"
    }
    const color = {
        color: props.theme ? "#4B6A9B" : "#FFFFFF"
    }
    const nameColor ={
        color: props.theme ? "#2B3442" : "#FFFFFF"
    }
    const nA = {
        color: props.theme ? "rgba(75, 106, 155, .5)" : "rgba(255, 255, 255, .5)"
    }
    const fillColor = {
        filter: props.theme ? "invert(60%) sepia(6%) saturate(4854%) hue-rotate(182deg) brightness(63%) contrast(83%)" : "invert(99%) sepia(7%) saturate(228%) hue-rotate(41deg) brightness(119%) contrast(100%)"
    }
    const fillColorNA = {
        filter: props.theme ? "invert(60%) sepia(6%) saturate(4854%) hue-rotate(182deg) brightness(80%) contrast(20%)" : "invert(99%) sepia(7%) saturate(228%) hue-rotate(41deg) brightness(50%) contrast(50%)"
    }

   
    const statsStyle ={
        backgroundColor: props.theme ? "#F6F8FF" : "#141D2F"
    }
    const statNums = {
        color:  props.theme ? "#2B3442" : "#FFFFFF"
    }

    return(
        <main className="userSection" style={userStyles}>
            <section className="topInfo">
                <img className="userImg" src={props.avatar} alt="User avatar"/> 
                <h1 className="userName" style={nameColor}>{props.name !== null ? props.name : props.login}</h1>
                <h2 className="login">@{props.login}</h2>
                <h3 className="date" style={color}>Joined {date}</h3>
                {props.bio !== null ? <h4 className="bio" style={color}>{props.bio}</h4> : <h5 className="nA bio" style={nA}>This profile has no bio</h5>}
            </section>
            <div className="stats" style={statsStyle}>
                <h4 className="statName" style={color}>Repos</h4>
                <h4 className="statName" style={color}>Followers</h4>
                <h4 className="statName" style={color}>Following</h4>
                <h4 className="statNum" style={statNums}>{props.repos}</h4>
                <h4 className="statNum" style={statNums}>{props.followers}</h4>
                <h4 className="statNum" style={statNums}>{props.following}</h4>
            </div>
            <div className="links">
                <img className="logo" src="../assets/icon-location.svg" style={props.location !== null ? fillColor : fillColorNA} alt=""/>
                {props.location !== null ? <h5 className="location" style={color}>{props.location}</h5> : <h5 className="nA" style={nA}>Not Available</h5>}
                <img className="logo" src="../assets/icon-website.svg" style={props.blog !== '' ? fillColor : fillColorNA} alt=""/>
                {props.blog !== '' ? <a href={props.blog} style={color}>{props.blog}</a> : <h5 className="nA" style={nA}>Not Available</h5>}
                <img className="logo twit" src="../assets/icon-twitter.svg" style={props.twitter !== null ? fillColor : fillColorNA} alt=""/>
                {props.twitter !== null ? <a href={twitterUrl} style={color} className="twitName">{props.twitter}</a> : <h5 className="nA twitName" style={nA}>Not Available</h5>}
                <img className="logo" src="../assets/icon-company.svg" style={props.company !== null ? fillColor : fillColorNA} alt=""/>
                {props.company !== null ? <a href={companyUrl} style={color}>{props.company}</a> : <h5 className="nA" style={nA}>Not Available</h5>}  
            </div>
            
        </main>
        
    )
}