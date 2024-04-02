import { brandLinks } from "@/constants/default_config";
import Link from "next/link";
import {
  IconBxlFacebook,
  IconInstagramLogo,
  IconLinkedinLine,
  IconTwitterLogo,
} from "../assets/socialIcon";

const social = [
  {
    icon: <IconBxlFacebook />,
    url: brandLinks.facebook,
    name: "facebook",
  },
  {
    icon: <IconTwitterLogo />,
    url: brandLinks.twitter,
    name: "twitter",
  },
  {
    icon: <IconInstagramLogo />,
    url: brandLinks.instagram,
    name: "instagram",
  },
  {
    icon: <IconLinkedinLine />,
    url: brandLinks.linkedin,
    name: "linkedin",
  },
];

function SocialIcon() {
  return (
    <div className="flex gap-5 items-center">
      {social.map((link, i) => (
        <Link
          key={i}
          target="_blank"
          href={link.url}
          className="text-xl hover:text-blue-500 text-white "
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
}

export default SocialIcon;
