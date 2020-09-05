// ts 直接引 js
import superagent from 'superagent';
import cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface Item {
    title: string;
    avatar: string | undefined;
}
interface Result {
    time: number;
    data: Item[];
}
interface Content {
    [propName: number]: Item[];
}

class Crowller {
    private url = 'https://cnodejs.org/';
    private filePath = path.resolve(__dirname, './../data/item.json');
    constructor () {
        this.initSpiderProcess();
    };
    getInfo(html: string) {
        const $ = cheerio.load(html);
        const cell = $('.cell');
        const cellArr:Item[] = [];
        cell.map((index, element) => {
            const title = $(element).find('.topic_title').text().trim();
            const avatar = $(element).find('.user_avatar img').attr('src');
            cellArr.push({ title, avatar })
        });
        return {
            time: new Date().getTime(),
            data: cellArr,
        };
        // console.log('cellArr: ' + cellArr);
    }

    writeFile(content: string) {
        fs.writeFileSync(this.filePath, JSON.stringify(content));
    }

    async getRawHtml() {
        const result = await superagent.get(this.url);
        return result.text;
        // this.getInfo(result.text);
    }

    generateJsonContent(result: Result) {
        // const filePath = path.resolve(__dirname, '../data/item.json');
        let fileContent:Content = {};
        if (fs.existsSync(this.filePath)) {
            fileContent = JSON.parse(fs.readFileSync(this.filePath, 'utf-8'));
        }
        fileContent[result.time] = result.data;
        return fileContent;
    };

    async initSpiderProcess () {
        const html = await this.getRawHtml();
        const result = this.getInfo(html);
        const fileConent = this.generateJsonContent(result);
        this.writeFile(JSON.stringify(fileConent));
    }
}

const crowller = new Crowller();