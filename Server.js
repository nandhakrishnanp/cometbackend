const express = require('express');
const tf = require('@tensorflow/tfjs');
const cors = require('cors');
const app = express();
const mongose = require ('mongoose')
const port = 3004;
app.use(cors());
app.use(express.json())
  
const connection = async ()=>{
       const connections = mongose.connect('mongodb+srv://nandhakrishnan:0zlzGBdS7rEEbZ2j@bhuvan.kj0irmq.mongodb.net/?retryWrites=true&w=majority')
       .then( ()=>{
        console.log("connected to mongodb successfully");
       })

}

const evChargingStations = [
  {
    name: "Electric Vehicle Charging Station",
    address: "Shanmuga Building Opposite To Central Studio Trichy Main Road Singanallur",
    phone: "",
    socketTypes: ["CCS-2"],
    lat: 11.095680,
    lng: 77.844020,
  },
  {
    name: "Zeon - Brookfields Charging Station",
    address: "Store 67, Parking B1, Dr Krishnasamy Mudaliyar Rd, Brookefields, Sukrawar Pettai, Ram Nagar",
    phone: "",
    socketTypes: ["CCS-II"],
    lat: 11.020500,
    lng: 76.975630,
  },
  {
    name: "Tata Power - Thalappakatti Hotels, Neelambur (Private - Charger)",
    address: "No. 145/1A, 1B, 1C, 1D, Avinashi Road Neelambur, Sulur Taluk",
    phone: "",
    socketTypes: ["CCS-II", "AC TYPE 2"],
    lat: 11.052940,
    lng: 77.095990,
  },
  {
    name: "Tata Power - Zone by The Park, Avinashi Rd",
    address: "No 33/3, Avinashi Rd, Puliakulam, Coimbatore, Tamil Nadu",
    phone: "",
    socketTypes: ["CCS-II", "AC TYPE 2"],
    lat: 11.008056,
    lng: 76.942522,
  },
  {
    name: "Electric Vehicle Charging Station",
    address: "Singanallur , 128, 2247, Trichy Rd, Krishnapuram Medu, Singanallur",
    phone: "",
    socketTypes: ["CCS-2"],
    lat: 11.095680,
    lng: 77.844020,
  },
  {
    name: "Tata Power - SR Tranzcars Charging Station",
    address: "1142-A, Mettupalayam Rd, Saibaba Koil",
    phone: "",
    socketTypes: ["CCS-II", "CHAdeMO"],
    lat: 11.055980,
    lng: 76.976840,
  },
  {
    name: "Tata Power - MG - PPS Motors Charging Station",
    address: "No138, Avinashi Road, Chinniyampalayam",
    phone: "",
    socketTypes: ["CCS-II"],
    lat: 11.052940,
    lng: 77.095990,
  },
  {
    name: "Coco Chengapalli,Indian Oil Swagat Ro",
    address: "Nh 544 Vm Kangeyampalayam Village Uthukuli Tk Tirupur District",
    phone: "",
    socketTypes: ["CCS-2", "Bharat DC-001"],
    lat: 11.146150,
    lng: 77.505670,
  },
  {
    name: "Tata Power-Santhi Social Services,",
    address: "Indian Oil Dealers Sf No.128/Trichy Road",
    phone: "",
    socketTypes: ["CCS-II", "Bharat DC-001"],
    lat: 11.095680,
    lng: 77.844020,
  },
  {
    name: "Ather - Patel Charging Station",
    address: "357,PATEL ROAD, RAMNAGAR",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.022050,
    lng: 76.975630,
  },
 
  {
    name: "Ather-Saravanampatty Charging Station",
    address: "Saravanampatty",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.065090,
    lng: 77.061630,
  },
  {
    name: "Ather - Race course Charging Station",
    address: "Race Course Road",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.014490,
    lng: 76.956540,
  },
  {
    name: "Kuniyamuthur Charging Station",
    address: "Kuniyamuthur",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.030220,
    lng: 76.987380,
  },
  {
    name: "Zeon - NAVAKKRAI Charging Station",
    address: "285,NAVAKKRAI, Mavuthampathi, Madukkarai",
    phone: "",
    socketTypes: ["CCS-II"],
    lat: 11.083900,
    lng: 77.030120,
  },
  {
    name: "IOCL - Sri Sai Auto Charging Station",
    address: "No 460/1, SH 163 Chettipalayam",
    phone: "",
    socketTypes: ["Bharat AC001", "AC TYPE 2"],
    lat: 11.095680,
    lng: 77.844020,
  },
  {
    name: "IOCL - Tsr Agencies Charging Station",
    address: "SF No 179/2, Panickampatti, Palladam Anuppapatti",
    phone: "",
    socketTypes: ["Bharat AC001", "AC TYPE 2"],
    lat: 11.074210,
    lng: 77.622070,
  },
  {
    name: "Exicom - Old138 Charging Station",
    address: "Old138, New 52A, Avinashi Road, Chinniampalayam, Kalapatti",
    phone: "",
    socketTypes: ["CCS-II"],
    lat: 11.052940,
    lng: 77.095990,
  },
  {
    name: "Zeon Charging - Adyar Ananda Bhavan Charging Station",
    address: "Adyar Ananda Bhavan Restaurant, 285, Palakkad Main Rd, MahendraMedu, Navakarai",
    phone: "",
    socketTypes: ["CCS-II"],//10.856217694107729, 76.86252955200466
    lat: 10.856217694107729,
    lng:  76.8625295520046,
  },
  {
    name: "Ather - Sulur Charging Station",
    address: "Sulur Coimbatore",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.049330,
    lng: 77.089450,
  },
  {
    name: "IOCL - Sakthivel Charging Station",
    address: "No 395, Chettipalayam Road Kizhakkal Thottam",
    phone: "",
    socketTypes: ["Bharat AC001", "AC TYPE 2"],
    lat: 11.095680,
    lng: 77.844020,
  },
  {
    name: "Ramesh - A2B CAMPUS Charging Station",
    address: "A2B CAMPUS, OOTY",
    phone: "",
    socketTypes: ["CCS-II"],
    lat: 11.440430,
    lng: 76.680540,
  },


  {
    name: "Kazam - Junior Kuppana Charging Station",
    address: "1/69,Junior Kuppana , Madukkari",
    phone: "",
    socketTypes: ["CCS-II"],
    lat: 11.071490,
    lng: 77.010670,
  },
  {
    name: "Kazam-Sathy Road Charging Station",
    address: "Sathy Road,Ganapathy,",
    phone: "",
    socketTypes: ["Bharat AC001"],
    lat: 11.027500,
    lng: 77.576130,
  },
  {
    name: "Tata Power - The Park Zone Connect, Avinashi Rd",
    address: "4, Avinashi Road, Civil Aerodrome Post, Coimbatore",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.007210,
    lng: 76.951760,
  },
  {
    name: "CHARGE - PARTNERS Navakkari Charging Station",
    address: "Pichanur, Tamil Nadu",
    phone: "",
    socketTypes: ["CCS-I"],
    lat: 11.083900,
    lng: 77.030120,
  },
  {
    name: "Charzer - DAMUNAGR Charging Station",
    address: "30/6, Near Kovai, New Dhamu Nagar, P N Palayam",
    phone: "",
    socketTypes: ["16 Amp"],
    lat: 11.018450,
    lng: 76.965010,
  },
  {
    name: "HPCL - SHANMUGA Charging Station",
    address: "CHETTIPALAYAM, TO, Podanur Rd",
    phone: "",
    socketTypes: ["Bharat AC001"],
    lat: 11.095680,
    lng: 77.844020,
  },
  {
    name: "HPCL - Chinthamani Co.Op. Supermarket Charging Station",
    address: "Ondipudur Bridge, Trichy Rd, Under, Ondipudur",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.023320,
    lng: 76.958200,
  },
  {
    name: "IOCL - Shree Kaliamman Charging Station",
    address: "SF No 68/1E1, Pachapalayam, Sulur Chettipalayam Thekani",
    phone: "",
    socketTypes: ["Bharat DC-001"],
    lat: 11.049330,
    lng: 77.089450,
  },
  {
    name: "IOCL - Koppanna Perumal Charging Station",
    address: "SF No 218/A2A, Kottamangalam, Udumalpet Amanthakadavu",
    phone: "",
    socketTypes: ["Bharat DC-001"],
    lat: 11.034070,
    lng: 77.505670,
  },
  {
    name: "Vari Energy - Narasimhanaickenpalayam Charging Station",
    address: "7/4C, Mettupalayam Rd, Narasimhanaickenpalayam",
    phone: "",
    socketTypes: ["AC TYPE 2"],
    lat: 11.059560,
    lng: 76.979280,
  },
  {
    name: "Zeon Charging Station (Sri Sakthi Cinemas)",
    address: "Sri Sakthi Cinemas Multiplex 4K DOLBY ATMOS, 256, Union Mill Rd, KPN Colony, Valipalayam, Tiruppur",
    phone: "",
    openingHours: "24 Hours",
    socketTypes: ["CCS-II"],
    lat: 11.109580,
    lng: 77.340540,
    rating: 5,
    url: "http://zeoncharging.com/"
  },
  {
    name: "Zeon Charging Station (Union Mill Rd)",
    address: "167, Union Mill Rd, near 12R Kalyana mandapam, Kannipiran Colony, Valipalayam, Tiruppur",
    phone: "",
    openingHours: "9:00 AM - 6:00 PM",
    socketTypes: ["CCS-II"],
    lat: 11.107900,
    lng: 77.342970,
    rating: 4.4,
    url: "https://zeoncharging.com/"
  },
  {
    name: "Zeon Charging Station (Tiruppur Sree Annapoorna)",
    address: "Tiruppur Sree Annapoorna, NH544, Avinashi Bye Pass Road, Rayan Kovil, Avinashi",
    phone: "",
    openingHours: "24 Hours",
    socketTypes: ["CCS-II"],
    lat: 11.114050,
    lng: 77.326650,
    rating: 4.6,
    url: "http://zeoncharging.com/"
  },
  {
    name: "Tata Power Charging Station",
    address: "492C+9VJ, Kangayam Rd, Rakkiyapalayam Pirivu, Cheran Nagar, Valliammai Nagar, Tiruppur",
    phone: "",
    openingHours: "Unknown",
    socketTypes: ["Unknown"],
    lat: 11.125210,
    lng: 77.370400,
    rating: "N/A",
    url: ""
  },
  {
    name: "Relux Charging Station",
    address: "Hotel Haribhavanam No 5/119-4, SF No. 469, 5A2, Avinashi - Tiruppur Rd, Kaikattipudhur, Po, Avinashi",
    phone: "",
    openingHours: "24 Hours",
    socketTypes: ["Unknown"],
    lat: 11.133060,
    lng: 77.327190,
    rating: 4.2,
    url: "https://reluxelectric.com/"
  }]


