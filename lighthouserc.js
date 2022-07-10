module.exports = {
    ci: {
    collect: {
        url: ['http://localhost:8080/'],
        startServerCommand: 'npm start',
        },
      upload: {
        target: 'temporary-public-storage',
      },
    },
  };