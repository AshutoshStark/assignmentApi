const express = require('express'); 
const similarity = express.Router();

similarity.post('/getSimilarity',async(req,res)=>{
    try {
        const user1 = req.body.user1;
        const user2 = req.body.user2;
    
        const encodeInterests = (user1, user2) => user1?.map(interest => user2?.includes(interest) ? 1 : 0);
    
        const user2Interests = encodeInterests(user1, user2);
        
        const countOnes = user2Interests.filter(num => num === 1).length;

        const similarity = user1.length > 0 ? countOnes / user1.length : 0;
    
        res.status(200).json({ similarity: similarity*100+'%', success: true });
    
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
})

module.exports = similarity