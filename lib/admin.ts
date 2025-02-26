import { auth } from "@clerk/nextjs"

const adminIds = [
  "user_2rpwcr716cP8rosm6dJzpnLXyEn",
];

export const isAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
