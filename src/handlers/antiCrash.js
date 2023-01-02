module.exports = client => {
    process.removeAllListeners();

    process.on("unhandleRejection", (reason, p) => {
        console.log('[ANTICRASH] - ERROR ENCONTRADO');
        console.log(reason, p);
    });

    process.on("uncaughtException", (err, origin) => {
        console.log('[ANTICRASH] - ERROR ENCONTRADO');
        console.log(err, origin);
    });

    process.on("uncaughtExceptionMonitor", (err, origin) => {
        console.log('[ANTICRASH] - ERROR ENCONTRADO');
        console.log(err, origin);
    });

    process.on("multipleResolves", () => {});
}