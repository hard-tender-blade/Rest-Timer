import React, { useState } from "react";

export default function HealthInfo() {
  const [showEyes, setShowEyes] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showWorkout, setShowWorkout] = useState(false);
  const [showBackNeck, setShowBackNeck] = useState(false);
  const [showHarm, setShowHarm] = useState(false);
  const [showBodyWarmup, setShowBodyWarmup] = useState(false);
  const [showHands, setShowHands] = useState(false);
  const [showHandsHarm, setShowHandsHarm] = useState(false);
  const [showHandsWarmup, setShowHandsWarmup] = useState(false);

  return (
    <div className="HealthInfo w-full relative ">
      {/* separator */}
      <div className="h-10"></div>

      {/* content */}
      <div className="max-w-3xl m-auto px-4">
        <h2 className="font-inter text-4xl font-bold text-text-b">
          Health info
        </h2>

        <h4 className="font-inter text-s font-bold text-dark-b mt-2">
          Health tips for computer workers
        </h4>
        <p className="font-inter text-lg mt-8 text-dark-t">
          - Sedentary workers are advised to take a 10 minute break every 60
          minutes of work. - Movement is the best way to protect yourself from
          diseases that are provoked by sedentary work. <br />- Get up every
          45-60 minutes during the work day and walk around a bit. Spend a
          couple of minutes stretching, doing a few bends and squats. <br />- Be
          sure to get outside during your lunch break.
        </p>

        {/* clickable dropdowns, gray divs in between for separation */}
        <div className="dropping-menu mt-10">
          {/* had to make it as separate scrollable window becase otherwise scrollbar would pop-up and move the entire window a bit to the left which looke really bad */}
          {/* separators look like this */}
          <div className="max-w-full h-px bg-gray-300"></div>

          {/* eyes */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowEyes(!showEyes)}
          >
            Eyes
          </h3>
          {/* dropdown func for eyes */}
          {showEyes && (
            <p className="font-inter text-lg mt-4 text-text-b transition duration-300">
              - Good vision greatly affects the comfort of a person's life. In
              order not to spoil it, you need to regularly do prevention.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* rules */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowRules(!showRules)}
          >
            Rules for working to minimize eye damage
          </h3>
          {/* dropdown func for rules */}
          {showRules && (
            <p className="font-inter text-lg mt-4 text-text-b">
              Adjust screen brightnes
              <br />- The brightness of the screen should match the brightness
              of the surroundings. Otherwise, it will be unpleasant for the eyes
              to adjust to different levels of brightness. <br />- Work at night
              with only the room lights on, or place a table lamp behind the
              monitor.
              <br />
              <br />
              Turn on night mode
              <br />- Night mode replaces all cold tones with warm ones, which
              makes it easier for your eyes to look at the screen.
              <br />
              <br />
              Computer glasses
              <br />- Like the night mode of the monitor, they block blue tones,
              so the eyes are much more comfortable. They also muffle glare, for
              which your eyes will thank you.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* workout */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowWorkout(!showWorkout)}
          >
            Eye workout
          </h3>
          {/* dropdown func for workout */}
          {showWorkout && (
            <p className="font-inter text-lg mt-4 text-text-b">
              Our eyes also have muscles that need to be kept in shape,
              otherwise they will begin to weaken. Here are some examples:
              <br /> <br />
              Relaxation <br />- Close your eyes and cover them completely with
              your palms. Even if you sit like this for less than a minute, your
              eyes will rest a little.
              <br /> <br />
              Curtains <br /> - Blink lightly and quickly for several minutes.
              Exercise improves blood circulation in the eyes.
              <br />
              <br />
              Forcing <br />- First, focus on some close object, and then look
              at the object in the distance. Repeat for a few minutes.
              <br /> <br />
              Big eyes <br />- Close your eyes for 5 seconds, then open them
              wide. We repeat about 10 times.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* back neck */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowBackNeck(!showBackNeck)}
          >
            Back, neck and body
          </h3>
          {/* dropdown func for back neck */}
          {showBackNeck && (
            <p className="font-inter text-lg mt-4 text-text-b">
              - The condition of the back and neck greatly affects the condition
              of our internal organs, metabolism and blood circulation. Due to
              poor posture, chronic fatigue, excess weight and even wrinkles can
              appear.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* harm */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowHarm(!showHarm)}
          >
            Rules for work to minimize harm to the back and neck
          </h3>
          {/* dropdown func for back harm */}
          {showHarm && (
            <p className="font-inter text-lg mt-4 text-text-b">
              Armchair <br />- The chair should be comfortable. While sitting,
              your thighs should be parallel to the floor and your feet should
              be on the floor. The back of the chair should have a bend or a
              special orthopedic pillow that repeats the bend of the spine.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* body warmup */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowBodyWarmup(!showBodyWarmup)}
          >
            Body warm-up
          </h3>
          {/* dropdown func for back warmup */}
          {showBodyWarmup && (
            <p className="font-inter text-lg mt-4 text-text-b">
              Neck warm-up <br />- To stretch your muscles and relieve fatigue,
              gently, without sudden movements, tilt your head back and forth,
              right and left. Lock your hands in front of you and lift them up
              so that your elbows are straight and your palms are looking up -
              repeat this exercise several times. Now lock your hands behind
              your back, take your shoulders back, bend over and stay in this
              position for a few seconds. You can also perform tilts and turns
              with the body.
              <br /> <br />
              Shoulders <br />- Sitting or standing, raise your shoulders to
              your ears as high as possible and lower them. The exercise can be
              repeated 8 to 10 times. Straighten your shoulders and connect your
              shoulder blades. Hold this position for a couple of seconds and
              return to your original relaxed position. Repeat 10-15 times.
              <br /> <br />
              Breast <br />- In a sitting or lying position, join your hands
              behind your back in a lock. Squeeze your shoulder blades together
              and hold this position for 30 seconds. Repeat several times.
              <br /> <br />
              Small of the back <br />- Sitting in a chair, turn your body as
              deeply as is comfortable. Hold this position for 15-30 seconds,
              and for convenience, you can put your hand on the back of the
              chair. This exercise helps relieve tension in the back.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* hands */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowHands(!showHands)}
          >
            Hands
          </h3>
          {/* dropdown func for back hands */}
          {showHands && (
            <p className="font-inter text-lg mt-4 text-text-b">
              - Pain in the hands, numbness of the fingers, stiff movements -
              these unpleasant symptoms are often visited by office workers and
              active smartphone users.
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* hands harm */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowHandsHarm(!showHandsHarm)}
          >
            Rules for work to minimize harm to the hands
          </h3>
          {/* dropdown func for back hands harm */}
          {showHandsHarm && (
            <p className="font-inter text-lg mt-4 text-text-b">
              - Unlike a typical mouse, an ergonomic mouse is tailored to the
              health and comfort of the human user. Specifically, it is designed
              to minimize discomfort and prevent potential injuries (such as
              carpal tunnel syndrome and tendonitis).
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>

          {/* hands warmup */}
          <h3
            className="select-none font-inter text-xl font-bold text-text-b mt-4 cursor-pointer  hover:text-dark-b transition-colors duration-200 ease-in-out"
            onClick={() => setShowHandsWarmup(!showHandsWarmup)}
          >
            Hands warm-up
          </h3>
          {/* dropdown func for back hands hands warmup*/}
          {showHandsWarmup && (
            <p className="font-inter text-lg mt-4 text-text-b">
              - Clench your fists with force and open your palms as much as
              possible 5 times. <br />- Clench your fists, rotate them 5 times
              in each direction. <br />- Rotate each finger of your hand for a
              few seconds. <br />- Relax your hands and shake for 30 seconds
              Lock your fingers together and straighten your fingers as much as
              possible. Stretch your wrists up and bend your fingers down.
              Return to starting position. Repeat 10 times
            </p>
          )}
          <div className="max-w-full h-px mt-4 bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
