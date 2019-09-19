module.exports = (mongoose, config) => {
  const database = mongoose.connection;
  mongoose.Promise = Promise;

  mongoose.connect(config.database, {
    useMongoClient: true,
    promiselibrary: Global.Promise
  });

  database.on("error", error =>
    console.log(`Connection to BudgetManager database failed: ${error}`)
  );

  database.on("connected", () =>
    console.log("Connected to BuddgetManager database")
  );

  database.on("disconnected", () =>
    console.log("Disconnected from BuddgetManager database")
  );

  process.on("SIGINT", () => {
    database.close(() => {
      console.log("BuddgetManager terminated, connection closed");
      process.exit(0);
    });
  });
};
