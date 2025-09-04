import { useEffect, useState } from "react";

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU2NTc3NTMyLCJpYXQiOjE3NTY1NDg3MzIsImp0aSI6IjkwNDY2NWIwZjU2ZjRjNDg4NzY2ZjZhNmQ0MzRjODNiIiwidXNlcl9pZCI6IjIifQ.Nkc1isQJgvBZRn29UP4DBJWBV5F8OmEAS20sICgQbq8"; // вставь полученный токен

        fetch("https://api.example.com/data", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`, // добавляем токен в заголовки
                "Content-Type": "application/json"
            }
        })
            .then(res => res.json())
            .then(result => setData(result))
            .catch(err => console.error("Ошибка:", err));
    }, []);

    return (
        <div>
            <h1>Данные:</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default App;
