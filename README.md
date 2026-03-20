# KitokoCSS
> **Design that speaks, code that sings.**

**KitokoCSS** is a revolutionary, lightweight, and modular CSS framework designed for speed and beauty. It comes with a powerful **Multi-platform CLI** that works seamlessly across Windows, Linux, and macOS—no Node.js required for end-users.

## Why KitokoCSS?

* **Stunning Design Tokens**: Built-in glassmorphism, fluid spacing, and professional shadows.
* **Auto Dark Mode**: Every component is born ready for the night.
* **Tech-Agnostic CLI**: Perfect for **PHP (Laravel)**, **Python (Django)**, **Go**, or **Node.js**.
* **Modular Architecture**: Don't bloat your site. Install only the components you need (e.g., `button`, `navbar`, `card`).

## Installation

1. Download the CLI
Download the latest binary for your operating system from the <a href="...">Releases page</a>.

2. Global Setup (Windows)
Run the `install.bat` included in the zip to add Kitoko to your system PATH.

3. Initialize your Project
Navigate to your project folder (any language) and run:

```bash
kitoko init
```

## CLI Commands

<table border="1">
  <thead>
    <tr>
      <th>Command</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>kitoko init</code></td>
      <td>Setup Kitoko config and base SCSS files in your project.</td>
    </tr>
    <tr>
      <td><code>kitoko search</code></td>
      <td>Browse the Kitoko Cloud for available design modules.</td>
    </tr>
    <tr>
      <td><code>kitoko install &lt;module&gt;</code></td>
      <td>Download and link a module (e.g., button) to your project.</td>
    </tr>
    <tr>
      <td><code>kitoko generate &lt;name&gt;</code></td>
      <td>(For Devs) Create a new local module skeleton.</td>
    </tr>
  </tbody>
</table>

## Example Usage
Once you've installed a module like `login-form`, simply add the classes to your HTML:

```html
<div class="ktk-login-card">
    <h2 class="ktk-h2">Welcome Back</h2>
    <div class="ktk-form-group">
        <label>Email</label>
        <input type="email" placeholder="email@example.com">
    </div>
    <button class="ktk-btn ktk-btn-primary">Sign In</button>
</div>
```

## Development
If you want to contribute to the core or build your own modules:

1. Clone the repo.

2. Install dependencies: `npm install`.

3. Build the framework: `npm run build`.

4. Generate a new module: `kitoko g my-new-component`.