import { Modal } from "@mui/material";
import { useModalWindow } from "../state/useModalWindow";

export default function CarQuickViewModal() {
    const isOpen = useModalWindow((state) => state.isOpen);
    const carDetails = useModalWindow((state) => state.carDetails);
    const closeModal = useModalWindow((state) => state.closeModal);
    
    if (!carDetails) {
        return null; 
      }
    const equipments = carDetails.equipment.split(",");
    return (
      <Modal open={isOpen} onClose={closeModal}>
        <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 900, 
        maxWidth: '90%',
        background: "white",
        boxShadow: "24",
      }}>
         <div className="details">
                <div className="row"><div className="label">Manufacturer: </div> {carDetails.manufacturer}</div>
                <div className="row"><div className="label">Model: </div> {carDetails.model}</div>
                <div className="row"><div className="label">Costruction Year: </div> {carDetails.constructionYear}</div>
                <div className="row"><div className="label">Fuel Type: </div> {carDetails.fuelType}</div>
                <div className="row"><div className="label">Engine size: </div> {carDetails.engineSize}</div>
                <div className="row"><div className="label">Description: </div> {carDetails.description}</div>
                <div className="row"><div className="label">GearBoc: </div> {carDetails.gearbox}</div>
                <div className="row"><div className="label">Mileage: </div> {carDetails.mileage}</div>
                <div className="row"><div className="label">Power: </div> {carDetails.power}</div>
                <div className="row"><div className="label">Vin: </div> {carDetails.vin}</div>
                <br/>
                <div className="row">
                    <div className="label">Equipments:</div>
                    <div className="row">
                        <ul className="list">
                            {equipments.slice(0, 30).map((equipment, index) => {
                                return <li key={index}>{equipment} </li>
                            }
                            )}
                        </ul>
                    </div>
                </div>
                </div>
        </div>
      </Modal>
    );
  }

