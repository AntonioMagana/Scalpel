function Time() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 // months start from 0
    const day = date.getDay()
    const hour = date.getHours();
    const minutes = date.getMinutes();

    return `${month}-${day}-${year} ${hour}:${minutes}`;
}

export default Time;