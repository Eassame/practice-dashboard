export const machines = Array.from({length: 20}, (element, index) => (
    {
        name: `machine_${index}`,
        pods: Array.from({length: 8}, (element, podIndex) => (
            {
                name: `machine_${podIndex * 2}${podIndex * 3}${podIndex * 4}`,
                node: `machine_${podIndex * 2}${podIndex * 3}${podIndex * 4}`,
                status: `machine_${podIndex * 2}${podIndex * 3}${podIndex * 4}`, //needs reoccuring calls
                restarts: `machine_${podIndex * 2}${podIndex * 3}${podIndex * 4}`,
                age: `machine_${podIndex * 2}${podIndex * 3}${podIndex * 4}`,
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
                            name: `machine_${podIndex * 2}${podIndex * 3}${podIndex * 4}`,
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
                            cpu: Math.random(), //needs reoccuring calls
                        }
                    ))
                }
            )
        }, 100)
    })
}