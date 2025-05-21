import React from "react";
// import { Button } from "@/components/ui/button";
import { Button } from "../component/ui/Button"; 



const Chatgptcode = ()=> {
  return (
    <div className="min-h-screen flex flex-col font-sans ">
      

      {/* Hero Section */}
      

      {/* Feature Cards */}
      <section className="py-16 text-black px-6 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="shadow-xl border border-e-red-50 p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">🔗</div>
          <h3 className="text-xl font-semibold">Link Detector</h3>
          <p className="mt-2 text-sm">Quickly check any link to see if it’s safe or a phishing scam, helping you avoid harmful websites.</p>
          <Button className="mt-4 bg-[#2D1C97] text-white px-4 py-2 rounded">Track Now</Button>
        </div>
        <div className="shadow-md p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">📧</div>
          <h3 className="text-xl font-semibold">Email Analyser</h3>
          <p className="mt-2 text-sm">Analyze your emails to spot fake senders, suspicious links, or dangerous attachments to keep your inbox secure.</p>
          <Button className="mt-4 bg-[#2D1C97] text-white px-4 py-2 rounded">Analyse</Button>
        </div>
        <div className="shadow-md p-6 rounded-lg text-center">
          <div className="text-3xl mb-4">📰</div>
          <h3 className="text-xl font-semibold">Fraud Feed</h3>
          <p className="mt-2 text-sm">Get real-time updates on the latest scams and fraud alerts so you can stay informed and protect yourself.</p>
          <Button className="mt-4 bg-[#2D1C97] text-white px-4 py-2 rounded">Explore</Button>
        </div>
      </section>

      {/* Why SecureSphere */}
      <section className="bg-gray-50 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-[#2D1C97]">Why SecureSphere?</h2>
        <p className="mt-4 max-w-3xl mx-auto text-gray-700">SecureSphere helps you detect scams and phishing, keeps your emails safe, and keeps you updated on the latest fraud threats—all in one easy-to-use platform.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-bold text-lg text-[#2D1C97]">All-in-One Protection</h3>
            <p className="text-sm text-gray-600 mt-2">Scan links, analyze emails, and get fraud updates—all in one platform.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-bold text-lg text-[#2D1C97]">User-Friendly</h3>
            <p className="text-sm text-gray-600 mt-2">Simple, user-friendly tools that anyone can use—no technical skills required.</p>
          </div>
          <div className="bg-white shadow p-6 rounded-lg">
            <h3 className="font-bold text-lg text-[#2D1C97]">Real-Time Alerts</h3>
            <p className="text-sm text-gray-600 mt-2">Get the latest alerts and insights to protect yourself from evolving cyber threats.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2D1C97] text-white text-center py-6">
        <p>&copy; 2025 SecureSphere. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Chatgptcode