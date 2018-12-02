import React from 'react';

import { buttons } from 'mocks';
import { ButtonEntry } from 'components/ButtonEntry';
import styles from './Main.scss';

export class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      buttons: [],
    };
  }

  componentDidMount() {
    this.setState({ buttons });
  }

  render() {
    const { buttons } = this.state;

    return (
      <div className={styles.mainContainer}>
        {buttons.map(({ label, url }) => <ButtonEntry url={url} key={label}>{label}</ButtonEntry>)}
      </div>
    );
  }
}
