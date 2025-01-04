type DataProps = {
  title: string;
  text: string;
  classes?: string;
};

export default function Data({ title, text, classes }: DataProps) {
  return (
    <div className={`relative space-y-3 lg:space-y-5 ${classes}`}>
      <h5
        className="text-center font-semibold lg:text-start lg:text-3xl lg:font-bold"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p className="w-full text-center text-sm text-text lg:w-3/4 lg:text-start lg:text-base">
        {text}
      </p>
    </div>
  );
}
