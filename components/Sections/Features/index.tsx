import Image from "next/image";
import FeatureBox from "./Box";
import Card from "./Card";
import Data from "./Data";
import Todo from "./Todo";
import Manager from "./Manager";
import RoundedTitle from "@/components/Globals/RoundedTitle";
import Candidate from "@/components/Cards/Candidate";

const todos = [
  {
    id: "creativeDesign",
    label: "1- Creative Design Skills Test",
  },
  {
    id: "uiUxDesign",
    label: "2- UX/UI Design Challenge",
  },
  {
    id: "problemSolving",
    label: "3- Problem-Solving Task",
  },
  {
    id: "awarenessQuiz",
    label: "4- Trends Awareness Quiz Test",
  },
];

const candidates = [
  {
    img: "candidate-2",
    name: "Ryan Lee",
    job_title: "Senior Graphic Designer",
    skills: ["Creative suite", "Illustrator", "Marketing", "Canva"],
    verified: false,
  },
  {
    img: "candidate-3",
    name: "Emma Rivera",
    job_title: " Graphic Designer",
    skills: ["Creative suite", "Illustrator", "Typography", "Canva"],
    verified: false,
  },
  {
    img: "candidate-1",
    name: "Alex Martin",
    job_title: "Senior Graphic Designer",
    skills: ["Adobe Creative Design", "Figma", "Typography", "After Effects"],
    verified: true,
  },
];

const managers = [
  {
    name: "Alex Martin",
    img: "manager-1",
  },
  {
    name: "Emma Rivera",
    img: "manager-2",
  },
  {
    name: "Ryan Lee",
    img: "manager-3",
  },
];

export default function Features() {
  const contentClass =
    "grid grid-cols-1 items-center gap-3 xl:grid-cols-2 xl:gap-5";

  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <RoundedTitle title="Features" />

        <div className="relative mb-5 lg:my-12">
          <h3 className="text-center font-semibold lg:text-3xl lg:font-bold">
            Streamline your recruitment with <br className="hidden lg:inline" />
            our advanced features
          </h3>

          <Image
            src="/globals/doubled-vector.svg"
            width={25}
            height={25}
            className="absolute -top-[20px] end-0"
            draggable={false}
            alt="vector"
          />
        </div>
      </div>

      <div className="space-y-3 lg:space-y-5">
        <div className="relative">
          <Image
            src="/globals/feature-pattern.svg"
            className="absolute -bottom-[70px] end-0 object-cover"
            width={300}
            height={300}
            alt="pattern"
            draggable={false}
          />

          <div className="container">
            <div className={contentClass}>
              <Data
                title={`Candidate Sourcing & <br className="hidden lg:inline" /> Job Posting`}
                text="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
              />

              <FeatureBox classes="px-3 pb-3 pt-5 lg:px-5 lg:pt-28 lg:pb-10">
                <div className="relative flex w-full flex-col items-center justify-between gap-5 lg:flex-row">
                  {Array.from(Array(2), (_, i) => (
                    <Candidate key={i} {...candidates[i]} />
                  ))}

                  <Candidate
                    {...candidates[2]}
                    classes="lg:absolute lg:start-1/4 lg:-top-[80px]"
                  />
                </div>
              </FeatureBox>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/globals/feature-pattern.svg"
            className="absolute -bottom-[70px] start-0 object-cover"
            width={300}
            height={300}
            alt="pattern"
            draggable={false}
          />

          <div className="container">
            <div className={contentClass}>
              <FeatureBox start classes="p-5 lg:p-10 lg:order-1 order-2">
                <Image
                  src="/globals/search.svg"
                  width={150}
                  height={150}
                  className="absolute bottom-10 end-10"
                  alt="search"
                  draggable={false}
                />

                <div className="flex flex-col items-center gap-3 lg:gap-5">
                  <div className="w-full">
                    <Card img="1" />
                  </div>

                  <div className="w-[90%] lg:w-[80%]">
                    <Card img="2" />
                  </div>

                  <div className="w-[80%] lg:w-[60%]">
                    <Card img="3" />
                  </div>
                </div>
              </FeatureBox>

              <Data
                title={`Automated Resume <br className="hidden lg:inline" /> Screening & Filtering`}
                text="Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants."
                classes="xl:ps-20 lg:order-2 order-1"
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/globals/feature-pattern.svg"
            className="absolute -bottom-[70px] end-0 object-cover"
            width={300}
            height={300}
            alt="pattern"
            draggable={false}
          />

          <div className="container">
            <div className={contentClass}>
              <Data
                title="Online Assessment"
                text="Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated."
              />

              <FeatureBox classes="lg:p-7 p-3">
                <div className="relative space-y-2 rounded-[10px] border border-second-border bg-white p-3 shadow-global lg:space-y-3.5">
                  {todos.map((todo, i) => (
                    <Todo
                      key={i}
                      number={i + 1}
                      id={todo.id}
                      label={todo.label}
                    />
                  ))}
                </div>
              </FeatureBox>
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/globals/feature-pattern.svg"
            className="absolute -bottom-[70px] start-0 object-cover"
            width={300}
            height={300}
            alt="pattern"
            draggable={false}
          />

          <div className="container">
            <div className={contentClass}>
              <FeatureBox start classes="lg:p-7 lg:order-1 order-2">
                <Image
                  src="/sections/features/ai-interview.png"
                  height={305}
                  width={400}
                  className="relative !w-[95%] object-cover shadow-sm"
                  alt="ai-interview"
                  draggable={false}
                />

                <Image
                  src="/sections/features/interview-score.png"
                  height={190}
                  width={165}
                  className="absolute top-1/4 object-cover sm:end-0"
                  alt="interview-score"
                  draggable={false}
                />
              </FeatureBox>

              <Data
                title="AI Video Interviews"
                text="An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free."
                classes="xl:ps-20 lg:order-2 order-1"
              />
            </div>
          </div>
        </div>

        <div className="container">
          <div className={contentClass}>
            <Data
              title={`Final Shortlist for the & <br className="hidden lg:inline" /> Line Manager`}
              text="Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision."
            />

            <FeatureBox classes="lg:p-10 p-5">
              <div className="relative space-y-3.5 rounded-[10px] lg:space-y-12">
                {managers.map((manager, i) => (
                  <Manager key={i} {...manager} number={i + 1} />
                ))}
              </div>
            </FeatureBox>
          </div>
        </div>
      </div>
    </section>
  );
}
