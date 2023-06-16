import express, { Application } from 'express';
import cors from 'cors';
// Application routes
import userRoutes from './app/modules/user/user.route'

const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


app.use('/api/v1/user', userRoutes)

export default app;

    // inserting a test data into mongodb

    /* 
       Step1: Interface done
       Step2: Schema done
       Step3: Model done
       Step4: Database Query on Model done
    */

    // Step1: Interface
    // -----------------
    

    // creating schema uing interface;

// Pattern MVC, Moduler
/* 
Interface -> interface.ts
Schema, Model -> model.ts
route
route fuction -> controler.ts
Database queries -> service

*/