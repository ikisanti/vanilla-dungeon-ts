

interface Hero {
    name: string;
    age: number;
    power?: string;
}

const person: Hero = {
    name: "Peter Parker",
    age: 28
}


const useContext = ({ name }: Hero) => {
    return {
        name
    }
}


const context = useContext(person)
console.log(context)