import React, { useState } from "react";
import "./Info.css"; // External stylesheet for styling

export default function Info() {
  const [showMyths, setShowMyths] = useState(false); // State to toggle myth section
  const toggleMyths = () => setShowMyths(!showMyths); // Toggle button

  return (
    <div className="info-container">
      {/* Top-left Myths Button */}
      <button className="toggle-button-top" onClick={toggleMyths}>
        {showMyths ? "Hide Myths" : "Show Menstrual Myths"}
      </button>

      <section className="about-section">
        <h2 className="section-title">Understanding Menstruation</h2>
        <div className="section-content">
          <p>
            The menstrual cycle is a biological process that prepares the female body
            for pregnancy. It includes menstruation, ovulation, and hormonal shifts.
            The cycle typically lasts between 28 to 35 days and can vary from person to person.
          </p>
          <div className="image-container">
          <img
 src="https://www.verywellhealth.com/thmb/5nFHcokyfOlmvSFEQwFZbILjJfc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/LutealPhase-final-34f3515f58e744798cebbf4986581591.png"
  alt="Menstrual Cycle"
  className="cycle-image"
/>

          </div>
          <p>
            Girls and women may experience emotional and physical symptoms like cramps,
            fatigue, and mood swings. It's important to talk openly about it and break the stigma
            that surrounds menstruation.
          </p>
        </div>
      </section>

      <section className="societal-views-section">
        <h2 className="section-title">Societal Views on Menstruation</h2>
        <div className="section-content">
          <p>
            Across many societies, menstruation is still considered a taboo topic. In some cultures,
            menstruating women are seen as impure and are excluded from religious ceremonies, social events,
            and even daily activities. These outdated beliefs not only create stigma but also hinder women
            from accessing proper menstrual care and support.
          </p>
        </div>
      </section>

      <section className="cycle-phases-section">
        <h2 className="section-title">Phases of the Menstrual Cycle</h2>
        <div className="cycle-phases">
          {[
            {
              title: "Menstruation",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-first-phase.jpg",
              desc1: "The shedding of the uterine lining, typically lasting 3-7 days.",
              desc2: "Hormone levels drop, which causes the lining to shed."
            },
            {
              title: "Follicular Phase",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-follicular-phase.jpg",
              desc1: "Lasts from end of menstruation to ovulation. Hormones rise.",
              desc2: "FSH triggers follicle growth; one matures into an egg."
            },
            {
              title: "Ovulation",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-ovulation-phase.jpg",
              desc1: "A mature egg is released from the ovary around day 14.",
              desc2: "Peak fertility phase; the egg may get fertilized."
            },
            {
              title: "Luteal Phase",
              img: "https://www.menstrupedia.com/assets/quickguide/physiology/pysiology-menstrual-luteal-phase.jpg",
              desc1: "After ovulation, body prepares for possible pregnancy.",
              desc2: "If no fertilization, hormone levels drop, leading to menstruation."
            }
          ].map((phase, i) => (
            <div className="phase" key={i}>
              <img src={phase.img} alt={phase.title} className="phase-image" />
              <h3>{phase.title}</h3>
              <p>{phase.desc1}</p>
              <p>{phase.desc2}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="menstrual-health-tips">
        <h2 className="section-title">Menstrual Health Tips</h2>
        <ul>
          <li>Eat nutritious food and stay hydrated.</li>
          <li>Exercise to reduce cramps and fatigue.</li>
          <li>Use clean and suitable sanitary products.</li>
          <li>Track your cycle regularly.</li>
          <li>Consult a doctor for persistent pain or irregularities.</li>
        </ul>
      </section>

      <section className="breaking-stigma">
        <h2 className="section-title">Breaking the Stigma</h2>
        <p>
          Menstruation is a natural process but often treated as taboo.
          Open discussions help normalize it and create supportive spaces
          for everyone who menstruates.
        </p>
      </section>

      <section className="call-to-action">
        <h2 className="section-title">Join the Conversation</h2>
        <p>
          Share your stories, spread awareness, and educate others.
          Together, we can remove the shame and encourage menstrual health.
        </p>
      </section>

      {/* Myth Section Toggle */}
      {showMyths && (
        <section className="myth-busting-section">
          <h2 className="section-title">Common Menstrual Myths</h2>
          <div className="myth-list">
            {[
              {
                title: "You Can't Get Pregnant During Your Period",
                truth: "It's rare but possible, especially with a short cycle."
              },
              {
                title: "Menstrual Blood is Unclean",
                truth: "It's a mix of blood and uterine tissue—completely natural."
              },
              {
                title: "Periods Should Only Last 3 Days",
                truth: "A normal period lasts 3–7 days. Everyone is different."
              },
              {
                title: "You Shouldn’t Exercise on Your Period",
                truth: "Light to moderate activity can ease cramps and help mood."
              },
              {
                title: "You Can’t Swim During Your Period",
                truth: "With proper protection like tampons or cups, it's safe."
              },
              {
                title: "Tampons Can Get Lost Inside",
                truth: "Tampons can't pass the cervix and can’t get lost."
              },
              {
                title: "Menstruating Women Should Avoid Religious Places",
                truth: "This is a cultural belief, not a biological necessity."
              },
              {
                title: "All Women Have Painful Periods",
                truth: "Some do, some don’t. Severity varies greatly."
              },
              {
                title: "Menstrual Cycles are Always Regular",
                truth: "Cycles can vary due to stress, health, or lifestyle."
              }
            ].map((myth, i) => (
              <div className="myth" key={i}>
                <h3 className="myth-title">Myth: {myth.title}</h3>
                <p><strong>Truth:</strong> {myth.truth}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
