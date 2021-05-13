import classes from "./Main.module.css";
import { Headline } from "src/components/Headline/Headline";
import { Links } from "src/components/Links/Links";

export function Main() {
  return (
    <main cla>
      <Headline title="Welcome to Ken's links !" />
      <Links />
    </main>
  );
}
