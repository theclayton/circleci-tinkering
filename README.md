# circleci-tinkering
Project for tinkering around with Circle CI. Basic testing of NodeJS project build, Jest unit tests and Snyk SAST. Also include Jira integration.

Intentional security vulnerabilities for SAST step testing via Snyk:
- vulnerable package: `"lodash": "4.17.5"`
- vulnerable code: `eval(<user input>)`

*Note: SNYK_TOKEN environment variable is require to run Snyk in CI/CD pipeline.
