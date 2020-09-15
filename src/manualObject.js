import React from 'react';

const manualExcerpts = {

    "amp":
        <React.Fragment>
            <p>
                Amp is an effect that emulates the sound and character of seven classic guitar amplifiers. Developed in collaboration with Softube, Amp uses physical modelling technology
                to provide a range of authentic and usable amplifier tones, with a simple and consistent set of controls.
            </p>
            <p>There are seven amp models to choose from:</p>
            <ul>
                <li>Clean is based on the ”Brilliant” channel of a classic amp from the ’60s.This amp was widely used by guitarists of the British Invasion.</li>
                <li>Boost is based on the ”Tremolo” channel of the same amp, and is great for edgy rock riffs.</li>
                <li> Blues is based on a ’70s - era guitar amp with a bright character.This classic amp is popular with country, rock and blues guitarists.</li>
                <li>Rock is modeled after a classic 45 watt amp from the ’60s.This is perhaps the best known rock amp of all time.</li >
                <li>Lead is based on the ”Modern” channel of a high - gain amp popular with metal guitarists.</li >
                <li>Heavy is based on the ”Vintage” channel of the same amp and is also ideal for metal and grunge sounds.</li >
                <li>Bass is modeled after a rare PA from the ’70s which has become popular with bass players due to its strong low end and ”fuzz” at high volumes.</li >
            </ul>

            <p>
                Although the real - world versions of these amplifiers all have unique parameters, Live’s Amp effect uses the same set of controls for each model.This makes it very easy to quickly
                change the overall character of your sound without having to make numerous adjustments.
            </p>

            <p>
                Gain adjusts the level of input to the preamplifier, while Volume adjusts the output stage of the power amplifier.Although Gain and Volume work together to determine Amp’s overall level,
                Gain is the primary control for the distortion amount.Higher Gain settings result in a more distorted sound.When using the Blues, Heavy and Bass models, high Volume levels can also add
                considerable distortion.
            </p>

            <p>
                The Bass, Middle and Treble knobs are EQ controls that adjust the timbre of the sound.As on a real - world amplifier, Amp’s EQ parameters interact with each other — and with the rest of
                Amp’s parameters — in non - linear and sometimes unpredictable ways.For example, increasing EQ levels can, in some cases, also increase the amount of distortion.
            </p>

            <p>
                Presence is an additional tone control for mid / high frequencies in the power amp stage.Its influence on the sound varies considerably depending on the amp model used but can add(or
                subtract) ”edge” or ”crispness.”
            </p>

            <p>
                The Output switch toggles between mono and stereo(Dual) processing.Note that in Dual mode, Amp uses twice as much CPU.
            </p>

            <p>
                The Dry / Wet control adjusts the balance between the processed and dry signals.
            </p>

            <h2> Amp Tips </h2>
            <p>
                Because Amp is modeled on real - world analog devices, its behavior can sometimes be difficult to predict.Here are some tips on getting the most out of Amp:
            </p>

            <h2>Amps and Cabinets</h2>
            <p>
                Guitar amps are designed to be used with accompanying speaker cabinets.For this reason, Amp comes with a companion effect called Cabinet(see 22.5) which is designed to be used after Amp
                in a device chain.If you’re looking for authenticity, we recommend this signal flow.But you can also achieve interesting and exotic sounds by using Amp and Cabinet independently.
            </p>

            <h2>Electricity</h2>
            <p>
                The various circuits in guitar amps work with a continuous and fixed amount of electricity.For this reason, turning up a particular parameter may inadvertently decrease the amount of
                available energy somewhere else in the amp.This is particularly noticeable in the EQ controls.For example, turning up Treble can reduce the level of bass and midrange frequencies.You may
                find that you need to carefully adjust a number of seemingly unrelated parameters to get the results you want.
            </p>

            <h2>More than guitars</h2>
            <p>
                While Amp and Cabinet sound great with guitars, you can get very interesting results by feeding them with drums, synthesizers or other sound sources.For example, try using Amp with
                Operator(see 24.6) or Analog(see 24.1) to add analog grit to your digital sounds.
            </p>
        </React.Fragment >,

    "auto-filter":
        <React.Fragment>
            <p>
                The Auto Filter effect provides classic analog filter emulation. It can be modulated
                by an envelope follower and/or an LFO to create moving filter effects. The envelope
                follower can track either the filtered signal or an external sidechain source.
            </p>
            <p>
                Auto Filter offers a variety of filter types including lowpass, highpass, bandpass,
                notch, and a special Morph filter. Each filter can be switched between 12 and 24 dB
                slopes as well as a selection of analog-modeled circuit behaviors developed in conjunction
                with Cytomic that emulate hardware filters found on some classic analog synthesizers.
            </p>
            <p>
                The Clean circuit option is a high-quality, CPU-efficient design that is the same
                as the filters used in EQ Eight. This is available for all of the filter types.
            </p>
            <p>
                The OSR circuit option is a state-variable type with resonance limited by a unique
                hard-clipping diode. This is modeled on the filters used in a somewhat rare British
                monosynth, and is available for all filter types.
            </p>
            <p>
                The MS2 circuit option uses a Sallen-Key design and soft clipping to limit resonance.
                It is modeled on the filters used in a famous semi-modular Japanese monosynth and
                is available for the lowpass and highpass filters.
            </p>
            <p>
                The SMP circuit is a custom design not based on any particular hardware. It shares
                characteristics of both the MS2 and PRD circuits and is available for the lowpass
                and highpass filters.
            </p>
            <p>
                The PRD circuit uses a ladder design and has no explicit resonance limiting. It is modeled on the
                filters used in a legacy dual-oscillator monosynth from the United States and is available
                for the lowpass and highpass filters.
            </p>
            <p>
                The most important filter parameters are the typical synth controls Frequency and
                Resonance. Frequency determines where in the harmonic spectrum the filter is applied;
                Resonance boosts frequencies near that point.
            </p>
            <p>
                When using the lowpass, highpass, or bandpass filter with any circuit type besides
                Clean, there is an additional Drive control that can be used to add gain or distortion
                to the signal before it enters the filter.
            </p>
            <p>
                The Morph filter has an additional Morph control which sweeps the filter type continuously
                from lowpass to bandpass to highpass to notch and back to lowpass.
            </p>
            <p>
                Tip: you can quickly snap the Morph control to a lowpass, bandpass, highpass, or notch
   setting via dedicated options in the <kbd>right-click</kbd>(PC) / <kbd>CTRL</kbd>-<kbd>click</kbd>(Mac) context menu of the Morph knob.
            </p>
            <p>
                You can adjust Frequency and Resonance by clicking and dragging in the X-Y controller
                or via the knobs. You can also click on the Freq and Res numeric displays and type
                in exact values.
            </p>
            <p>
                When using the non-Clean circuit types, the Resonance control allows for self-oscillation.
                At Resonance values above 100%, the filter will continue to ring indefinitely even
                after the input signal has been stopped. The pitch of the self-oscillation depends
                on both the Frequency and Resonance values.
            </p>
            <p>
                The Envelope section controls how the envelope modulation affects the filter frequency.
                The Amount control defines the extent to which the envelope affects the filter frequency,
                while the Attack control sets how the envelope responds to rising input signals. Low
                Attack values cause a fast response to input levels; high values integrate any changes
                gradually, creating a looser, slower response. Think of it as adding inertia to the
                response.
            </p>
            <p>
                Lower Release values cause the envelope to respond more quickly to falling input signals.
                Higher values extend the envelope’s decay.
            </p>
            <p>
                Normally, the signal being filtered and the input source that triggers the envelope
   follower are the same signal. But by using <em>sidechaining</em>, it is possible to filter a signal based on the envelope of another signal. To access
   the Sidechain parameters, unfold the Auto Filter window by toggling the <span> alt="31111.png"></span> button in its title bar.
            </p>
            <p>
                Enabling this section with the Sidechain button allows you to select another track
                from the choosers below. This causes the selected track’s signal to trigger the filter’s
                envelope follower, instead of the signal that is actually being filtered.
            </p>
            <p>
                The Gain knob adjusts the level of the external sidechain’s input, while the Dry/Wet
                knob allows you to use a combination of sidechain and original signal as the envelope
                follower’s trigger. With Dry/Wet at 100%, the envelope follower tracks the sidechain
                source exclusively. At 0%, the sidechain is effectively bypassed. Note that increasing
                the gain does not increase the volume of the source signal in the mix. The sidechain
                audio is only a trigger for the envelope follower and is never actually heard.
            </p>
            <p>
                The Auto Filter also contains a Low Frequency Oscillator to modulate filter frequency
                in a periodic fashion. The respective Amount control sets how much the LFO affects
                the filter. This can be used in conjunction with or instead of the envelope follower.
            </p>
            <p>
                The Rate control specifies the LFO speed. It can be set in terms of hertz, or synced
                to the song tempo, allowing for controlled rhythmic filtering.
            </p>
            <p>
                Available LFO waveform shapes are sine (creates smooth modulations with rounded peaks
                and valleys), square, triangle, sawtooth up, sawtooth down, and sample and hold (generates
                random positive and negative modulation values) in mono and stereo.
            </p>
            <p>
                There are two LFOs, one for each stereo channel. The Phase and Offset controls define
                the relationship between these two LFOs.
            </p>
            <p>
                Phase keeps both LFOs at the same frequency, but can set the two LFO waveforms ”out
                of phase” with each other, creating stereo movement. Set to ”180”, the LFO outputs
                are 180 degrees apart, so that when one LFO reaches its peak, the other is at its
                minimum.
            </p>
            <p>
                Spin detunes the two LFO speeds relative to each other. Each stereo channel is modulated
                at a different frequency, as determined by the Spin amount.
            </p>
            <p>
                For sample and hold (“S&amp;H”), the Phase and Spin controls are not relevant and do not
                affect the sound. Instead, the Auto Filter offers two kinds of sample and hold: The
                upper sample and hold type available in the chooser provides independent random modulation
                generators for the left and right channels (stereo), while the lower one modulates
                both channels with the same signal (mono).
            </p>
            <p>
                The Quantize Beat control applies quantized modulation to the filter frequency. With
                Quantize Beat off, frequency modulation follows the control source (the Envelope,
                LFO, or manually-adjusted cutoff.) Turning this feature on updates the filter modulation
                rhythmically with ”stepped” changes that track the master tempo. The numbered buttons
                represent 16th notes, so, for example, selecting ”4” as a beat value produces a modulation
                change once per beat.
            </p>
            <h4>Legacy Filters</h4>
            <p>
                If you open a Set that was created in a version of Live older than version 9.5, any
                instance of Auto Filter in the Set will open with legacy filters in place of the filters
                discussed previously. These consist of 12 dB or 24 dB lowpass, bandpass and highpass
                filters, as well as a notch filter, and do not feature a Drive control. Each Auto
                Filter loaded with the legacy filters shows an Upgrade button in the title bar.Pressing
                this button will permanently switch the filter selection to the newer models for that
                instance of Auto Filter. Note that this change may make your Set sound different.
            </p>
        </React.Fragment>,

    "auto-pan":
        <React.Fragment>
            <p>Auto Pan offers LFO-driven manipulation of amplitude and panning for creating automatic
   panning, tremolo and amplitude modulation, and beat-synchronized chopping effects.</p>

            <p>Auto Pan’s LFOs modulate the amplitude of the left and right stereo channels with
   sine, triangle, sawtooth down or random waveforms.</p>

            <p>The Shape control pushes the waveform to its upper and lower limits, ”hardening” its
            shape. The waveform can be set to ”Normal” or ”Invert” (use ”Invert” to, for example,
   create the saw up waveform from the saw down waveform).</p>

            <p>LFO speed is controlled with the Rate control, which can be set in terms of hertz.
   Rate can also be synced to the song tempo.</p>

            <p>Though both LFOs run at the same frequency, the Phase control lends the sound stereo
            movement by offsetting their waveforms relative to each other. Set this to ”180”,
            and the LFOs will be perfectly out of phase (180 degrees apart), so that when one
            reaches its peak, the other is at its minimum. Phase is particularly effective for
   creating vibrato effects.</p>

            <p>The Offset control shifts the start point of each LFO along its waveform.</p>

            <p>The device’s influence on incoming signals is set with the Amount control.</p>
        </React.Fragment>,

    "beat-repeat":
        <React.Fragment>
            <p>Beat Repeat allows for the creation of controlled or randomized repetitions of an
   incoming signal.</p>

            <p>The Interval control defines how often Beat Repeat captures new material and begins
            repeating it. Interval is synced to and set in terms of the song tempo, with values
            ranging from ”1/32” to ”4 Bars.” The Offset control shifts the point defined by Interval
            forward in time. If Interval is set to ”1 Bar,” for example, and Offset to ”8/16”,
            material will be captured for repetition once per bar on the third beat (i.e., halfway,
   or eight-sixteenths of the way, through the bar).</p>

            <p>You can add randomness to the process using the Chance control, which defines the
            likelihood of repetitions actually taking place when Interval and Offset ”ask” for
            them. If Chance is set to 100 percent, repetitions will always take place at the given
   Interval/Offset time; if set to zero, there will be no repetitions.</p>

            <p>Gate defines the total length of all repetitions in sixteenth notes. If Gate is set
            to ”4/16”, the repetitions will occur over the period of one beat, starting at the
   position defined by Interval and Offset.</p>

            <p>Activating the Repeat button bypasses all of the above controls, immediately capturing
   material and repeating it until deactivated.</p>

            <p>The Grid control defines the grid size — the size of each repeated slice. If set to
            ”1/16”, a slice the size of one sixteenth note will be captured and repeated for the
            given Gate length (or until Repeat is deactivated). Large grid values create rhythmic
            loops, while small values create sonic artifacts. The No Triplets button sets grid
   division as binary.</p>

            <p>Grid size can be changed randomly using the Variation control. If Variation is set
            to ”0”, grid size is fixed. But when Variation is set to higher values, the grid fluctuates
            considerably around the set Grid value. Variation has several different modes, available
            in the chooser below: Trigger creates variations of the grid when repetitions are
            triggered; 1/4, 1/8 and 1/16 trigger variations in regular intervals; and Auto forces
            Beat Repeat to apply a new random variation after each repetition — the most complex
   form of grid variation in Beat Repeat (especially if triplets are also allowed).</p>

            <p>Beat Repeat’s repetitions can be pitched down for special sonic effects. Pitch is
            adjusted through resampling in Beat Repeat, lengthening segments to pitch them down
            without again compressing them to adjust for the length change. This means that the
            rhythmical structure can become quite ambiguous with higher Pitch values. The Pitch
            Decay control tapers the pitch curve, making each repeated slice play lower than the
   previous one. Warning: This is the most obscure parameter of Beat Repeat.</p>

            <p>Beat Repeat includes a combined lowpass and highpass filter for defining the passed
            frequency range of the device. You can turn the filter on and off, and set the center
   frequency and width of the passed frequency band, using the respective controls.</p>

            <p>The original signal (which was received at Beat Repeat’s input) is mixed with Beat
            Repeat’s repetitions according to one of three mix modes: Mix allows the original
            signal to pass through the device and have repetitions added to it; Insert mutes the
            original signal when repetitions are playing but passes it otherwise; and Gate passes
            only the repetitions, never passing the original signal. Gate mode is especially useful
   when the effect is housed in a return track.</p>

            <p>You can set the output level of the device using the Volume control, and apply Decay
   to create gradually fading repetitions.</p>
        </React.Fragment>,

    "cabinet":
        <React.Fragment>
            <p>(Note: the Cabinet effect is not available in the Intro, Lite and Standard Editions.)</p>

            <p>Cabinet is an effect that emulates the sound of five classic guitar cabinets. Developed
            in collaboration with Softube, Cabinet uses physical modelling technology to provide
   a range of authentic sounds, with optimized mics and mic positioning.</p>

            <p>The Speaker chooser allows you to select from a variety of speaker sizes and combinations.
            The chooser’s entries indicate the number of speakers and the speaker size in inches.
            For example, ”4x12” means four 12-inch speakers. In the real world, more and larger
   speakers generally means higher volumes.</p>

            <p>The Microphone chooser changes the position of the virtual microphone in relation
            to the speaker cabinet. Near On-Axis micing results in a bright, focused sound, while
            Near Off-Axis is more resonant and a bit less bright. Choose the Far position for
   a balanced sound that also has some characteristics of the virtual ”room.”</p>

            <p>The switch below the Microphone chooser toggles between a Dynamic and Condenser mic.
            Dynamic mics are a bit grittier and commonly used when close-micing guitar cabinets
            because they are capable of handling much higher volumes. Condenser mics are more
            accurate, and are commonly used for micing from a distance. Of course, Cabinet’s virtual
   condenser mic won’t be damaged by high volume levels, so feel free to experiment.</p>

            <p>The Output switch toggles between mono and stereo (Dual) processing. Note that in
   Dual mode, Cabinet uses twice as much CPU.</p>

            <p>The Dry/Wet control adjusts the balance between the processed and dry signals.</p>

            <h3 id="22-5-1-cabinet-tips"><span class="section-number">22.5.1</span> Cabinet Tips</h3>

            <p>Here are some tips for using Cabinet:</p>

            <h4 id="amps-and-cabinets">Amps and Cabinets</h4>

            <p>Guitar cabinets are normally fed by guitar amps. For this reason, Cabinet is paired
   with Amp (<a href="#22-1-amp">see 22.1</a>), and the two are normally used together. But you can also achieve interesting and
   exotic sounds by using Amp and Cabinet separately.</p>

            <h4 id="multiple-mics">Multiple mics</h4>

            <p>A common studio technique is to use multiple mics on a single cabinet, and then adjust
   the balance during mixing. This is easy to do by using Live’s Audio Effect Racks (<a href="/en/manual/instrument-drum-and-effect-racks/">see Chapter 18</a>). Try this:</p>

            <ul><li>configure one instance of Cabinet as you like</li><li>put the Cabinet into an Audio Effect Rack</li><li>duplicate the Rack chain that contains the original Cabinet as many times as you like</li><li>in the additional chains, choose a different Microphone setting and/or mic type</li><li>adjust the relative volumes of the Rack’s chains in the Rack’s mixer</li></ul>
        </React.Fragment>,

    "channel-eq":
        <React.Fragment>
            <p>Inspired by EQs found on classic mixing desks, Channel EQ is a simple, yet flexible
   three-band EQ, fine-tuned to provide musical results for a variety of audio material.</p>

            <p>Activating the HP 80 Hz switch will toggle a high-pass filter, which is useful for
   removing the rumble from a signal.</p>

            <p>The Low parameter controls the gain of a low shelf filter, tuned to 100 Hz. This filter
            can boost or attenuate low frequencies by a range of +/- 15 dB. The filter curve is
   adaptive and will change dynamically relative to the amount of gain applied.</p>

            <p>The Mid parameter controls the gain of a sweepable bell filter. Unlike the Low and
            High parameters, Mid has a range of +/- 12 dB. The frequency slider located above
            the Mid control allows you to set the center frequency of this filter from 120 Hz
   to 7.5 kHz.</p>

            <p>When boosting, the High parameter controls the gain of a high shelf filter, up to
            15 dB. When attenuating, the shelving filter is combined with a low-pass filter. Turning
            the parameter from 0 dB towards -15 dB will simultaneously reduce the cutoff frequency
   of the low-pass filter from 20 kHz to 8 kHz.</p>

            <p>A spectrum visualization provides real-time visual feedback of the resulting filter
   curves and processed signal.</p>

            <p>The Output control sets the amount of gain applied to the processed signal, and can
   be used to compensate for any changed signal amplitude resulting from the EQ settings.</p>

            <h3 id="22-6-1-channel-eq-tips"><span class="section-number">22.6.1</span> Channel EQ Tips</h3>

            <p>You can use Channel EQ to further shape the output of a reverb effect in a device
   chain.</p>

            <p>You can also shape the sound of a single drum or an entire drum kit, by placing an
   instance of Channel EQ onto one or multiple Drum Rack pads.</p>

            <p>Adding an instance of Saturator (<a href="#22-33-saturator">see 22.33</a>) after Channel EQ in a device chain allows you to simulate the analog nonlinearities
   of a mixer channel strip. In such cases, boosting the low end considerably would also
   lead to increased distortion, similar to the behavior of analog mixing desks.</p>
        </React.Fragment>,

    "chorus":
        <React.Fragment>
            <p>The Chorus effect uses two parallel time-modulated delays to create chorus (thickening)
   and flanging effects.</p>

            <p>Each delay has its own delay time control, calibrated in milliseconds. Delay 1 has
            a highpass filter that can remove low frequencies from the delayed signal. Greater
   highpass values let only very high frequencies pass through to Delay 1.</p>
            <p>Delay 2 can switch among three different modes. When off, only Delay 1 is audible.
            In Fix Mode, only Delay 1’s delay time will be modulated. When Mod is activated, Delay
   2 will receive the same modulation as Delay 1.</p>
            <p>To set both delay lines to Delay 1’s delay time, turn on the link button (”=”). This
   is especially useful if you want to change both delays with a single gesture.</p>
            <p>The Modulation X-Y controller can impart ”motion” to the sounds. To change the modulation
            rate for the delay times, click and drag along the horizontal axis. To change the
   amount of modulation, click and drag along the vertical axis.</p>
            <p>You can also make changes by entering parameter values in the Amount and Rate fields
            below the X-Y controller. The Amount value is in milliseconds, while the modulation
   frequency rate is in Hertz.</p>
            <p>Clicking the *20 switch multiplies the modulation frequency by 20 to achieve more
   extreme sounds.</p>
            <p>The Feedback control determines how much of the output signal feeds back into the
            input, while the Polarity switch sets (surprise!) the polarity. Polarity changes have
   the most effect with high amounts of feedback and short delay times.</p>
            <p>The Dry/Wet control adjusts the balance between the processed and dry signals. Set
   it to 100 percent when using Chorus in a return track.</p>
            <p>Enabling the Crisp option via the <kbd>right-click</kbd>(PC) / <kbd>CTRL</kbd>-<kbd>click</kbd>(Mac) context menu can improve the sound quality, particularly at higher frequencies.
   This is enabled by default, except when loading Sets that use Chorus and were made
   in earlier versions of Live.</p>
        </React.Fragment>,

    "compressor":
        <React.Fragment>
            <p>A compressor reduces gain for signals above a user-settable threshold. Compression
            reduces the levels of peaks, opening up more headroom and allowing the overall signal
            level to be turned up. This gives the signal a higher average level, resulting in
   a sound that is subjectively louder and ”punchier” than an uncompressed signal.</p>
            <p>A compressor’s two most important parameters are the Threshold and the compression
   Ratio.</p>
            <p>The Threshold slider sets where compression begins. Signals above the threshold are
            attenuated by an amount specified by the Ratio parameter, which sets the ratio between
            the input and output signal. For example, with a compression ratio of 3, if a signal
            above the threshold increases by 3 dB, the compressor output will increase by only
            1 dB. If a signal above the threshold increases by 6 dB, then the output will increase
   by only 2 dB. A ratio of 1 means no compression, regardless of the threshold.</p>
            <p>The orange Gain Reduction meter shows how much the gain is being reduced at any given
            moment. The more reduction, the more audible the effect; a gain reduction above 6
            dB or so might produce the desired loudness, but significantly alters the sound and
            is easily capable of destroying its dynamic structure. This is something that cannot
            be undone in later production steps. Keep this in mind especially when using a compressor,
            limiter or sound loudness-maximizing tool in the master channel. Less is often more
   here.</p>
            <p>Because compression reduces the volume of loud signals and opens up headroom, you
            can use the Output (Out) control so that the peaks once again hit the maximum available
            headroom. The Output meter shows the output signal’s level. Enabling the Makeup button
   automatically compensates the output level if the threshold and ratio settings change.</p>
            <p>Dry/Wet adjusts the balance between the compressed and uncompressed signals. At 100%,
   only the compressed signal is heard, while at 0%, the device is effectively bypassed.</p>
            <p>The Knee control adjusts how gradually or abruptly compression occurs as the threshold
            is approached. With a setting of 0 dB, no compression is applied to signals below
            the threshold, and full compression is applied to any signal at or above the threshold.
            With very high ratios, this so-called ”hard knee” behavior can sound harsh. With higher
            (or ”soft”) knee values, the compressor begins compressing gradually as the threshold
            is approached. For example, with a 10 dB knee and a -20 dB threshold, subtle compression
   will begin at -30 dB and increase so that signals at -10 dB will be fully compressed.</p>
            <p>Compressor’s display can be switched between several modes via switches in the bottom
   corners of the display:</p>
            <ul><li>The <em>Collapsed</em> view shows only the essential controls.</li></ul>
            <ul><li>The <em>Transfer Curve</em> shows the input level on the horizontal axis and output level vertically. This view
      is useful for setting the Knee parameter, which is visible as a pair of dotted lines
      around the threshold.</li></ul>
            <ul><li>The <em>Activity</em> view shows the level of the input signal in light gray. In this mode, the GR and
      Output switches toggle between showing the amount of gain reduction in orange or the
      output level in a darker gray. These views are useful for visualizing what’s happening
      to the signal over time.</li></ul>

            <p>The Attack and Release controls are essential parameters for controlling the response
   time of Compressor by defining how fast it reacts to input-level changes.</p>

            <p>Attack defines how long it takes to reach maximum compression once a signal exceeds
            the threshold, while Release sets how long it takes for the compressor to return to
            normal operation after the signal falls below the threshold. With Auto Release enabled,
   the release time will adjust automatically based on the incoming audio.</p>
            <p>A slight amount of attack time (10-50 ms) allows peaks to come through unprocessed,
            which helps preserve dynamics by accentuating the initial portion of the signal. If
            these peaks cause overloads, you can try shortening the attack time, but extremely
            short times take the ”life” out of the signal, and may lead to a slight “buzziness”
            caused by distortion. Short release times can cause ”pumping” as the compressor tries
            to figure out whether to compress or not; while generally considered an undesirable
            effect, some engineers use it on full drum kits to give unusual ”sucking” effects.
            Careful adjustment of attack and release times is essential when it comes to compression
            of rhythmical sources. If you are not used to working with compressors, play a drum
            loop and spend some time adjusting Attack, Release, Threshold and Gain. It can be
   very exciting!</p>
            <p>A compressor can only react to an input signal once it occurs. Since it also needs
            to apply an attack/release envelope, the compression is always a bit too late. A digital
            compressor can solve this problem by simply delaying the input signal a little bit.
            Compressor offers three different Lookahead times: zero ms, one ms and ten ms. The
   results may sound pretty different depending on this setting.</p>
            <p>Compressor can be switched between three basic modes of operation. With Peak selected,
            Compressor reacts to short peaks within a signal. This mode is more aggressive and
            precise, and so works well for limiting tasks where you need to ensure that there
            are absolutely no signals over the set threshold. RMS mode causes Compressor to be
            less sensitive to very short peaks and compress only when the incoming level has exceeded
            the threshold for a slightly longer time. RMS is closer to how people actually perceive
   loudness and is usually considered more ”musical.” </p>
            <p>In Expand mode, the Ratio can also be set to values <em>below</em> 1. In this state, Compressor acts as an upward expander, and will <em>increase</em> the gain when signals exceed the threshold. (For more information about the various
   types of dynamics processing, see the Multiband Dynamics chapter (<a href="#22-26-multiband-dynamics">see 22.26</a>).)</p>
            <p>In addition to these modes, Compressor can be switched between two envelope follower
            shapes that offer further options for how the device measures and responds to signal
            levels. In linear (Lin) mode, the speed of the compression response is determined
            entirely by the Attack and Release values. In logarithmic (Log) mode, sharply compressed
            peaks will have a faster release time than less compressed material. This can result
            in smoother and less noticeable compression than Lin mode. Note that the Lin/Log switch
   is not visible in Compressor’s collapsed view.</p>

            <h3 sidechain-parameters><span>22.8.1</span> Sidechain Parameters</h3>
            <p>Normally, the signal being compressed and the input source that triggers the compressor
   are the same signal. But by using <em>sidechaining</em>, it is possible to compress a signal based on the level of another signal or a specific
   frequency component. To access the Sidechain parameters, unfold the Compressor window
   by toggling the button in its title bar.</p>
            <p>The Gain knob adjusts the level of the external sidechain’s input, while the Dry/Wet
            knob allows you to use a combination of sidechain and original signal as the compressor’s
            trigger. With Dry/Wet at 100%, the compressor is triggered entirely by the sidechain
            source. At 0%, the sidechain is effectively bypassed. Note that increasing the gain
   does <em>not</em> increase the volume of the source signal in the mix. The sidechain audio is only
   a trigger for the compressor and is never actually heard.</p>

            <p>Note that automatic Makeup is not available when using external sidechain.</p>

            <p>On the right of the external section are the controls for the sidechain EQ. Enabling
            this section causes the compressor to be triggered by a specific band of frequencies,
            instead of a complete signal. These can either be frequencies in the compressed signal
            or, by using the EQ in conjunction with an external sidechain, frequencies in another
   track’s audio.</p>

            <p>The headphones button between the external and EQ sections allows you to listen to
            only the sidechain input, bypassing the compressor’s output. Since the sidechain audio
            isn’t fed to the output, and is only a trigger for the compressor, this temporary
            listening option can make it much easier to set sidechain parameters and hear what’s
   actually making the compressor work.</p>

            <h3 id="22-8-2-compression-tips"><span class="section-number">22.8.2</span> Compression Tips</h3>

            <p>This section presents some tips for using Compressor effectively, particularly with
   the sidechain options.</p>

            <h4 id="mixing-a-voiceover">Mixing a Voiceover</h4>

            <p>Sidechaining is commonly used for so-called ”ducking” effects. For example, imagine
            that you have one track containing a voiceover and another track containing background
            music. Since you want the voiceover to always be the loudest source in the mix, the
            background music must get out of the way every time the narrator is speaking. To do
            this automatically, insert a Compressor on the music track, but select the narration
   track’s output as the external sidechain source.</p>

            <h4 id="sidechaining-in-dance-music">Sidechaining in Dance Music</h4>

            <p>Sidechaining/ducking is a dance music producer’s secret weapon because it can help
            to ensure that basslines (or even whole mixes) always make room for the kick drum.
            By inserting a compressor on the bass (or master) track and using the kick drum’s
            track as the sidechain input, you can help to control problematic low frequencies
   that might interfere with the kick drum’s attack.</p>

            <p>Using the sidechain EQ in conjunction with this technique can create ducking effects
            even if you only have a mixed drum track to work with (as opposed to an isolated kick
            drum). In this case, insert the Compressor on the track you want to duck. Then choose
            the drum track as the external sidechain source. Then enable the sidechain EQ and
            select the lowpass filter. By carefully adjusting the Frequency and Q settings, you
            should be able to isolate the kick drum from the rest of the drum mix. Using the sidechain
   listen mode can help you tune the EQ until you find settings you’re happy with.</p>



        </React.Fragment>,

    "corpus":
        <React.Fragment>
            <p>(Note: the Corpus effect is not available in the Intro, Standard and Lite Editions.)</p><p>Corpus is an effect that simulates the acoustic characteristics of seven types of
            resonant objects. Developed in collaboration with Applied Acoustics Systems, Corpus
            uses physical modelling technology to provide a wide range of parameters and modulation
   options.</p><p>The frequency and/or decay rate of the resonance can be MIDI modulated, by enabling
   the Frequency and/or Off Decay switches in the Sidechain section. Toggle the <span><img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/manual/en/31364.55c8d70681dc.png" alt="31364.png" /></span> button in Corpus’s title bar to access Sidechain parameters. The MIDI From choosers
   allow you to select the MIDI track and tapping point from which to receive MIDI note
   information.</p><p>With Frequency enabled, the tuning of the resonance is determined by the incoming
            MIDI note. If multiple notes are held simultaneously, the Last/Low switch determines
            whether the last or the lowest note will have priority. The Transpose and Fine knobs
            allow for coarse and fine offset of the MIDI-modulated tuning. PB Range sets the range
   in semitones of pitch bend modulation.</p><p>With Frequency disabled, the Tune control adjusts the base frequency of the resonance
            in Hertz. The corresponding MIDI note number and fine tuning offset in cents is displayed
   below.</p><p>Enabling Off Decay causes MIDI note off messages to mute the resonance. The slider
            below the switch determines the extent to which MIDI note off messages mute the resonance.
            At 0%, note offs are ignored, and the decay time is based only on the value of the
            Decay parameter, which is located under the Resonance Type selector. This is similar
            to how real-world mallet instruments such as a marimbas and glockenspiels behave.
   At 100%, the resonance is muted immediately at note off, regardless of the Decay time.</p><p>You can hide or show the Sidechain parameters by toggling the  button in Corpus’s title bar. This button will light up if the sidechain is active.</p><p>Corpus contains a Low Frequency Oscillator (LFO) to modulate the resonant frequency.
   The Amount control sets how much the LFO affects the frequency.</p><p>The Rate control specifies the LFO speed. It can be set in terms of Hertz, or synced
   to the song tempo, allowing for controlled rhythmic modulation.</p><p>Available LFO waveform shapes are sine (creates smooth modulations with rounded peaks
            and valleys), square, triangle, sawtooth up, sawtooth down and two types of noise
   (stepped and smooth).</p><p>Although only one set of LFO controls is visible, there are actually two LFOs, one
            for each stereo channel. The Phase and Spin controls define the relationship between
   these two LFOs.</p><p>Phase (available only when the LFOs are synced to song tempo) keeps both LFOs at the
            same frequency, but can set the two LFO waveforms ”out of phase” with each other,
            creating stereo movement. Set to ”180”, the LFO outputs are 180 degrees apart, so
            that when one LFO reaches its peak, the other is at its minimum. With Phase set to
   ”360” or ”0” the two LFOs run in sync.</p><p>Spin (only available when the LFOs are in Hertz mode) detunes the two LFO speeds relative
            to each other. Each stereo channel is modulated at a different frequency, as determined
   by the Spin amount.</p><p>For the noise waveforms, the Phase and Spin controls are not relevant and do not affect
   the sound.</p><p>Spread detunes the two resonators in relation to each other. Positive values raise
            the pitch of the left resonator while lowering the pitch of the right one, while negative
   values do the opposite. At 0%, the resonators are tuned the same.</p><p>The resonance type chooser allows you to select from seven types of physically modeled
   resonant objects:</p><ul><li><em>Beam</em> simulates the resonance properties of beams of different materials and sizes.</li><li><em>Marimba</em>, a specialized variant of the Beam model, reproduces the characteristic tuning of
      marimba bar overtones which are produced as a result of the deep arch-cut of the bars.</li><li><em>String</em> simulates the sound produced by strings of different materials and sizes.</li><li><em>Membrane</em> is a model of a rectangular membrane (such as a drum head) with a variable size and
      construction.</li><li><em>Plate</em> simulates sound production by a rectangular plate (a flat surface) of different materials
      and sizes.</li><li><em>Pipe</em> simulates a cylindrical tube that is fully open at one end and has a variable opening
      at the other (adjusted with the Opening parameter.)</li><li><em>Tube</em> simulates a cylindrical tube that is fully open at both ends.</li></ul><p>The resonator quality chooser controls the tradeoff between the sound quality of the
            resonators and performance by reducing the number of overtones that are calculated.
            ”Basic” uses minimal CPU resources, while ”Full” creates more sophisticated resonances.
   This parameter is not used with the Pipe or Tube resonators.</p><p>The Decay knob adjusts the amount of internal damping in the resonator, and thus the
   decay time.</p><p>The Material knob adjusts the variation of the damping at different frequencies. At
            lower values, low frequency components decay slower than high frequency components
            (which simulates objects made of wood, nylon or rubber). At higher values, high frequency
            components decay slower (which simulates objects made of glass or metal). This parameter
   is not used with the Pipe or Tube resonators.</p><p>The Radius parameter is only available for the Pipe and Tube resonators. Radius adjusts
            the radius of the pipe or tube. As the radius increases, the decay time and high frequency
            sustain both increase. At very large sizes, the fundamental pitch of the resonator
   also changes.</p><p>The Decay and Material/Radius parameters can also be controlled with the X-Y controller.</p><p>Ratio is only available for the Membrane and Plate resonators, and adjusts the ratio
   of the object’s size along its x and y axes.</p><p>The Brightness control adjusts the amplitude of various frequency components. At higher
            values, higher frequencies are louder. This parameter is not used with the Pipe or
   Tube resonators.</p><p>Inharm. (Inharmonics) adjusts the pitch of the resonator’s harmonics. At negative
            values, frequencies are compressed, increasing the amount of lower partials. At positive
            values, frequencies are stretched, increasing the amount of upper partials. This parameter
   is not used with the Pipe or Tube resonators.</p><p>Opening, which is only available for the Pipe resonator, scales between an open and
            closed pipe. At 0%, the pipe is fully closed on one side, while at 100% the pipe is
   open at both ends.</p><p>The Listening L and R controls adjust the location on the left and right resonator
            where the vibrations are measured. At 0%, the resonance is monitored at the object’s
            center. Higher values move the listening point closer to the edge. These parameters
            are not used with the Pipe or Tube resonators, which are always measured in the middle
   of their permanently open end.</p><p>The Hit knob adjusts the location on the resonator at which the object is struck or
            otherwise activated. At 0%, the object is hit at its center. Higher values move the
            activation point closer to the edge. This parameter is not used with the Pipe or Tube
   resonators.</p><p>The processed signal is fed through a lowpass and highpass filter that can be controlled
            with an X-Y controller. To define the filter bandwidth, click and drag on the vertical
            axis. To set the position of the frequency band, click and drag on the horizontal
   axis. The filter can be toggled on or off with the Filter switch.</p><p>Width adjusts the stereo mix between the left and right resonators. At 0%, both resonators
            are fed equally to each side, resulting in mono output. At 100%, each resonator is
   sent exclusively to one channel.</p><p>Bleed mixes a portion of the unprocessed signal with the resonated signal. At higher
            values, more of the original signal is applied. This is useful for restoring high
            frequencies, which can often be damped when the tuning or quality are set to low values.
   This parameter is unavailable with the Pipe or Tube resonators.</p><p>Gain boosts or attenuates the level of the processed signal, while the Dry/Wet control
            adjusts the balance between the dry input signal and the signal sent to Corpus’s processing.
            Turning Dry/Wet down will not cut resonances that are currently sounding, but rather
   stop new input signals from being processed.</p><p>Corpus contains a built-in limiter that automatically activates when the audio level
   is too high. This is indicated by the LED in the upper-right corner of Corpus’s display.</p>
        </React.Fragment>,

    "delay":
        <React.Fragment>
            <p>The Delay provides two independent delay lines, one for each channel (left and right).
   </p>
            <p>To refer delay time to the song tempo, activate the Sync switch, which allows using
            the Delay Time beat division chooser. The numbered switches represent time delay in
            16th notes. For example, selecting ”4” delays the signal by four 16th notes, which
   equals one beat (a quarter note) of delay.</p>
            <p>If the Sync switch is off, the delay time reverts to milliseconds. In this case, to
   edit the delay time, click and drag up the Delay Time knob.</p><p>With Stereo Link engaged, the left channel’s settings are applied to the right channel,
            and changing either channel’s Sync switch or Delay Time settings will apply the changes
   to both sides.</p><p>The Feedback parameter defines how much of each channel’s output signal feeds back
            into the delay lines’ inputs. Internally, they are two independent feedback loops,
            so a signal on the left channel does not feed back into the right channel and vice
   versa.</p><p>The button will cause the delay to endlessly cycle the audio which is in its buffer at
   the moment that the button is pressed, ignoring any new input until Freeze is disabled.</p><p>The delay is preceded by a bandpass filter that can be toggled on and off with a switch,
            and controlled with an X-Y controller. To define the filter bandwidth, click and drag
            on the vertical axis. To set the position of the frequency band, click and drag on
   the horizontal axis.</p>
            <p>Filter frequency and delay time can be modulated by an LFO, making it possible to
            achieve a range of sounds from light chorus-like effects through to heavy contorted
            noise. The Rate slider sets the frequency of the modulation oscillator in Hertz. The
            Filter slider adjusts the amount of modulation that is applied to the filter, and
   the Time slider adjusts the amount of modulation that is applied to the delay time.</p>
            <p>Changing the delay time while Delay is processing audio can cause abrupt changes in
   the sound of the delayed signal. You can choose between three delay transition modes:</p>
            <ul><li>Repitch causes a pitch variation when changing the delay time, similar to the behavior
      of old tape delay units. Repitch mode is the default option.</li><li>Fade creates a crossfade between the old and new delay times. This sounds a bit similar
      to time stretching if the delay time is gradually changed. </li><li>Jump immediately jumps to the new delay time. Note that this will cause an audible
      click if the delay time is changed while delays are sounding. </li></ul>
            <p>Tip: try using the Time slider to explore the effect of time modulation on the different
   transition modes.</p>
            <p>When the Ping Pong switch is activated, the signal jumps from the left to the right
   output.</p>
            <p>The Dry/Wet control adjusts the balance between the processed and dry signals. Set
            it to 100 percent when using Delay in a return track. The Dry/Wet parameter’s context
            menu lets you toggle Equal-Loudness. When enabled, a 50/50 mix will sound equally
   loud for most signals.</p>
            <p>Sets saved in versions of Live older than Live 10.1 that used Simple Delay or Ping
            Pong Delay devices will show an Upgrade button in the title bar of each instance of
            Delay when loading the Set. Upgrading the device will preserve the previously used
            device’s free delay time range, and will only affect the sound of the Set or preset
            if the free delay time parameter was either mapped to a Macro Control or to a Max
   for Live device.</p>
            <h3 id="22-10-1-delay-tips"><span class="section-number">22.10.1</span> Delay Tips</h3>
            <h4 id="glitch-effect">Glitch Effect</h4>
            <p>Enable the Stereo Link switch and set the delay time to around 400-500ms. Dial the
            Feedback to 80% or above. Disable the bandpass filter, adjust the Filter slider to
            0%, and set the Time slider to 100%. Select the Fade transition mode and make sure
   Ping Pong is disabled. Set the Dry/Wet control to 80% or above. </p>
            <h4 id="chorus-effect">Chorus Effect</h4>
            <p>Disable the Stereo Link switch, set the left channel’s delay time to 12ms, and adjust
            the right channel’s delay time to 17ms. Dial the Feedback to 60%. Enable the bandpass
            filter, set the Filter Frequency to 750 Hz, and adjust the Width slider to 6.5. Set
            the Rate slider to 5 Hz, bring the Filter slider to 10%, and dial the Time slider
   to 12%. Select the Repitch transition mode and enable the Ping Pong switch.</p>
        </React.Fragment>,
    "drum-buss":
        <React.Fragment>
            <p>(Note: the Drum Buss effect is not available in the Intro and Lite Editions.)</p><p>Drum Buss is an analog-style drum processor that was designed to add body and character
   to a group of drums, while gluing them together in a tight mix. </p><p>The Trim slider lets you reduce the input level before any processing is applied to
   the signal.</p><p>The Comp toggle applies a fixed compressor to the input signal before it is processed
            by the distortion. The compressor is optimized for balancing out groups of drums,
            with fast attack, medium release and moderate ratio settings, as well as ample makeup
   gain. </p><p>There are three types of distortion which can be applied to the input signal. Each
            distortion type adds an increasing degree of distortion, while lending its own character
   to the overall sound:</p><ul><li>Soft: waveshaping distortion</li><li>Medium: limiting distortion </li><li>Hard: clipping distortion with bass boost</li></ul><p>For more intensity, it is possible to drive the input prior to distorting it. The
   Drive control lets you determine how much drive is applied to the input signal. </p><p>Drum Buss combines commonly-used drum processing tools for shaping the mid-high range
   and filling out the low end, which we will look at in the following sections.</p><h4 id="mid-high-frequency-shaping">Mid-High Frequency Shaping</h4><p>The mid-high frequency shaping tools are designed to add clarity and presence to drums
   such as snares and hi-hats.</p><p>Crunch adjusts the amount of sine-shaped distortion applied to mid-high frequencies.
   </p><p>The Damp control is a low-pass filter, which removes unwanted high frequencies that
   can occur after adding distortion.</p><p>The Transients knob emphasizes or de-emphasizes the transients of frequencies above
            100 Hz. Positive values add attack and increase sustain, resulting in a full, “punchy”
            sound. Negative values also add attack, but decrease sustain. This tightens up the
   drums, giving them a sharper, more crisp sound with less room and rattle. </p><p>Low-End Enhancement</p><p>Drum Buss’s low-end enhancement is made up of two tools: a resonant filter, which
            dramatically boosts bass frequencies, as well as a Decay control, which allows you
            to adjust the decay rate of both the incoming audio and the signal processed by the
   resonant filter. These tools help you to fill out the low-end of your drums. </p><p>The Boom knob adjusts the amount of low-end enhancement that the resonant filter produces.
            The Bass Meter lets you see the Boom’s effect on the signal, which can be particularly
   useful if you can’t hear it.</p><p>The Freq knob adjusts the frequency of the low-end enhancer. Force To Note lets you
            tune the low-end enhancer by setting its frequency to the value of the nearest MIDI
   note.</p><p>The Decay control adjusts the decay rate of the low frequencies. When the Boom amount
            is set to 0%, the decay affects the incoming (post-drive and distortion) signal only.
            When the “Boom Level” is adjusted above 0%, the decay affects both the incoming and
   processed signals. </p><p>To solo the result of the low-frequency enhancer, enable Boom Audition via the headphone
   icon. </p><h4 id="output">Output</h4><p>The Dry/Wet control adjusts the balance between the processed and dry signals. </p><p>The Output Gain slider sets the amount of gain applied to the processed signal.</p>
        </React.Fragment>,

    "dynamic-tube":
        <React.Fragment>
            <p>(Note: the Dynamic Tube effect is not available in the Intro and Lite Editions.)</p><p>The Dynamic Tube effect infuses sounds with the peculiarities of tube saturation.
            An integrated envelope follower generates dynamic tonal variations related to the
   level of the input signal.</p><p>Three tube models, A, B and C, provide a range of distortion characteristics known
            from real amplifier tubes. Tube A does not produce distortions if Bias is set low,
            but will kick in whenever the input signal exceeds a certain threshold, creating bright
            harmonics. Tube C is a very poor tube amp that produces distortions all the time.
   The qualities of Tube B lie somewhere between these two extremes.</p><p>The Tone control sets the spectral distribution of the distortions, directing them
   into the higher registers, or through the midrange and deeper.</p><p>The Drive control determines how much signal reaches the tube; greater Drive yields
            a dirtier output. The intensity of the tube is controlled by the Bias dial, which
            pushes the signal into the celebrated realms of nonlinear distortion. With very high
   amounts of Bias, the signal will really start to break apart.</p><p>The Bias parameter can be positively or negatively modulated by an envelope follower,
            which is controlled with the Envelope knob. The more deeply the envelope is applied,
            the more the Bias point will be influenced by the level of the input signal. Negative
            Envelope values create expansion effects by reducing distortion on loud signals, while
   positive values will make loud sounds dirtier.</p><p>Attack and Release are envelope characteristics that define how quickly the envelope
            reacts to volume changes in the input signal. Together, they shape the dynamic nature
   of the distortions. Note that if Envelope is set to zero, they will have no effect.</p><p>Cut or boost the device’s final signal level with the Output dial.</p><p>Aliasing can be reduced by enabling Hi-Quality mode, which can be accessed via the
   <kbd>right-click</kbd>(PC) / <kbd>CTRL</kbd>-<kbd>click</kbd>(Mac) context menu. This improves the sound quality, particularly with high frequency
   signals, but there is a slight increase in CPU usage.</p>
        </React.Fragment>,

        "echo" : 
        <React.Fragment>
                <p>Echo is a modulation delay effect that lets you set the delay time on two independent
   delay lines, while giving you control over envelope and filter modulation. </p><p>The Channel Mode buttons let you choose between three different modes: Stereo, Ping
   Pong and Mid/Side.</p><p>The Left and Right delay line controls let you choose the delay time, which can be
                set in beat divisions or milliseconds, depending on the state of the Sync switch.
                Note that when the Mid/Side channel mode is selected, the Left and Right delay line
   controls are replaced with Mid and Side knobs. </p><p>You can use the Sync Mode choosers to select one of the following beat-synced modes:
                Notes, Triplet, Dotted and 16th. Note that when switching between Sync Modes, the
   resulting changes are only audible while the Sync switch is set to Sync.</p><p>When Stereo Link is engaged, changing either channel’s delay line control, Sync switch
   or Sync Mode settings will apply the changes to both sides.</p><p>Changing the Delay Offset sliders shortens or extends the delay time by fractional
                amounts, thus producing the ”swing” type of timing effect found in drum machines.
                Note that when Stereo Link is enabled, the Delay Offset can still be adjusted individually
   for the two delay lines.</p><p>The Input knob sets the amount of gain applied to the dry signal. To apply distortion
   to the dry signal, press the “D” button.</p><p>The Feedback parameter defines how much of each channel’s output signal feeds back
                into the delay lines’ inputs. The “Ø“ button inverts each channel’s output signal
   before adding it back to their inputs.</p><h3 id="22-13-1-echo-tab"><span class="section-number">22.13.1</span> Echo Tab</h3><p>The Echo tab provides a visualization and control of the delay lines and filter parameters.</p><figure class="image-container"><img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/manual/en/EchoTunnel_opt.4dbc140c1016.png" alt="EchoTunnel.png"/><figcaption>Echo’s Tunnel Visualization.</figcaption></figure><p>The Echo Tunnel’s circular lines represent the individual repeats, progressing from
                the outside of the tunnel to its center. The distance between the lines indicates
                the time between the repeats, and the white dots in the middle form a fixed 1/8th
                note grid for reference. You can adjust the delay times for each delay line by clicking
   and dragging in the display.</p><figure class="image-container"><img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/manual/en/EchoFilter_opt.96bb3c217e82.png" alt="EchoFilter.png" /><figcaption>Echo’s Filter.</figcaption></figure><p>The Filter toggle enables a high-pass and low-pass filter. The HP slider adjusts the
                    cutoff frequency of the high-pass filter and the adjacent Res slider adjusts the high-pass
                    filter’s resonance. The LP slider adjusts the cutoff frequency of the low-pass filter,
                    and you can use the Res slider on the right side to adjust the low-pass filter’s resonance.
   </p><p>The Filter Display makes it possible to visualize the filter curves. To show or hide
                        the Filter Display, use the triangular toggle button. You can also adjust the filter
   parameters by clicking and dragging either of the filter dots in the Filter Display.</p><h3 id="22-13-2-modulation-tab"><span class="section-number">22.13.2</span> Modulation Tab</h3><p>Echo’s Modulation tab contains an LFO that modulates filter frequency and delay time,
   and an envelope follower that can be blended with the LFO. </p><figure class="image-container"><img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/manual/en/EchoModulationTab_opt.aca416f05fb0.png" alt="EchoModulationTab.png" /><figcaption>Echo’s Character Tab.</figcaption></figure><p>Echo’s Modulation Tab.</p><p>You can choose from one of six different modulation waveforms including sine, triangle,
                        sawtooth up, sawtooth down, square, and noise. The selected waveform will appear in
   the display, which you can drag to adjust the modulation frequency. </p><p>When Sync is enabled, modulation is synchronized to the song tempo. You can use the
                            Rate slider to set the frequency of the modulation oscillator in beat divisions. When
                            Sync is disabled, you can use the Freq slider to adjust frequency of the modulation
   oscillator in Hertz. </p><p>Phase adjusts the amount of offset between the waveforms for the left and right channel.
   At 180°, the channels will be perfectly out of phase.</p><p>Mod Delay adjusts the amount of modulation that is applied to the delay time. Modulation
                            x4 scales the delay time modulation depth by a factor of four. With short delay times,
   this produces deep flanging sounds.</p><p>Mod Filter adjusts the amount of modulation that is applied to the filter.</p><p>Env Mix blends between the modulation oscillator and an envelope follower. At 100%,
                            only the envelope’s modulation will be heard. At 0%, only the LFO’s modulation will
   be heard.</p><h3 id="22-13-3-character-tab"><span class="section-number">22.13.3</span> Character Tab</h3><p>Echo’s Character tab contains parameters that control dynamics and add imperfections
   to your sound. </p><figure class="image-container"><img src="https://cdn-resources.ableton.com/80bA26cPQ1hEJDFjpUKntxfqdmG3ZykO/static/images/manual/en/EchoCharacterTab_opt.f1dfb175a8eb.png" alt="EchoCharacterTab.png" /><figcaption>Echo’s Character Tab.</figcaption></figure><p>Gate enables a gate at Echo’s input. It mutes the signal components below its threshold.
                            Threshold sets the threshold level that incoming audio signals must exceed in order
                            to open the gate. Release sets how long it takes for the gate to close after the signal
   has dropped below the threshold.</p><p>When Ducking is enabled, the wet signal is proportionally reduced as long as there
                                is an input signal. Ducking begins to affect the output signal when the input level
                                exceeds the set Threshold. Release sets how long it takes for ducking to stop after
   the input signal drops below the threshold.</p><p>When enabled, Noise introduces noise to simulate the character of vintage equipment.
                                You can adjust the Amount of noise added to the signal, and Morph between different
   types of noise.</p><p>When enabled, Wobble adds an irregular modulation of the delay time to simulate tape
                                delays. You can adjust the Amount of wobble added to the signal, and Morph between
   different types of wobble modulation.</p><p>Repitch causes a pitch variation when changing the delay time, similar to the behavior
                                of hardware delay units. When Repitch is disabled, changing the delay time creates
   a crossfade between the old and new delay times.</p><p>Note that in order to save CPU, the Echo device turns itself off at least eight seconds
                                after its input stops producing sound. However, Echo will not switch off if both the
   Noise and Gate parameters are enabled.</p><h3 id="22-13-4-global-controls"><span class="section-number">22.13.4</span> Global Controls</h3><p>The Reverb knob sets the amount of reverb added, and you use the Reverb Location chooser
                                to set where the reverb is added in the processing chain: pre delay, post delay, or
                                within the feedback loop. Use the Decay slider to lengthen or shorten the reverb tail.
   </p><p>The Stereo control sets the stereo width of the wet signal. 0% yields a mono signal
   whereas values above 100% create a widened stereo panorama.</p><p>The Output sets the amount of gain applied to the processed signal. The Dry/Wet control
                                adjusts the balance between the processed and dry signals. Set it to 100 percent when
                                using Echo in a return track. The Dry/Wet parameter’s context menu lets you toggle
   Equal-Loudness. When enabled, a 50/50 mix will sound equally loud for most signals.</p>
        </React.Fragment>








}

export default manualExcerpts;