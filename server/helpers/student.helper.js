

const getModel = () => {
    return require("../dao/conn-builder").modelBundle.studentModel;

}

const readStudent = (query, cb) => {
    getModel().find(query || {}, (me, md) => {
        cb(me || md)
    })
}

const saveStudent = (payload, cb) => {
    console.log(payload)
    new (getModel())(payload).save((me, md) => {
        cb(me || md)
    })
}

const updateStudent = (studentId, payload, cb) => {
    getModel().update({ studentId: studentId }, payload, (me, md) => {
        cb(me || md)
    })
}

const deleteStudent = (studentId, cb) => {
    getModel().remove({ studentId: studentId }, (me, md) => {
        cb(me || md)
    })
}

const authorizeStudent = (loginpayload, cb) => {

    readStudent(loginpayload, (loginUserResponse, isSuccess) => {

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

module.exports = {
    readStudent,
    saveStudent,
    updateStudent,
    deleteStudent,
    authorizeStudent
}