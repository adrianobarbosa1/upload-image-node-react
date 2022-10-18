import React, { useState } from "react"
import { GetDataComponent } from "./components/GetDataComponent"
import { PickerOverlay } from "filestack-react"

function App() {
  const [isPicker, setIsPicker] = useState(false)
  const [image, setImage] = useState("")

  return (
    <div className="bg-blue-50 px-4 flex-colo">
      <form className="bg-blue-100 shadow-md rounded w-2/5 flex-colo py-12 px-4">
        {image ? (
          <img
            src={image && image.filesUploaded[0].url}
            alt="imageUploded"
            className="w-full h-56 object-cover"
          />
        ) : (
          <button
            onClick={() => (isPicker ? setIsPicker(false) : setIsPicker(true))}
            type="button"
            className="w-full text-lg font-bold border-dashed h-56 border-4 border-blue-800 text-blue-800"
          >
            Escolha a sua imagem
          </button>
        )}

        <input
          type="text"
          placeholder="Titulo da imagem"
          className="w-full my-8 bg-white py-4 px-2 rounded border border-blue-800 text-blue-800 font-semibold"
        />
        <button
          type="submit"
          className="w-full bg-blue-800 py-4 rounded text-white font-bold"
        >
          Enviar
        </button>
        <div className="mt-4 relative">
          {isPicker && (
            <PickerOverlay
              apikey={"AzxLaZoF7RNOaOlDkET3sz"}
              onSuccess={(res) => {
                setImage(res)
                setIsPicker(false)
              }}
              onError={(res) => alert(res)}
              pickerOptions={{
                maxFiles: 1,
                accept: ["image/*"],
                errorsTimeout: 2000,
                maxSize: 1 * 1000 * 1000,
              }}
            />
          )}
        </div>
      </form>

      <GetDataComponent />
    </div>
  )
}

export default App
