<!-- omit in toc -->
# [westerfield-cloud](../README.md) / [Recipe](./recipe.md) / [Library Setup](./library-setup.md) / <b>Secondary Entrypoints</b>

<!-- omit in toc -->
#### 0.1. Please review [Using This Guide](./recipe.md#1-using-this-guide) before continuing.

<!-- omit in toc -->
## Steps
- [1. Secondary Entrypoint](#1-secondary-entrypoint)
- [2. Module](#2-module)
- [3. Component](#3-component)

The Angular CLI doesn't specifically gear it's tooling toward secondary entrypoints, but we can still get around with some manual steps to bridge the gap. The purpose of this guide is to show you how to integrate secondary entrypoints into the Angular CLI workflow.

Additional Reading: [Improve Spa Performance By Splitting Your Angular Libraries In Multiple Chunks](https://medium.com/angular-in-depth/improve-spa-performance-by-splitting-your-angular-libraries-in-multiple-chunks-8c68103692d0)

## 1. Secondary Entrypoint

The result of this step will be a namespaced library `@wc/components` with a `material/button` secondary entrypoint exported as `@wc/components/material/button`.

1. In the workspace `projects` folder, create this anatomy of the secondary entrypoint
    ```
                                          ┗ projects
    1. Namespace                            ┣ wc 
    2. The secondary entrypoint             ┃ ┗ components
    3. Package collection                   ┃ ┃ ┣ material
    4. Collection module                    ┃ ┃ ┃ ┗ button
                                            ┃ ┃ ┃ ┃ ┣ src
                                            ┃ ┃ ┃ ┃ ┃ ┣ lib
    5. Code will live here                  ┃ ┃ ┃ ┃ ┃ ┃ ┗ ...
    6. Export all concrete members          ┃ ┃ ┃ ┃ ┃ ┗ public_api.ts
    7. Export 'public_api.ts'               ┃ ┃ ┃ ┃ ┣ index.ts
    8. ng-packagr secondary entrypoint*     ┃ ┃ ┃ ┃ ┗ ng-package.json
    9. Primary library entrypoint           ┃ ┃ ┗ ng-package.json
    ```
    > *&nbsp;&nbsp;https://github.com/ng-packagr/ng-packagr/blob/master/docs/secondary-entrypoints.md

2. For proper Material.io style dependency resolution, add this to the secondary entrypoint `ng-package.json`
   ```json
    {
      "$schema": "../../../../../node_modules/ng-packagr/ng-package.schema.json", <-- the workspace node_modules
      "lib": {
        "entryFile": "src/public_api.ts",
        "styleIncludePaths": [
          "../../node_modules" <-- the library node_modules
        ]
      }
    }
   ```

## 2. Module
1. Open terminal to `material/button/src/lib`
2. Add a `button.module.ts` with `$ ng g m button --flat`
    > The `--flat` option avoids the CLI creating this module in an even deeper subdirectory. If you don't use this flag, please adjust the remainder of this article as needed.
    
    > 💡 The name of the button module is intentionally simple. Developers can always rename the import if it becomes a conflict `import { ButtonModule as WcButtonModule } from '@wc/components/material/button`
3. Export `button.module`
   1. Add this to `public_api.ts`
      ```ts
      export * from './button.module;';
      ```
4. Export `public_api`
   1. Add this to `index.ts`
      ```ts
      export * from "./src/lib/public_api";
      ```
5. Check with 👩‍🔬

## 3. Component
1. Navigate to the `material/button/src/lib` directory
2. Run `$ ng g c button --project @wc/components -m button.module --prefix wc-cmp --style scss --export --flat` to add the new component
3. Add the following to `material/button/src/public_api.ts`
    ```ts
    export * from './lib/button.component';
    ```
4. Check with 👩‍🔬

#
##### <!-- omit in toc --> ☝️[top](#westerfieldcloud--recipe--library-setup--bsecondary-entrypointsb)
<br/>
