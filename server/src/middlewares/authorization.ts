import { NextFunction, Request, Response } from "express";
import { getAuth } from "firebase-admin/auth";

export const authorizationJWT = (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const [, jwt] = token.split(" ");

  getAuth()
    .verifyIdToken(jwt)
    .then((decodedToken) => {
      req.uid = decodedToken.uid;
      next();
    })
    .catch((error) => {
      console.log(error);
      return res.status(403).json({
        message: "Forbidden",
      });
    });
};
