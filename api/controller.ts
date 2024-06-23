import express, { Express, Request, Response, Application } from 'express';
import { Innertube } from 'youtubei.js';
import { VideoInfo } from 'youtubei.js/dist/src/parser/youtube';

//MKBHD top 5 android 15 features:  kkX8_nbBqBQ

class controller {
    public static async testRoute(req: Request, res: Response){
        try{
            const youtube = await Innertube.create({
                retrieve_player: true
            });

            console.log("Getting video");
            const vodInfo:VideoInfo = await youtube.getInfo("kkX8_nbBqBQ")
            console.log("Got video");

            console.log(vodInfo.basic_info.title);

            res.status(200).json({
                "Title": vodInfo.basic_info.title,
                "Creator": vodInfo.basic_info.author,
                "Views": vodInfo.basic_info.view_count,
                "HLS-Stream": vodInfo.streaming_data?.hls_manifest_url
            })


        }
        catch(error: any){
            console.error(`Error on testRoute ${error}`)
            return res.status(500).json({"error" : error})
        }
    }
}

export default controller