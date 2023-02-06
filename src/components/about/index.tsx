import clsx from "clsx";
import { useTranslation } from "next-i18next";
import LinkButton from "../reuse/LinkButton";
import AboutSection from "./Section";

export default function AboutComps() {
  const { t } = useTranslation("about");
  return (
    <div>
      <h1 className={clsx("mb-10 text-2xl font-bold", "lg:text-4xl 2xl:text-6xl")}>About me.</h1>
      <AboutSection
        title="학력"
        content={
          <ul>
            <li>- 2023년 - 아주대학교 소프트웨어학과 졸업</li>
          </ul>
        }
      />
      <AboutSection
        title="스킬"
        linkIcon={<LinkButton title="프로젝트" path="/projects" />}
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <div>- HTML, css - 중</div>
              <div>
                웹 어플리케이션을 만들기 위해 필요한 기본적인 지식을 가지고 있습니다. DOM구조를 설계하거나 Element
                property를 활용하는데에 익숙하며 간단한 웹사이트를 라이브러리의 도움없이 제작할 수 있습니다.
              </div>
            </li>
            <li>
              <div>- Javascript - 중</div>
              <div>
                변수의 선언과 활용, 자료구조, loop, context의 개념을 자유롭게 사용할 수 있으며 간단한 퍼즐게임을 위한
                알고리즘을 설계하고 게임을 구현할 수 있습니다.
              </div>
            </li>

            <li>
              <div>- Reactjs - 중</div>
              <div>
                요구사항에 맞게 컴포넌트 트리를 효율적으로 설계할 수 있습니다. state의 사용과 component life cycle의
                개념에 익숙하며 확장성과 가독성, 퍼포먼스의 향상에 관심이 많습니다.
              </div>
            </li>
            <li>
              <div>- Nextjs - 중</div>
              <div>
                react component의 작업을 server side와 client side로 분류하여 효율적으로 rendering할 수 있으며,
                page(route)별로 static HTML serve와 server size rendering을 적절하게 활용할 수 있습니다.
              </div>
            </li>
            <li>
              <div>- Threejs - 하</div>
              <div>
                threejs를 활용하여 object를 제어할 수 있으며, shader를 통해 아름다운 3D 화면을 만드는데에 지대한 관심을
                가지고 있습니다.
              </div>
            </li>
          </ul>
        }
      />
      <AboutSection title="개발 경력" content={<div>현업 경험은 아직 없습니다.</div>} />
      <AboutSection
        title="그 외"
        content={
          <ul className="flex flex-col gap-2">
            <li>
              <div>- 외국어</div>
              <div>TOEIC 905. 개발 문서를 이해하거나 강의 영상을 듣는 데에 거부감이 없습니다.</div>
            </li>
            <li>
              <div>- 성향</div>
              <div>
                일할 때에는 차분하고 열성을 다하는 성격입니다. 시간가는줄 모르고 업무에 매진하는 순간이 즐겁습니다.
              </div>
            </li>
            <li>
              <div>- 기타 경력</div>
              <div>제조업 생산관리 2년, 공인중개사 사무실 운영 3년</div>
            </li>
            <li>
              <div>- 취미</div>
              <div>테니스 | 요리</div>
            </li>
            <li>
              <div>- 2023년 목표</div>
              <div>개발 커리어 시작하기 | 테니스 아마추어 대회 우승 | 철들기</div>
            </li>
          </ul>
        }
      />
    </div>
  );
}
