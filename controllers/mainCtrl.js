var user = require("../server/user.js");


module.exports = {
    getName: (req, res) => {
        res.status(200).send(user.name);
    },
    getLocation: (req, res) => {
        res.status(200).send(user.location);
    },
    getOccupations: (req, res) => {
        res.status(200).send(user.occupations);
    },
    getOccupationsLatest: (req, res) => {
        let result = (user.occupations.slice(user.occupations.length - 1))
        res.status(200).send({
            "latestOccupation": result.toString()
        });
    },
    getHobbies: (req, res) => {
        res.status(200).json({
            "hobbies": user.hobbies
        })
    },
    getHobbiesType: (req, res) => {
        let filteredHobbies = user.hobbies.filter((type) => {
            return type.type == req.params.type
        })
        res.status(200).json(filteredHobbies)
    },
    getFamily: (req, res, next) => {
        res.status(200).json({
            "family": user.family
        })
        next();
        (req, res) => {
            let queryRelation = user.family.filter((relation))
            return relation.relation == req.query.relation
        }
    }
}








//   occupationsLatest:

//   hobbies: