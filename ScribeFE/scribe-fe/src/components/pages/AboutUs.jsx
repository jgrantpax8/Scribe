import suitFord from "../Assets/suitFord.jpg"
import Jacksonpfp from "../Assets/Jackson-pfp.jpg"
import Kate from "../Assets/kate.jpg"
import me from "../Assets/me.png"
import styles from "../../styles/About.module.css"

const About = () => {
    return (
      <div className={styles.container}>
        <div className={styles.person}>
          <img src={Jacksonpfp} alt="Jackson Grant" width="200" height="200" className={styles.pic}/>
          <div className={styles.text}>
            <h2>Jackson Grant</h2>
            <p>Project lead, Full stack Developer</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src={suitFord} alt="ford" width="200" height="200" className={styles.pic}/>
          <div className={styles.text}>
            <h2>Nithi Pipatkittikul</h2>
            <p>Full stack Developer, Database designer</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src={Kate} alt="kate" width="200" height="200" className={styles.pic}/>
          <div className={styles.text}>
            <h2>Kate Doolittle</h2>
            <p>UI/UX Designer/Frontend Developer</p>
          </div>
        </div>
        <div className={styles.person}>
          <img src={me} alt="dylan" width="200" height="200" className={styles.pic} style={{backgroundColor: "white"}}/>
          <div className={styles.text}>
            <h2>Dylan Crooks</h2>
            <p>Backend developer,Database designer</p>
          </div>
        </div>
      </div>
    )
  };

export default About;