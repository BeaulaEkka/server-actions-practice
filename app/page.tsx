import SubscriptionForm from "./components/SubscriptionForm";
import Subscribers from "./components/Subscribers";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row justify-around p-4">
      This is home page
      <SubscriptionForm />
      <Subscribers/>
    </div>
  );
}
