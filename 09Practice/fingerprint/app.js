// app.js
import { getFingerprint } from './fingerprint.js';

async function runApplication() {
  const userFingerprint = await getFingerprint();
  console.log("User Fingerprint:", userFingerprint);
  // คุณสามารถทำงานอื่นๆ โดยอาศัย fingerprint ที่ได้
}

runApplication();
