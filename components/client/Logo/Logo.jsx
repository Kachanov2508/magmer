import classes from './Logo.module.css';

const Logo = () => {
  return (
    <div className={classes.container}>
        <h1 className={classes.logo}><span>M</span><span>A</span><span>G</span><span>M</span><span>E</span><span>R</span></h1>
    </div>
  )
}

export default Logo;