import type { MetaFunction } from "@remix-run/node";
import Difficulty from "~/components/difficulty";
import Game from "~/components/game";
import Preview from "~/components/preview";

export const meta: MetaFunction = () => {
  return [
    { title: "Кот в коробке" },
    { name: "description", content: "wip" },
  ];
};

export default function Index() {
  return (
		<>
			<Preview />
			<Difficulty />
			<Game />
		</>
	)
}
