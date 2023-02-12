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
    <div className="HealthInfo w-full relative">
      {/* separator */}
      <div className="h-14"></div>

      {/* content */}
      {/* TODO: ADD TEXT TO ALL DROPDOWNS, ANIMATIONS, SCROLLBAR THINGY */}
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
          diseases that are provoked by sedentary work. Get up every 45-60
          minutes during the work day and walk around a bit. Spend a couple of
          minutes stretching, doing a few bends and squats. Be sure to get
          outside during your lunch break.
        </p>

        {/* clickable dropdowns, gray divs in between for separation */}

        <div className="max-w-full h-px mt-10 bg-gray-300"></div>

        {/* eyes */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowEyes(!showEyes)}
        >
          Eyes
        </h3>
        {/* dropdown func for eyes */}
        {showEyes && (
          <p className="font-inter text-lg mt-4 text-text-b">
            - Good vision greatly affects the comfort of a person's life. In
            order not to spoil it, you need to regularly do prevention.
          </p>
        )}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* rules */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowRules(!showRules)}
        >
          Rules for working to minimize eye damage
        </h3>
        {/* dropdown func for rules */}
        {showRules && (
          <p className="font-inter text-lg mt-4 text-text-b">
            Adjust screen brightnes
            <br />- The brightness of the screen should match the brightness of
            the surroundings. Otherwise, it will be unpleasant for the eyes to
            adjust to different levels of brightness. <br />- Work at night with
            only the room lights on, or place a table lamp behind the monitor.
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
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowWorkout(!showWorkout)}
        >
          Eye workout
        </h3>
        {/* dropdown func for workout */}
        {showWorkout && (
          <p className="font-inter text-lg mt-4 text-text-b">a</p>
        )}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* back neck */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowBackNeck(!showBackNeck)}
        >
          Back, neck and body
        </h3>
        {/* dropdown func for back neck */}
        {showBackNeck && (
          <p className="font-inter text-lg mt-4 text-text-b">a</p>
        )}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* harm */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowHarm(!showHarm)}
        >
          Rules for work to minimize harm to the back and neck
        </h3>
        {/* dropdown func for back harm */}
        {showHarm && <p className="font-inter text-lg mt-4 text-text-b">a</p>}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* body warmup */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowBodyWarmup(!showBodyWarmup)}
        >
          Body warm-up
        </h3>
        {/* dropdown func for back warmup */}
        {showBodyWarmup && (
          <p className="font-inter text-lg mt-4 text-text-b">a</p>
        )}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* hands */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowHands(!showHands)}
        >
          Hands
        </h3>
        {/* dropdown func for back hands */}
        {showHands && <p className="font-inter text-lg mt-4 text-text-b">a</p>}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* hands harm */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowHandsHarm(!showHandsHarm)}
        >
          Rules for work to minimize harm to the hands
        </h3>
        {/* dropdown func for back hands harm */}
        {showHandsHarm && (
          <p className="font-inter text-lg mt-4 text-text-b">a</p>
        )}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>

        {/* hands warmup */}
        <h3
          className="font-inter text-xl font-bold text-text-b mt-4 cursor-pointer"
          onClick={() => setShowHandsWarmup(!showHandsWarmup)}
        >
          Hands warm-up
        </h3>
        {/* dropdown func for back hands hands warmup*/}
        {showHandsWarmup && (
          <p className="font-inter text-lg mt-4 text-text-b">a</p>
        )}
        <div className="max-w-full h-px mt-4 bg-gray-300"></div>
      </div>

      {/* separator */}
      <div className="h-16"></div>

      {/* fadeout */}
      <div className="fixed bottom-0 w-full h-32 bg-gradient-to-t from-white" />
    </div>
  );
}
