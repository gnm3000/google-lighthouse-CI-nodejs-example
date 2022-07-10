module.exports = {
    ci: {
    collect: {
        url: ['http://localhost:8080/'],
        startServerCommand: 'npm start',
        numberOfRuns:3,
        },
    assert: {
        //preset: 'lighthouse:recommended',
        "assertions": {
            "categories:performance": ["warn", {"minScore": 0.7}],
            "categories:accessibility": ["error", {"minScore": 0.8}]
          }
    },
    upload: {
        target: 'temporary-public-storage',
      },
    server: {
        // server options here
      },
      wizard: {
        // wizard options here
      },
    },
  };