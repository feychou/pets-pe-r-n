import db from '../dbinit.js';

const getPets = async (req, res) => {
  try {
    const pets = await db.query('SELECT * FROM pets;')
    res.json(pets.rows)
  } catch (err) {
    console.log(err)
  }
}

const getPet = async (req, res) => {
  try {
    const { id } = req.params;
    const pet = await db.query('SELECT * FROM pets WHERE id=$1', [id])
    res.json(pet.rows)
  } catch (err) {
    console.log(err)
  }
}

export { 
  getPets,
  getPet
}