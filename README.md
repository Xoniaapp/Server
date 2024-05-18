# `@xoniaapp/server`

This codebase is the successor to the V3 server, which was originally built in Go. However, we opted to rebuild the server using TypeScript due to the complexities of working with Go. We were able to significantly reduce development time, although at the cost of decreased performance.

# Specification

The design specification for the server can be found in the [specs](/specs/README.md) file at the root of this project. This specification document outlines the current development of the RESTful API and the Gateway server (also known as a Web Socket Server, or WSS for short), which enables realtime functionality.

# Contributing
During the development phase, we strongly encourage contributors to maintain proper code style. Not doing so may result in us being unable to accept your contribution. When submitting pull requests (PRs), please ensure they are detailed and that the code is self-explanatory, clearly indicating what it does. The best way to contribute is by reporting existing bugs and suggesting missing features.

# Developing

To start developing the server, first clone the repository using one of the following commands:
```sh
git clone git@github.com:xoniaapp/server.git
# or
git clone https://github.com/xoniaapp/server.git
```

Create a new branch for your feature, following the conventional naming scheme (feat/fix/refactor/chore):
```sh
git branch feat/type

```

To simplify the development process, we provide a `Dockerfile` and `docker-compose.yml`. To get started, run:

```sh
docker compose up
```

Once you've made your changes, create a pull request and our maintainers will review it. If it passes, your code will be merged into the dev branch, and then gradually make its way to the main branch and eventually ship to production.

# Commit Guidelines

When making commits, please follow these guidelines:

* Use **lowercase** commit messages.
* Follow conventional commit message formatting.
* Ensure the description clearly explains what the commit does.

By following these guidelines, we can maintain a clean and readable commit history.

# Maintainers

| Maintainer | GitHub | Role |
| --- | --- | --- |
| aelpxy | [github.com/aelpxy](https://github.com/aelpxy) | Core Maintainer |

# Code Of Conduct
By participating in this project, including using the repository or contributing to it, you agree to abide by the terms outlined in our [Code of Conduct](./CODE_OF_CONDUCT.md).

# Security
Please adhere to all the guidelines outlined in the [SECURITY.md](./SECURITY.md) file.

# License

Every line of code in this repository is licensed under the terms of the GNU Affero General Public License version 3 (AGPLv3), as specified in the [LICENSE](./LICENSE) file.