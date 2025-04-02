import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2vC6rGTGQC70bkDHiddRNA1PmS2",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
