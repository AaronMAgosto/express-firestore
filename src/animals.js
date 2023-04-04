import { db } from './dbConnect.js'

export function addNewAnimal(req,res) {
    const newAnimal = req.body
    db.collection('animals').add(newAnimal)
    .then(doc => res.status(201).send("New animal Added: " +doc.id))
    .catch(err => res.status(500).send(err))
}
export async function getAllAnimals(req, res){
    const collection = db.collection('animals').get()
    .catch(err => res.status(500).send(err))
//    const animalList = (await collection).docs.map(animal => animal.data())
   const animalList = (await collection).docs.map(animal => ({...animal.data(), id: animal.id}))
    res.send(animalList)
} 
