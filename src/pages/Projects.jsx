import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import ListItem from "../components/ListItem";

function Projects() {
  return (
    <>
      <Header text={"Projects"}></Header>
      <Paragraph text={"Here are some of my projects:"}></Paragraph>
      <ListItem
        text={"Eunoia: AI + CV-powered DIY Learning Platform"}
      ></ListItem>
      <ListItem
        text={"PhiTector: Chrome Extenstion for Phishing Detection"}
      ></ListItem>
      <ListItem text={"Minimal ROG Grub: ROG-themed Grub theme"}></ListItem>
    </>
  );
}

export default Projects;
