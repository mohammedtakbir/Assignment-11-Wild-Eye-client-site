export const setAuthToken = (res) => {
    const currentUser = {
        email: res.user?.email
    }
    fetch(`https://wild-eye.vercel.app/jwt`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            localStorage.setItem('wildEye-token', data.token)
        })
}