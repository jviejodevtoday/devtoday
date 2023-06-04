const { createWriteStream } = require("node:fs");
const { opendir, writeFile, readFile} = require("node:fs/promises");


;( async () => {
    await writeFile("./borrame.txt", "ñesto lo grabo en el fichero");
    const contenido = await readFile("./borrame.txt")
    
    
    console.log(contenido.toString())
    const dir = await opendir('../../devtoday');
    for await (const dirent of dir)
      console.log(dirent.name, dirent.isDirectory());
 })()
