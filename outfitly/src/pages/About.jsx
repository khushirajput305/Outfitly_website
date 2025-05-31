import React from "react";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At Outfitly, we believe that fashion is more than just clothes —
            it's a reflection of your personality, confidence, and creativity.
            Our mission is to make styling effortless, enjoyable, and accessible
            for everyone. Whether you're dressing for a big occasion, a casual
            day out, or simply refreshing your wardrobe, Outfitly helps you
            discover looks that match your vibe and elevate your style.
          </p>
          <p>
            We’re not just about trends — we’re about you. That’s why Outfitly
            blends modern fashion with smart styling tools, personalized
            suggestions, and a curated collection designed to inspire. Our
            platform is built with a passion for innovation and a love for
            self-expression, so you can look good and feel even better.
          </p>
          <p className="text-gray-800">Our Mission</p>
          <p>
            At Outfitly, our mission is to empower individuals to express
            themselves through fashion. We aim to simplify the styling
            experience by combining creativity, technology, and personalization
            — helping you find outfits that suit your unique personality, mood,
            and lifestyle. We’re here to make fashion fun, effortless, and
            inclusive. Whether you're seeking everyday looks or standout styles,
            Outfitly is your go-to platform for discovering, organizing, and
            elevating your wardrobe with confidence.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance :</b>
          <p className="text-gray-600">
            At Outfitly, we prioritize quality in every detail. From product
            selection to user experience, we ensure everything meets high
            standards of style, comfort, and reliability. We work with trusted
            partners and continuously refine our platform based on user feedback
            — so you can style confidently, knowing you're getting the best.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convience :</b>
          <p className="text-gray-600">
            Outfitly is designed to make fashion easy. From personalized outfit
            suggestions to a smooth browsing and shopping experience, we bring
            style to your fingertips. No more guesswork — just effortless
            styling, anytime, anywhere.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service :</b>
          <p className="text-gray-600">
            At Outfitly, your satisfaction is our priority. Our dedicated
            support team is always here to help — whether you need styling
            advice, order assistance, or just have a question. We believe in
            fast responses, friendly service, and making sure you always feel
            valued.
          </p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default About;
