import { Request, Response } from 'express'

export class URLController {
    public async shorten(req: Request, response: Response): Promise<void> {
        // Ver se a URL já não existe
        // Criar o hash para essa URL
        const { originURL } = req.body
        
        // Salvar a URL no banco
        // Retornar a URL que a gente salvou
    }
}