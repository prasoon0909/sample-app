import { ImagekitService } from "./service"
import path from "path";

const FILE_PATH = path.resolve(__dirname, "./test_image.jpg")

const testingFunction = async () => {
    try {
        console.log("🚀 ~ file: main.ts:5 ~ FILE_PATH:", FILE_PATH)
        const service = new ImagekitService();
        const imageUrl = service.client.url({
            path: FILE_PATH,
            transformation: [{
                "height": "300",
                "width": "400"
            }]
        })
        console.log("🚀 ~ file: main.ts:22 ~ testingFunction ~ imageUrl:", imageUrl)
        
    } catch (error: any) {
        console.log('Error encountered :- ', error.message)
    }
}

testingFunction();