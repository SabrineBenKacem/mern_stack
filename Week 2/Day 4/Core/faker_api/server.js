const express = require("express")
const { faker } = require('@faker-js/faker');


const PORT = 8000

const app = express()

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

newFakeUser = [];
newFakeCompanies = []; 

fakeUserAndCompany = [];

const createUser = () => {
    const fakeUser = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName:  faker.person.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        password: faker.internet.password()
    };
    return fakeUser;
};
    


const createCompany = () => {
    const newFakeCompany = {
        companyId: faker.string.uuid(),
        name: faker.company.name(),
        address : {
        street: faker.location.street(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        country: faker.location.country ()
        }  
    };
    return newFakeCompany;
};
    

app.post("/api/users/new", (req, res) => {
    const createFakeUser = createUser();
    console.log(createFakeUser);
    newFakeUser.push(createFakeUser);
    res.json({
      message: "User Created ✅",
      User: createFakeUser,
    });
  });

  app.get("/api/users", (req, res) => {
    res.json({ newFakeUser, status: 200 });
  });

  app.post("/api/companies/new", (req, res) => {
    const createFakeCompany = createCompany();
    console.log(createFakeCompany);
    newFakeCompanies.push(createFakeCompany);
    res.json({
      message: "Company Created ✅",
      company: createFakeCompany,
    });
  });

  app.get("/api/companies", (req, res) => {
    res.json({ fakeCompanies, status: 200 });
  });

  app.post("/api/user/company", (req, res) => {
    const createFakeUser = createUser();
    const createFakeCompany = createCompany();
    console.log(createFakeUser);
    console.log(createFakeCompany);
    fakeUserAndCompany.push(createFakeUser)
    fakeUserAndCompany.push(createFakeCompany)

    res.json({
      message: "User & Company Created ✅",
      user: createFakeUser,
      company: createFakeCompany
    });
  });

  app.get("/api/users_companies", (req, res) => {
    res.json({ fakeUserAndCompany, status: 200 });
  });













app.listen(PORT, ()=>{
    console.log(`>>>SERVER IS RUNNING ON PORT ${PORT} 🔥🔥🔥🔥🔥<<<`);
})