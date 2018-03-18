function environmentURL() {
    const port = process.env.PORT || 8000;
    const dev = process.env.NODE_ENV !== 'production';
    const url = dev ? `http://localhost:${port}` : 'https://builderbook.org';
  
    return url;
};

export default URL = {
    environmentURL: environmentURL(),
    API: `https://api.github.com/`, // users/{id}
    basePath: {
        userDetail: `users/{id}`,
    }
};

