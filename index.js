import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose"
import helmet from "helmet";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";

// configuration

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("./assets", express.static(path.join(__dirname, "public/assets")));

// file storage

