const models = require('./models');
const tag = require('./models/tag');
async function consulta() {   
    const tags = await models.Tag.findAll();
    tags.forEach(tag =>{
        console.log(tag.dataValues);
    });
    const activos = await models.Activo.findAll();
    activos.forEach(activo =>{
        console.log(activo.dataValues);
    });
    const ubicaciones = await models.Ubicacion.findAll();
    ubicaciones.forEach(ubicacion =>{
        console.log("Ubicaciones: ",ubicacion.dataValues);
    });

    const t = await models.Activo.findByPk(1); //busca por llave primaria (id)
    const ta = await models.Tag.findByPk(1);
    await t.addTag(ta); //agrega una relacion de un tag a un activo

    const ta2 = await models.Tag.findByPk(2);
    let activo = await models.Activo.findByPk(2);
    await activo.addTags([ta,ta2]); //agrega dos relaciones de un tag a un activo (ta,ta2);

    activo = await models.Activo.findOne({
        where:{
            numSerie: 12346
        },
        include: [models.Tag] // incluye tambien los datos de los tags asociados
    });
    console.log("Activo ",activo.dataValues.numSerie, activo.dataValues.numInventario);
    console.log("Tags del Activo: ", activo.tags.map(tag => tag.dataValues.tag));

    // crear un activo 
    activo = await models.Activo.create({
        numSerie: 12347,
        numInventario: 12347,
        descripcion: "Computadora"
    });
   
    models.sequelize.close();
}
consulta();