import Swal from 'sweetalert2';

export function ErrorAlert(message = "", buttonText = "") {
  Swal.fire({
    title: "Error",
    text: message,
    icon: "error",
    confirmButtonText: buttonText,
    showConfirmButton: !!buttonText.length,
  });
}

export function WarningAlert() {

}

export function SuccessAlert(message = "", buttonText = "") {
  Swal.fire({
    title: "Success",
    text: message,
    icon: "error",
    confirmButtonText: buttonText,
    showConfirmButton: !!buttonText.length,
  });
}
