const createName = (index, column) => `m_${index * 2}${index * 3}${column}`;

const createDate = (index) => {
    const currentTime = new Date();
    const fakeDate = new Date(currentTime.getTime() - index*1000*60*60);
    return `${fakeDate}`
}

export const machines = Array.from({length: 20}, (element, index) => (
    {
        name: `Machine ${index}`,
        pods: Array.from({length: 8}, (element, podIndex) => (
            {
                name: createName(podIndex, 1),
                node: createName(podIndex, 2),
                status: 'Running', //needs reoccuring calls
                restarts: Math.floor(Math.random() * 2),
                age: createDate(podIndex),
                cpu: Math.round((Math.random() + Number.EPSILON) * 10000) / 10000, //needs reoccuring calls
                memory: Math.floor((Math.random() * 30) + 500), //needs reoccuring calls
            }
        ))
    }
))

export const memoryApiCall = (machine) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                {
                    name: machine,
                    pods: Array.from({length: 8}, (element, podIndex) => (
                        {
                            name: createName(podIndex,1),
                            memory: Math.floor((Math.random() * 30) + 500) //needs reoccuring calls
                        }
                    ))
                }
            )
        }, 100)
    })
}

export const cpuApiCall = (machine) => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(
                {
                    name: machine,
                    pods: Array.from({length: 8}, (element, podIndex) => (
                        {
                            name: createName(podIndex,1),
                            cpu: Math.random(), //needs reoccuring calls
                        }
                    ))
                }
            )
        }, 100)
    })
}