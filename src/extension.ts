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
    "AudioTrack", 
    "Randomize BPM", 
    "my-ext.randomize-bpm", 
  );
    context.ui.registerContextMenuAction(
    "AudioClip", 
    "Randomize BPM",
    "my-ext.randomize-bpm", 
  );   
   context.ui.registerContextMenuAction(
    "MidiClip", 
    "Randomize BPM",
    "my-ext.randomize-bpm", 
  );
    context.ui.registerContextMenuAction(
    "MidiTrack", 
    "Randomize BPM", 
    "my-ext.randomize-bpm", 
  );
    context.ui.registerContextMenuAction(
    "Scene",
    "Randomize BPM",
    "my-ext.randomize-bpm", 
  );
    context.ui.registerContextMenuAction(
    "ClipSlot", 
    "Randomize BPM", 
    "my-ext.randomize-bpm", 
  );
}
