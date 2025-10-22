"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getFunctions, httpsCallable } from "firebase/functions";
import "../../../firebase/firebaseClient"; // adjust the path based on your project structure

// Define the expected input and output types for your callable function.
interface GetStripeAccountStatusInput {
  coachId: string;
}

interface GetStripeAccountStatusOutput {
  status: string;
}

export default function Success() {
  const params = useParams();
  const coachId = params.coachId as string;
  const [stripeStatus, setStripeStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!coachId) return; // Wait until coachId is defined.
    async function callGetStripeAccountStatus() {
      setLoading(true);
      try {
        const functions = getFunctions();
        const getStripeAccountStatus = httpsCallable<
          GetStripeAccountStatusInput,
          GetStripeAccountStatusOutput
        >(functions, "getStripeAccountStatus");
        const result = await getStripeAccountStatus({ coachId });
        console.log("Stripe account status result:", result.data);
        setStripeStatus(result.data.status);
      } catch (error) {
        console.error("Error calling getStripeAccountStatus:", error);
      } finally {
        setLoading(false);
      }
    }
    callGetStripeAccountStatus();
  }, [coachId]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "white",
        color: "#143642",
      }}
    >
      <Image
        src="/logo-center.png"
        alt="Logo"
        width={300}
        height={60}
        unoptimized
        style={{ marginBottom: "20px" }}
      />
      {loading ? (
        <p>Loading Stripe status...</p>
      ) : (
        <p style={{ padding: 16 }}>
          Your account has been connected with Stripe successfully.
          <br />
          {stripeStatus && (
            <>
              Your account status is: <strong>{stripeStatus}</strong>
              <br />
            </>
          )}
          Return to the app by clicking done in the top left-hand corner.
        </p>
      )}
    </div>
  );
}
