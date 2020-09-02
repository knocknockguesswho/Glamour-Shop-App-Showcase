import React, { Component } from 'react';
import styles from '../assets/styles/Home.module.css';
import {
  Header,
  Main,
  StepsContainer,
  Footer,
  FootBar
} from '../components/organism';

class Home extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.history)
    return(
      <div className={styles.container}>
        <header className={styles.header}>
          <Header history={this.props.history} />
        </header>
        <main className={styles.main}>
          <Main />
        </main>
        <div className={styles.steps}>
          <StepsContainer />
        </div>
        <footer className={styles.footer}>
          <Footer history={this.props.history} />
          {/* <div className={styles.footBar}> */}
          {/* </div> */}
          <FootBar />
        </footer>
      </div>
    )
  }
}

export default Home;