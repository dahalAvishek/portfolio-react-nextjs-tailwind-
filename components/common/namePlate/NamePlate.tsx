import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  styles from './namePlate.module.css';

const NamePlate = () => {
  return (
    <h2 className={styles.namePlate}>
          <FontAwesomeIcon
            icon="laugh"
            className="text-yellow-500 inline h-6 mr-2"
          />
          A. Dahal
        </h2>
  )
}

export default NamePlate