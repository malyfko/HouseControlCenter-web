import React from 'react';

import styles from './ButtonEntry.scss';

export const ButtonEntry = ({ children, url }) => (
  <button className={styles.buttonEntry} onClick={() => { alert(url); }}>{children}</button>
);
