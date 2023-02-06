import clsx from "clsx";

const CircleStackIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-full h-full"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
    />
  </svg>
);

export default function AboutSection({
  title,
  linkIcon,
  content,
}: {
  title: string;
  linkIcon?: React.ReactNode;
  content: React.ReactNode;
}) {
  return (
    <section className="mb-8">
      <div
        className={clsx(
          "mb-4 flex flex-col justify-start items-start",
          "lg:flex-row lg:justify-between lg:items-center"
        )}
      >
        <div className="flex gap-2 font-semibold">
          <div className="w-5 h-5">
            <CircleStackIcon />
          </div>
          {title}
        </div>
        <span>{linkIcon}</span>
      </div>
      <div className={clsx("px-2 text-sm leading-relaxed", "lg:px-4")}>{content}</div>
    </section>
  );
}
