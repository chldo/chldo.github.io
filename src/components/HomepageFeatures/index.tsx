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
        title: "맞춤형 AI 캐릭터",
        Svg: require("@site/static/img/logo.svg").default,
        description: (
            <>
                목적을 달성하기 위한 특별한 맞춤형 에이전트 AI를 생성합니다.
                메모리, 지식 등의 에이전트 기본 구성요소를 비롯하여 시나리오
                기능 등을 활용하여 다양한 목적을 달성할 수 있습니다.
            </>
        ),
    },
    {
        title: "엔터프라이즈 AI 솔루션",
        Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
        description: (
            <>
                고객 서비스, 내부 운영 등 다양한 애플리케이션을 위한 확장 가능한
                AI 에이전트를 구현합니다. 모니터링 및 관리 기능이 통합된
                엔터프라이즈 수준의 에이전트를 손쉽게 구축할 수 있습니다.
            </>
        ),
    },
    {
        title: "특화된 AI 애플리케이션",
        Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
        description: (
            <>
                토론 시뮬레이션, 향기 기반 AI 등 특정 작업을 위한 AI 에이전트를
                개발합니다. 다양한 LLM API와의 통합을 지원하여 유연성과 향상된
                기능을 제공합니다.
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
                <div className={clsx("col col--12")}>
                    <div className="">
                        <strong>Chldo AI</strong>는 Agent AI Building Service를
                        제공합니다. AWS를 비롯한 클라우드 기반의 인프라를
                        활용하여 특정 요구에 맞춘 맞춤형 AI 에이전트를 손쉽게
                        만들 수 있는 원활하고 확장 가능한 플랫폼을 제공합니다.
                        OpenAI, Anthropic, Mistral 등의 다양한 LLM API를
                        통합하여 메모리, 지식 베이스 등 필수 구성 요소를
                        설정하고, 개인 사용자와 기업 모두가 맞춤형 에이전트 AI
                        솔루션을 제작할 수 있습니다. 특별한 AI 캐릭터를 만들고자
                        하는 개인 뿐만 아니라, 효과적인 비용 관리 및 모니터링
                        기능을 갖춘 에이전트 AI 를 구현하려는 기관 / 기업에게도
                        이상적입니다.
                        <br />
                        <br />
                    </div>
                </div>

                <div className={clsx("col col--12")}>
                    <div className={clsx("col col--12")}>
                        <h3>기술 역량</h3>
                    </div>
                    <div className={clsx("col col--12")}>
                        <ol>
                            <li>
                                생성형 AI 기술: Hyscent AI 및 Debate AI와 같은
                                맞춤형 AI 캐릭터를 만드는 최신 AI 기술을
                                활용합니다.
                            </li>
                            <li>
                                LLM API 통합: 다양한 LLM API와의 통합을 지원하여
                                유연성과 향상된 기능을 제공합니다.
                            </li>
                            <li>
                                AWS 인프라: AWS의 견고한 인프라로 확장성,
                                보안성, 효율적인 관리를 보장합니다.
                            </li>
                            <li>
                                비용 관리 도구: LLM API 사용과 관련된 비용을
                                모니터링하고 최적화할 수 있는 포괄적인 도구를
                                제공합니다.
                            </li>
                            <li>
                                엔터프라이즈 기능: 모니터링 및 관리 기능이
                                통합된 엔터프라이즈 수준의 에이전트를 손쉽게
                                구축할 수 있습니다.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className={clsx("col col--12")}>
                    <div className={clsx("col col--12")}>
                        <h3>아키텍처 다이어그램</h3>
                        <strong>Chldo AI</strong>의 아키텍처는 다음과 같은 주요
                        구성 요소로 이루어져 있습니다:
                    </div>
                    <div className={clsx("col col--12")}>
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
                                <strong>Chldo Template</strong> : 에이전트
                                템플릿을 제공하는 서비스
                            </li>
                            <li>
                                <strong>Core.Agent</strong> : LLM(OpenAI,
                                Anthropic, AWS Bedrock 등) 프록시 서비스
                            </li>
                        </ul>
                    </div>
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
