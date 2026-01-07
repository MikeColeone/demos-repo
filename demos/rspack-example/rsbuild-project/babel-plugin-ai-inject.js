module.exports = function ({ types: t }) {
  return {
    visitor: {
      Program(path, state) {
        const filename = state.filename || "";
        const relPath = filename.replace(process.cwd() + "/", "");
        const excludedComponents = state.opts.excludedComponents || new Set();
        const libs = state.opts.libs || [];

        path.traverse({
          ImportDeclaration(importPath) {
            const sourceValue = importPath.node.source.value;
            libs.forEach((lib) => {
              if (sourceValue.startsWith(lib)) {
                importPath.node.specifiers.forEach((spec) => {
                  if (t.isImportSpecifier(spec) || t.isImportDefaultSpecifier(spec)) {
                    excludedComponents.add(spec.local.name);
                  }
                });
              }
            });
          },

          JSXElement(jsxPath) {
            const { node } = jsxPath;
            const opening = node.openingElement;

            let tagName = "";
            if (t.isJSXIdentifier(opening.name)) {
              tagName = opening.name.name;
            } else if (t.isJSXMemberExpression(opening.name)) {
              tagName = opening.name.property.name;
            }

            if (excludedComponents.has(tagName)) return;

            const startLine = opening.loc?.start.line;
            const endLine = node.closingElement?.loc?.end.line ?? opening.loc?.end.line;

            const pushAttr = (name, value) => {
              if (!opening.attributes.some(a => t.isJSXAttribute(a) && a.name.name === name)) {
                opening.attributes.push(
                  t.jsxAttribute(t.jsxIdentifier(name), t.stringLiteral(String(value)))
                );
              }
            };

            pushAttr("data-ai-start-line", startLine);
            pushAttr("data-ai-end-line", endLine);
            pushAttr("data-ai-comp-name", tagName);
            pushAttr("data-ai-file-path", relPath);
          }
        });
      }
    }
  };
};
