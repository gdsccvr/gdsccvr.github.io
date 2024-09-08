import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Connect",
    src: "/img/connect.png",
    description: (
      <>
        Meet local developers and technologists. All are welcome, including
        those with diverse backgrounds and from various companies and
        industries.
      </>
    ),
  },
  {
    title: "Learn",
    src: "/img/learn.png",
    description: (
      <>
        Learn about a range of technical topics and gain new skills through
        hands-on workshops, training, events, talks, and meet ups — both online
        and in-person.
      </>
    ),
  },
  {
    title: "Grow",
    src: "/img/grow.webp",
    description: (
      <>
        Apply your knowledge and connections to build great products and advance
        your skills, career, and network. Give back to your community by helping
        others learn, too.
      </>
    ),
  },
];

function Feature({ title, src, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          style={{ objectFit: "contain" }}
          className={styles.featureImage}
          src={src}
          alt={title}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
