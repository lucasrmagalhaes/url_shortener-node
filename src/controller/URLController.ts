import { config } from '../config/Constants'
import { Request, Response } from 'express'
import shortId from 'shortid'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        // Ver se a URL já não existe
        // Criar o hash para essa URL
        const { originURL } = req.body
        const hash = shortId.generate()
        const shortURL = `${config.API_URL}/${hash}`
        // Salvar a URL no banco
        // Retornar a URL que a gente salvou
        response.json({ originURL, hash, shortURL })
    }

    public async redirect(req: Request, response: Response): Promise<void> {
        // Pegar o hash da URL
        const { hash } = req.params
        // Encontrar a URL original pelo o hash
        const url = {
            originURL: "https://cloud.mongodb.com/v2/5ff4fd9e15b4cc384aa5e559#clusters",
            hash: 'VaDg91-3w',
            shortURL: "http://localhost:5000/VaDg91-3w"
        }
        // Redirecionar para a URL original a partir do que encontramos no DB
        response.redirect(url.originURL)
    } 
}