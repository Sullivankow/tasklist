import mongoose, { ConnectOptions } from 'mongoose';

let isConnected: boolean = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true); // Active une validation stricte des requêtes MongoDB

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  if (!process.env.MONGODB_URI) {
    console.error('Erreur : MONGODB_URI n\'est pas défini dans le fichier d\'environnement.');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'tasks',
    } as ConnectOptions);

    isConnected = true;
    console.log('Connexion réussie à MongoDB !');
  } catch (error) {
    console.error('Erreur lors de la connexion à MongoDB :', error);
  }
};
