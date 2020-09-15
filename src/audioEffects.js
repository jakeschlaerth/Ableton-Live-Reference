import deviceArray from './deviceArray'

let deviceDictionary = {}

const mapIt = (device) => {
    deviceDictionary[device.key] = device;

}
deviceArray.map(mapIt)
export default deviceDictionary;