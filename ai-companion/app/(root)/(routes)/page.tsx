import { UserButton } from "@clerk/nextjs";

const RootLayout = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default RootLayout;
