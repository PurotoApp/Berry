export function formToData(form) {
    const formData = new FormData(form.target);

    const data = {};
    for (const field of formData) {
        const [key, value] = field;
        data[key] = value;
    }

    return data;
}