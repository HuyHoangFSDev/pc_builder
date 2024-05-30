import React, { useState } from "react";
import FormPC from "../FormPC/FormPC";
import "./PCBuilded.css";

export default function PCBuilded() {
  const [isBack, setIsBack] = useState(false);

  const handleBack = () => {
    setIsBack(true);
  };

  return (
    <div>
      {isBack ? (
        <FormPC />
      ) : (
        <div>
          <button onClick={handleBack}>Start over</button>
          <br />
          <div className="title-pc">
            <p>Gaming PC</p>
          </div>
          <br />
          <div className="item-pc">
              <span>CPU</span>
              <span>AMD Ryzen 5 5600X</span>
              <span>$200</span>
          </div>
          <br />
          <div className="item-pc">
              <span>Motherboard</span>
              <span>MSI B550-A PRO</span>
              <span>$140</span>
          </div>
          <br />
          <div className="item-pc">
              <span>RAM</span>
              <span>Corsair Vengeance LPX 16GB (2x8GB) DDR4 3200MHz</span>
              <span>$70</span>
          </div>
          <br />
          <div className="item-pc">
              <span>GPU</span>
              <span>ZOTAC Gaming GeForce RTX 3060 Twin Edge OC</span>
              <span>$330</span>
          </div>
          <br />
          <div className="item-pc">
              <span>Cooler</span>
              <span>Cooler Master Hyper 212 Black Edition</span>
              <span>$40</span>
          </div>
          <br />
          <div className="item-pc">
              <span>Storage</span>
              <span>Crucial P2 500GB NVMe PCIe M.2 SSD</span>
              <span>$55</span>
          </div>
          <br />
          <div className="item-pc">
              <span>Power Supply</span>
              <span>EVGA 600 BR, 80+ Bronze 600W</span>
              <span>$50</span>
          </div>
          <br />
          <div className="item-pc">
              <span>Case</span>
              <span>Phanteks Eclipse P300A Mesh ATX Mid Tower</span>
              <span>$60</span>
          </div>
          <br />
          <div className="total">
              <span>Total</span>
              <span>$1000</span>
          </div>
          <br />
          <button onClick={handleBack}>Start over</button>{" "}
        </div>
      )}
    </div>
  );
}
