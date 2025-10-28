import React from "react";
import UserCard from "./UserCard";

function Exercise() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          User Cards
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <UserCard name="Lucas Graham" email="lucas@example.com" street="123 Main St" city="Amsterdam" />
          <UserCard name="Bibit" email="bibit@example.com" street="Jl kelud kediri" city="Kediri-Nganjuk" />
          <UserCard name="Dive iPhone 15 PROMEK" email="dive@example.com" street="Jl Pandan" city="Cirebon" />
        </div>
      </div>
    </>
  );
}

export default Exercise;