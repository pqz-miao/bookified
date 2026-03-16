import { PricingTable } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="container wrapper py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground max-w-2xl">
          Upgrade to unlock more books, longer sessions, and advanced features.
        </p>
      </div>

      <div className="clerk-pricing-container">
        <PricingTable />
      </div>
import { PricingTable } from "@clerk/nextjs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscriptions | Bookified",
  description: "Upgrade to unlock more books, longer sessions, and advanced features.",
};

const Page = () => {
  return (
    <div className="container wrapper py-10">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-4xl font-bold font-serif mb-4">Choose Your Plan</h1>
        <p className="text-muted-foreground max-w-2xl">
          Upgrade to unlock more books, longer sessions, and advanced features.
        </p>
      </div>

      <div className="clerk-pricing-container">
        <PricingTable />
      </div>
    </div>
  );
};

export default Page;
