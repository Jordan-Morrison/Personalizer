const BaseURL = "http://localhost:3007";
// const BaseURL = "http://was-personalizerapi-poc-02.azurewebsites.net";

export async function getRecommendations(province, month, language) {
    try {
        let response = await fetch(`${BaseURL}/api/v1/recommendation?province=${province.toLowerCase()}&month=${month.toLowerCase()}&language=${language.toLowerCase()}`);
        response = await response.json();
        return response;
    } catch (error) {
        throw(error);
    }
}

export async function reward(eventId, errorCallback) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    var apiOptions = {
        method: 'PUT',
        headers,
        body: JSON.stringify({
            "eventId": eventId,
            "score": 1
        }),
    };

    try {
        let response = await fetch(`${BaseURL}/api/v1/recommendation/reward`, apiOptions);
        response = await response.json();
        return response;
    } catch (error) {
        errorCallback(error);
    }
}