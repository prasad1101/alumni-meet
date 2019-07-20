const getAlumniModel = () => {
    return require("../dao/conn-builder").modelBundle.alumniModel;

}

const readAlumni = (query, cb) => {
    getAlumniModel().find(query || {}, (me, md) => {
        cb(me || md)
    })
}

const saveAlumni = (payload, cb) => {
    new (getAlumniModel())(payload).save((me, md) => {
        cb(me || md)
    })
}

const updateAlumni = (alumniId, payload, cb) => {
    getAlumniModel().update({ alumniId: alumniId }, payload, (me, md) => {
        cb(me || md)
    })
}

const deleteAlumni = (alumniId, cb) => {
    getAlumniModel().remove({ alumniId: alumniId }, (me, md) => {
        cb(me || md)
    })
}

const authorizeAlumni = (loginpayload, cb) => {

    readAlumni(loginpayload, (loginUserResponse, isSuccess) => {

        loginUserResponse = loginUserResponse[0]

        if (loginUserResponse) {
            isSuccess = true;
            try {

                loginUserResponse = JSON.parse(JSON.stringify(loginUserResponse))

            } catch (error) {

            }

            loginUserResponse.access = {
                read: true,
                write: false
            }

            cb({ isSuccess: isSuccess })
        } else {
            isSuccess = false;
            cb({ error: "Invalid login" })
        }


    })



}

module.exports = { readAlumni, saveAlumni, updateAlumni, deleteAlumni, authorizeAlumni }