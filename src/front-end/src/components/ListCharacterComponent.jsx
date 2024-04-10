import React, {useEffect, useState} from 'react'
import { listCharacters } from '../services/CharacterService'

const ListCharacterComponent = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        listCharacters().then((response) => {
            setCharacters(response.data)
        }).catch(error => {
            console.error(error)
        })
    }, [])
  
    return (
    <div className='container'>
        <h2 className='text-center'>Lista de Personagens</h2>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th className='text-center'>ID</th>
                    <th className='text-center'>Nome</th>
                    <th className='text-center'>Nível</th>
                    <th className='text-center'>Classe</th>
                    <th className='text-center'>Espécie</th>
                </tr>
            </thead>
            <tbody>
                {
                    characters.map(character =>
                        <tr key={character.id}>
                            <td className='text-center'>{character.id}</td>
                            <td className='text-center'>{character.characterName}</td>
                            <td className='text-center'>{character.characterLevel}</td>
                            <td className='text-center'>{character.characterClass}</td>
                            <td className='text-center'>{character.characterSpecies}</td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListCharacterComponent