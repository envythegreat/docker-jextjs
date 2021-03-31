import * as React from "react"
import styles from '../styles/Home.module.scss'
function Wave() {
  return (
    <svg
      style={{
        transition: ".3s",
      }}
      viewBox="0 0 1440 310"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <defs>
        <linearGradient id="prefix__a" x1={0} x2={0} y1={1} y2={0}>
          <stop stopColor="rgba(250, 250, 255, 1)" offset="0%" />
          <stop stopColor="rgba(240, 241, 243, 1)" offset="100%" />
        </linearGradient>
      </defs>
      <path className={styles.waves}
        fill="url(#prefix__a)"
        d="M0 217l40 10.3C80 238 160 258 240 248s160-52 240-51.7c80-.3 160 41.7 240 15.5C800 186 880 93 960 93s160 93 240 139.5 160 46.5 240 25.8c80-20.3 160-62.3 240-93 80-31.3 160-51.3 240-72.3s160-41 240-56.8c80-15.2 160-26.2 240 10.3s160 118.5 240 149.8c80 30.7 160 10.7 240-15.5 80-25.8 160-56.8 240-51.6 80 4.8 160 46.8 240 41.3s160-56.5 240-56.8c80 .3 160 51.3 240 56.8s160-36.5 240-56.8c80-20.7 160-20.7 240 0 80 20.3 160 62.3 240 87.8s160 36.5 240 25.8c80-10.3 160-41.3 240-82.6 80-41.7 160-92.7 240-103.4 80-10.3 160 20.7 240 46.5 80 26.2 160 46.2 200 56.9l40 10.3v155H0z"
      />
    </svg>
  )
}

export default Wave