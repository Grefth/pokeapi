export interface Card {
    // name: string;
    // url: string;
    // id: number;
    // type: string;  
    id: number;
    name: string;
    sprites: {
        front_default: string;
    };
    types: {
        type: {
            name: string;
        };
    }[];  
}
    // export const exampleCard: Card = {
    //     id: 1,
    //     name: 'Bulbasaur',
    //     sprites: {
    //         front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    //     },
    //     types: [
    //         {
    //             type: {
    //                 name: 'grass'
    //             }
    //         },
    //         {
    //             type: {
    //                 name: 'poison'
    //             }
    //         }
    //     ]
    // };


//acceder al elemento types del objeto card
