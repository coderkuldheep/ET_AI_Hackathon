import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
    "/machines",
    upload.array("images", 10),
    (req, res) => {

        if (!req.files || req.files.length === 0) {

            return res.status(400).json({

                success: false,

                message: "No files uploaded"

            });

        }

        const files = req.files.map(file => (

            "/uploads/" + file.filename

        ));

        res.json({

            success: true,

            files

        });

    }
);

export default router;