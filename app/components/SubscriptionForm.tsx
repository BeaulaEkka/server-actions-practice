import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

export default function SubscriptionForm() {
  return (
    <div>
      <form action="">
        <Label>Full Name:</Label>
        <Input placeholder="John Doe" />

        <Label>Email:</Label>
        <Input placeholder="John@john.com" />

        <Button>Submit</Button>
      </form>
    </div>
  );
}
