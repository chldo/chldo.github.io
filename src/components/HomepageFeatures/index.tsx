import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<"svg">>;
    description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
    {
        title: "Easy to Use",
        Svg: require("@site/static/img/logo.svg").default,
        description: (
            <>
                Docusaurus was designed from the ground up to be easily
                installed and used to get your website up and running quickly.
            </>
        ),
    },
    {
        title: "Focus on What Matters",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                Docusaurus lets you focus on your docs, and we&apos;ll do the
                chores. Go ahead and move your docs into the <code>docs</code>{" "}
                directory.
            </>
        ),
    },
    {
        title: "Powered by React",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                Extend or customize your website layout by reusing React.
                Docusaurus can be extended while reusing the same header and
                footer.
            </>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx("col col--4")}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
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
                    <strong>Chldo</strong>는 LLM을 이용하여 에이전트 기반의
                    시뮬레이션 환경을 개발하고 사용 및 배포하는 환경을 제공하는
                    플랫폼입니다. Chldo는 다음과 같은 구조를 가지고 있습니다.
                </div>
                <div className="row">
                    <ul>
                        <li>
                            <strong>Chldo.com</strong> : 에이전트를 생성하고
                            관리하는 서비스
                        </li>
                        <li>
                            <strong>Chldo.AI</strong> : 에이전트를 배포하고
                            사용하는 서비스
                        </li>
                        <li>
                            <strong>Chldo Template</strong> : 에이전트 템플릿을
                            제공하는 서비스
                        </li>
                        <li>
                            <strong>Core.Agent</strong> : LLM(OpenAI, Anthropic,
                            AWS Bedrock 등) 프록시 서비스
                        </li>
                    </ul>
                </div>
                <div className="text--center padding-horiz--m">
                    <img
                        src={"./img/chldo_map.png"}
                        alt="chldo_map"
                        width={750}
                    />
                </div>
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
