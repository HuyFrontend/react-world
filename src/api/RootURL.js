function getRootUrl() {
    const port = process.env.PORT || 8000;
    const dev = process.env.NODE_ENV !== 'production';
    const ROOT_URL = dev ? `http://localhost:${port}` : 'https://builderbook.org';
  
    return ROOT_URL;
}
export const RootURL = getRootUrl();

export const BaseBath = '/api/v1/public';