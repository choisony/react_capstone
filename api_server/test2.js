const express = require("express");
const router = express.Router();
const request = require("request");
const converter = require("xml-js");

let url = 'http://www.kopis.or.kr/openApi/restful/pblprfr/PF132236?service=7803342c8a784657bd14545c7295a973'
console.log("HITEST2");
router.get("/", (req,res) => {
    request(
        {
            url: url,
            method: "GET",
        },
        (error, response, body) => {
            const xmlToJson = converter.xml2json(body);
            res.send(xmlToJson)
        }
    );
});
module.exports = router;