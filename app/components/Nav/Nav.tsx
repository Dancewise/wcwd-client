import { Dialog, DialogHeading } from "@ariakit/react";
import logo from "../../images/wcwd-logo.png";
import Button from "../Button/Button";
import TextButton from "../TextButton/TextButton";
import { useState } from "react";
import styles from "./Nav.module.css";
import Signin from "../Signin/Signin";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      <Dialog
        className={styles.dialog}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <DialogHeading className="text-center">
          Welcome to Where Can We Dance
        </DialogHeading>
        <Signin />
      </Dialog>
      <nav aria-label="Nav" className="p-4 flex justify-between">
        <span className="flex gap-1 items-center">
          <img src={logo} className="w-10 h-10" />
          <span>
            <div className="font-bold leading-tight">
              Where Can <br />
              We Dance
            </div>
          </span>
        </span>
        <span className="flex gap-3">
          <TextButton>Create an event</TextButton>
          <TextButton>Explore events</TextButton>
          <Button onClick={onClick}>Signin</Button>
        </span>
      </nav>
    </>
  );
}
