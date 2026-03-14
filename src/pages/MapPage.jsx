import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore"
import { db } from "../firebase"
import "leaflet/dist/leaflet.css"

function LocationSelector({ setPosition }) {

  const [marker, setMarker] = useState(null)

  useMapEvents({
    click(e) {
      const pos = [e.latlng.lat, e.latlng.lng]
      setMarker(pos)
      setPosition(pos)
    }
  })

  return marker ? <Marker position={marker} /> : null
}

function MapPage() {

  const [position, setPosition] = useState(null)
  const navigate = useNavigate()

  async function handleDone() {

    if (!position) {
      alert("Select a location first")
      return
    }

    // go back to tasks page immediately
    navigate("/tasks")

    try {

      await addDoc(collection(db, "tasks"), {
        latitude: position[0],
        longitude: position[1],
        createdAt: new Date()
      })

      console.log("Location saved")

    } catch (error) {
      console.error("Firebase error:", error)
    }

  }

  return (

    <div>

      <MapContainer
        center={[10.0602, 76.6351]}
        zoom={13}
        style={{ height: "80vh", width: "100%" }}
      >

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationSelector setPosition={setPosition} />

      </MapContainer>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          onClick={handleDone}
          style={{ padding: "10px 20px", fontSize: "16px" }}
        >
          Done
        </button>
      </div>

    </div>

  )
}

export default MapPage