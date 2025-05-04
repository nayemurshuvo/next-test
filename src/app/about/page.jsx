import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1 className="text-4xl">This is About Page</h1>
      <div className="space-x-4">
        <Link href={"about/company"} className="bg-yellow-500 px-2">
          Company
        </Link>
        <Link href={"about/history"} className="bg-yellow-500 px-2">
          History
        </Link>
      </div>
    </div>
  );
};

export default about;
