// Example hourly data (kWh consumption for each hour in a week)
// const hourlyData = [
//   10, 15, 20, 18, 25, 30, 35, 40, 38, 32, 28, 25, 22, 18, 15, 12, 10, 8, 10, 12, 15, 18, 20, 25, 30,
//   32, 35, 38, 40, 38, 32, 28, 25, 22, 18, 15, 12, 10, 8, 10, 12, 15, 18, 20, 25, 30, 32, 35, 38, 40,
//   38, 32, 28, 25, 22, 18, 15, 12, 10, 8, 10, 12, 15, 18, 20, 25, 30, 32, 35, 38, 40, 38, 32, 28, 25,
// ];

// // Function to prepare training data
// // Function to prepare training data
// function prepareTrainingData(data, timeSteps) {
//   const input = [];
//   const output = [];

//   for (let i = 0; i < data.length - timeSteps; i++) {
//     const inputRow = data.slice(i, i + timeSteps).map(value => [value]); // Add an extra dimension
//     const outputRow = data[i + timeSteps];

//     input.push(inputRow);
//     output.push(outputRow);
//   }

//   return { input: tf.tensor3d(input), output: tf.tensor1d(output) };
// }


// // Hyperparameters
// const timeSteps = 24; // Number of hours to consider for each prediction
// const epochs = 100;
// const units = 50;

// // Prepare training data
// const { input, output } = prepareTrainingData(hourlyData, timeSteps);

// // Define and train the LSTM model
// const model = tf.sequential();

// model.add(tf.layers.lstm({ units, inputShape: [timeSteps, 1] }));
// model.add(tf.layers.dense({ units: 1 }));
// model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

// const trainingConfig = { epochs, validationData: [input, output] };
// model.fit(input, output, trainingConfig);

// // Express.js route for predictions
// app.get('/predict', (req, res) => {
//   // Make predictions for the next day (24 hours)
//   const futureData = hourlyData.slice(hourlyData.length - timeSteps); // Use the last 'timeSteps' hours
//   const inputForPrediction = tf.tensor3d([futureData.map(value => [value])]); // Add batchSize dimension
//   const predictions = model.predict(inputForPrediction).dataSync();
  
//   console.log('Hourly Predictions for the next day:', predictions);
//   res.json({ predictions });

// });
