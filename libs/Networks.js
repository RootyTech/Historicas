import { FaTwitter,
    FaInstagram,
    FaGithub,
    FaBehance,
    FaDribbble,
    FaGoodreads,
    FaFacebook,
    FaYoutube,
    FaTiktok,
    FaTwitch,
    FaLinkedin,
    FaSpotify,
    FaLink } from "react-icons/fa";

export const NetworkList = [
    {name: "Twitter"},
    {name: "Instagram"},
    {name: "GitHub"},
    {name: "Behance"},
    {name: "Dribbble"},
    {name: "Goodreads"},
    {name: "Facebook"},
    {name: "YouTube"},
    {name: "TikTok"},
    {name: "Twitch"},
    {name: "Linkedln"},
    {name: "Spotify"}
]

export const IconNetwork = ({ PropsName }) => {

    switch (PropsName) {
        case "Twitter":
            return <FaTwitter/>
            break;
        case "Instagram":
            return <FaInstagram/>
            break;
        case "GitHub":
            return <FaGithub/>
            break;
        case "Behance":
            return <FaBehance/>
            break;
        case "Dribbble":
            return <FaDribbble/>
            break;
        case "Goodreads":
            return <FaGoodreads/>
            break;
        case "Facebook":
            return <FaFacebook/>
            break;
        case "YouTube":
            return <FaYoutube/>
            break;
        case "TikTok":
            return <FaTiktok/>
            break;
        case "Twitch":
            return <FaTwitch/>
            break;
        case "Linkedln":
            return <FaLinkedin/>
            break;
        case "Spotify":
            return <FaSpotify/>
            break;
        default:
            return <FaLink/>
            break;
    }
}