import { InitialUrl } from "../utils/constants/FetchConstants";

function ApiFetch(props) {
  const requestOptions = {
    method: props.method || "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (props.method !== "GET" && props.body) {
    requestOptions.body = JSON.stringify(props.body);
  }

  const promise = new Promise((resolve, reject) => {
    fetch(InitialUrl + props.url, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response.statusText || "Ошибка запроса");
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });

  return promise;
}

export default ApiFetch;

export async function appFile(parameter) {
  const promise = new Promise((resolve, reject) => {
    fetch(InitialUrl + parameter.url, {
      method: "POST",
      body: parameter.body, // FormData болсо болот
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
        // ❌ Ошондо ката текстин чыгарабыз
        const errorText = await response.text();
        console.error("Upload error:", errorText);
        throw new Error(
          errorText || response.statusText || "Ошибка при загрузке файла"
        );
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
  return promise;
}
