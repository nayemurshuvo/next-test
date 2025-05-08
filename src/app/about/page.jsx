import Link from "next/link";

const about = () => {
  return (
    <div>
      <h1 className="text-4xl mb-10">About US</h1>
      <div className="space-x-8">
        <Link href={"about/company"} className="text-blue-800">
          👉{" "}
          <span className="underline underline-offset-auto">Visit Company</span>
        </Link>
        <Link href={"about/history"} className="text-blue-800">
          👉{" "}
          <span className="underline underline-offset-auto">Visit History</span>
        </Link>
      </div>
    </div>
  );
};

export default about;
