import { FaHome, FaList, FaCompass , FaThumbsUp , FaHistory , FaClock } from "react-icons/fa";
const navbarInfo = [
    {
        tabName: "Home",
        icon: <FaHome />,
        tabpath: "/"   
    },
    {
        tabName: "Explore",
        icon: <FaCompass />,
        tabpath: "/videolist"
    },
    {
        tabName: "PlayList",
        icon: <FaList />,
        tabpath: "/playlist"
    },
    {
        tabName: "Liked",
        icon: <FaThumbsUp />,
        tabpath: "/liked"
    },
    {
        tabName: "WatchLater",
        icon: <FaClock />,
        tabpath: "/watchlater"
    },
    {
        tabName: "History",
        icon: <FaHistory />,
        tabpath: "/history"
    },
];

export {navbarInfo}; 