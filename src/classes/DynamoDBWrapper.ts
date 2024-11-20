import { DynamoDBClient, GetItemCommand, PutItemCommand, DeleteItemCommand, UpdateItemCommand } from "@aws-sdk/client-dynamodb"

class DynamoDBWrapper {

    client: DynamoDBClient

    constructor(region, endpoint, accessKey, secretKey) {
        this.client = new DynamoDBClient({
            region: region,
            endpoint: endpoint,
            credentials: {
                accessKeyId: accessKey,
                secretAccessKey: secretKey,
            }
        })
    }

    async create(table: string, row: any) {
        const params = {
            TableName: table,
            Item: row
        };

        return await this.client.send(new PutItemCommand(params));
    }

    async retrieve(table: string, key: any) {
        const input = {
            TableName: table,
            Key: key
        }

        return await this.client.send(new GetItemCommand(input))
    }

    async update(table: string, key: any) {
        const input = {
            TableName: table,
            Key: key
        }

        return await this.client.send(new UpdateItemCommand(input))
    }

    async delete(table: string, key: any) {
        const input = {
            TableName: table,
            Key: key
        }

        return await this.client.send(new DeleteItemCommand(input))
    }

}

export default DynamoDBWrapper