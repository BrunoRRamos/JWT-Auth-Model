import express, { Request, Response } from "express";

const routes = (app: any) => {
    app.route("/").get((req: Request, res: Response) => {
        res.status(200).send({Message: "Server live"})
    })

    app
    .use(express.json)
}

export default routes;