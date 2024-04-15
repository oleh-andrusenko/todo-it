import { toast } from "react-toastify"
const toastOptions = {
  position: "bottom-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}
export const notify = (type, text) => {
  switch (type) {
    case 1:
      return toast.success(`${text}`, toastOptions)
    case 2:
      return toast.error(`${text}`, toastOptions)
  }
}
