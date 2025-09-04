import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        fetch("https://7a70c7d44002.ngrok-free.app/api/v1/tuition/", {
            headers: {
                "ngrok-skip-browser-warning": "true"
            }
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Ошибка HTTP: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log("✅ Данные из API:", data);
            })
            .catch((err) => {
                console.error("❌ Ошибка запроса:", err);
            });
    }, []);

    return <h1></h1>;
}

export default App;
