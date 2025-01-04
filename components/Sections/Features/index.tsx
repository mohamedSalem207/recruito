import Image from "next/image";
import FeatureBox from "./Box";
import Card from "./Card";
import Data from "./Data";
import Todo from "./Todo";
import Manager from "./Manager";
import RoundedTitle from "@/components/Globals/RoundedTitle";

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
  return (
    <section className="py-20">
      <div className="container">
        <RoundedTitle title="Features" />

        <h3 className="mb-5 text-center font-semibold lg:my-12 lg:text-3xl lg:font-bold">
          Streamline your recruitment with <br className="hidden lg:inline" />
          our advanced features
        </h3>

        <div className="grid grid-cols-1 items-center gap-3 lg:grid-cols-2 lg:gap-5">
          <Data
            title={`Candidate Sourcing & <br className="hidden lg:inline" /> Job Posting`}
            text="Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed."
          />

          <FeatureBox classes="px-3 pb-3 pt-5 lg:px-5 lg:pt-24">
            <div className="relative flex w-full items-center justify-between gap-3 lg:gap-5">
              <Image
                src="/sections/features/1.png"
                width={235}
                height={290}
                alt="feature"
                draggable={false}
              />

              <Image
                src="/sections/features/2.png"
                width={290}
                height={290}
                className="absolute start-1/4 top-[10%] scale-150"
                alt="feature"
                draggable={false}
              />

              <Image
                src="/sections/features/3.png"
                width={235}
                height={290}
                alt="feature"
                draggable={false}
              />
            </div>
          </FeatureBox>

          <FeatureBox start classes="p-5 lg:p-10">
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

              <div className="w-[80%]">
                <Card img="2" />
              </div>

              <div className="w-[60%]">
                <Card img="3" />
              </div>
            </div>
          </FeatureBox>

          <Data
            title={`Automated Resume <br className="hidden lg:inline" /> Screening & Filtering`}
            text="Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants."
            classes="lg:ps-20"
          />

          <Data
            title="Online Assessment"
            text="Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated."
          />

          <FeatureBox classes="lg:p-7 p-3">
            <div className="relative space-y-2 rounded-[10px] border border-second-border bg-white p-3 shadow-global lg:space-y-3.5">
              {todos.map((todo, i) => (
                <Todo key={i} id={todo.id} label={todo.label} />
              ))}
            </div>
          </FeatureBox>

          <FeatureBox start classes="lg:p-7">
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
              className="absolute end-0 top-1/4 object-cover"
              alt="interview-score"
              draggable={false}
            />
          </FeatureBox>

          <Data
            title="AI Video Interviews"
            text="An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills. Everything is entirely hands-free."
            classes="lg:ps-20"
          />

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
    </section>
  );
}
