const fs = require("fs")
const path = require("path")
fs.writeFileSync(path.join(process.cwd(), "lint-staged.log"), process.argv[2])
