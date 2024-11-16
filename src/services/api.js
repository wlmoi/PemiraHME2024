export const loginUser = async (nim, password) => {
    // Mock API call
    const validUsers = [{ nim: '123456', password: 'password123' }];

    const user = validUsers.find((user) => user.nim === nim && user.password === password);
    return user ? true : false;
};
