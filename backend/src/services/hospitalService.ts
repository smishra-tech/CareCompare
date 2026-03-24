interface Hospital {
    id: number,
    name: string
}

// Simulate a database delay using a Promise
const fetchHospitalsFromDb = () : Promise<Hospital[]> => {
    return new Promise((resolve, reject) => {
        console.log("--- DB Query Started ---");
        setTimeout(() => {
            const success = false;
            if(success) {
                resolve([{ id: 1, name: "City Hospital",}, { id: 2, name: "Sunny Hospital",}])
            } else {
                reject("Database Connection Failed");
            }
        }, 2000);
    });
};


// The modern way to handle the result

const getHospital = async () => {
    try {
        console.log("1. Requesting Hospital list...");
        const hospitals = await fetchHospitalsFromDb();
        console.log("2. Data Received:", hospitals);
    } catch (err) {
        console.log("Error:", err);
    }finally {
        console.log("3. Search Transcation Completed");
    }
}

getHospital();