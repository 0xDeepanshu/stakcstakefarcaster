"use client"
import Particles from "@/components/Particles";
import Cubes from "@/components/Cubes";
import Shuffle from "@/components/Shuffle";
import TargetCursor from "@/components/TargetCursor";
import TrueFocus from "@/components/TrueFocus";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";
import { useFrame } from '@/components/farcaster-provider'
import { useState, useEffect } from 'react';
import { APP_URL } from '@/lib/constants'
import { useMutation } from '@tanstack/react-query'
import { IoIosNotifications } from "react-icons/io";
import { MiniAppNotificationDetails } from "@farcaster/miniapp-core";
export default function FrontEnd() {
  const { context } = useFrame()
  const [showModal, setShowModal] = useState(false);
    const { actions } = useFrame()
  const [result, setResult] = useState<string | null>(null);
  const [notificationDetails, setNotificationDetails] =
    useState<MiniAppNotificationDetails | null>(null);
  const [showUnityGame, setShowUnityGame] = useState(false);

  const fid = context?.user?.fid;

  useEffect(() => {
    if (context?.user?.fid) {
      setNotificationDetails(context?.client.notificationDetails ?? null);
    }
  }, [context]);

  const { mutate: sendNotification, isPending: isSendingNotification } =
    useMutation({
      mutationFn: async () => {
        if (!fid) throw new Error("No fid");

        return await fetch("/api/send-notification", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fid,
            notificationDetails,
          }),
        });
      },
      onSuccess: (response) => {
        if (response.status === 200) setResult("Notification sent!");
        else if (response.status === 429)
          setResult("Rate limited. Try again later.");
        else setResult("Error sending notification.");
      },
      onError: () => {
        setResult("Error sending notification.");
      },
    });

  useEffect(() => {
    actions?.addMiniApp();
    // setShowModal(true);
  }, []);

  const handleYes = () => {
    // Handle Yes button click
    setShowModal(false);
  };

  const handleNo = () => {
    // Handle No button click
    setShowModal(false);
  };

  const handlePlayClick = () => {
    setShowUnityGame(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {showUnityGame ? (
        <div 
          id="unity2-container" 
          className="fixed inset-0 z-40 w-full h-full bg-black"
          style={{ zIndex: 40 }}
        >
          <iframe
            src="/unity2-webgl/index.html"
            style={{
              border: "none",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "0",
            }}
            title="Unity 2 Game"
            allowFullScreen
          />
          <button
            onClick={() => setShowUnityGame(false)}
            className="absolute top-4 right-4 z-50 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
            style={{ zIndex: 50 }}
          >
            Close Game
          </button>
        </div>
      ) : null}
      
      <TargetCursor />
      <Particles
        className="absolute inset-0 z-0"
        particleCount={500}
        speed={0.8}
        particleColors={["#ffffff"]}
      />
      <div className="absolute top-0 bg-white text-black h-16 w-full flex flex-row justify-between items-center pl-4 text-lg font-bold">
        <div className="flex items-center justify-center gap-4">
          Rupture Labs <button onClick={() => sendNotification()}><IoIosNotifications  /></button>
        </div>
        <div className="flex flex-row space-x-2 justify-end items-center">
        {context?.user ? (
          <>
            <div className="flex flex-col justify-start items-start space-y-2 text-black">
              <p className="text-sm text-left">
                {''}
                <span className="font-mono text-lg text-blue-400 font-bold rounded-md p-[4px]">
                  {context?.user?.displayName}
                </span>
              </p>
            </div>
            {context?.user?.pfpUrl && (
              <img
                src={context?.user?.pfpUrl}
                className="w-14 h-14 rounded-full p-1"
                alt="User Profile"
                width={56}
                height={56}
              />
            )}
          </>
        ) : (
          <p className="text-sm text-left">User context not available</p>
        )}
      </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <Shuffle text="Stake, Stack!" tag="h1" className="text-white mb-8 cursor-target" />
        <div className="cursor-target">
          <Cubes gridSize={3} cubeSize={30} faceColor={"rgba(255, 255, 255, 0.8)"} shadow={'0 0 3px rgba(255, 255, 255, 0.5)'} />
        </div>
        <div className="mt-16">
          <button onClick={handlePlayClick}>
            <TrueFocus sentence="PLAY" manualMode={true} borderColor={"#ffffff"} glowColor={"rgba(255, 255, 255, 0.8)"} />
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 w-full flex flex-col items-center">
        <TrueFocus sentence="Stack. Stake. Dominate." manualMode={true} borderColor={"#ffffff"} glowColor={"rgba(255, 255, 255, 0.8)"} fontSize="1.5rem" />
      </div>
      
      {/* Social Icons in bottom right */}
      <div className="absolute bottom-6 right-6 z-10">
        <SocialIcons />
      </div>

      {/* Modal */}
      {/* {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-black">Do you want to add this to your home screen?</h2>
            </div>
            <div className="flex justify-center space-x-4">
              <button
                type="button"
                onClick={() => {
                  actions?.addMiniApp();
                  handleNo();
                }}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Yes
              </button>
              <button
                onClick={handleNo}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}