type RoundedTitleProps = {
  title: string;
  classes?: string;
};

export default function RoundedTitle({ title, classes }: RoundedTitleProps) {
  return (
    <h5
      className={`${classes} mx-auto mb-5 w-fit rounded-[30px] border border-second-border px-7 py-2 text-sm font-medium text-secondary lg:text-base`}
    >
      {title}
    </h5>
  );
}
