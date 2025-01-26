import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const icons = [
    {
      id: 1,
      icon: <FaGithub size={25} />,
      url: "https://github.com/farooque-Git",
    },
    {
      id: 2,
      icon: <FaLinkedin size={25} />,
      url: "https://www.linkedin.com/in/farooque-ali-9547b2272/",
    },
    {
      id: 3,
      icon: <FaWhatsappSquare size={25} />,
      url: "https://wa.me/+917004624454",
    },
    {
      id: 4,
      icon: <MdEmail size={25} />,
      url: "mailto:farooque.reactjs@gmail.com",
    },
  ];

  const handleIconClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className=" bg-black text-gray-400 py-2">
      <ul className="flex space-x-6 justify-center items-center">
        {icons.map(({ id, icon, url }) => (
          <li
            key={id}
            className=" hover:scale-110 duration-500"
            onClick={() => handleIconClick(url)}
          >
            {/* <a href={url} target="_blank" rel="noopener noreferrer" /> */}
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
