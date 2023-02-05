import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import styles from "../styles.css";
import Mag from "../assets/Rectangle-59.png";
import Mag2 from "../assets/1.png";
// import play from "./assets/download.jpg";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function Magazine() {
  return (
    <section className="Magazine mx-auto">
      <div className="row mb-lg-3">
        <p className="col-sm-12 col-lg-5">
          ACCESSORIZE WITH OUR FEATURED COLLECTION !
        </p>
      </div>
      <div className="row my-3">
        <div className="col-sm-12 col-lg-5 mag-text">
          More is always more and extra is everything.
          <img className="magazine-img img-fluid mt-3" src={Mag} />
          <span className="text-center">
            <a href="#" className="mag-button">
              Shop now
            </a>
          </span>
        </div>
        <div className="col-sm-12 col-lg-7 mag-text">
          The future of eyewear has arrived. Are you ready to take a look?
          <img className="magazine-img img-fluid mt-3" src={Mag2} />
          <span className="text-center">
            <a href="#" className="mag-button">
              Shop now
            </a>
          </span>
        </div>
      </div>
      {/* <div className="row">
        <img className="magazine-img img-fluid col-5" src={Mag} />

        <img className="magazine-img img-fluid col-7" src={Mag2} />
      </div> */}
    </section>
  );
}