connection()


 const Reserve = mongose.Schema({
    reservedata :{

      
    }
 })



 const evreserve = mongose.model('evreserve',Reserve)


 const predictNextDayDemand = async () => {


  ///  Our Data
  const weekData = [
    // Week 1
    [15, 14, 13, 12, 11, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28], // Example values
  
    // Week 2
    [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43], // Example values
  
    // Week 3
    [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48], // Example values
  
    // Week 4
    [30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53], // Example values
  
    // Week 5
    [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58], // Example values
  
    // Week 6
    [40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 59, 58, 57], // Example values
  
    // Week 7
    [45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 59, 58, 57, 56, 55, 54, 53, 52], // Example values
  ];
  
  

  // Prepare the training data
  const inputTensor = tf.tensor2d(weekData);
  const outputTensor = tf.tensor2d(weekData.map(day => day.slice(1).concat(0)));

  // Build a simple sequential model
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [24], units: 24, activation: 'linear' }));
  model.compile({ optimizer: 'adam', loss: 'meanSquaredError' });

  // Train the model
  const history = await model.fit(inputTensor, outputTensor, { epochs: 100 });
  console.log('Training history:', history);

  // Predict the next day's 24-hour demand
  const todayData = weekData[weekData.length - 1];
  const todayTensor = tf.tensor2d([todayData]);
  const prediction = model.predict(todayTensor);
  const predictionData = await prediction.data();
  console.log('Prediction:', predictionData);

  // Dispose of tensors and models
  inputTensor.dispose();
  outputTensor.dispose();
  prediction.dispose();
  model.dispose();

  return predictionData;
};


app.get('/predict',  async (req, res) => {
  const predictedData = await  predictNextDayDemand();
  res.json({ predictedData });
});
    

  app.post('/reserve' , async (req,res)=>{
       const newstation = await new evreserve(req.body)
       newstation.save()

       const response = { status: " Slot Available"}
       
       res.json(response)
  })






// Start the Express.js server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
