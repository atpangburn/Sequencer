function set_bpm() {
  var bpm = document.getElementById("bpmId");
  console.log(bpm.value);
  Tone.Transport.bpm.value = bpm.value;
  Tone.Transport.start();
}

function stop_seq() {
  Tone.Transport.stop();
}

function start_seq() {
  Tone.Transport.start();
}

function sequencer() {
    const kick = new Tone.Player("./Drums/Kick.wav").toMaster();
    const snare = new Tone.Player("./Drums/Snare.wav").toMaster();
    const Hat = new Tone.Player("./Drums/Hat.wav").toMaster();

    let index = 0;
  
    Tone.Transport.scheduleRepeat(repeat, "16n");
    Tone.Transport.start();
  
   
    function repeat() {
      let step = index % 32;
      let kickInputs = document.querySelector(
        `.kick input:nth-child(${step + 1})`
      );
      let snareInputs = document.querySelector(
        `.snare input:nth-child(${step + 1})`
      );
      let hatInputs = document.querySelector(
        `.Hat input:nth-child(${step + 1})`
      );

      if (kickInputs.checked) {
        kick.start();
      }
      if (snareInputs.checked) {
        snare.start();
      } 

      if (hatInputs.checked) {
        Hat.start();
      } 
      index++;
    }
  }
  
  sequencer();

