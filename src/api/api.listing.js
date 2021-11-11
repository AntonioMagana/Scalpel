import getNintendoSwitchData from "./nintendo";
import getRTX3070Data from "./rtx_3070";
import getRTX3080Data from "./rtx_3080";
import getRTX3090Data from "./rtx_3090";
import getXboxSeriesXData from "./xbox";
import getPlayStationData from "./playstation";

export function getListing(item) {
    let data = null;
    switch (item) {
        case 'nintendo_switch':
            data = getNintendoSwitchData();
            break;
        case 'nvidia_3070':
            data = getRTX3070Data();
            break;
        case 'nvidia_3080':
            data = getRTX3080Data();
            break;
        case 'nvidia_3090':
            data = getRTX3090Data();
            break;
        case 'xbox_series_x':
            data = getXboxSeriesXData();
            break;
        case 'playstation_5':
            data = getPlayStationData();
            break;
        default:
            console.log("Error, data not found");
    }
    return data;
}

export default getListing;
