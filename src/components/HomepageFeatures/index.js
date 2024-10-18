import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🛡️ Effect System',
    
    description: (
      <>
        Compose and manage side effects safely
      </>
    ),
  },
  {
    title: '🧩 Algebraic Data Types',
    description: (
      <>
        Option, Either, Try, and more
      </>
    ),
  },
  {
    title: '🔄 Immutable Collections',
    description: (
      <>
        Thread-safe, persistent data structures
      </>
    ),
  },
  {
    title: '🚀 Performance Optimized',
    description: (
      <>
        Tail call optimization, memoization, lazy evaluation
      </>
    ),
  },
  {
    title: '🔍 Pattern Matching',
    description: (
      <>
        Expressive and type-safe pattern matching for Java
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {/* You can use an SVG placeholder or an emoji */}
        <div className={styles.featureIcon}>{title}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
