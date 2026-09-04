/**
 * Maps the plain filenames used in siteContent.ts to the actual bundled
 * image assets, so content data can stay simple strings like
 * "action-1v1.jpg" while Vite still processes/optimizes the real files.
 *
 * To add a new photo: drop it in /src/assets/images, add one line below,
 * then reference its filename from siteContent.ts.
 */
import coachPortrait from "../assets/images/coach-portrait.jpg";
import coachCasual from "../assets/images/coach-casual.jpg";
import action1v1 from "../assets/images/action-1v1.jpg";
import actionDriveContact from "../assets/images/action-drive-contact.jpg";
import teamTraining from "../assets/images/team-training.jpg";
import actionDribbleFmn from "../assets/images/action-dribble-fmn.jpg";
import actionDefense from "../assets/images/action-defense.jpg";
import medals from "../assets/images/medals.jpg";

const imageMap: Record<string, string> = {
  "coach-portrait.jpg": coachPortrait,
  "coach-casual.jpg": coachCasual,
  "action-1v1.jpg": action1v1,
  "action-drive-contact.jpg": actionDriveContact,
  "team-training.jpg": teamTraining,
  "action-dribble-fmn.jpg": actionDribbleFmn,
  "action-defense.jpg": actionDefense,
  "medals.jpg": medals,
};

export function getImage(filename: string): string {
  return imageMap[filename] ?? "";
}
