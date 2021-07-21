const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
]

function superbowlWin(record) {
   

    let yearWon = record.find((season) => season.result === "W");
    
    if (yearWon) { 
        return yearWon.year
    }

}

superbowlWin(record);

