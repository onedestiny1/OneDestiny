const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyNYM3t-v1AEAraMOQxN-fA5MjCdyoQskZNpCjOp5RZeVSNwnjRoqAq_B06LQEbhSMj/exec";

export async function submitContactForm(formData) {
  const payload = {
    
    fullName: String(formData.fullName || "").trim(),
    email: String(formData.email || "").trim(),
    phone: String(formData.phone || "").trim(),
    messageType: String(
      formData.messageType || "Customer"
    ).trim(),
    message: String(formData.message || "").trim(),
  };

  // Client-side validation
  if (
    !payload.fullName ||
    !payload.email ||
    !payload.phone ||
    !payload.message
  ) {
    throw new Error("Please fill in all required fields.");
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",

      // text/plain avoids the application/json preflight.
      // Apps Script can still parse the JSON request body.
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },

      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || result.success !== true) {
      throw new Error(
        result.message || "Unable to submit your message."
      );
    }

    return result;
  } catch (error) {
    console.error("Contact form submission failed:", error);

    if (error instanceof SyntaxError) {
      throw new Error(
        "The server returned an unreadable response. Check your Apps Script deployment."
      );
    }

    if (
      error instanceof TypeError
    ) {
      throw new Error(
        "Unable to communicate with Google Apps Script. Check deployment access and browser network errors."
      );
    }

    throw error;
  }
}
