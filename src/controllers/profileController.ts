import { Request, Response } from 'express'
import User from '../models/User'

/**
  
 * El controlador busca un usuario por handle, aumenta visits y devuelve perfil
 */
export async function getProfile(req: Request, res: Response) {
  const { handle } = req.params
  const user = await User.findOne({ handle })

  if (!user) {
    return res.status(404).json({ error: 'Perfil no encontrado' })
  }

  user.visits += 1
  await user.save()

  // Devolvemos solo los campos públicos
  return res.json({
    handle:      user.handle,
    name:        user.name,
    description: user.description,
    image:       user.image,
    links:       user.links,
    visits:      user.visits
  })
}
