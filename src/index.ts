import DynamoDBWrapper from "./classes/DynamoDBWrapper.js"

const dynamo = new DynamoDBWrapper(
    "eu-north-1",
    "https://dynamodb.eu-north-1.amazonaws.com",
    process.env.AWS_ACCESS_KEY,
    process.env.AWS_SECRET_KEY
)

try {
    dynamo.create("AyuDO", {
        "ayuId": { N: "281110" },
        "name": { S: "Tancho" },
        "description": { S: "Leader of the battle" },
    }).then((response) => {
        JSON.stringify(response)
    })
} catch (error) {
    console.log("Something went wrong creating: ", error)
}

try {
    dynamo.retrieve("AyuDO", {
        "ayuId": {"N": "281315"}
    }).then((response) => {
        console.log(response)
    })
} catch (error) {
    console.log("Something went wrong retrieving: ", error)
}