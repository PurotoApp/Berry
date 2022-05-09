const URL = "http://localhost:3622/v1/user";

/**
 *  @param data {
 *      user_name: string,
 *      email: string,
 *      password: string
 *  }
 */
export async function signup(data) {
    const response = await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

/**
 *  @param data {
 *      uid: string,
 *      token: string,
 *      password_old: string
 *      password_new: string
 *  }
 */
export async function updatePassword(data) {
    const response = await fetch(`${URL}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

/**
 *  @param data {
 *      login: string,
 *      password: string
 *  }
 */
export async function signin(data) {
    const response = await fetch(`${URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

/**
 *  @param data {
 *      uid: string,
 *      token: string,
 *      verify_code: string
 *  }
 */
export async function verify(data) {
    const response = await fetch(`${URL}/verify`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}

/**
 *  @param data {
 *      uid: string,
 *      token: string
 *  }
 */
export async function validate(data) {
    const response = await fetch(`${URL}/validate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    return await response.json();
}