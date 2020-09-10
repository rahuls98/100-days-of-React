const logTrigger = (event) => {
    document.getElementById("tracker").insertAdjacentHTML('beforeend',`<p>🔹 ${event}<p><hr>`);
}

export default logTrigger;