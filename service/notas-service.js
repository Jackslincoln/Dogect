const faker = require('faker');
const boom = require('@hapi/boom');

class NoteService {
  constructor() {
    this.notes = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++)
      this.notes.push({
        id: faker.datatype.uuid(),
        title: faker.name.title(),
        content: faker.lorem.lines(),
        fecha_creacion: faker.date.past(),
        esManada: true,
        activo: true,
        //usuario manada equipo
      });
  }

  find(size) {
    const notes = this.notes.filter((item, index) => item && index < size);
    if (!notes)
        throw boom.notFound('No se encontró la nota solicitada');
    else if (notes.length <= 0)
       throw boom.notFound('No hay notas registradas aún');
    return notes
  }

  create(data) {
    const newNote = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.notes.push(newNote);
    return newNote;
  }

  findOne(id) {
    const note = this.notes.find((item) => item.id === id)
    if (!note)
      throw boom.notFound('La nota no fue encontrada');
    return note;
  }


  update(id, changes) {
    const index = this.notes.findIndex(item => item.id === id);
    console.log(index);
    if (index === -1)
      throw boom.notFound('Nota no encontrada');

    var currentNote = this.notes[index];
    this.notes[index] = {
      ...currentNote,
      ...changes
    };
    return {
      old: currentNote,
      changed: this.notes[index]
    };
  }

  delete(id) {
    const index = this.notes.findIndex(item => item.id ===id);
    if (index === -1)
      throw boom.notFound('Note not found');

      var currentNote = this.notes[index];
      this.notes.splice(index, 1);
      return currentNote;
  }
}

module.exports = NoteService;


// const notas_schema = require('../models/notas');
// /**
//  * @returns {Promise<Notes[]>}
//  */
// async function readnotes(){
//     let notes = await notas_schema.find({}).exec();
//     return notes;
// }

// /**
//  * @param {string} id
//  * @returns {Promise<Notes>}
//  */
// async function readOneNote(id){
//     let note = await notas_schema.findById(id).exec();
//     return note;
// }

// module.exports = {
//     readnotes,
//     readOneNote
// }
