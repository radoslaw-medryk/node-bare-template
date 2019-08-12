require("./registerAlias");

const main = async () => {
    console.log("Hello,");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Node.js!");
};

(async () => await main())();
