const validate = (values) => {
    let errors = {};

    if (!values.email) {
        errors.email = "Email address is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(values.email)) {
        errors.email = "Email address is invalid";
    }

    if (!values.password) {
        errors.password = "Password is required";
    } else if (values.password.length < 8) {
        errors.password = "Password needs to be more than 8 characters";
    }
    return errors;
}

export default validate;