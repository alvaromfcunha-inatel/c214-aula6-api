import mongoose from "mongoose";

interface IMovie {
  name: string,
  director: string,
  year: number,
  actors: string[]
}

interface MovieDoc extends mongoose.Document {
  name: string,
  director: string,
  year: number,
  actors: string[]
}

interface MovieModelInterface extends mongoose.Model<MovieDoc> {
  build(attr: IMovie): MovieDoc
}

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  actors: {
    type: [String],
    required: true
  }
})

messageSchema.statics.build = (attr: IMovie) => {
  return new Movie(attr)
}

const Movie = mongoose.model<MovieDoc, MovieModelInterface>('Movie', messageSchema)

export { Movie }