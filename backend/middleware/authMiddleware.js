import jwt from "jsonwebtoken";

export default function (req, res, next) {

    console.log("================================");
    console.log(req.method, req.originalUrl);
    console.log("Authorization:", req.headers.authorization);

    const auth = req.headers.authorization;

    if (!auth) {
        console.log("❌ No Authorization Header");

        return res.status(401).json({
            message: "Unauthorized"
        });
    }

    const token = auth.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        console.log("✅ Token Valid");
        console.log(decoded);

        req.user = decoded;

        next();

    } catch (err) {

        console.log("❌ Invalid Token");
        console.log(err.message);

        return res.status(401).json({
            message: "Invalid Token"
        });
    }
}