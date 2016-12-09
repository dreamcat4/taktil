import { config, host, document } from 'typewig';
import * as api from 'typewig/core/api-proxy';


export class Store {
    application: api.Application;
    project: api.Project;
    transport: api.Transport;
    cursorTrack: api.CursorTrack;
    trackBank: api.TrackBank;
    sceneBank: api.SceneBank;
    master: api.MasterTrack;

    init() {
        this.application = host.createApplication();
        this.project = host.getProject();
        this.transport = host.createTransport();
        this.cursorTrack = host.createArrangerCursorTrack(0, 16);
        this.cursorTrack.addPositionObserver(position => {});
        this.sceneBank = host.createSceneBank(16);
        this.master = host.createMasterTrack(0);
        
        // trackBank setup
        this.trackBank = this.project
            .getShownTopLevelTrackGroup()
            .createMainTrackBank(8, 0, 16, false);
        
        // tempo observer
        this.transport.getTempo().addRawValueObserver((tempo) => {});
        
        // transport play state observer
        this.transport.addIsPlayingObserver((isPlaying) => {});
        
        // metronome state observer
        this.transport.addClickObserver((isOn) => {});

        // preroll state observer
        this.transport.addPreRollObserver((state) => {});
        
        // overdub state observer
        this.transport.addOverdubObserver((isActive) => {});
        
        // loop state observer
        this.transport.addIsLoopActiveObserver((isActive) => {});
        
        // layout observer
        this.application.addPanelLayoutObserver((layout) => {}, 1000);
        
        // trackBank scroll position observer
        this.trackBank.addChannelScrollPositionObserver((position) => {}, 0);
        
        // channel count observer
        this.trackBank.addChannelCountObserver((count) => {});
        
        for (let i=0; i < 8; i++) {
            let track = this.trackBank.getChannel(i);
            (() => { // enclosure
                const trackIndex = i;
                this._addTrackEventObservers(trackIndex, track);
            })();
        }
    }

    private _addTrackEventObservers(trackIndex: number, track: api.Track) {
        let trackClipSlots = track.getClipLauncherSlots();

        track.addColorObserver((r, g, b) => {});

        track.addTrackTypeObserver(25, 'Unassigned', type => {});

        track.addIsGroupObserver((isGroup) => {});

        track.addIsSelectedInMixerObserver(isSelected => {});

        trackClipSlots.addHasContentObserver((index, hasContent) => {});

        trackClipSlots.addIsPlaybackQueuedObserver((index, isPlaybackQueued) => {});

        trackClipSlots.addIsPlayingObserver((index, isPlaying) => {});

        trackClipSlots.addIsRecordingObserver((index, isRecording) => {});

        trackClipSlots.addIsRecordingQueuedObserver((index, isRecordingQueued) => {});

        trackClipSlots.addIsSelectedObserver((index, isSelected) => {});

        trackClipSlots.addColorObserver((index, r, g, b) => {});
    }
}

let store: Store = new Store();


export default store;
