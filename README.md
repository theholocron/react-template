# React Template

A React template used within the Galaxy.

## Installation

```bash
npm install --save-dev @theholocron/react-template
```

## Usage

```typescript
import { Component, type ComponentProps } from "@theholocron/react-template";

function App (props: ComponentProps) {
	return (
		<Component {...props} />
	);
}
```

## Documentation

The best way to find out what's available is to check out the [documentation site](https://docs.theholocron.dev/react-template/), but if you like digging through source code, then each component is typed via TypeScript.

**Note**

We use [SuperLinter](https://github.com/super-linter) for all linting checks on `push` and `pull_request` events. One of those tools is [Gitleaks](https://github.com/gitleaks/gitleaks), which protects and discovers secrets that happen to sneak into code commits. There are other ways to install Gitleaks, but you **ARE** required to install it locally as it runs on a `pre-commit` Git hook. To install, run `brew install gitleaks` or check their documentation for other options.
