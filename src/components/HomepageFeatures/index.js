import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Foundational Concepts and Methodologies',
    Svg: require('@site/static/img/learning.svg').default,
    description: (
      <>
        Master the core principles of Quality Assurance (QA) in software testing. Understand the software development lifecycle, test types, design strategies, and defect management. Build a solid testing foundation to approach challenges with confidence!
      </>
    ),
  },
  {
    title: 'Technical and Practical Skills',
    Svg: require('@site/static/img/it-girl.svg').default,
    description: (
      <>
        Unlock your potential with hands-on testing expertise! Develop manual testing finesse, embrace automation frameworks, dive into API testing, and explore performance evaluation. Acquire the skills to excel in real-world QA scenarios and thrive in your QA role!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
