import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";

import { VapiControls } from "@/components/VapiControls";

import { getBookBySlug } from "@/lib/actions/book-actions";

interface Props {
  params: Promise<{ slug: string; }>;
}

const Page = async ({ params }: Props) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { slug } = await params;
  const result = await getBookBySlug(slug);

  if (!result.success || !result.data) {
    redirect("/");
  }

  const book = result.data;

  return (
    <div className="book-page-container">
      <Link href="/" className="back-btn-floating">
        <ArrowLeft className="size-6 text-[#212a3b]" />
      </Link>

      <VapiControls book={book} />
    </div>
  );
};

export default Page;
