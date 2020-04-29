import React from "react"

import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title={`contact`} subtitle={`us`}/>
      <div className={styles.center}>
        <form className={styles.form} action="https://formspree.io/myyngdey" method="POST">
          <div>
            <label htmlFor="name">name</label>
            <input type={`text`}
                   name={`name`}
                   id={`name`}
                   className={styles.formControl}
                   placeholder={`Name`}/>
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input type={`email`}
                   name={`email`}
                   id={`email`}
                   className={styles.formControl}
                   placeholder={`Email`}/>
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea id={`message`}
                      name={`message`}
                      rows={10}
                      className={styles.formControl}
                      placeholder={`Hello there`}/>
          </div>
          <div>
            <input type={`submit`} value={`Submit Here`} className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact