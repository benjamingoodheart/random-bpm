import {
  initialize,
  type ActivationContext,
  Song,
  Handle,
} from "@ableton-extensions/sdk";

//based off https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored + 1 - minCeiled) + minCeiled);
}

export function activate(activation: ActivationContext) {
  const context = initialize(activation, "1.0.0");
  context.commands.registerCommand("my-ext.randomize-bpm", (handle) => {
    const song = context.application.song;
    var oldBPM = song.tempo;
    song.tempo = getRandomInt(50, 220);
    console.log(`BPM is now ${song.tempo}, old BPM was ${oldBPM}`);
  });

  context.ui.registerContextMenuAction(
    "AudioTrack", // The scope
    "Randomize BPM", // The label shown to the user
    "my-ext.randomize-bpm", // The ID of the command to trigger
  );
}
