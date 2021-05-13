import { Headline } from "src/components/Headline/Headline";
import { Links } from "src/components/Links/Links";

export function Main() {
  return (
    <main>
      <Headline className={classes.container} title="Welcome to Ken's links !" />
      <Links />
    </main>
  );
}
