import React from 'react'

const deviceArray = [
    {
        type: "aud",
        key: "amp",
        name: "Amp",
        blurb: "Amp is an effect that emulates the sound and character of seven classic guitar amplifiers. Developed in collaboration with Softube, Amp uses physical modelling technology to provide a range of authentic and usable amplifier tones, with a simple and consistent set of controls.",
        imageArray: ["images/amp.png",],
        relatedDevices: ["cabinet", "pedal", "overdrive", "saturator"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-1-amp",
        mainContent:
            <React.Fragment>
                <img src="/images/amp-decorator.png" alt="amp waveform comparison" className="amp-decorator-image decorator-image" />
                <p>While it’s not quite the workhorse that pedal is, amp is a quick and dirty source of grime. It's an effect that I find myself turning towards when I feel like my track is too digital or too clean. The grit that can be achieved by throwing an amp preset on a track can be be more satisfying than ten minutes of knob twiddling with saturator, overdrive, and pedal.
        </p>
                <p>Amp was built to be used alongside the cabinet audio effect, an effect that emulates the sound of five classic guitar cabinets.
        </p>

            </React.Fragment>,
        asideContent: "Counter to its guitar associations, amp plays nice with all sorts of instrument, not just guitars. I find myself most often using the bass amp model, modeled after a rare PA from the ’70s which has become popular with bass players due to its strong low end and ”fuzz” at high volumes. A great addition to pads and leads alike, amp is a wave-shaping effect comparable to pedal, overdrive, or saturator."
    },
    {
        type: "aud",
        key: "auto-filter",
        name: "Auto Filter",
        blurb: "The Auto Filter effect provides classic analog filter emulation. It can be modulated by an envelope follower and/or an LFO to create moving filter effects. The envelope follower can track either the filtered signal or an external sidechain source.",
        imageArray: ["images/auto-filter.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-2-auto-filter",
        mainContent:
            <React.Fragment>
                <p>Auto Filter exemplifies one of my main gripes with Ableton: bad naming conventionds. This should really just be called Filter, the available extensive modulation notwithstanding. I find myself scrolling down the Fs in my device list to find Filter and then wonder where it could be instead. (Same with Auto Pan, and formerly Simple Delay.) That's not to say that is a bad effect; on the contrary, it is likely one of the most crucial and powerful audio effects in Ableton, particularly when used in parallel with itself or in a rack.</p>
                <img src="/images/auto-filter-decorator.png" alt="instrument rack with comb filter" className="decorator-image auto-filter-decorator-image" />
            </React.Fragment>,
        asideContent:
            <React.Fragment>
                There's more to Live's Auto Filter audio effect than simply applying an analogue-style filter to your instruments and audio clips. Moving multi-band filters are easy to create with Racks of Auto Filters.
                <audio controls>
                    <source src="/audio/auto-filter.ogg" type="audio/ogg" />
                </audio>
            </React.Fragment>,
    },
    {
        type: "aud",
        key: "auto-pan",
        name: "Auto Pan",
        blurb: "Auto Pan offers LFO-driven manipulation of amplitude and panning for creating automatic panning, tremolo and amplitude modulation, and beat-synchronized chopping effects.",
        imageArray: ["images/auto-pan.png"],
        relatedDevices: ["auto-filter", "phaser", "utility"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-3-auto-pan",
        mainContent: <React.Fragment>
            <img src="/images/auto-pan-sine.png"
                alt="autopan with sine waves"
                className="auto-pan-decorator-image-1 decorator-image"
            />
            <p>Let's get this out of the way: Auto Pan should not be called Auto Pan. It should be called Tremolo, or maybe Amplitude Modulator, or even 2-Channel Parametric/Isomorphic AM LFO (okay, probably not that last one). </p>
            <p>The point is, this audio effect is extremely powerful, and I pretty much never use it for panning. I guess there are some pretty cool swirling sounds to be had if you keep the each channel out of phase... Hang on, I have to go try something.
                                </p>

            <p>Okay I tried it and it was not that fun. More credit to my point that this is not a panning effect, it is modulating tool. (Also, it should have a square wave setting, is that so much to ask?) </p>
            <img
                src="/images/auto-pan-decorator.png"
                alt="my favorite settings of auto pan"
                className="auto-pan-decorator-image-2 decorator-image"
            />
            <p>Auto Pan in combination with some clever automation can add rhythm and motion to a long pad sound, or even stutters to a lead sound. The LFO is quite powerful, and despite not having a square waveform (???), it reaches well into pitch range. One of my favorite ideas with this effect is the noise waveform with a high rate (~35hz) to add some analog grit to a pad.</p>

        </React.Fragment>,
        asideContent: <React.Fragment>
            <p>I think I say analog grit too much, but I really do find myself chasing after it 90% of the time I'm working in ableton. Cool band name?</p>
        </React.Fragment>,
    },
    {
        type: "aud",
        key: "beat-repeat",
        name: "Beat Repeat",
        blurb: "Beat Repeat allows for the creation of controlled or randomized repetitions of an incoming signal.",
        imageArray: ["images/beat-repeat.png"],
        relatedDevices: ["drum-buss", "compressor"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-4-beat-repeat",
        mainContent:
            <React.Fragment>
                <img src="/images/beat-repeat-decorator.png"
                    alt="favorite beat repeat settings"
                    className="beat-repeat-decorator-image decorator-image"
                />
                <p>
                    As a self-proclaimed glitch enthusiast, Beat Repeat is in my top 3 devices. And since I have no self-control, my Beat Repeat use is never subtle. Sometimes I wonder if all of my ableton-familiar listeners (like I have any listeners) are like "can this dude chill with the beat repeat?"
                </p>
                <p>
                    Anyway it might be my favorite audio effect in the program. I guess it could theoretically be used tastefully, but I like to crank all the knobs and let chaos replace creativity. Seriously, if you learn the ins and outs of Beat Repeat, your drums will all of a sudden bear resemblance to Venetian Snares and Aphex Twin.
                </p>
            </React.Fragment>,
        asideContent:
            <React.Fragment>
                <p>
                    I'm not known for showing restraint and sensitivity when using Beat Repeat.
                </p>
                <audio controls>
                    <source src="/audio/beat-repeat.ogg" type="audio/ogg" />
                </audio>
            </React.Fragment>,
    },
    {
        type: "aud",
        key: "cabinet",
        name: "Cabinet",
        blurb: "Cabinet is an effect that emulates the sound of five classic guitar cabinets.  ",
        imageArray: ["images/cabinet.png"],
        relatedDevices: ["amp", "pedal", "chorus"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-5-cabinet",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "channel-eq",
        name: "Channel EQ",
        blurb: "Inspired by EQs found on classic mixing desks, Channel EQ is a simple, yet flexible three-band EQ, fine-tuned to provide musical results for a variety of audio material.",
        imageArray: ["images/channel-eq.png"],
        relatedDevices: ["eq-eight", "eq-three", "utility"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-6-channel-eq",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "chorus",
        name: "Chorus",
        blurb: "The Chorus effect uses two parallel time-modulated delays to create chorus (thickening) and flanging effects.",
        imageArray: ["images/chorus.png"],
        relatedDevices: ["pedal", "flanger", "phaser"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-7-chorus",
        mainContent:
            <React.Fragment>
                <img src="/images/chorus-decorator.png"
                    alt="favorite chorus settings"
                    className="chorus-decorator-image decorator-image"
                />
                <p>
                    Chorus makes a mono course appear stereo by mixing the original signal with a pair of parallel time-modulated versions of the original. Live's particular chorus can be used to subtly widen a signal, or completely mangle it.
            </p>

                <p>
                    The strength of Live's chorus is in the modulation of the delay signals. This is one effect that I actually do use with some semblance of restraint.
            </p>
            </React.Fragment>,
        asideContent:
            <React.Fragment>
                <p>
                    As often as I use chorus, I also just find myself doubling an instrument and detuning each instance. Or even just adding a return with a clean delay with a very short delay time. If I do use chorus, it's usually on a pad sound to add some shimmer.
                </p>
                <audio controls className="audio-player">
                    <source src="/audio/chorus.ogg" type="audio/ogg" />
                </audio>
                <p>
                    This audio sample has the clean chord progression followed by the same clip with the chorus on. It's a slight, fast-moving warble that is most obvious in the high ranges.
            </p>
            </React.Fragment>,
    },
    {
        type: "aud",
        key: "compressor",
        name: "Compressor",
        blurb: "The Compressor affects the dynamic range of a signal by bringing down the level of the loudest parts, making the loud and quiet parts closer together in volume, ultimately yielding volume differences that are less obvious.",
        imageArray: ["images/compressor.png"],
        relatedDevices: ["glue-compressor", "limiter"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-8-compressor",
        mainContent:
            <React.Fragment>
                <p>
                    Ah, the compressor. Does anyone really know what it does? Sure, they may have read <i>The Art of Compression</i> by Thomas Juth, but I find when asked to explain the actual audio effect of compressing a sound, people do quite a bit of hand-waving and pretending to turn knobs in the air. (Air-twiddling? maybe another good band name.)
                </p>
                <p>
                    Sometimes people say "this sounds so compressed," and I never know if they mean mixing-wise or a poor-quality filetype or what's going on with that. Anyway, I sort of know how to use a compressor but don't ask me what it means.
                </p>
            </React.Fragment>,
        asideContent:
            <React.Fragment>
                <p>
                    You know this sound. In this audio example, the kick is muted and you can only hear the side-chain compression turning down the pad on the beat. I like to use this as an effect, but in EDM, this effect is used to carve out frequency space for the kick.
            </p>
                <audio controls className="audio-player">
                    <source src="/audio/compressor.ogg" type="audio/ogg" />
                </audio>
            </React.Fragment>,
    },
    {
        type: "aud",
        key: "corpus",
        name: "Corpus",
        blurb: "Corpus is an effect that simulates the acoustic characteristics of seven types of resonant objects. Developed in collaboration with Applied Acoustics Systems, Corpus uses physical modelling technology to provide a wide range of parameters and modulation options.",
        imageArray: ["images/corpus.png"],
        relatedDevices: ["chorus", "eq-three", "auto-pan"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-9-corpus",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "delay",
        name: "Delay",
        blurb: "The Delay provides two independent delay lines, one for each channel (left and right).",
        imageArray: ["/images/delay.png"],
        relatedDevices: ["echo", "reverb"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-10-delay",
        mainContent:
            <React.Fragment>
                <p>
                    Hey, they finally changed this to Delay instead of Simple Delay! I've been saying it for years. I guess I whine about Live's naming conventions a lot.
                </p>
                <p>
                    Delay is probably in my top 3 effects used. This version has combined three effects from live 10.something, Ping Pong Delay, Filter Delay and Simple Delay. It's a clean, back-to-basics 2-channel delay line. It's like cheating if you are trying to produce a cascading wall of sound.
                </p>
            </React.Fragment>,
        asideContent:
            <React.Fragment>
                <p>
                    You can make a tight spring-style reverb by adding 5 to 10 very short delay lines to an effect rack with small variations in each delay time. Listen to the clap change halfway through (it's not subtle).
            </p>
                <audio controls className="audio-player">
                    <source src="/audio/delay.ogg" type="audio/ogg" />
                </audio>
            </React.Fragment>,
    },
    {
        type: "aud",
        key: "drum-buss",
        name: "Drum Buss",
        blurb: "Drum Buss is an analog-style drum processor that was designed to add body and character to a group of drums, while gluing them together in a tight mix.",
        imageArray: ["/images/drum-buss.png"],
        relatedDevices: ["utility", "saturator"],
        manualUrl: "https://www.ableton.com/en/manual/live-audio-effect-reference/#22-11-drum-buss",
        mainContent:
            <React.Fragment>
                <p>
                    Drum Buss is a unique effect that functions in both utility and creativity. Therefor, it should go on every drum track. Utility + Saturator + Corpus in a single device.
                </p>
            </React.Fragment>,
        asideContent: "",
    },
    {
        type: "aud",
        key: "dynamic-tube",
        name: "Dynamic Tube",
        blurb: "The Dynamic Tube effect infuses sounds with the peculiarities of tube saturation. An integrated envelope follower generates dynamic tonal variations related to the level of the input signal.",
        imageArray: ["/images/dynamic-tube.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "echo",
        name: "Echo",
        blurb: "Echo is a modulation delay effect that lets you set the delay time on two independent delay lines, while giving you control over envelope and filter modulation.",
        imageArray: ["/images/echo.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "eq-eight",
        name: "EQ Eight",
        blurb: "The EQ Eight effect is an equalizer featuring up to eight parametric filters per input channel, useful for changing a sound’s timbre.",
        imageArray: ["/images/eq-eight.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "eq-three",
        name: "EQ Three",
        blurb: "If you have ever used a good DJ mixer you will know what this is: An EQ that allows you to adjust the level of low, mid and high frequencies independently.",
        imageArray: ["/images/eq-three.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "erosion",
        name: "Erosion",
        blurb: "The Erosion effect degrades the input signal by modulating a short delay with filtered noise or a sine wave. This adds noisy artifacts or aliasing/downsampling-like distortions that sound very ”digital.”",
        imageArray: ["/images/erosion.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "filter-delay",
        name: "Filter Delay",
        blurb: "The Filter Delay provides three independent delay lines, each preceded by linked lowpass and highpass filters. This allows applying delay to only certain input signal frequencies, as determined by the filter settings. The feedback from each of the three delays is also routed back through the filters.",
        imageArray: ["/images/filter-delay.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "flanger",
        name: "Flanger",
        blurb: "Flanger uses two parallel time-modulated delays to create flanging effects.",
        imageArray: ["images/flanger.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "frequency-shifter",
        name: "Frequency Shifter",
        blurb: "The Frequency Shifter moves the frequencies of incoming audio up or down by a user-specified amount in Hertz. Small amounts of shift can result in subtle tremolo or phasing effects, while large shifts can create dissonant, metallic sounds.",
        imageArray: ["images/frequency-shifter.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "gate",
        name: "Gate",
        blurb: "The Gate effect passes only signals whose level exceeds a user-specified threshold. A gate can eliminate low-level noise that occurs between sounds (e.g., hiss or hum), or shape a sound by turning up the threshold so that it cuts off reverb or delay tails or truncates an instrument’s natural decay.",
        imageArray: ["images/gate.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "glue-compressor",
        name: "Glue Compressor",
        blurb: "The Glue Compressor is an analog-modeled compressor created in collaboration with Cytomic, and is based on the classic bus compressor from a famous 80’s mixing console. Like Live’s original Compressor, the Glue Compressor can be used for basic dynamics control of individual tracks, but is mainly designed for use on the Master track or a Group Track to “glue” multiple sources together into a cohesive sounding mix.",
        imageArray: ["images/glue-compressor.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "grain-delay",
        name: "Grain Delay",
        blurb: "The Grain Delay effect slices the input signal into tiny particles (called ”grains”) that are then individually delayed and can also have different pitches compared to the original signal source. Randomizing pitch and delay time can create complex masses of sound and rhythm that seem to bear little relationship to the source. This can be very useful in creating new sounds and textures, as well as getting rid of unwelcome house guests, or terrifying small pets (just kidding!).",
        imageArray: ["images/grain-delay.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "limiter",
        name: "Limiter",
        blurb: "The Limiter effect is a mastering-quality dynamic range processor that ensures that the output does not exceed a specified level. Limiter is ideal for use in the Master track, to prevent clipping. A limiter is essentially a compressor with an infinite ratio.",
        imageArray: ["images/limiter.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "looper",
        name: "Looper",
        blurb: "Looper is an audio effect based on classic real-time looping devices. It allows you to record and loop audio, creating endless overdubs that are synced to your Set. If the Set is not playing, Looper can analyze incoming audio and set Live’s tempo to match it. You can also predefine a loop length before recording and Live’s tempo will adjust so that your loop fits into the specified number of bars. Furthermore, audio can be imported to Looper to create a background for newly overdubbed material, or exported from Looper as a new clip.",
        imageArray: ["images/looper.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "multiband-dynamics",
        name: "Multiband Dynamics",
        blurb: "The Multiband Dynamics device is a flexible tool for modifying the dynamic range of audio material. Designed primarily as a mastering processor, Multiband Dynamics allows for upward and downward compression and expansion of up to three independent frequency bands, with adjustable crossover points and envelope controls for each band. Each frequency range has both an upper and lower threshold, allowing for two types of dynamics processing to be used simultaneously per band.",
        imageArray: ["images/multiband-dynamics.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "overdrive",
        name: "Overdrive",
        blurb: "Overdrive is a distortion effect that pays homage to some classic pedal devices commonly used by guitarists. Unlike many distortion units, it can be driven extremely hard without sacrificing dynamic range.",
        imageArray: ["images/overdrive.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "pedal",
        name: "Pedal",
        blurb: "Pedal is a guitar distortion effect. In combination with Live’s Tuner, Amp, and Cabinet effects, Pedal is great for processing guitar sounds. Pedal can also be used in less conventional settings, such as a standalone effect on vocals, synths or drums.",
        imageArray: ["images/pedal.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "phaser",
        name: "Phaser",
        blurb: "Phaser uses a series of all-pass filters to create a phase shift in the frequency spectrum of a sound.",
        imageArray: ["images/phaser.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "redux",
        name: "Redux",
        blurb: "Nostalgic for the famed low-resolution sound quality of the Ensoniq Mirage, Fairlight CMI or Commodore-64 computer? Redux returns us to the Dark Ages of digital by reducing a signal’s sample rate and bit resolution.",
        imageArray: ["images/redux.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "resonators",
        name: "Resonators",
        blurb: "This device consists of five parallel resonators that superimpose a tonal character on the input source. It can produce sounds resembling anything from plucked strings to vocoder-like effects. The resonators are tuned in semitones, providing a musical way of adjusting them. The first resonator defines the root pitch and the four others are tuned relative to this pitch in musical intervals.",
        imageArray: ["images/resonators.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "reverb",
        name: "Reverb",
        blurb: "The input signal passes first through high and low cut filters, whose X-Y controller allows changing the band’s center frequency (X-axis) and bandwidth (Y-axis). Either filter may be switched off when not needed to save CPU power.",
        imageArray: ["images/reverb.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "saturator",
        name: "Saturator",
        blurb: "Saturator is a waveshaping effect that can add that missing dirt, punch or warmth to your sound. It can coat input signals with a soft saturation or drive them into many different flavors of distortion.",
        imageArray: ["images/saturator.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "spectrum",
        name: "Spectrum",
        blurb: "Spectrum performs realtime frequency analysis of incoming audio signals. The results are represented in a graph, with dB along the vertical axis and frequency/pitch along the horizontal. The peak levels are retained on the graph until the song is restarted. Note that Spectrum is not an audio effect, but rather a measurement tool — it does not alter the incoming signal in any way.",
        imageArray: ["images/spectrum.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "tuner",
        name: "Tuner",
        blurb: "Tuner analyzes and displays the incoming monophonic pitch as well as its distance from the nearest semitone. Based on classic guitar tuners, Tuner’s large display is designed for easy visibility on stage, and is perfect for tuning external instruments or synthesizers. Note that Tuner is not an audio effect, but rather a measurement tool — it does not alter the incoming signal in any way.",
        imageArray: ["images/tuner.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "utility",
        name: "Utility",
        blurb: "Utility can perform some very useful tasks, especially in combination with other devices.",
        imageArray: ["images/utility.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "vinyl-distortion",
        name: "Vinyl Distortion",
        blurb: "The Vinyl Distortion effect emulates some of the typical distortions that occur on vinyl records during playback. These distortions are caused by the geometric relationships between the needle and the recorded groove. The effect also features a crackle generator for adding noisy artifacts.",
        imageArray: ["images/vinyl-distortion.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "aud",
        key: "vocoder",
        name: "Vocoder",
        blurb: "A vocoder is an effect that combines the frequency information of one audio signal (called the carrier) with the amplitude contour of another audio signal (called the modulator). The modulator source is generally something with a clear rhythmic character such as speech or drums, while the carrier is typically a harmonically-rich synthesizer sound such as a string or pad. The most familiar application of a vocoder is to create ”talking synthesizer” or robotic voice effects.",
        imageArray: ["images/vocoder.png"],
        relatedDevices: ["eq-eight", "eq-three", "auto-pan"],
        manualUrl: "",
        mainContent: "",
        asideContent: "",
    },
    {
        type: "ins",
        key: "analog",
        name: "Analog",
        blurb: "Analog emulates the unique circuitry and irresistible tweakability of vintage analog synthesizers. Able to produce everything from silky pad sweeps to earth-shaking bass.",
        imageArray: ["images/analog.png"],
        relatedDevices: ["pedal", "chorus", "saturator"],
        manualUrl: "https://www.ableton.com/en/manual/live-instrument-reference/#24-1-analog",
        mainContent: "",
        asideContent: ""
    },
    {
        type: "ins",
        key: "collision",
        name: "Collision",
        blurb: "Collision is a synthesizer that simulates the characteristics of mallet percussion instruments. Created in collaboration with Applied Acoustics Systems, Collision uses physical modeling technology to model the various sound generating and resonant components of real (or imagined) objects.",
        imageArray: ["images/collision.png"],
        relatedDevices: ["pedal", "chorus", "saturator"],
        manualUrl: "https://www.ableton.com/en/manual/live-instrument-reference/#24-2-collision",
        mainContent: "",
        asideContent: ""
    },
    {
        type: "ins",
        key: "electric",
        name: "Electric",
        blurb: "Electric is a software electric piano based on the classic instruments of the seventies, and developed in collaboration with Applied Acoustics Systems. Each component of these instruments has been modeled using cutting edge physical modeling technology to provide realistic and lively sounds. Physical modeling uses the laws of physics to reproduce the behavior of an object. In other words, Electric solves, in real time, mathematical equations describing how its different components function. No sampling or wavetables are used in Electric; the sound is simply calculated in real time by the CPU according to the values of each parameter. Electric is more than a simple recreation of vintage instruments; its parameters can be tweaked to values not possible with the real instruments to get some truly amazing new sounds that still retain a warm acoustic quality.",
        imageArray: ["images/electric.png"],
        relatedDevices: ["pedal", "chorus", "saturator"],
        manualUrl: "https://www.ableton.com/en/manual/live-instrument-reference/#24-3-electric",
        mainContent: "",
        asideContent: ""
    },

]

export default deviceArray;