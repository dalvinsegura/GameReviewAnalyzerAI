// src/app/page.js
"use client";

import { useState } from "react";
import Papa from "papaparse";
import axios from "axios";
import Image from "next/image";

// importing assets
import steamLogo from "../../public/assets/logo-white.png";

export default function Home() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const requiredFields = [
    "review_id",
    "title",
    "year",
    "user_review",
    "user_suggestion",
  ];

  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;

    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        const jsonData = results.data;
        const headers = results.meta.fields;
        const missingFields = requiredFields.filter(
          (field) => !headers.includes(field)
        );

        if (missingFields.length > 0) {
          setMessage(
            `El archivo CSV está incompleto. Debe incluir las siguientes columnas: ${missingFields.join(
              ", "
            )}.`
          );
          return;
        }

        try {
          const response = await axios.post(
            process.env.NEXT_PUBLIC_AZURE_ENDPOINT,
            jsonData
          );
          if (response.status === 202) {
            setIsSuccess(true);
            setMessage(
              "Data enviada exitosamente. Puedes visualizarla en PowerBI."
            );
          } else {
            setIsSuccess(false);

            setMessage("Error al enviar los datos.");
            // console.log("Error: ", response);
          }
        } catch (error) {
          setIsSuccess(false);
          setMessage("Error al enviar los datos.");
          // console.log("Error: ", error);
          setIsSuccess(false);
        }
      },
    });

    setTimeout(() => {
      setMessage("");
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <>
      <nav className="navbar bg-black">
        <div className="container-fluid justify-content-center">
          <Image
            src={steamLogo}
            alt="Logo"
            width={140}
            className="d-inline-block align-top"
          />
          {/* A title like "| Game Reviews Analyzer powered by AI" */}
          <span className="text-white fs-5 ms-md-4 fw-bold">
            Game Reviews Analyzer
            <span className="opacity-50 fst-italic fw-medium">
              {" "}
              AI-powered{" "}
            </span>
          </span>
        </div>
      </nav>
      <div className="container mt-5 border p-4 border-dark rounded-4">
        <h1 className="mb-4 text-center opacity-25 fw-bold">
          Subir Archivo CSV
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="file"
              className="form-control center bg-black text-white"
              accept=".csv"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3 w-100">
            Enviar y Analizar
          </button>
        </form>
        {/* {message && <div className="alert alert-info mt-4">{message}</div>} */}
        {message && (
          <div
            className={`alert mt-4 ${
              isSuccess ? "alert-success" : "alert-danger"
            }`}
          >
            {message}
          </div>
        )}
      </div>

      <div className="container mt-5 border p-4 border-dark rounded-4">
        <h1 className="mb-4 text-center opacity-25 fw-bold">
          Visualización de Resultados
        </h1>

        <iframe
          width="100%"
          height="541.25"
          frameborder="0"
          scrolling="no"
          className="border border-dark rounded-4"
          src="https://itlaedudo-my.sharepoint.com/personal/20231334_itla_edu_do/_layouts/15/Doc.aspx?sourcedoc={ad32d740-5ece-45c7-a961-5d3da24176f3}&action=embedview&wdAllowInteractivity=False&Item=Chart%201&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True&edaebp=EwaTSES2020"
        ></iframe>
      </div>
    </>
  );
}
