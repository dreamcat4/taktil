import {View} from '../view';
import {AbstractCollectionItem, Midi} from '../../helpers';
import {areDeepEqual, IntervalTask} from '../../utils';
import {views} from '../../session';
import {AbstractDevice, DeviceControl} from '../device';


abstract class AbstractControl {
    name: string;
    parent: AbstractControl;
    deviceCtrls: DeviceControl[] = [];
    registered: boolean = false;
    registrations: Object[] = [];
    views: View[] = [];
    eventHandlers: { [key: string]: Function[] } = {};
    memory: { [key: string]: any } = {};
    state: any; // depends on control type


    constructor(name:string) {
        this.name = name;
    }

    // called when button is regstered to a view for the first time
    // allows running of code that is only aloud in the api's init function
    register(deviceCtrls: DeviceControl[], view:View) {
        this.registrations.push({'view': view, 'deviceCtrls': deviceCtrls});
        this.deviceCtrls = this.deviceCtrls.concat(deviceCtrls);
        this.views.push(view);
        if (this.eventHandlers['register'] && !this.registered) {
            this.callCallback('register');
        }
    }

    refresh(deviceCtrl:DeviceControl) {
        views.active.updateDeviceCtrlState(this, deviceCtrl, this.state);
    }

    setState(state) {
        // if the state isn't changing, there's nothing to do.
        if (areDeepEqual(state, this.state)) return;
        // update object state
        this.state = state;
        // update hardware state through view to avoid
        // updating hardwar ctrls not in current view
        for (let deviceCtrl of this.deviceCtrls) {
            views.active.updateDeviceCtrlState(this, deviceCtrl, state);
        }
    }

    setDeviceCtrlState(deviceCtrl:DeviceControl, state) {
        // implemented in child classes
    }

    // registers event handlers
    on(eventName:string, callback:Function) {
        if (!this.eventHandlers[eventName]) this.eventHandlers[eventName] = [];
        this.eventHandlers[eventName].push(callback);
        return this;
    }

    // handles midi messages routed to control
    onMidi(deviceCtrl:DeviceControl, midi:Midi) {
        // implemented in subclasses
    }

    callCallback(callbackName:string, ...args) {
        log(callbackName + ' ' + this.name);
        var callbackList = this.eventHandlers[callbackName];
        for (let callback of callbackList) {
            if (this.memory[callbackName]) this.cancelCallback(callbackName);
            callback.apply(this, args);
        }
    }

    cancelCallback(callbackName:string) {
        var memory = this.memory[callbackName];
        if (memory instanceof IntervalTask) memory.cancel();
        delete this.memory[callbackName];
    }
}


export default AbstractControl;