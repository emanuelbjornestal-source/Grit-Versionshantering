const recipes = [
    {
        id: 1,
        name: "Köttbullar med gräddsås",
        category: "Kött",
        description: "Klassiska svenska köttbullar med gräddsås och lingon.",
        time: "45 min",
        image: "https://placehold.co/600x400?text=Köttbullar",
        ingredients: [
            "500 g blandfärs",
            "1 dl ströbröd",
            "1 dl mjölk",
            "1 ägg",
            "1 liten gul lök",
            "2 dl grädde",
            "2 dl buljong"
        ],
        instructions: [
            "Blanda ströbröd och mjölk och låt svälla.",
            "Rör ihop färs, ägg, riven lök, ströbrödsblandningen, salt och peppar.",
            "Rulla bollar och stek dem gyllene i smör.",
            "Häll buljong och grädde i pannan och låt koka ihop till en sås.",
            "Servera med potatis och lingonsylt."
        ]
    },
    {
        id: 2,
        name: "Grönsakssoppa",
        category: "Vegetariskt",
        description: "Värmande soppa på rotfrukter, enkel att göra i stor sats.",
        time: "30 min",
        image: "https://placehold.co/600x400?text=Soppa",
        ingredients: [
            "2 morötter",
            "2 potatisar",
            "1 gul lök",
            "1 l grönsaksbuljong",
            "1 msk olivolja"
        ],
        instructions: [
            "Skala och tärna grönsakerna.",
            "Fräs löken i olja i en kastrull.",
            "Tillsätt resten av grönsakerna och buljongen.",
            "Koka i cirka 20 minuter tills allt är mjukt.",
            "Mixa om du vill ha en len soppa. Smaka av med salt och peppar."
        ]
    },
        {
        id: 3,
        name: "Laxpasta",
        category: "Fisk",
        description: "Krämig pasta med rökt lax och dill.",
        time: "20 min",
        image: "https://placehold.co/600x400?text=Laxpasta",
        ingredients: ["300 g pasta", "150 g rökt lax", "2 dl matlagningsgrädde", "1 knippe dill"],
        instructions: [
            "Koka pastan enligt förpackningen.",
            "Värm grädden i en panna.",
            "Tillsätt lax och dill och låt värmas igenom.",
            "Blanda med pastan och servera."
        ]
    },
    {
        id: 4,
        name: "Äppelkaka",
        category: "Efterrätt",
        description: "Syrlig äppelkaka som passar bra med vaniljsås.",
        time: "50 min",
        image: "https://placehold.co/600x400?text=Appelkaka",
        ingredients: ["4 äpplen", "100 g smör", "1,5 dl socker", "2 dl vetemjöl", "1 tsk kanel"],
        instructions: [
            "Skiva äpplena och lägg dem i en smord form.",
            "Smält smöret och blanda med socker och mjöl.",
            "Fördela smeten över äpplena och strö över kanel.",
            "Grädda i 200 grader i cirka 30 minuter."
        ]
    },
    {
        id: 5,
        name: "Pannkakor",
        category: "Efterrätt",
        description: "Tunna pannkakor med sylt och grädde.",
        time: "30 min",
        image: "https://placehold.co/600x400?text=Pannkakor",
        ingredients: ["3 dl vetemjöl", "6 dl mjölk", "3 ägg", "smör till stekning"],
        instructions: [
            "Vispa ihop mjöl och mjölk till en slät smet.",
            "Vispa i äggen och låt smeten vila en stund.",
            "Stek tunna pannkakor i smör.",
            "Servera med sylt och grädde."
        ]
    },
    {
        id: 6,
        name: "Vegetarisk chili",
        category: "Vegetariskt",
        description: "Mustig chili på bönor och tomat.",
        time: "40 min",
        image: "https://placehold.co/600x400?text=Chili",
        ingredients: ["1 burk kidneybönor", "1 burk krossade tomater", "1 paprika", "1 gul lök", "1 tsk chilipulver"],
        instructions: [
            "Fräs lök och paprika.",
            "Tillsätt bönor, tomater och chilipulver.",
            "Låt sjuda i 25 minuter.",
            "Servera med ris."
        ]
    },

];