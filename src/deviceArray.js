const deviceArray = [
    {
        key: "amp",
        name: "Amp",
        blurb: "Amp is an effect that emulates the sound and character of seven classic guitar amplifiers. Developed in collaboration with Softube, Amp uses physical modelling technology to provide a range of authentic and usable amplifier tones, with a simple and consistent set of controls.",
        imageArray: ["images/amp.png",]
    },
    {
        key: "auto-filter",
        name: "Auto Filter",
        blurb: "The Auto Filter effect provides classic analog filter emulation. It can be modulated by an envelope follower and/or an LFO to create moving filter effects. The envelope follower can track either the filtered signal or an external sidechain source.",
        imageArray: ["images/auto-filter.png"]
    },
    {
        key: "auto-pan",
        name: "Auto Pan",
        blurb: "Auto Pan offers LFO-driven manipulation of amplitude and panning for creating automatic panning, tremolo and amplitude modulation, and beat-synchronized chopping effects.",
        imageArray: ["images/auto-pan.png"]
    },
    {
        key: "beat-repeat",
        name: "Beat Repeat",
        blurb: "Beat Repeat allows for the creation of controlled or randomized repetitions of an incoming signal.",
        imageArray: ["images/beat-repeat.png"]
    },
    {
        key: "cabinet",
        name: "Cabinet",
        blurb: "Cabinet is an effect that emulates the sound of five classic guitar cabinets. Developed in collaboration with Softube, Cabinet uses physical modelling technology to provide a range of authentic sounds, with optimized mics and mic positioning. ",
        imageArray: ["images/cabinet.png"]
    },
    {
        key: "channel-eq",
        name: "Channel EQ",
        blurb: "Inspired by EQs found on classic mixing desks, Channel EQ is a simple, yet flexible three-band EQ, fine-tuned to provide musical results for a variety of audio material.",
        imageArray: ["images/channel-eq.png"]
    },
    {
        key: "chorus",
        name: "Chorus",
        blurb: "The Chorus effect uses two parallel time-modulated delays to create chorus (thickening) and flanging effects.",
        imageArray: ["images/chorus.png"]
    },
    {
        key: "compressor",
        name: "Compressor",
        blurb: "The Compressor affects the dynamic range of a signal by bringing down the level of the loudest parts, making the loud and quiet parts closer together in volume, ultimately yielding volume differences that are less obvious.",
        imageArray: ["images/compressor.png"]
    },
    {
        key: "corpus",
        name: "Corpus",
        blurb: "Corpus is an effect that simulates the acoustic characteristics of seven types of resonant objects. Developed in collaboration with Applied Acoustics Systems, Corpus uses physical modelling technology to provide a wide range of parameters and modulation options.",
        imageArray: ["images/corpus.png"]
    },
    {
        key: "delay",
        name: "Delay",
        blurb: "The Delay provides two independent delay lines, one for each channel (left and right).",
        imageArray: ["/images/delay.png"]
    },
    {
        key: "drum-buss",
        name: "Drum Buss",
        blurb: "Drum Buss is an analog-style drum processor that was designed to add body and character to a group of drums, while gluing them together in a tight mix.",
        imageArray: ["/images/drum-buss.png"]
    },
    {
        key: "dynamic-tube",
        name: "Dynamic Tube",
        blurb: "The Dynamic Tube effect infuses sounds with the peculiarities of tube saturation. An integrated envelope follower generates dynamic tonal variations related to the level of the input signal.",
        imageArray: ["/images/dynamic-tube.png"]
    },
    {
        key: "echo",
        name: "Echo",
        blurb: "Echo is a modulation delay effect that lets you set the delay time on two independent delay lines, while giving you control over envelope and filter modulation.",
        imageArray: ["/images/echo.png", "/images/echo-modulation.png"]
    },
    {
        key: "eq-eight",
        name: "EQ Eight",
        blurb: "The EQ Eight effect is an equalizer featuring up to eight parametric filters per input channel, useful for changing a sound’s timbre.",
        imageArray: ["/images/eq-eight.png", "/images/eqeight-expanded.png"]
    },
    {
        key: "eq-three",
        name: "EQ Three",
        blurb: "If you have ever used a good DJ mixer you will know what this is: An EQ that allows you to adjust the level of low, mid and high frequencies independently.",
        imageArray: ["/images/eq-three.png"]
    },
    {
        key: "erosion",
        name: "Erosion",
        blurb: "The Erosion effect degrades the input signal by modulating a short delay with filtered noise or a sine wave. This adds noisy artifacts or aliasing/downsampling-like distortions that sound very ”digital.”",
        imageArray: ["/images/erosion.png"]
    },
    {
        key: "filter-delay",
        name: "Filter Delay",
        blurb: "The Filter Delay provides three independent delay lines, each preceded by linked lowpass and highpass filters. This allows applying delay to only certain input signal frequencies, as determined by the filter settings. The feedback from each of the three delays is also routed back through the filters.",
        imageArray: ["/images/filter-delay.png"]
    },
    {
        key: "flanger",
        name: "Flanger",
        blurb: "Flanger uses two parallel time-modulated delays to create flanging effects.",
        imageArray: ["images/flanger.png"]
    },
    {
        key: "frequency-shifter",
        name: "Frequency Shifter",
        blurb: "The Frequency Shifter moves the frequencies of incoming audio up or down by a user-specified amount in Hertz. Small amounts of shift can result in subtle tremolo or phasing effects, while large shifts can create dissonant, metallic sounds.",
        imageArray: ["images/frequency-shifter.png"]
    },
    {
        key: "gate",
        name: "Gate",
        blurb: "The Gate effect passes only signals whose level exceeds a user-specified threshold. A gate can eliminate low-level noise that occurs between sounds (e.g., hiss or hum), or shape a sound by turning up the threshold so that it cuts off reverb or delay tails or truncates an instrument’s natural decay.",
        imageArray: ["images/gate.png"]
    },
    {
        key: "glue-compressor",
        name: "Glue Compressor",
        blurb: "The Glue Compressor is an analog-modeled compressor created in collaboration with Cytomic, and is based on the classic bus compressor from a famous 80’s mixing console. Like Live’s original Compressor, the Glue Compressor can be used for basic dynamics control of individual tracks, but is mainly designed for use on the Master track or a Group Track to “glue” multiple sources together into a cohesive sounding mix.",
        imageArray: ["images/glue-compressor.png"]
    },
    {
        key: "grain-delay",
        name: "Grain Delay",
        blurb: "The Grain Delay effect slices the input signal into tiny particles (called ”grains”) that are then individually delayed and can also have different pitches compared to the original signal source. Randomizing pitch and delay time can create complex masses of sound and rhythm that seem to bear little relationship to the source. This can be very useful in creating new sounds and textures, as well as getting rid of unwelcome house guests, or terrifying small pets (just kidding!).",
        imageArray: ["images/grain-delay.png"]
    },
    {
        key: "limiter",
        name: "Limiter",
        blurb: "The Limiter effect is a mastering-quality dynamic range processor that ensures that the output does not exceed a specified level. Limiter is ideal for use in the Master track, to prevent clipping. A limiter is essentially a compressor with an infinite ratio.",
        imageArray: ["images/limiter.png"]
    },
    {
        key: "looper",
        name: "Looper",
        blurb: "Looper is an audio effect based on classic real-time looping devices. It allows you to record and loop audio, creating endless overdubs that are synced to your Set. If the Set is not playing, Looper can analyze incoming audio and set Live’s tempo to match it. You can also predefine a loop length before recording and Live’s tempo will adjust so that your loop fits into the specified number of bars. Furthermore, audio can be imported to Looper to create a background for newly overdubbed material, or exported from Looper as a new clip.",
        imageArray: ["images/looper.png"]
    },
    {
        key: "multiband-dynamics",
        name: "Multiband Dynamics",
        blurb: "The Multiband Dynamics device is a flexible tool for modifying the dynamic range of audio material. Designed primarily as a mastering processor, Multiband Dynamics allows for upward and downward compression and expansion of up to three independent frequency bands, with adjustable crossover points and envelope controls for each band. Each frequency range has both an upper and lower threshold, allowing for two types of dynamics processing to be used simultaneously per band.",
        imageArray: ["images/multiband-dynamics.png"]
    },
    {
        key: "overdrive",
        name: "Overdrive",
        blurb: "Overdrive is a distortion effect that pays homage to some classic pedal devices commonly used by guitarists. Unlike many distortion units, it can be driven extremely hard without sacrificing dynamic range.",
        imageArray: ["images/overdrive.png"]
    },
    {
        key: "pedal",
        name: "Pedal",
        blurb: "Pedal is a guitar distortion effect. In combination with Live’s Tuner, Amp, and Cabinet effects, Pedal is great for processing guitar sounds. Pedal can also be used in less conventional settings, such as a standalone effect on vocals, synths or drums.",
        imageArray: ["images/pedal.png"]
    },
    {
        key: "phaser",
        name: "Phaser",
        blurb: "Phaser uses a series of all-pass filters to create a phase shift in the frequency spectrum of a sound.",
        imageArray: ["images/phaser.png"]
    },
    {
        key: "redux",
        name: "Redux",
        blurb: "Nostalgic for the famed low-resolution sound quality of the Ensoniq Mirage, Fairlight CMI or Commodore-64 computer? Redux returns us to the Dark Ages of digital by reducing a signal’s sample rate and bit resolution.",
        imageArray: ["images/redux.png"]
    },
    {
        key: "resonators",
        name: "Resonators",
        blurb: "This device consists of five parallel resonators that superimpose a tonal character on the input source. It can produce sounds resembling anything from plucked strings to vocoder-like effects. The resonators are tuned in semitones, providing a musical way of adjusting them. The first resonator defines the root pitch and the four others are tuned relative to this pitch in musical intervals.",
        imageArray: ["images/resonators.png"]
    },
    {
        key: "reverb",
        name: "Reverb",
        blurb: "The input signal passes first through high and low cut filters, whose X-Y controller allows changing the band’s center frequency (X-axis) and bandwidth (Y-axis). Either filter may be switched off when not needed to save CPU power.",
        imageArray: ["images/reverb.png"]
    },
    {
        key: "saturator",
        name: "Saturator",
        blurb: "Saturator is a waveshaping effect that can add that missing dirt, punch or warmth to your sound. It can coat input signals with a soft saturation or drive them into many different flavors of distortion.",
        imageArray: ["images/saturator.png"]
    },
    {
        key: "spectrum",
        name: "Spectrum",
        blurb: "Spectrum performs realtime frequency analysis of incoming audio signals. The results are represented in a graph, with dB along the vertical axis and frequency/pitch along the horizontal. The peak levels are retained on the graph until the song is restarted. Note that Spectrum is not an audio effect, but rather a measurement tool — it does not alter the incoming signal in any way.",
        imageArray: ["images/spectrum.png"]
    },
    {
        key: "tuner",
        name: "Tuner",
        blurb: "Tuner analyzes and displays the incoming monophonic pitch as well as its distance from the nearest semitone. Based on classic guitar tuners, Tuner’s large display is designed for easy visibility on stage, and is perfect for tuning external instruments or synthesizers. Note that Tuner is not an audio effect, but rather a measurement tool — it does not alter the incoming signal in any way.",
        imageArray: ["images/tuner.png", "images/tuner-1.png"]
    },
    {
        key: "utility",
        name: "Utility",
        blurb: "Utility can perform some very useful tasks, especially in combination with other devices.",
        imageArray: ["images/utility.png"]
    },
    {
        key: "vinyl-distortion",
        name: "Vinyl Distortion",
        blurb: "The Vinyl Distortion effect emulates some of the typical distortions that occur on vinyl records during playback. These distortions are caused by the geometric relationships between the needle and the recorded groove. The effect also features a crackle generator for adding noisy artifacts.",
        imageArray: ["images/vinyl-distortion.png"]
    },
    {
        key: "vocoder",
        name: "Vocoder",
        blurb: "A vocoder is an effect that combines the frequency information of one audio signal (called the carrier) with the amplitude contour of another audio signal (called the modulator). The modulator source is generally something with a clear rhythmic character such as speech or drums, while the carrier is typically a harmonically-rich synthesizer sound such as a string or pad. The most familiar application of a vocoder is to create ”talking synthesizer” or robotic voice effects.",
        imageArray: ["images/vocoder.png"]
    },
]

export default deviceArray;