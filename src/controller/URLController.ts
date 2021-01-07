import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortId from 'shortid'
import { URLModel } from '../database/model/URL'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        
        const { originURL } = req.body
        const url = await URLModel.findOne({ originURL })
        
        if(url) {
            response.json(url)
            return
        }

        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        const newURL = await URLModel.create({ hash, shortURL, originURL })

        response.json(newURL)
    
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        // Pegar o hash da URL
        const { hash } = req.params
        // Encontrar a URL original pelo o hash
        const url = {
            originURL: "https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters",
            hash: 'Z41vvIrNd',
            shortURL: "http://localhost:5000/Z41vvIrNd"
        }
        // Redirecionar para a URL original a partir do que encontramos no DB
        response.redirect(url.originURL)
    } 
}