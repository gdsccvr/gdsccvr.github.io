import Box from "@mui/material/Box";
import {
  FaGithub,
  FaHackerrank,
  FaInstagram,
  FaLinkedin,
  FaSquareXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

interface Service {
  name: string;
  icon: typeof FaLinkedin;
  color: string;
  invertColor?: boolean;
}

function Layout({ data }: { data: Service }) {
  return (
    <Box marginY={"0.5em"} display={"inline-block"}>
      {data.icon({
        color: data.color,
        fontSize: 25,
        style: {
          marginBottom: "-0.210em",
          filter: data.invertColor ? "invert(1)" : undefined,
        },
      })}
      <Box component={"span"} marginInlineStart={"0.4em"}>
        {data.name}
      </Box>
    </Box>
  );
}

export const Services = {
  WhatsApp: (
    <Layout data={{ name: "WhatsApp", icon: FaWhatsapp, color: "#25D366" }} />
  ),
  Instagram: (
    <Layout data={{ name: "Instagram", icon: FaInstagram, color: "#E4405F" }} />
  ),
  LinkedIn: (
    <Layout data={{ name: "LinkedIn", icon: FaLinkedin, color: "#0A66C2" }} />
  ),
  X: (
    <Layout
      data={{
        name: "X",
        icon: FaSquareXTwitter,
        color: "#FFFFFF",
        invertColor: true,
      }}
    />
  ),
  GitHub: <Layout data={{ name: "GitHub", icon: FaGithub, color: "" }} />,
  HackerRank: (
    <Layout
      data={{ name: "HackerRank", icon: FaHackerrank, color: "#00EA64" }}
    />
  ),
};
