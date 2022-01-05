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

const createPet = async (req, res) => {
  try {
    const {
      name,
      person_id,
      type,
      age,
      features
    } = req.body;

    await db.query(
      'INSERT INTO pets(name, person_id, type, age, features) values($1, $2, $3, $4, $5)',
      [name, person_id, type, age, features]
    )
    res.json({ msg: 'new pet successfully created!'})


  } catch(err) {
    console.log(err)
  }
}

const deletePet = async (req, res) => {
  try {
    const { id } = req.params
    await db.query('DELETE from pets WHERE id=$1', [id])
    res.json({ msg: `pet with id ${id} was successfully deleted` })
  } catch(err) {
    console.log(err)
  }
}

const editPet = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      person_id,
      type,
      age,
      features
    } = req.body;

    await db.query(
      'UPDATE pets SET name=$1, person_id=$2, type=$3, age=$4, features=$5 WHERE id=$6',
      [name, person_id, type, age, features, id]
    )

    res.json({ msg: `the pet with id ${id} has been successfully updated` })

  } catch(err) {
    console.log(err)
  }
}

export { 
  getPets,
  getPet,
  createPet,
  deletePet,
  editPet
}