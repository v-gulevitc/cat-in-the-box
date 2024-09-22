import GameBox from "./game_box";

export const BoxState = {
    Empty: 0,
    
}

export default function Game() {
  return (
    <div className="h-screen">
        <h1>game</h1>
        <GameBox cat={false}/>
    </div>
  );
}
