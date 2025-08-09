import express from 'express';
const router = express.Router();

// GET request (for testing in browser)
router.get('/', (req, res) => {
  res.json({ message: 'Location API is working' });
    const { latitude, longitude } = req.body;

  console.log('Received location:', latitude, longitude);
  res.json({ message: `${latitude,longitude}`});
});

// POST request (actual location sending)
router.post('/', (req, res) => {
  const { latitude, longitude } = req.body;
  console.log('Received location:', latitude, longitude);
  res.json({ status: 'success' });
});

export default router;








// finding dist btw cords 
// function getDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371; // Radius of Earth in km
//   const dLat = (lat2 - lat1) * Math.PI / 180;
//   const dLon = (lon2 - lon1) * Math.PI / 180;
//   const a =
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1 * Math.PI / 180) *
//     Math.cos(lat2 * Math.PI / 180) *
//     Math.sin(dLon / 2) * Math.sin(dLon / 2);
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   return R * c; // distance in km
// }


// sorting according to dist

// router.get("/nearby", (req, res) => {
//   const { latitude, longitude } = req.query;
  
//   if (!latitude || !longitude) {
//     return res.status(400).json({ error: "Coordinates required" });
//   }

//   const sorted = locations
//     .map(loc => ({
//       ...loc,
//       distance: getDistance(latitude, longitude, loc.latitude, loc.longitude)
//     }))
//     .sort((a, b) => a.distance - b.distance);

//   res.json(sorted);
// });
