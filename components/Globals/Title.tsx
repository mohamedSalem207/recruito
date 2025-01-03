type TitleProps = {
  text: string;
  classes?: string;
  children?: React.ReactNode;
};

export default function Title({ text, classes, children }: TitleProps) {
  return (
    <h5
      className={`mb-3.5 text-center text-sm font-medium text-text ${classes}`}
    >
      <span>{text} </span>

      {children}
    </h5>
  );
}
