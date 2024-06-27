import express, { Express, Request, Response, Application } from 'express';
import { Innertube, UniversalCache } from 'youtubei.js';
import { VideoInfo } from 'youtubei.js/dist/src/parser/youtube';

//MKBHD top 5 android 15 features:  kkX8_nbBqBQ

//req.body.whatever

class controller {
    public static async testRoute(req: Request, res: Response){
        try{
            const youtube = await Innertube.create({
                retrieve_player: true,
                cache: new UniversalCache(
                    true,
                    './.cache'
                )
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

    public static async getVideoFull(req: Request, res: Response){

    }

    public static async getVideoLite(req: Request, res: Response){

    }

    public static async searchContent(req: Request, res: Response){

    }

    public static async getChannel(req: Request, res: Response){
        try{
            let youtube = await Innertube.create({
                retrieve_player: false,
                cache: new UniversalCache(
                    true,
                    './.cache'
                )
            });

            let channel = await youtube.getChannel(req.body.channel)
            

        }
        catch(error: any){
            console.error(`Error on getChannel ${error}`)
            return res.status(500).json({"error" : error})
        }
    }

    public static async getVideoComments(req: Request, res: Response){

    }

    public static async videoDownload(req: Request, res: Response){

    }


}

export default controller