import Building from '@components/Building/Building'
import styles from '../styles/components/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.profileContainer}>
        <p id={styles.name}>
          Yago <br /> Tavares
        </p>
        <div className={styles.profileIMG}>
          <img
            className={styles.IMG}
            src="/images/eu.png"
            alt="My Photo"
            width={'100%'}
          />
        </div>
        <div id={styles.moon}>
          <div id={styles.crater1} />
          <div id={styles.crater2} />
          <div id={styles.crater3} />
          <div id={styles.crater4} />
          <div id={styles.crater5} />
          <div id={styles.crater6} />
          <img
            id={styles.flag}
            src="/images/brazil-flag.png"
            alt="Brasil Flag"
          />
        </div>
        <div className={styles.space}>
          <div className={styles.star1}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star2}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star3}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star4}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star5}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star6}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star7}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star8}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star9}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star10}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star11}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star12}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star13}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star14}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star15}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star16}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star17}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star18}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star19}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star20}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star21}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star22}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star23}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star24}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star25}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star26}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star27}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star28}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star29}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star30}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star31}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star32}>
            <div className={styles.stars} />
          </div>
          <div className={styles.star33}>
            <div className={styles.stars} />
          </div>
          <div className={styles.rocket}>
            <img
              className={styles.rocketNave}
              id={styles.rocket1}
              src="/images/startup.png"
              alt="Rocket icons created by Freepik - Flaticon"
            />

            <img
              className={styles.rocketNave}
              id={styles.rocket2}
              src="/images/startup.png"
              alt="Rocket icons created by Freepik - Flaticon"
            />
          </div>
        </div>
      </div>
      <div className={styles.building}>
        <Building />
        <Building />
      </div>
    </div>
  )
}
