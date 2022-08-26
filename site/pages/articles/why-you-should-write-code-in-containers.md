---
title: Why you should write code in containers
---

As codebases grow and more people work on them, the management complexity increases exponentially. Often, one has to install many tools to even think about getting to work. What if the development team has a diverse set of operating systems? One guy loves his Mac; another will fall on the sword for a Windows PC, etc... This creates issues: Some tools and libraries work in one environment, but not another. Ahem, node-sass 🤮, anyone?

Once work commences, the challenge has only just begun! Now many people are working on the same code. So how do you ensure consistent style and formatting? How do you prevent that Windows user from screwing up all the line breaks?

Eventually, the engineers will need to work on other projects. Those projects may require a different version of some essential framework or global dependency than other projects the engineer has been developing. That conflict wastes even more engineering time and complicates the setup.

## Development containers to the rescue

[Visual Studio Code](https://code.visualstudio.com/) is a free, open-source code editor built by Microsoft. It has quickly become the go-to editor for software engineering. I have worked on projects written in Go, C#, TypeScript, JavaScript, and Java within Visual Studio Code. So, it can do a lot. In addition, to provide a top-tier development experience, Visual Studio Code has a rich plugin ecosystem. One of my favorites is the [Remote Development Extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack), which powers [Developer Containers](https://code.visualstudio.com/docs/remote/containers).

When developing inside remote containers, engineers set up [Docker](https://www.docker.com/) containers with all the project tooling. So when a new engineer is setting up their box for the first time, instead of installing a bunch of different tools needed to develop locally, they only need to install Visual Studio Code, Docker, and the Remote Development Extension. If all the projects they are working on have developer containers, those are the only tools they will be required to install locally.

Great! Our engineers now have to install fewer tools. That's a big win! In addition to the time saved installing a bunch of tools, there is an even more significant time saver: Properly built containers __work across all operating systems that allow you to install Visual Studio Code and Docker__. So developers can get straight to work instead of hunting down "Works on my machine!" bugs.

## Here is an example

Recently I wanted to build a web component using [Lit](https://lit.dev/). When setting up a new project, I have the following requirements:

* Create no local dependencies on my computer.
* Use TypeScript.
* Minimize the number of dependencies the codebase requires.
* Write tests to ensure things work as expected.

I created a project that opens in a development container to meet those requirements; if you want to know how that container works, [learn more here](https://github.com/jeremeevans/LitDevContainer).
