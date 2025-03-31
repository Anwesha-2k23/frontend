import styles from './Hero.module.css'

const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
}

const HeroSection = ({ children, className, circleClassName }) => {
    return (
      <section className={cn(styles.hero, className)}>
        <div className={cn(styles.hero_main, circleClassName)} />
        {children}
      </section>
    );
};

export default HeroSection
