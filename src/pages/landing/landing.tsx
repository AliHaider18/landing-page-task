import Hero from "./_components/Hero";
import BreakingBarriers from "./_components/BreakingBarriers";
import TreatmentInfo from "./_components/TreatmentInfo";
import Testimonials from "./_components/Testimonials";
import TreatmentSteps from "./_components/TreatmentSteps";
import FeaturedOn from "./_components/FeaturedOn";
import ServiceMap from "./_components/ServiceMap.jsx";
import MedicationDelivery from "./_components/MedicationDelivery";
import Footer from "./_components/Footer";

const Landing = () => {
  return (
    <div>
      <Hero
        title="Easy Online Suboxone Treatment for Opioid Addiction"
        subtitle="No lines. Less hassle. Lower costs."
        buttonText="Download The App Today"
        buttonLink="/download"
      />

      <BreakingBarriers
        title="Breaking Barriers to Recovery"
        missionText="Our mission is to make Medication Assisted Treatment accessible to people in both major cities and rural communities. We're deeply committed to removing obstacles to recovery, ensuring our clients get the support they need."
        supportText="We're not just offering a service; we're creating a lifeline. Our platform is designed to eliminate the challenges that often stand in the way of recovery, whether it's stigma, inconvenience, or lack of access to quality care."
        stats={[
          { value: "500+", label: "Patients Treated" },
          { value: "300+", label: "Centers Nationwide" },
          { value: "4.9/5", label: "Patients Satisfaction" },
        ]}
        videoSrc="/images/background-barriers.gif"
      />

      <TreatmentInfo
        welcomeText="WELCOME TO RECOVERY DELIVERED"
        title="Your Fully Online Suboxone Treatment Platform"
        description="100% online opioid treatment with licensed buprenorphine providers starts at just $99/month."
        subDescription="With monthly and weekly meetings based on where you are in your recovery. Get a same-day appointment and script."
        videoSrc="/images/treatment-video-thumbnail.webp"
      />

      <Testimonials
        heading="Testimonials"
        testimonials={[
          {
            content:
              "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed.",
            additionalContent:
              "I was so surprised. Thank you Recovery Delivered!",
            author: "Nicholas O.",
            rating: 4.5,
            image:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          },
          {
            content:
              "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple.",
            additionalContent:
              "Very affordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
            author: "Christine M.",
            rating: 4.5,
            image:
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          },
          {
            content:
              "If you need help. Go here. Get online. Sign up. Pay the fees and never look back.",
            additionalContent:
              "I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
            author: "Heather B.",
            rating: 4.5,
            image:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
          },
        ]}
      />

      <TreatmentSteps
        heading="GET SAME-DAY ONLINE"
        title="Suboxone Treatment In 10 Minutes"
        buttonText="Download The App Today"
        buttonLink="/download"
        steps={[
          {
            number: 1,
            title: "Download The App",
            description: "Click the link to download our app to get started.",
          },
          {
            number: 2,
            title: "Complete Onboarding Process & Documents",
            description: "Provide medical history and sign treatment forms.",
          },
          {
            number: 3,
            title: "Schedule Your First Visit",
            description:
              "Our onboarding team will send you a link to book your first meeting. Many times, this is the same day.",
          },
          {
            number: 4,
            title: "Meet With Licensed Provider",
            description:
              "At the time of your appointment, open the app on your phone to have your visit.",
          },
          {
            number: 5,
            title: "Pick Up Medication",
            description:
              "Your script will be sent to your pharmacy of choice for pick up the same day.",
          },
        ]}
      />

      <FeaturedOn
        title="AS SEEN"
        subtitle="Featured On"
        logos={[
          { src: "/images/logos/cbs-news.webp", alt: "CBS News" },
          { src: "/images/logos/abc-news.webp", alt: "ABC" },
          { src: "/images/logos/nbc-news.webp", alt: "NBC" },
          { src: "/images/logos/fox-news.webp", alt: "FOX" },
        ]}
      />

      <ServiceMap
        title="Currently Serve"
        description="We believe everyone should have access to treatment and care. That's why we're teaming up with providers all over the country. Click on a green state to see the insurance companies we currently accept and to learn more about online Suboxone doctors in your area."
      />

      <MedicationDelivery
        heading="SECURE ACCESS TO YOUR MEDICATIONS"
        title="Get Your Meds Online Today"
        description="We have partnered with RX-Outreach to provide mail order medications at a fraction of the price you may find in your local pharmacy. Meet your chronic illness provider online today and get your medication delivered as quickly as 24 hours later."
        buttonText="Get The App"
        buttonLink="/download"
      />

      <Footer />
    </div>
  );
};

export default Landing;
