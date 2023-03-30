"use strict";delete process.env.VSCODE_CWD;const bootstrap=require("./bootstrap"),bootstrapNode=require("./bootstrap-node"),product=require("../product.json");bootstrap.avoidMonkeyPatchFromAppInsights(),bootstrapNode.configurePortable(product),bootstrap.enableASARSupport(),process.env.VSCODE_CLI="1",require("./bootstrap-amd").load("vs/code/node/cli");

//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/c3511e6c69bb39013c4a4b7b9566ec1ca73fc4d5/core/cli.js.map
