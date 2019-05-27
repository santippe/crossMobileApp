function callServer(method, url, someToSend, success, fail, timeout) {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.timeout = 30000
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                success()
            } else {
                fail()
            }
        }
    }
    xhr.ontimeout = function (e) {
        JsInterface.Message("Error", "Nessuna connessione disponibile")
        xhr = null
        //setTimeout(callServer())
    }
    xhr.send(someToSend)
}