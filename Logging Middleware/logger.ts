import fetch from "node-fetch";
export async function Log(
  stack: string,
  level: string,
  packageName: string,
  message: string
): Promise<void> {
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiIyMmJxMWExMjYyQHZ2aXQubmV0IiwiZXhwIjoxNzU0MDMzMTExLCJpYXQiOjE3NTQwMzIyMTEsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiIzMDBlZWE0NC1lNTJlLTRkYTAtOTJlZi1jMWFjZmVkYjBhZjUiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJ2ZW5rYXRhIHBhZG1hIGpldHRpIiwic3ViIjoiNjcwYTBlYjgtNjkxYS00MTU3LTk3ODItN2MyYTVjYzYyN2YzIn0sImVtYWlsIjoiMjJicTFhMTI2MkB2dml0Lm5ldCIsIm5hbWUiOiJ2ZW5rYXRhIHBhZG1hIGpldHRpIiwicm9sbE5vIjoiMjJicTFhMTI2MiIsImFjY2Vzc0NvZGUiOiJQblZCRlYiLCJjbGllbnRJRCI6IjY3MGEwZWI4LTY5MWEtNDE1Ny05NzgyLTdjMmE1Y2M2MjdmMyIsImNsaWVudFNlY3JldCI6Ik1TWGdSWlh2dWNSbW5ReVIifQ.zPTNoqGDTSBxTC_qPWNEK5CUDjwQef1ieZYjjS-TCrs"; // 🔒 Already inserted

  const body = {
    stack: stack.toLowerCase(),
    level: level.toLowerCase(),
    package: packageName.toLowerCase(),
    message,
  };

  try {
    const response = await fetch("http://20.244.56.144/evaluation-service/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      console.error(`❌ Server responded with status: ${response.status}`);
      const errorText = await response.text();
      console.error("❌ Response:", errorText);
      return;
    }

    const data = (await response.json()) as { message?: string };

    if (data.message) {
      console.log("✅ Log response:", data.message);
    } else {
      console.log("⚠️ Log created, but no message returned.");
    }

  } catch (err: any) {
    console.error("❌ Logging error:", err.message || err);
  }
}
