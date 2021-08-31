class ErrorView {
    renderError(errorMessage) {
        const errorAlertElement = document.querySelector(".error-alert");
        const errorMessageElement = document.querySelector(".error-message");
        errorMessageElement.innerText = errorMessage;
        errorAlertElement.style.opacity = "1";
        errorAlertElement.style.visibility = "visible";
        this.#addHandlerShowError();
    }

    #addHandlerShowError() {
        const errorAlert = document.querySelector(".error-alert");
        const btnCloseError = document.querySelector(".btn-close-error-alert");
        btnCloseError.addEventListener("click", () => {
            errorAlert.style.opacity = "0";

            setTimeout(() => {
                errorAlert.style.visibility = "hidden";
            }, 600);
        });
    }
}

export default new ErrorView();