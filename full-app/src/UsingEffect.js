import React, { useState, useEffect } from "react";


function UsingEffect() {
    const [name, setName] = useState("Jan");
    const [admin, setAdmin] = useState(false);


    useEffect(() => {
        console.log(`Celebrate ${name}`);
    }, []);

    useEffect(() => {
        console.log(
            `the user is : ${admin ? "admin" : "not admin"}.`
        );
    }, []);
    return (
        <div >
            <section>
                <p > Congratultions {name} ! </p>

                <button onClick={() => setName("Will")}>
                    Change Winner
                </button>
                <p > {admin ? "looged in" : "not loggedin"}  </p>
                <button onClick={() => setAdmin(true)}>
                    Log in
                </button>
            </section>

        </div>
    );
}
export default UsingEffect;