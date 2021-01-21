
interface Info {
    name: string;
    age: number;
}


const add = <T extends Info>(obj: T): T => {
    return {
        ...obj,
        fullInfo: `${obj.name} ${obj.age}`
    }
}

console.log(add({ name: "Hawre Aziz", age: 35, location: "SWE" }));



let done: number | boolean;

for (let i = 0; i < 10; i++) {
    if (i === 9) {
        done = true;
    } else {
        done = i;
    }
}