type DataProps = {
  title: string;
  text: string;
  classes?: string;
};

export default function Data({ title, text, classes }: DataProps) {
  return (
    <div className={`space-y-3 lg:space-y-5 ${classes}`}>
      <h5
        className="font-semibold lg:text-3xl lg:font-bold"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p className="w-full text-text lg:w-3/4">{text}</p>
    </div>
  );
}
