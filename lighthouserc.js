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
            "categories:performance": ["warn", {"minScore": 0.9}],
            "categories:accessibility": ["error", {"minScore": 1}]
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