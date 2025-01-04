import RoundedTitle from "@/components/Globals/RoundedTitle";
import FAQ from "./FAQ";

const faqs = [
  {
    question: "What is an AI Agent?",
    answer: `
      <p>An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:</p>

      <h6>- Natural Language Processing to interpret resumes and candidate responses</h6>
      <h6>- Adaptive Learning to improve accuracy and efficiency over time</h6>
      <h6>- Adaptive Learning to improve accuracy and efficiency over time</h6>
      <h6>- Task Automation to handle repetitive or time-consuming steps</h6>
      <h6>- Data-Driven Insights for better predictions and decisions</h6>
    `,
  },
  {
    question: "What are the Benefits of Using Recruito’s AI Agent?",
    answer: `
      <p>An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:</p>

      <h6>- Natural Language Processing to interpret resumes and candidate responses</h6>
      <h6>- Adaptive Learning to improve accuracy and efficiency over time</h6>
      <h6>- Adaptive Learning to improve accuracy and efficiency over time</h6>
      <h6>- Task Automation to handle repetitive or time-consuming steps</h6>
      <h6>- Data-Driven Insights for better predictions and decisions</h6>
    `,
  },
  {
    question: "Next Steps?",
    answer: `
      <p>An AI agent is a software system that understands language, learns from data, and takes actions automatically to achieve specific goals. In the hiring world, an AI agent can review resumes, interact with candidates, and provide recommendations, all without manual oversight. Key capabilities include:</p>

      <h6>- Natural Language Processing to interpret resumes and candidate responses</h6>
      <h6>- Adaptive Learning to improve accuracy and efficiency over time</h6>
      <h6>- Adaptive Learning to improve accuracy and efficiency over time</h6>
      <h6>- Task Automation to handle repetitive or time-consuming steps</h6>
      <h6>- Data-Driven Insights for better predictions and decisions</h6>
    `,
  },
];

export default function FAQS() {
  return (
    <section className="relative py-20">
      <div className="absolute start-0 top-0 h-3/4 w-full bg-[#848EA00D] bg-[url('/sections/FAQS/bg.png')] bg-center bg-no-repeat" />

      <div className="container relative">
        <RoundedTitle title="FAQs" classes="lg:mb-14" />

        <div className="mx-auto rounded-[10px] border border-second-border bg-white lg:w-3/4">
          {faqs.map((faq, i) => (
            <FAQ key={i} data={faq} first={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
