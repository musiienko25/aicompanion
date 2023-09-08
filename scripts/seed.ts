const { PrismaClient } = require("@prisma/client");

const db = new PrismaClient();

async function main () {
    try {
        await db.category.createMany({
            data: [
                {name: "Famous"},
                {name: "Movies & TV"},
                {name: "Musicians"},
                {name: "Games"},
                {name: "Animals"},
                {name: "Philosophy"},
                {name: "Scientist"}
            ]
        })
    } catch (error) {
        console.log(error)
    } finally {
        await db.$disconnect();
    }
}

main();