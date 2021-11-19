import fs from "fs";
import Personalizer from "../components/templates/Personalizer";
import dictionary from '../data/dictionaries/en.json';

export default function Home(props) {

  return (
      <Personalizer t={dictionary} markdown={props.markdown}/>
  )
}

export async function getStaticProps(context) {

    const markdown = fs.readFileSync("markdown/en/home.md").toString();
    
    return {
      props: {
          locale: dictionary.locale,
          markdown
      }, // will be passed to the page component as props
    }
}
