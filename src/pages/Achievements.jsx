import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import ListItem from "../components/ListItem";

function Achievements() {
  return (
    <>
      <Header text={"Achievements"}></Header>
      <Paragraph text={"Some of my achievements:"}></Paragraph>
      <ListItem
        text={"Finalist - NAF Uzhavu Hackathon 2025 @ IIT Madras"}
      ></ListItem>
      <ListItem
        text={"Finalist - Pragyan Hackathon 2024 by NIT Trichy"}
      ></ListItem>
      <ListItem
        text={"Finalist - VIVID Hackathon 2024 @ SSN College of Engineering"}
      ></ListItem>
      <ListItem text={"National level Runner-up, Dell Champs 2018"}></ListItem>
      <ListItem
        text={"International Finalist, IEEE YESIST12 Junior Track 2019"}
      ></ListItem>
      <ListItem
        text={
          "2x National Semi-Finalist & Region Topper, Classmate Spell Bee 2018 & 2019"
        }
      ></ListItem>
    </>
  );
}

export default Achievements;
